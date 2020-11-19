# 20-React Portfolio

This is a portfolio that has been generated using the npx create react app function. This page is meant to be a portfolio for Daniel Cuadra.

* Use of React JS
* Use of JavaScript
* Use of CSS

## Usage

The application allows for you read about me and will allow you to click on icons and navbar menu items to see anything you would like regarding my coding experience.

<img src="./reactportfolio.gif">

## Code

Main App View:

```
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/aboutme", "/reactportfolio"]}>
              <AboutMe />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
```

## Credits

* https://github.com/coding-boot-camp/
* https://stackoverflow.com/questions/
* https://guides.github.com/features/mastering-markdown/
* https://reactjs.org/docs/
* https://react-bootstrap.github.io/

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/)

## Authors

* **Daniel Cuadra** 

- [GitHub](https://github.com/DCuadra85)
- [LinkedIn](https://www.linkedin.com/in/daniel-cuadra-3705aa39/)


## License

MIT License

Copyright (c) [2020] [DanielCuadra]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.