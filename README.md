# Tag-Manager Dashboard

Pack with Angular 1, with a succesful handshake connection utilizing Oauth Fallback & Browser Cookie Storage. (1 Dependency require*)

The dashboard does not save ANY user password, or give admin rights to any users, It utilizes Google Api connection and READ ACCESS information only.

Note: If the application is blank, you might not have the right permission rights. If this is the case, You won't be able to see any of the fields. Please go ahead and create an account on Google Tag Manager Official site.


# Installation
 
 1 Clone Git, or Download.
 2 Package comes, with depencies downloaded for Pre-release, but incase of failure,
 make sure to re-download dependencies from bower and npm.

# Configuration

```
var params = {
	accountId: 'YOUR-ACCOUNT-CONTAINER-ID',
};
      
var params2 = {
	accountId: 'YOUR-SECOND-ACCOUNT-CONTAINER-ID',
};
```      
Note: Edit the line with the following Variables, According to the ones obtain from your account.


 1 Make sure to edit the following files according the Container's ID utilize in Tag-Manager:
 * `public/app/controller.containers.js` 
 * `public/app/controller.tags.js` 
 * `public/app/controller.tagsmore.js`
 * `public/app/controller.variables.js` 
 

# Usage
 
 1 on root folder, using NPM, run `npm start`

 Note: Delete Option, will delete tag, but it needs to be push from Tag Manager UI for final save.


code with love by mr.Z // insanen.com
