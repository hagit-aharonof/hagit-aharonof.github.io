from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
import json


def main():
    driver = webdriver.Chrome(r"chromedriver.exe")
    books = {}
    driver.get("https://drive.google.com/drive/u/2/folders/1RbsNZTl-omifPOtDl6PbxOq9IUcF0M1W")
    sleep(20)
    elements = driver.find_elements(by=By.XPATH, value="//c-wiz[@class='pmHCK']")
    for element in elements:
        try:
            data_id = element.find_element(by=By.XPATH, value=".//div").get_attribute('data-id')
            name = element.find_element(by=By.XPATH, value=".//div[@class='Q5txwe']").get_attribute('aria-label')
            if name == "new":
                continue
            books[name.split('.pdf')[0]] = "https://drive.google.com/file/d/" + data_id + "/preview"
        except Exception as e:
            print(e)
    print(books)
    with open('books.json', 'w') as fp:
        json.dump(books, fp)


if __name__ == "__main__":
    main()
