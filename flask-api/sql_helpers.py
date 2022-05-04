
from app import mysql
from email import message
import smtplib, ssl
import email
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


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

            cur = mysql.connection.cursor() #create the table
            cur.execute("CREATE TABLE %s(%s)" %(self.table, create_data[:len(create_data)-1]))
            cur.close()

    #get all the values from the table
    def getall(self):
        cur = mysql.connection.cursor()
        result = cur.execute("SELECT * FROM %s" %self.table)
        data = cur.fetchall(); return data

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
def isnewuser(username):
    #access the users table and get all values from column "username"
    users = Table("users", "name", "email", "username", "password")
    data = users.getall()
    usernames = [user.get('username') for user in data]

    return False if username in usernames else True
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



# make a reuqest a tutor function that sends a email to all tutors who teach the subject
def requestTutor(grade, subject, description, email):
    #access the users table and get all values from column "username"
    tutors = Table("tutors", "name", "email", "subject", "grade")

    data = tutors.getall()
    tutors = [tutor.get('email') for tutor in data]

    #send email to all tutors who teach the subject
    for tutor in tutors:
        send_email(tutor, f"You have a new request!", "You have a new request for a tutor!\n\nGrade: %s\nSubject: %s\nDescription: %s\nStudent Email: %s" %(grade, subject, description, email))