/*
 * Create and export configuration variables
 * 
*/

// Container for all the enviroments
var enviroments = {};

// Staging (default) environment
enviroments.staging =  {
    'httpPort' : 3000,
    'httpsPort' : 3001,
    'envName': 'staging',
    'hashingSecret': 'thisIsSecret'
};

// Production environment 
enviroments.production = {
    'httpPort' : 5000,
    'httpsPort' : 5001,
    'envName': 'production',
    'hashingSecret': 'thisIsAlseSecret'
};

// Determine which environment was passed as a command-line argument
var cuurentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environment above if not  default to staging
var enviromentsToExport = typeof(enviroments[cuurentEnvironment]) == 'object' ? enviroments[cuurentEnvironment] : enviroments.staging;

// export the module
module.exports = enviromentsToExport;