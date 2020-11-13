# password-generator

Password-generator is a javascript class that create an object to generate a random password.

## Creating a new password.

Create a new object as a Password object:

``` javascript

let password = new Password();

```
Password has a property _type_ and _size_ that define the type of password and it size.

### Properties

**Type**: The type accept two string values: *number* and *alphanumeric*, any other value will return an error message.

**Size**: The size property is a number that specify the size of the password, the size accept any value greater than zero.

Example:
``` javascript

let password = new Password("alphanumeric", 25);

let otherPassword = new Password("number", 20);

```

### Method

The password class has a method called _generate()_ that generate the password as specified by properties

Example:

``` javascript
let password = new Password();
password.type = "alphanumeric";
password.size = 12;
password.generate();

```
