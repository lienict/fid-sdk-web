# fpay-sdk-web v1.0.0
fpay-sdk-web v1.0.0 integration documentation for Web App

# Introduce
FPAY SDK is a library for web to interact with FPAY Platform. FPAY SDK includes the following main functions:
- Support init and redirect to pay function

## Support
If you have any questions you could:

- Contact directly via email, DM with the SDK team for assistance or contact us at [ftech.ai](https://ftech.ai/)

## Step 1: Registration
Contact us to register your Web App in FPAY system. 
We'll give you client_id( optional we have client_secret and some information) accept CORS.

## Step 2:  Using Ftech FPAY SDK
#### 1. Embed SDK and initialization
To using SDK, you must embed the SDK and call init function by using this code
``` java
<script src="./SDK/v1.0.0/fpay-sdk-min.js"></script>
```
The static object FTechFPAY is created after embedding. 

#### 2. Redirect To pay
Now, we are building SDK base on redirect to pay flow. (This flow will be changed in the future).
If you want to pay, you can call function like below
```javascript
    const options = {
        idToken : 'abc',
        client_id : 'fpay-spa'
        returnURL :'http://your-returnUL'
    };
    FTechFPAY.redirectToPay(options)
```
- idToken is param that returned after communicating with FID flow (see FID document flow)
- client_id is params that FPAY offered you in the step1
- returnURL is url callback after payment process
After you call redirectToPay function, the browsers will be redirect to our pay system.
