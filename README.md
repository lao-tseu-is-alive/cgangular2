# cgangular2
learning Angular 2 with TypeScript on  **Linux Ubuntu 16.04**

## install/upgrade node to >v5.x.x and npm > 3.x.x 
On my Ubuntu 16.04 i did follow instructions at 
[https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
```bash
cd ~
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs
sudo apt-get install build-essential
```
## install angular2-cli and typescript
```bash
sudo npm install -g update typescript
sudo npm install -g update typings
sudo npm install -g update angular-cli
```
so just in case here is the links to main components homepages
TypeScript compiler : [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
Angular v2 client tools aka angular-cli : [https://cli.angular.io/](https://cli.angular.io/)
for starting up follow instructions on [angular-cli github](https://github.com/angular/angular-cli)
## use angular-cli or ng to do a fast setup/configure/manage of your project
The idea is to use the ng command line tool to help generate the app scafold 
and manage the npm dependencies.
so you can for example :
```bash
 ng new your-new-great-app-name
 cd your-new-great-app-name
 ng serve
 ```
 
or if like me you already get a github project cloned inside your current worked directory
```bash
ng init --name your-new-great-app-name
ng serve
```
then you can go you favorite browser at url [http://localhost:4200/](http://localhost:4200/)
and because ng serve is watching code you can start editing src/app/app.components.ts 
and change the title string to see live reload of your page in action :
```TypeScript
export class AppComponent {
  title = 'app works!';
}
```

## generate our first component
with one command you get scaffold code for your first component  
```bash
 ng g component courses
```
same thing for your first service
```bash
 ng g service courses
```




