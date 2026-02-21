var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SaintJosephBoundary_1 = new ol.format.GeoJSON();
var features_SaintJosephBoundary_1 = format_SaintJosephBoundary_1.readFeatures(json_SaintJosephBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaintJosephBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaintJosephBoundary_1.addFeatures(features_SaintJosephBoundary_1);
var lyr_SaintJosephBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaintJosephBoundary_1, 
                style: style_SaintJosephBoundary_1,
                popuplayertitle: 'SaintJosephBoundary',
                interactive: false,
                title: '<img src="styles/legend/SaintJosephBoundary_1.png" /> SaintJosephBoundary'
            });
var format_Churches_2 = new ol.format.GeoJSON();
var features_Churches_2 = format_Churches_2.readFeatures(json_Churches_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Churches_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Churches_2.addFeatures(features_Churches_2);
var lyr_Churches_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Churches_2, 
                style: style_Churches_2,
                popuplayertitle: 'Churches',
                interactive: true,
                title: '<img src="styles/legend/Churches_2.png" /> Churches'
            });
var format_Parks_3 = new ol.format.GeoJSON();
var features_Parks_3 = format_Parks_3.readFeatures(json_Parks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_3.addFeatures(features_Parks_3);
var lyr_Parks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_3, 
                style: style_Parks_3,
                popuplayertitle: ' Parks',
                interactive: true,
                title: ' Parks'
            });
var format_OTNN_HistoricDistricts_4 = new ol.format.GeoJSON();
var features_OTNN_HistoricDistricts_4 = format_OTNN_HistoricDistricts_4.readFeatures(json_OTNN_HistoricDistricts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTNN_HistoricDistricts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTNN_HistoricDistricts_4.addFeatures(features_OTNN_HistoricDistricts_4);
var lyr_OTNN_HistoricDistricts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTNN_HistoricDistricts_4, 
                style: style_OTNN_HistoricDistricts_4,
                popuplayertitle: 'OTNN_HistoricDistricts',
                interactive: true,
    title: 'OTNN_HistoricDistricts<br />\
    <img src="styles/legend/OTNN_HistoricDistricts_4_0.png" /> Hall Street Historic District<br />\
    <img src="styles/legend/OTNN_HistoricDistricts_4_1.png" /> Mount Mora Cemetery<br />\
    <img src="styles/legend/OTNN_HistoricDistricts_4_2.png" /> Robidoux Hill Historic District<br />\
    <img src="styles/legend/OTNN_HistoricDistricts_4_3.png" /> Cathedral Hill Historic District<br />' });
var format_OldTownNorthNeighborhood_5 = new ol.format.GeoJSON();
var features_OldTownNorthNeighborhood_5 = format_OldTownNorthNeighborhood_5.readFeatures(json_OldTownNorthNeighborhood_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OldTownNorthNeighborhood_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OldTownNorthNeighborhood_5.addFeatures(features_OldTownNorthNeighborhood_5);
var lyr_OldTownNorthNeighborhood_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OldTownNorthNeighborhood_5, 
                style: style_OldTownNorthNeighborhood_5,
                popuplayertitle: 'Old Town North Neighborhood',
                interactive: false,
                title: '<img src="styles/legend/OldTownNorthNeighborhood_5.png" /> Old Town North Neighborhood'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SaintJosephBoundary_1.setVisible(true);lyr_Churches_2.setVisible(true);lyr_Parks_3.setVisible(true);lyr_OTNN_HistoricDistricts_4.setVisible(true);lyr_OldTownNorthNeighborhood_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SaintJosephBoundary_1,lyr_Churches_2,lyr_Parks_3,lyr_OTNN_HistoricDistricts_4,lyr_OldTownNorthNeighborhood_5];
lyr_SaintJosephBoundary_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'folders': 'folders', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'ALAND10': 'ALAND10', 'AMIND00': 'AMIND00', 'AMIND10': 'AMIND10', 'AMIND90': 'AMIND90', 'ASIAN00': 'ASIAN00', 'ASIAN10': 'ASIAN10', 'ASIAN90': 'ASIAN90', 'AWATER10': 'AWATER10', 'BLACK00': 'BLACK00', 'BLACK10': 'BLACK10', 'BLACK90': 'BLACK90', 'CLASSFP10': 'CLASSFP10', 'FUNCSTAT10': 'FUNCSTAT10', 'GEOID10': 'GEOID10', 'HAWNPI00': 'HAWNPI00', 'HAWNPI10': 'HAWNPI10', 'HISP00': 'HISP00', 'HISP10': 'HISP10', 'HISP90': 'HISP90', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'LSAD10': 'LSAD10', 'MTFCC10': 'MTFCC10', 'MULTRA00': 'MULTRA00', 'MULTRA10': 'MULTRA10', 'NAMELSAD10': 'NAMELSAD10', 'OBJECTID': 'OBJECTID', 'OTHER00': 'OTHER00', 'OTHER10': 'OTHER10', 'OTHER90': 'OTHER90', 'PCICBSA10': 'PCICBSA10', 'PCINECTA10': 'PCINECTA10', 'PLACE': 'PLACE', 'PLACENS10': 'PLACENS10', 'POP00': 'POP00', 'POP10': 'POP10', 'POP90': 'POP90', 'SHAPE_Area': 'SHAPE_Area', 'SHAPE_Leng': 'SHAPE_Leng', 'STATEFP10': 'STATEFP10', 'WHITE00': 'WHITE00', 'WHITE10': 'WHITE10', 'WHITE90': 'WHITE90', });
lyr_Churches_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'descriptio': 'descriptio', });
lyr_Parks_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OTNN_HistoricDistricts_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID': 'FID', 'HST_NAME': 'HST_NAME', 'LISTED': 'LISTED', 'DATE_LIST': 'DATE_LIST', 'PADDRESS': 'PADDRESS', 'DATEMODIFD': 'DATEMODIFD', 'CRITERIA_A': 'CRITERIA_A', 'CRITERIA_B': 'CRITERIA_B', 'CRITERIA_C': 'CRITERIA_C', 'CRITERIA_D': 'CRITERIA_D', 'PLOCALNAME': 'PLOCALNAME', 'AS_AGRI': 'AS_AGRI', 'AS_ARCHIT': 'AS_ARCHIT', 'AS_ARCHLGY': 'AS_ARCHLGY', 'AS_ART': 'AS_ART', 'AS_COMMRCE': 'AS_COMMRCE', 'AS_COMMUN': 'AS_COMMUN', 'AS_PLN_DEV': 'AS_PLN_DEV', 'AS_CONSERV': 'AS_CONSERV', 'AS_ECON': 'AS_ECON', 'AS_EDUCATN': 'AS_EDUCATN', 'AS_ENGINER': 'AS_ENGINER', 'AS_ENT_REC': 'AS_ENT_REC', 'AS_ETH_HER': 'AS_ETH_HER', 'AS_EXP_SET': 'AS_EXP_SET', 'AS_HEALTH': 'AS_HEALTH', 'AS_INDSTRY': 'AS_INDSTRY', 'AS_INVENT': 'AS_INVENT', 'AS_LANDSCP': 'AS_LANDSCP', 'AS_LAW': 'AS_LAW', 'AS_LITER': 'AS_LITER', 'AS_MAR_HIS': 'AS_MAR_HIS', 'AS_MILTARY': 'AS_MILTARY', 'AS_PER_ART': 'AS_PER_ART', 'AS_PHILO': 'AS_PHILO', 'AS_POL_GOV': 'AS_POL_GOV', 'AS_RELIGON': 'AS_RELIGON', 'AS_SCIENCE': 'AS_SCIENCE', 'AS_SOC_HIS': 'AS_SOC_HIS', 'AS_TRANSPT': 'AS_TRANSPT', 'AS_OTHER': 'AS_OTHER', 'OTHR_NAME': 'OTHR_NAME', 'PERIOD_SIG': 'PERIOD_SIG', 'ARCHITECT': 'ARCHITECT', 'SHPO_NUMBE': 'SHPO_NUMBE', });
lyr_OldTownNorthNeighborhood_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SaintJosephBoundary_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'folders': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'ALAND10': 'TextEdit', 'AMIND00': 'TextEdit', 'AMIND10': 'TextEdit', 'AMIND90': 'TextEdit', 'ASIAN00': 'TextEdit', 'ASIAN10': 'TextEdit', 'ASIAN90': 'TextEdit', 'AWATER10': 'TextEdit', 'BLACK00': 'TextEdit', 'BLACK10': 'TextEdit', 'BLACK90': 'TextEdit', 'CLASSFP10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'GEOID10': 'TextEdit', 'HAWNPI00': 'TextEdit', 'HAWNPI10': 'TextEdit', 'HISP00': 'TextEdit', 'HISP10': 'TextEdit', 'HISP90': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'LSAD10': 'TextEdit', 'MTFCC10': 'TextEdit', 'MULTRA00': 'TextEdit', 'MULTRA10': 'TextEdit', 'NAMELSAD10': 'TextEdit', 'OBJECTID': 'TextEdit', 'OTHER00': 'TextEdit', 'OTHER10': 'TextEdit', 'OTHER90': 'TextEdit', 'PCICBSA10': 'TextEdit', 'PCINECTA10': 'TextEdit', 'PLACE': 'TextEdit', 'PLACENS10': 'TextEdit', 'POP00': 'TextEdit', 'POP10': 'TextEdit', 'POP90': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'STATEFP10': 'TextEdit', 'WHITE00': 'TextEdit', 'WHITE10': 'TextEdit', 'WHITE90': 'TextEdit', });
lyr_Churches_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Parks_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OTNN_HistoricDistricts_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID': 'TextEdit', 'HST_NAME': 'TextEdit', 'LISTED': 'TextEdit', 'DATE_LIST': 'TextEdit', 'PADDRESS': 'TextEdit', 'DATEMODIFD': 'TextEdit', 'CRITERIA_A': 'TextEdit', 'CRITERIA_B': 'TextEdit', 'CRITERIA_C': 'TextEdit', 'CRITERIA_D': 'TextEdit', 'PLOCALNAME': 'TextEdit', 'AS_AGRI': 'TextEdit', 'AS_ARCHIT': 'TextEdit', 'AS_ARCHLGY': 'TextEdit', 'AS_ART': 'TextEdit', 'AS_COMMRCE': 'TextEdit', 'AS_COMMUN': 'TextEdit', 'AS_PLN_DEV': 'TextEdit', 'AS_CONSERV': 'TextEdit', 'AS_ECON': 'TextEdit', 'AS_EDUCATN': 'TextEdit', 'AS_ENGINER': 'TextEdit', 'AS_ENT_REC': 'TextEdit', 'AS_ETH_HER': 'TextEdit', 'AS_EXP_SET': 'TextEdit', 'AS_HEALTH': 'TextEdit', 'AS_INDSTRY': 'TextEdit', 'AS_INVENT': 'TextEdit', 'AS_LANDSCP': 'TextEdit', 'AS_LAW': 'TextEdit', 'AS_LITER': 'TextEdit', 'AS_MAR_HIS': 'TextEdit', 'AS_MILTARY': 'TextEdit', 'AS_PER_ART': 'TextEdit', 'AS_PHILO': 'TextEdit', 'AS_POL_GOV': 'TextEdit', 'AS_RELIGON': 'TextEdit', 'AS_SCIENCE': 'TextEdit', 'AS_SOC_HIS': 'TextEdit', 'AS_TRANSPT': 'TextEdit', 'AS_OTHER': 'TextEdit', 'OTHR_NAME': 'TextEdit', 'PERIOD_SIG': 'TextEdit', 'ARCHITECT': 'TextEdit', 'SHPO_NUMBE': 'TextEdit', });
lyr_OldTownNorthNeighborhood_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SaintJosephBoundary_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'folders': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'ALAND10': 'no label', 'AMIND00': 'no label', 'AMIND10': 'no label', 'AMIND90': 'no label', 'ASIAN00': 'no label', 'ASIAN10': 'no label', 'ASIAN90': 'no label', 'AWATER10': 'no label', 'BLACK00': 'no label', 'BLACK10': 'no label', 'BLACK90': 'no label', 'CLASSFP10': 'no label', 'FUNCSTAT10': 'no label', 'GEOID10': 'no label', 'HAWNPI00': 'no label', 'HAWNPI10': 'no label', 'HISP00': 'no label', 'HISP10': 'no label', 'HISP90': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'LSAD10': 'no label', 'MTFCC10': 'no label', 'MULTRA00': 'no label', 'MULTRA10': 'no label', 'NAMELSAD10': 'no label', 'OBJECTID': 'no label', 'OTHER00': 'no label', 'OTHER10': 'no label', 'OTHER90': 'no label', 'PCICBSA10': 'no label', 'PCINECTA10': 'no label', 'PLACE': 'no label', 'PLACENS10': 'no label', 'POP00': 'no label', 'POP10': 'no label', 'POP90': 'no label', 'SHAPE_Area': 'no label', 'SHAPE_Leng': 'no label', 'STATEFP10': 'no label', 'WHITE00': 'no label', 'WHITE10': 'no label', 'WHITE90': 'no label', });
lyr_Churches_2.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'descriptio': 'hidden field', });
lyr_Parks_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_OTNN_HistoricDistricts_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'FID': 'hidden field', 'HST_NAME': 'hidden field', 'LISTED': 'hidden field', 'DATE_LIST': 'hidden field', 'PADDRESS': 'hidden field', 'DATEMODIFD': 'hidden field', 'CRITERIA_A': 'hidden field', 'CRITERIA_B': 'hidden field', 'CRITERIA_C': 'hidden field', 'CRITERIA_D': 'hidden field', 'PLOCALNAME': 'hidden field', 'AS_AGRI': 'hidden field', 'AS_ARCHIT': 'hidden field', 'AS_ARCHLGY': 'hidden field', 'AS_ART': 'hidden field', 'AS_COMMRCE': 'hidden field', 'AS_COMMUN': 'hidden field', 'AS_PLN_DEV': 'hidden field', 'AS_CONSERV': 'hidden field', 'AS_ECON': 'hidden field', 'AS_EDUCATN': 'hidden field', 'AS_ENGINER': 'hidden field', 'AS_ENT_REC': 'hidden field', 'AS_ETH_HER': 'hidden field', 'AS_EXP_SET': 'hidden field', 'AS_HEALTH': 'hidden field', 'AS_INDSTRY': 'hidden field', 'AS_INVENT': 'hidden field', 'AS_LANDSCP': 'hidden field', 'AS_LAW': 'hidden field', 'AS_LITER': 'hidden field', 'AS_MAR_HIS': 'hidden field', 'AS_MILTARY': 'hidden field', 'AS_PER_ART': 'hidden field', 'AS_PHILO': 'hidden field', 'AS_POL_GOV': 'hidden field', 'AS_RELIGON': 'hidden field', 'AS_SCIENCE': 'hidden field', 'AS_SOC_HIS': 'hidden field', 'AS_TRANSPT': 'hidden field', 'AS_OTHER': 'hidden field', 'OTHR_NAME': 'hidden field', 'PERIOD_SIG': 'hidden field', 'ARCHITECT': 'hidden field', 'SHPO_NUMBE': 'hidden field', });
lyr_OldTownNorthNeighborhood_5.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_OldTownNorthNeighborhood_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});