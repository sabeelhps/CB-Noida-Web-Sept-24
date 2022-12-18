import os
import csv
import pandas as pd

# rootdir = '/Users/codingblocks/desktop/python-demo'
# orderDir = '/Users/codingblocks/desktop/python-demo/files/data-ops-assignment/order'
# customerDir = '/Users/codingblocks/desktop/python-demo/files/data-ops-assignment/customer'

rootdir = '/Users/codingblocks/desktop/python-demo'
orderDir = '/Users/codingblocks/desktop/python-demo/files_demo/data-ops-assignment/order'
customerDir = '/Users/codingblocks/desktop/python-demo/files_demo/data-ops-assignment/customer'

# Total Number of customers read from the file = 796109 


# READ ALL CUSTOMER'S DATA FROM THE ORDERS FOLDER
def readAllOrders():
    ordersList = []
    for file in os.listdir(orderDir):
        d = os.path.join(orderDir, file)
        if os.path.isdir(d):
            for allFilesName in os.walk(d):
                # print(allFilesName)
                for file in allFilesName[2]:
                    if '.csv' in file:
                        csvFilePath = os.path.join(d, file )
                        # print(csvFilePath)
                        with open(csvFilePath, 'r') as csvfile:
                            csvreader = csv.reader(csvfile)
                            for row in csvreader:
                                ordersList.append([row[0],row[1],row[2],int(row[3]),row[4],int(row[5])])

    return ordersList

# READ ALL CUSTOMER DATA FROM THE CUSTOMER TABLE
def readAllCustomers():
    customerList = []
    for file in os.listdir(customerDir):
        d = os.path.join(customerDir, file)
        if os.path.isfile(d) and '.csv' in d:
            with open(d, 'r') as csvfile:
                csvreader = csv.reader(csvfile)
                for row in csvreader:
                    customerList.append(row)
    return customerList


def getAllUniqueCities(allCustomers):
    cities = set()
    for customer in allCustomers:
        if len(customer[1]):
            cities.add(customer[1].lower())
    return list(cities)


# CREATE CUSTOMER ID, CITY DATAFRAME CUSTOMERLIST
def createCustomerIdAndCityDataframe(customerList, cities):
    city_customerid_df = {}

    city_customerid_df["customer_id"]=[]
    city_customerid_df["cities"]=[]

    for customer_id,city in customerList:
        if len(city):
            city_customerid_df["customer_id"].append(customer_id)
            city_customerid_df["cities"].append(city)
        else:
            city_customerid_df["customer_id"].append(customer_id)
            city_customerid_df["cities"].append("No City")
            
    return city_customerid_df

# CREATE ORDER'S DATAFRAME FROM THE ORDERLIST
def createOrdersDataframe(orderList):
    orders_df = {}
    
    orders_df["customer_id"]=[]
    orders_df["product_id"]=[]
    orders_df["order_id"]=[]
    orders_df["order_amount"]=[]
    orders_df["year"]=[]
    orders_df["order_count"]=[]

    for customer_id,product_id,order_id,order_amount,year,order_count in orderList:
        orders_df["customer_id"].append(customer_id)
        orders_df["product_id"].append(product_id)
        orders_df["order_id"].append(order_id)
        orders_df["order_amount"].append(order_amount)
        orders_df["year"].append(year)
        orders_df["order_count"].append(order_count)
    
    return orders_df

def main():
    customerList = readAllCustomers()
    orderList = readAllOrders()
    cities = getAllUniqueCities(customerList)
    city_customerid_df = pd.DataFrame(createCustomerIdAndCityDataframe(customerList, cities)) 
    orders_df = pd.DataFrame(createOrdersDataframe(orderList))
    mergedRes = pd.merge(city_customerid_df, orders_df, on ='customer_id')

    mf = mergedRes.groupby(['cities']).agg(
        count_order = ('order_count', 'sum'),
        order_amount = ('order_amount', 'sum'),
    )

    mf.reset_index().to_csv('new.csv')
    
main()

