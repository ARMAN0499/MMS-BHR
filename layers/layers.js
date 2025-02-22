var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BadanJalan_1 = new ol.format.GeoJSON();
var features_BadanJalan_1 = format_BadanJalan_1.readFeatures(json_BadanJalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadanJalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadanJalan_1.addFeatures(features_BadanJalan_1);
var lyr_BadanJalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BadanJalan_1, 
                style: style_BadanJalan_1,
                popuplayertitle: "Badan Jalan",
                interactive: false,
                title: '<img src="styles/legend/BadanJalan_1.png" /> Badan Jalan'
            });
var format_Infrastruktur_2 = new ol.format.GeoJSON();
var features_Infrastruktur_2 = format_Infrastruktur_2.readFeatures(json_Infrastruktur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_2.addFeatures(features_Infrastruktur_2);
var lyr_Infrastruktur_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_2, 
                style: style_Infrastruktur_2,
                popuplayertitle: "Infrastruktur",
                interactive: true,
                title: '<img src="styles/legend/Infrastruktur_2.png" /> Infrastruktur'
            });
var format_HR1_3 = new ol.format.GeoJSON();
var features_HR1_3 = format_HR1_3.readFeatures(json_HR1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HR1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HR1_3.addFeatures(features_HR1_3);
var lyr_HR1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HR1_3, 
                style: style_HR1_3,
                popuplayertitle: "HR1",
                interactive: true,
                title: '<img src="styles/legend/HR1_3.png" /> HR1'
            });
var format_Pit_4 = new ol.format.GeoJSON();
var features_Pit_4 = format_Pit_4.readFeatures(json_Pit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pit_4.addFeatures(features_Pit_4);
var lyr_Pit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pit_4, 
                style: style_Pit_4,
                popuplayertitle: "Pit",
                interactive: true,
                title: '<img src="styles/legend/Pit_4.png" /> Pit'
            });
var format_BatasIUP_5 = new ol.format.GeoJSON();
var features_BatasIUP_5 = format_BatasIUP_5.readFeatures(json_BatasIUP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasIUP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasIUP_5.addFeatures(features_BatasIUP_5);
var lyr_BatasIUP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasIUP_5, 
                style: style_BatasIUP_5,
                popuplayertitle: "Batas IUP",
                interactive: false,
                title: '<img src="styles/legend/BatasIUP_5.png" /> Batas IUP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BadanJalan_1.setVisible(true);lyr_Infrastruktur_2.setVisible(true);lyr_HR1_3.setVisible(true);lyr_Pit_4.setVisible(true);lyr_BatasIUP_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BadanJalan_1,lyr_Infrastruktur_2,lyr_HR1_3,lyr_Pit_4,lyr_BatasIUP_5];
lyr_BadanJalan_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Infrastruktur_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Dok': 'Dok', });
lyr_HR1_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Pit_4.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Dok.': 'Dok.', });
lyr_BatasIUP_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_BadanJalan_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Infrastruktur_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Dok': 'ExternalResource', });
lyr_HR1_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Pit_4.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Dok.': 'ExternalResource', });
lyr_BatasIUP_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_BadanJalan_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Infrastruktur_2.set('fieldLabels', {'fid': 'hidden field', 'Id': 'no label', 'Description': 'hidden field', 'Dok': 'no label', });
lyr_HR1_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Pit_4.set('fieldLabels', {'fid': 'hidden field', 'Id': 'no label', 'Description': 'hidden field', 'Dok.': 'no label', });
lyr_BatasIUP_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', });
lyr_BatasIUP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});