
import 'dotenv/config';
import * as joi from "joi";

interface EnvVars{
    PORT : number;
    SECRET_KEY_STRIPE : string;
    SUCCES_URL : string;
    CANSEL_URL : string;
    ENV_ENDPOIT_SECRET : string;
}

const envsShema = joi.object({
    PORT :  joi.number().required(),
    SECRET_KEY_STRIPE: joi.string().required(),
    SUCCES_URL : joi.string().required(),
    CANSEL_URL : joi.string().required(),
    ENV_ENDPOIT_SECRET : joi.string().required(),
   
}).unknown(true);

const { error , value } = envsShema.validate(
    process.env,
     

);

if(error){
    throw new Error (`Config validation errors ${ error}`)
}

const envVars : EnvVars = value;

export const envs = {
    port : envVars.PORT,
    stripe_secret : envVars.SECRET_KEY_STRIPE,
    succes_url : envVars.SUCCES_URL,
    cansel_url: envVars.CANSEL_URL,
    endpoit_secret_ : envVars.ENV_ENDPOIT_SECRET
    

}