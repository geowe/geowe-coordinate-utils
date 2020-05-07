# geowe-coordinate-utils
Utility library for working with georeferenced coordinates

## Usage ##
Install the `geowe-coordinate-utils` package using npm:

    npm i geowe-coordinate-utils

To use the library just import it into the application:

```js
import coordinateUtil from 'geowe-coordinate-utils';

const coordinate = [-4.775142321700772, 37.88657834791404];

// Validates that the coordinate values ​​are in the given projection. The epsg code parameter format can be: 'EPSG:XXXX' or 'XXXX'
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