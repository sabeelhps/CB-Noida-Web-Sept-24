import os
import csv
import pandas as pd

# rootdir = '/Users/sarthakgarg/Desktop/python-demo'
# orderDir = '/Users/sarthakgarg/Desktop/python-demo/files/data-ops-assignment/order'
# customerDir = '/Users/sarthakgarg/Desktop/python-demo/files/data-ops-assignment/customer'

BASE_PATH = '/Users/codingblocks/desktop'

rootdir = BASE_PATH + '/python-demo'
orderDir = BASE_PATH + '/python-demo/files_demo/data-ops-assignment/order'
customerDir = BASE_PATH + '/python-demo/files_demo/data-ops-assignment/customer'
productDir = BASE_PATH + '/python-demo/files_demo/data-ops-assignment/product'

# Total Number of customers read from the file = 796109 


# READ ALL CUSTOMER'S DATA FROM THE ORDERS FOLDER
def readAllOrders():
    print('starting to read the all orders csv files')
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
    print('starting to read the customer csv files')
    customerList = []
    for file in os.listdir(customerDir):
        d = os.path.join(customerDir, file)
        if os.path.isfile(d) and '.csv' in d:
            with open(d, 'r') as csvfile:
                csvreader = csv.reader(csvfile)
                for row in csvreader:
                    customerList.append(row)
    return customerList



# CREATE CUSTOMER ID, CITY DATAFRAME CUSTOMERLIST
def createCustomerIdAndCityDataframe(customerList):
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


# READ ALL PRODUCT DATA FROM THE PRODUCT TABLE
def readAllProducts():
    print('starting to read all products csv files')
    productList = []
    for file in os.listdir(productDir):
        d = os.path.join(productDir, file)
        if os.path.isfile(d) and '.csv' in d:
            with open(d, 'r') as csvfile:
                csvreader = csv.reader(csvfile)
                for row in csvreader:
                    productList.append(row)
                    # print(row)
    return productList



# CREATE PRODUCT ID, BRAND DATAFRAME PRODUCTLIST
def createProductIdAndBrandIdDataframe(productList):
    brandid_productid_df = {}

    brandid_productid_df["product_id"]=[]
    brandid_productid_df["brand_id"]=[]

    for product_id,brand_id in productList:
        if len(brand_id):
            brandid_productid_df["product_id"].append(product_id)
            brandid_productid_df["brand_id"].append(brand_id)
        else:
            brandid_productid_df["product_id"].append(product_id)
            brandid_productid_df["brand_id"].append("NULL")
    return brandid_productid_df



def getCitiesAndOrderCountAndOrderAmountGroupByCities(city_customerid_df, orders_df):
    mergedRes1 = pd.merge(city_customerid_df, orders_df, on ='customer_id')
    mf1 = mergedRes1.groupby(['cities']).agg(
        count_order = ('order_count', 'sum'),
        order_amount = ('order_amount', 'sum'),
    )

    mf1.reset_index().to_csv('./results/OrdersCity.csv')
    print('OrdersCity.csv file created and saved')


def getBrandIdAndOrderCountAndOrderAmountGroupByBrandId(brandid_productid_df, orders_df):
    mergedRes2 = pd.merge(brandid_productid_df, orders_df, on ='product_id')

    mf2 = mergedRes2.groupby(['brand_id']).agg(
        count_order = ('order_count', 'sum'),
        order_amount = ('order_amount', 'sum'),
    )
    mf2.reset_index().to_csv('./results/OrdersBrand.csv')
    print('OrdersBrand.csv file created and saved')

def main():
     
    customerList = readAllCustomers()
    orderList = readAllOrders()
    productList = readAllProducts()
    
    city_customerid_df = pd.DataFrame(createCustomerIdAndCityDataframe(customerList)) 
    orders_df = pd.DataFrame(createOrdersDataframe(orderList))
    brandid_productid_df = pd.DataFrame(createProductIdAndBrandIdDataframe(productList))

    
    # write comment here
    getCitiesAndOrderCountAndOrderAmountGroupByCities(city_customerid_df, orders_df)    
    
    # write your comment here
    getBrandIdAndOrderCountAndOrderAmountGroupByBrandId(brandid_productid_df, orders_df)


# method to start a script
main()

