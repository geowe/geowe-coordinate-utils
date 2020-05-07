import { containsCoordinate } from 'ol/extent';
import { getDistance as getCircleDistance } from 'ol/sphere';
import Projections from './Projections';

class CoordinateValidator {

    hasValidProjection(coordinate, epsgCode) {
        const projection = Projections.get(epsgCode);
        const extent = projection.getExtent();
        let valid = false;
        if (containsCoordinate(extent, coordinate))
            valid = true;

        return valid;
    }

    getDistance(startCoordinate, endCoordinate, countDecimal = 2) {
        const validProjection = this.hasValidProjection(startCoordinate, '4326') &&
            this.hasValidProjection(startCoordinate, '4326');
        if (!validProjection)
            throw new Error("Coordinate projection must be WGS84");
        return getCircleDistance(startCoordinate, endCoordinate).toFixed(countDecimal);
    }

    hasValidAccuracy(coordinate, accuracy) {
        return this.countDecimals(coordinate[0]) >= accuracy &&
            this.countDecimals(coordinate[1]) >= accuracy;
    }

    countDecimals(value) {
        if (value === undefined)
            return 0;
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    }
}

export default new CoordinateValidator();