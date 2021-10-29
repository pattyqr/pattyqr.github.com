var wms_layers = [];


        var lyr_GoogleHybrid2021_0 = new ol.layer.Tile({
            'title': 'Google Hybrid 2021',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_dist_limas_1 = new ol.format.GeoJSON();
var features_dist_limas_1 = format_dist_limas_1.readFeatures(json_dist_limas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dist_limas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dist_limas_1.addFeatures(features_dist_limas_1);
var lyr_dist_limas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dist_limas_1, 
                style: style_dist_limas_1,
                interactive: true,
    title: 'dist_limas<br />\
    <img src="styles/legend/dist_limas_1_0.png" /> BARRANCA<br />\
    <img src="styles/legend/dist_limas_1_1.png" /> CAJATAMBO<br />\
    <img src="styles/legend/dist_limas_1_2.png" /> CANTA<br />\
    <img src="styles/legend/dist_limas_1_3.png" /> CAÑETE<br />\
    <img src="styles/legend/dist_limas_1_4.png" /> HUARAL<br />\
    <img src="styles/legend/dist_limas_1_5.png" /> HUAROCHIRI<br />\
    <img src="styles/legend/dist_limas_1_6.png" /> HUAURA<br />\
    <img src="styles/legend/dist_limas_1_7.png" /> LIMA<br />\
    <img src="styles/legend/dist_limas_1_8.png" /> OYON<br />\
    <img src="styles/legend/dist_limas_1_9.png" /> YAUYOS<br />\
    <img src="styles/legend/dist_limas_1_10.png" /> <br />'
        });

lyr_GoogleHybrid2021_0.setVisible(true);lyr_dist_limas_1.setVisible(true);
var layersList = [lyr_GoogleHybrid2021_0,lyr_dist_limas_1];
lyr_dist_limas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', });
lyr_dist_limas_1.set('fieldImages', {'OBJECTID': 'Range', 'IDDIST': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_MINAM': 'TextEdit', });
lyr_dist_limas_1.set('fieldLabels', {'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'inline label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', });
lyr_dist_limas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});