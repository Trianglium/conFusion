import json
import os


def reformat_postman():
    # read file
    with open("conFusion.postman_collection.json", "r") as postman_docs:
        docs=postman_docs.read()


    # parse file
    obj = json.loads(docs)
    postman_docs.close()
    return obj

print(os.getcwd())
