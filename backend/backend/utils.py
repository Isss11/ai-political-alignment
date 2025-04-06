import boto3

def get_secret(arn: str, decrypt: bool = False):
    ssm = boto3.client('ssm', region_name='us-east-1')
    
    response = ssm.get_parameter(
        Name=arn,
        WithDecryption=decrypt  # Required for SecureString
    )
    
    return response['Parameter']['Value']