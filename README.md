# geowe-coordinate-utils
Utility library for working with georeferenced coordinates

## Usage ##
Install the `geowe-coordinate-utils` package using npm:

    npm i geowe-coordinate-utils

To use the library just import it into the application:

```js
import coordinateUtil from 'geowe-coordinate-utils';

const coordinate = [-4.775142321700772, 37.88657834791404];

// Validates that the coordinate values ​​are in the given projection. 
// The epsg code parameter format can be: 'EPSG:XXXX' or 'XXXX'
if(coordinateUtil.hasValidProjection(coordinate, '4326')) {
  ...
}

// Validates that coordinate decimal places count > or = accuracy parameter value
if(coordinateUtil.hasValidAccuracy(coordinate, 6)) {
  ...
}

 var points = [
      [-4.773992331746113, 37.894851860089155],
      [-4.774045975926458, 37.89455553038567]
];

// Validate the distance (meters) between two points
if(coordinateUtil.getDistance(points[0], points[1]) > 30) {
  ...
}
...
```

## Contributing ##
To load the test locally, you can start a web server with `npm start` and go to `localhost: 9000`.

## MIT License ##

Copyright (c) 2020 GeoWE.org

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