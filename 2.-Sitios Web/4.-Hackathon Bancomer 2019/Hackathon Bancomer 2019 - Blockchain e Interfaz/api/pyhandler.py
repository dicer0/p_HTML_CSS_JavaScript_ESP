import json

def tuMama(event,context):


def curpScrap(event, context):
    return {

        "statusCode": 200,

        "body": json.dumps({
            sehizo: True,
            data: event
        })


    }