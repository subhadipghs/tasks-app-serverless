## Tasks app
Read more for configuring monorepo for React Native [here](https://mmazzarolo.com/blog/2021-09-18-running-react-native-everywhere-mobile/)


1. IAM Roles Stack
  - Usage of ABAC
  - Usage of tags inside the Roles

2. Cost saving on CloudWatch

3. Create SNS to send a notification to phone number or email

4. Implement Step functions and SQS
 ----------------------------------
  - A simple API with lambda where it'll pull 200 data from any API. If an error occurs inside the lambda load those errors inside
    SQS DLQ and verify why the error occurs and solve
