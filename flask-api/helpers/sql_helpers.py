
from numpy import true_divide
from api import mysql
from email import message
import smtplib, ssl
import email
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
print(mysql)
class Table():

    def __init__(self, table_name, *args):
        self.table = table_name
        self.columns = "(%s)" %",".join(args)
        self.columnsList = args

        #if table does not already exist, create it.
        if isnewtable(table_name):
            create_data = ""
            for column in self.columnsList:
                create_data += "%s varchar(100)," %column
            
            cur = mysql.connection.cursor()
            cur.execute("CREATE TABLE %s(%s)" %(self.table, create_data[:len(create_data)-1]))
            cur.close()

    #get all the values from the table
    def getall(self):
        cur = mysql.connection.cursor()
        result = cur.execute("SELECT * FROM %s" %self.table)
        data = cur.fetchall(); return data

    # update value where column = value
    def update(self, colum, value, *args):
        data = ""
        for arg in args:
            data += "%s = \"%s\"," %(colum, arg)
        cur = mysql.connection.cursor()
        cur.execute("UPDATE %s SET %s WHERE %s = \"%s\"" %(self.table, data[:len(data)-1], colum, value))
        mysql.connection.commit()
        cur.close()

    # replace the value of a column in the table where the email is the same
    def replace(self, column, value, *args):
        data = ""
        for arg in args:
            data += "%s = \"%s\"," %(column, arg)
        cur = mysql.connection.cursor()
        cur.execute("REPLACE INTO %s SET %s WHERE %s = \"%s\"" %(self.table, data[:len(data)-1], column, value))
        mysql.connection.commit()
        cur.close()

    def selltoken(self, email, token, ammount):
        cur = mysql.connection.cursor()
        print(ammount)
        data = True
        print(email)
        if data:
            # update the ammount of tokens where email = email and token = token
            cur.execute(f"UPDATE cryptos SET token_ammount = {ammount} WHERE email = {email} AND token = {token}")
            cur.close()
        else:
            cur.close()

    # get all where column = value
    def getallwhere(self, column, value):
        data = {}; cur = mysql.connection.cursor()
        result = cur.execute("SELECT * FROM %s WHERE %s = \"%s\"" %(self.table, column, value))
        if result > 0: data = cur.fetchall()
        cur.close(); return data

    #get one value from the table based on a column's data
    #EXAMPLE using blockchain: ...getone("hash","00003f73gh93...")
    def getone(self, search, value):
        data = {}; cur = mysql.connection.cursor()
        result = cur.execute("SELECT * FROM %s WHERE %s = \"%s\"" %(self.table, search, value))
        if result > 0: data = cur.fetchone()
        cur.close(); return data

    #delete a value from the table based on column's data
    def deleteone(self, search, value):
        cur = mysql.connection.cursor()
        cur.execute("DELETE from %s where %s = \"%s\"" %(self.table, search, value))
        mysql.connection.commit(); cur.close()
    
    def deleteonewhere(self, column, value, *args):
        # make a list of all the columns to delete
        data = ""
        for arg in args:
            data += "%s = \"%s\"," %(column, arg)
        cur = mysql.connection.cursor()
        cur.execute(f"DELETE FROM {self.table} WHERE {data[:len(data)-1]} = ?", (value, ))
        mysql.connection.commit(); cur.close()

    #delete all values from the table.
    def deleteall(self):
        self.drop() #remove table and recreate
        self.__init__(self.table, *self.columnsList)

    #remove table from mysql
    def drop(self):
        cur = mysql.connection.cursor()
        cur.execute("DROP TABLE %s" %self.table)
        cur.close()

    #insert values into the table
    def insert(self, *args):
        data = ""
        for arg in args: #convert data into string mysql format
            data += "\"%s\"," %(arg)

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO %s%s VALUES(%s)" %(self.table, self.columns, data[:len(data)-1]))
        mysql.connection.commit()
        cur.close()

def isnewtable(tableName):
    cur = mysql.connection.cursor()

    try: #attempt to get data from table
        result = cur.execute("SELECT * from %s" %tableName)
        cur.close()
    except:
        return True
    else:
        return False

#check if user already exists
def isnewuser(email):
    #access the users table and get all values from column "username"
    users = Table("users", "name", "email", "username", "password")
    data = users.getall()
    emails = [user.get('email') for user in data]

    return False if email in emails else True
# make a send email function that sends an email to a user

def isnewtutor(email):
    tutors = Table("tutors", "name", "email", "subject", "grade")
    data = tutors.getall()
    emails = [tutor.get('email') for tutor in data]

    return False if email in emails else True

def send_email(email, subject, body):
    sender = "yourqrcodekey@gmail.com"
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    server.login(sender, "MyQRCodeKey")
    message = MIMEMultipart()
    message["From"] = sender
    message["To"] = email
    message["Subject"] = subject
    body = body
    message.attach(MIMEText(body, "plain"))

    text = message.as_string()

    server.sendmail(sender, email, text)
    server.quit()



