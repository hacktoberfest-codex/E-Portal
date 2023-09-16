import hashlib
import random
import string

# Get the user's information
user_information = input("Enter your information: ")

# Create a random portion of the ID
random_portion = ''.join(random.choices(string.ascii_letters + string.digits, k=3))

# Calculate an MD5 hash of the user's information
md5_hash = hashlib.md5(user_information.encode()).hexdigest()[:7]  # Use the first 7 characters of the hash

# Combine the random portion and hash to create a 10-character unique ID
unique_id = md5_hash + random_portion

print("Unique ID:", unique_id)