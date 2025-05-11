<!-- Schema = Data kya kya hai/hoga or kesa dikhta/dikhega hai -->
<!-- "For Understanding schema better "
productSchema= we can think of product and what info it holds like product has name. description, price, category etc  
 -->
 <!-- mongodb+srv://Harshit:5819k0622v@cluster0.pbcs0zs.mongodb.net/ -->
<!-- Schema is an object like so we can use this to acess its values and we can add properties and methods in it  -->
<!-- we use app.use when we have to do some configurations settings basically its a middleware bt we use .use instead of .get -->


<------------------------------------------------------->
 <!-- Use of packages -->
<!-- 

    1. MongooseAggregatePaginate-pipelines=used when we are using aggregation pipelines like sorting and filtering data etc
    2. JsonWebToken=Creates and verifies tokens for authentication (accessToken,refreshToken,etc)
    3. Bcypt= can encrypt your password



 -->

 <!-- ApiEnvironmentKey=CLOUDINARY_URL=cloudinary://386127257378354:mQN26zJaYhbioNIBQUL1_KOFOHA@dhl1pou5w-->

<------------------------------------------------------>

 <!-- 
    pre(preHook)= Its a middleware ,Just before data is about to be saved in database .
    methods = can create our own methods 

    jwt.sign=used to create jwt tokens only like accesstoken and refreshtoken 

    bcrypt.compare=used to compare encrypted and normal password . it returns true if matches.
    bcrypt.hash= encrypts the data.
    express.json({limit:16kb})=used to limit and accept the json data.
    .upload=upload the file on cloudinary
    .unlinkSync=removes the locally saved temporary file as the upload operation got failed
  -->