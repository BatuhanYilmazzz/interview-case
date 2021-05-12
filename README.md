<h1 align="center">E-commerce App</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/BatuhanYilmazzz/interview-case#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/BatuhanYilmazzz/interview-case/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://twitter.com/batuhan38008916" target="_blank">
    <img alt="Twitter: BatuhanYilmaz" src="https://img.shields.io/twitter/follow/batuhnnylmazz.svg?style=social" />
  </a>
</p>

<br>

The full project requirements can be found below.

## Built With

- Html5
- Styled Components
- Material UI
- React Hooks
- Styled Components
- Json Server

## Folder Structure

components => App shared components <br/>
services => endpoints and apisü<br/>
store => global stores (Context API)<br/>
theme => style customization, styled component config.<br/>
utils => helper functions<br/>
pages => main part of app <br/>

### Components

Components are the main tiny part of pages.You can find unique Components.Every component has also its own styledjs file.

### Theming

You can create and theme object and thanks to styled component ThemeProvider , we can use as prop in components.

```
 padding: ${(props) => props.theme.gutters.smallBig};

```

### Store

React Context Api is used for state management. Also for more stability immer is adapted to reducer.

### Services

Services are composed of two main part api which is used to create instance and endpoints.

### Utils

Utilities helper functions and methods can be defined in this folder.

## Usage

> Clone the repository to your local machine

```sh
$ --https://github.com/BatuhanYilmazzz/interview-case.git
```

> cd into the directory, install dependencies, build and start

```sh
$ cd interview-case
$ yarn
$ yarn start

$ cd server
$ yarn
$ yarn start

```
> Open `http://127.0.0.1:5000` using your favourite broswer, if it doesn't open automatically.
> and yarn start.

## Author

👤 **Ahmet Batuhan Yılmaz**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/BatuhanYilmazzz/NetflixReact/issues).

1. Fork it (https://github.com/BatuhanYilmazzz/interview-case.git/fork)
2. Create your working branch (git checkout -b [choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add/improve')
4. Push to the branch (git push origin [chosen-name])
5. Create a new Pull Request

## Future Ideas

- Make the app describe how you should cook the food .

## Show your support

Give a ⭐️ if you like this project!

- Github: [@BatuhanYilmazzz](https://github.com/BatuhanYilmazzz)
- Twitter: [@BatuhanYilmaz](https://twitter.com/batuhnnylmazz)
