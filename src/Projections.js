import {get as getOLProjection } from 'ol/proj';
import { register } from 'ol/proj/proj4';
import proj4 from 'proj4';
const projs = require('epsg-index/all.json')

export default class Projections {

    static get(projectionCode) {
        let projection = undefined;
        if (projectionCode.startsWith("EPSG:")) {
            projectionCode = projectionCode.split(":")[1];
        }

        if (projectionCode == 3857 || projectionCode == 4326) {
            projection = getOLProjection("EPSG:" + projectionCode);
        } else {
            var epsgProj = projs[projectionCode];
            if (epsgProj != undefined) {
                proj4.defs("EPSG:" + projectionCode, epsgProj.proj4);
                register(proj4);

                projection = getOLProjection("EPSG:" + projectionCode);
                projection.setExtent(epsgProj.proj4.bbox);
            }
        }

        return projection;
    }
}