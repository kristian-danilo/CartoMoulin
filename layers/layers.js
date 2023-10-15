ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([299092.315244, 6747439.880913, 299192.819869, 6747494.295122]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Orthophotographies19491952_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geobretagne.fr/geoserver/photo/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "satellite-ancien",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Orthophotographies 1949-1952",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Orthophotographies19491952_2, 0]);
var lyr_OrthophotographieduMorbihan2019_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geobretagne.fr/geoserver/photo/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortho-56-2019",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Orthophotographie du Morbihan 2019",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrthophotographieduMorbihan2019_3, 0]);
var format_BDTOPO_zone_de_vegetation_zone_4 = new ol.format.GeoJSON();
var features_BDTOPO_zone_de_vegetation_zone_4 = format_BDTOPO_zone_de_vegetation_zone_4.readFeatures(json_BDTOPO_zone_de_vegetation_zone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_BDTOPO_zone_de_vegetation_zone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDTOPO_zone_de_vegetation_zone_4.addFeatures(features_BDTOPO_zone_de_vegetation_zone_4);
var lyr_BDTOPO_zone_de_vegetation_zone_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDTOPO_zone_de_vegetation_zone_4, 
                style: style_BDTOPO_zone_de_vegetation_zone_4,
                interactive: true,
                title: 'BDTOPO_zone_de_vegetation_zone'
            });
var format_BDTOPO_tronco_de_route_zone_5 = new ol.format.GeoJSON();
var features_BDTOPO_tronco_de_route_zone_5 = format_BDTOPO_tronco_de_route_zone_5.readFeatures(json_BDTOPO_tronco_de_route_zone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_BDTOPO_tronco_de_route_zone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDTOPO_tronco_de_route_zone_5.addFeatures(features_BDTOPO_tronco_de_route_zone_5);
var lyr_BDTOPO_tronco_de_route_zone_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDTOPO_tronco_de_route_zone_5, 
                style: style_BDTOPO_tronco_de_route_zone_5,
                interactive: true,
                title: 'BDTOPO_tronco_de_route_zone'
            });
var format_Au_moins_1_habitat_N2000_CBNB2_6 = new ol.format.GeoJSON();
var features_Au_moins_1_habitat_N2000_CBNB2_6 = format_Au_moins_1_habitat_N2000_CBNB2_6.readFeatures(json_Au_moins_1_habitat_N2000_CBNB2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Au_moins_1_habitat_N2000_CBNB2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Au_moins_1_habitat_N2000_CBNB2_6.addFeatures(features_Au_moins_1_habitat_N2000_CBNB2_6);
var lyr_Au_moins_1_habitat_N2000_CBNB2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Au_moins_1_habitat_N2000_CBNB2_6, 
                style: style_Au_moins_1_habitat_N2000_CBNB2_6,
                interactive: false,
                title: '<img src="styles/legend/Au_moins_1_habitat_N2000_CBNB2_6.png" /> Au_moins_1_habitat_N2000_CBNB 2'
            });
var format_Zone_chantier_7 = new ol.format.GeoJSON();
var features_Zone_chantier_7 = format_Zone_chantier_7.readFeatures(json_Zone_chantier_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zone_chantier_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_chantier_7.addFeatures(features_Zone_chantier_7);
var lyr_Zone_chantier_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zone_chantier_7, 
                style: style_Zone_chantier_7,
                interactive: true,
    title: 'Zone_chantier<br />\
    <img src="styles/legend/Zone_chantier_7_0.png" /> Zone autorisée (762 m²)<br />\
    <img src="styles/legend/Zone_chantier_7_1.png" /> Chantier N°1<br />\
    <img src="styles/legend/Zone_chantier_7_2.png" /> Nouvelles zones<br />'
        });
var format_Cad_Pluherlin_Lanbert93_8 = new ol.format.GeoJSON();
var features_Cad_Pluherlin_Lanbert93_8 = format_Cad_Pluherlin_Lanbert93_8.readFeatures(json_Cad_Pluherlin_Lanbert93_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Cad_Pluherlin_Lanbert93_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cad_Pluherlin_Lanbert93_8.addFeatures(features_Cad_Pluherlin_Lanbert93_8);
var lyr_Cad_Pluherlin_Lanbert93_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cad_Pluherlin_Lanbert93_8, 
                style: style_Cad_Pluherlin_Lanbert93_8,
                interactive: false,
                title: '<img src="styles/legend/Cad_Pluherlin_Lanbert93_8.png" /> Cad_Pluherlin_Lanbert93'
            });
var format_P335_9 = new ol.format.GeoJSON();
var features_P335_9 = format_P335_9.readFeatures(json_P335_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_P335_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P335_9.addFeatures(features_P335_9);
var lyr_P335_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P335_9, 
                style: style_P335_9,
                interactive: false,
                title: '<img src="styles/legend/P335_9.png" /> P335'
            });
var format_P339_10 = new ol.format.GeoJSON();
var features_P339_10 = format_P339_10.readFeatures(json_P339_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_P339_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P339_10.addFeatures(features_P339_10);
var lyr_P339_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_P339_10, 
                style: style_P339_10,
                interactive: false,
                title: '<img src="styles/legend/P339_10.png" /> P339'
            });
var format_EmplacementM_11 = new ol.format.GeoJSON();
var features_EmplacementM_11 = format_EmplacementM_11.readFeatures(json_EmplacementM_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_EmplacementM_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmplacementM_11.addFeatures(features_EmplacementM_11);
var lyr_EmplacementM_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EmplacementM_11, 
                style: style_EmplacementM_11,
                interactive: false,
                title: '<img src="styles/legend/EmplacementM_11.png" /> EmplacementM'
            });
var group_VecteurWFSIGNettlchargementszonaux = new ol.layer.Group({
                                layers: [lyr_BDTOPO_zone_de_vegetation_zone_4,lyr_BDTOPO_tronco_de_route_zone_5,],
                                title: "Vecteur WFS IGN et téléchargements zonaux"});
var group_RastersWMS = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Orthophotographies19491952_2,lyr_OrthophotographieduMorbihan2019_3,],
                                title: "Rasters WMS"});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Orthophotographies19491952_2.setVisible(true);lyr_OrthophotographieduMorbihan2019_3.setVisible(true);lyr_BDTOPO_zone_de_vegetation_zone_4.setVisible(true);lyr_BDTOPO_tronco_de_route_zone_5.setVisible(true);lyr_Au_moins_1_habitat_N2000_CBNB2_6.setVisible(true);lyr_Zone_chantier_7.setVisible(true);lyr_Cad_Pluherlin_Lanbert93_8.setVisible(true);lyr_P335_9.setVisible(true);lyr_P339_10.setVisible(true);lyr_EmplacementM_11.setVisible(true);
var layersList = [group_RastersWMS,group_VecteurWFSIGNettlchargementszonaux,lyr_Au_moins_1_habitat_N2000_CBNB2_6,lyr_Zone_chantier_7,lyr_Cad_Pluherlin_Lanbert93_8,lyr_P335_9,lyr_P339_10,lyr_EmplacementM_11];
lyr_BDTOPO_zone_de_vegetation_zone_4.set('fieldAliases', {'nature': 'nature', 'date_creat': 'date_creat', 'date_modif': 'date_modif', 'date_d_app': 'date_d_app', 'date_de_co': 'date_de_co', 'methode_d_': 'methode_d_', 'precision_': 'precision_', 'sources': 'sources', 'identifian': 'identifian', });
lyr_BDTOPO_tronco_de_route_zone_5.set('fieldAliases', {'nature': 'nature', 'nom_collab': 'nom_collab', 'nom_coll_1': 'nom_coll_1', 'importance': 'importance', 'fictif': 'fictif', 'position_p': 'position_p', 'etat_de_l_': 'etat_de_l_', 'date_creat': 'date_creat', 'date_modif': 'date_modif', 'date_d_app': 'date_d_app', 'date_de_co': 'date_de_co', 'sources': 'sources', 'identifian': 'identifian', 'methode_d_': 'methode_d_', 'precision_': 'precision_', 'methode__1': 'methode__1', 'precisio_1': 'precisio_1', 'nombre_de_': 'nombre_de_', 'largeur_de': 'largeur_de', 'itineraire': 'itineraire', 'prive': 'prive', 'sens_de_ci': 'sens_de_ci', 'reserve_au': 'reserve_au', 'urbain': 'urbain', 'vitesse_mo': 'vitesse_mo', 'acces_vehi': 'acces_vehi', 'acces_piet': 'acces_piet', 'periode_de': 'periode_de', 'nature_de_': 'nature_de_', 'restrictio': 'restrictio', 'restrict_1': 'restrict_1', 'restrict_2': 'restrict_2', 'restrict_3': 'restrict_3', 'restrict_4': 'restrict_4', 'matieres_d': 'matieres_d', 'borne_debu': 'borne_debu', 'borne_de_1': 'borne_de_1', 'borne_fin_': 'borne_fin_', 'borne_fi_1': 'borne_fi_1', 'insee_comm': 'insee_comm', 'insee_co_1': 'insee_co_1', 'alias_gauc': 'alias_gauc', 'alias_droi': 'alias_droi', 'date_de_mi': 'date_de_mi', 'identifi_1': 'identifi_1', 'identifi_2': 'identifi_2', 'liens_vers': 'liens_vers', 'liens_ve_1': 'liens_ve_1', 'cpx_numero': 'cpx_numero', 'cpx_nume_1': 'cpx_nume_1', 'cpx_classe': 'cpx_classe', 'cpx_gestio': 'cpx_gestio', 'cpx_topony': 'cpx_topony', 'cpx_topo_1': 'cpx_topo_1', 'cpx_topo_2': 'cpx_topo_2', 'cpx_nature': 'cpx_nature', 'cpx_topo_3': 'cpx_topo_3', 'delestage': 'delestage', 'source_voi': 'source_voi', 'source_v_1': 'source_v_1', 'nom_voie_b': 'nom_voie_b', 'nom_voie_1': 'nom_voie_1', 'lieux_dits': 'lieux_dits', 'lieux_di_1': 'lieux_di_1', 'identifi_3': 'identifi_3', 'identifi_4': 'identifi_4', 'sens_amena': 'sens_amena', 'sens_ame_1': 'sens_ame_1', 'amenagemen': 'amenagemen', 'amenagem_1': 'amenagem_1', 'aire_de_re': 'aire_de_re', 'gabarit_df': 'gabarit_df', 'impasse_df': 'impasse_df', 'nature_det': 'nature_det', 'ouvrage_d_': 'ouvrage_d_', 'pente_maxi': 'pente_maxi', 'piste_dfci': 'piste_dfci', 'piste_df_1': 'piste_df_1', 'piste_df_2': 'piste_df_2', 'sens_de__1': 'sens_de__1', 'tout_terra': 'tout_terra', 'vitesse__1': 'vitesse__1', 'zone_de_cr': 'zone_de_cr', });
lyr_Au_moins_1_habitat_N2000_CBNB2_6.set('fieldAliases', {'typezone': 'typezone', 'echelle_va': 'echelle_va', 'idreleve': 'idreleve', 'idmilieux': 'idmilieux', 'pourcentag': 'pourcentag', 'nat2000': 'nat2000', 'nat2000txt': 'nat2000txt', 'nat2000dou': 'nat2000dou', 'cahab': 'cahab', 'cahabtxt': 'cahabtxt', 'cahabdoute': 'cahabdoute', 'eunis': 'eunis', 'eunistxt': 'eunistxt', 'eunisdoute': 'eunisdoute', 'corine': 'corine', 'corinetxt': 'corinetxt', 'corinedout': 'corinedout', 'datedebut': 'datedebut', 'datefin': 'datefin', 'idetude': 'idetude', 'maitres_ou': 'maitres_ou', 'references': 'references', 'idpmb': 'idpmb', 'protocole': 'protocole', 'organismes': 'organismes', 'code_site': 'code_site', 'nom_site': 'nom_site', 'antenne': 'antenne', 'dpt': 'dpt', 'legcorine': 'legcorine', 'legeunis': 'legeunis', 'legnat2000': 'legnat2000', 'legnat20_1': 'legnat20_1', 'legnat20_2': 'legnat20_2', 'legcahab': 'legcahab', 'etatcons': 'etatcons', 'degrad_n20': 'degrad_n20', 'usages_n20': 'usages_n20', 'degrad_zni': 'degrad_zni', 'degrad_fsd': 'degrad_fsd', 'surface_m2': 'surface_m2', });
lyr_Zone_chantier_7.set('fieldAliases', {'id': 'id', 'SURF_M2': 'SURF_M2', 'DATE_OUVER': 'DATE_OUVER', 'COMMENTAIR': 'COMMENTAIR', });
lyr_Cad_Pluherlin_Lanbert93_8.set('fieldAliases', {'GB_IDENT': 'GB_IDENT', 'GB_IDNUM': 'GB_IDNUM', 'COAR': 'COAR', 'IDU': 'IDU', 'INDP': 'INDP', 'SUPF': 'SUPF', 'TEX': 'TEX', });
lyr_P335_9.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Surface': 'Surface', 'Etiquette': 'Etiquette', });
lyr_P339_10.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Surface': 'Surface', 'Etiquette': 'Etiquette', });
lyr_EmplacementM_11.set('fieldAliases', {'id': 'id', });
lyr_BDTOPO_zone_de_vegetation_zone_4.set('fieldImages', {'nature': 'TextEdit', 'date_creat': 'TextEdit', 'date_modif': 'TextEdit', 'date_d_app': 'TextEdit', 'date_de_co': 'TextEdit', 'methode_d_': 'TextEdit', 'precision_': 'TextEdit', 'sources': 'TextEdit', 'identifian': 'TextEdit', });
lyr_BDTOPO_tronco_de_route_zone_5.set('fieldImages', {'nature': 'TextEdit', 'nom_collab': 'TextEdit', 'nom_coll_1': 'TextEdit', 'importance': 'TextEdit', 'fictif': 'TextEdit', 'position_p': 'TextEdit', 'etat_de_l_': 'TextEdit', 'date_creat': 'TextEdit', 'date_modif': 'TextEdit', 'date_d_app': 'TextEdit', 'date_de_co': 'TextEdit', 'sources': 'TextEdit', 'identifian': 'TextEdit', 'methode_d_': 'TextEdit', 'precision_': 'TextEdit', 'methode__1': 'TextEdit', 'precisio_1': 'TextEdit', 'nombre_de_': 'TextEdit', 'largeur_de': 'TextEdit', 'itineraire': 'TextEdit', 'prive': 'TextEdit', 'sens_de_ci': 'TextEdit', 'reserve_au': 'TextEdit', 'urbain': 'TextEdit', 'vitesse_mo': 'TextEdit', 'acces_vehi': 'TextEdit', 'acces_piet': 'TextEdit', 'periode_de': 'TextEdit', 'nature_de_': 'TextEdit', 'restrictio': 'TextEdit', 'restrict_1': 'TextEdit', 'restrict_2': 'TextEdit', 'restrict_3': 'TextEdit', 'restrict_4': 'TextEdit', 'matieres_d': 'TextEdit', 'borne_debu': 'TextEdit', 'borne_de_1': 'TextEdit', 'borne_fin_': 'TextEdit', 'borne_fi_1': 'TextEdit', 'insee_comm': 'TextEdit', 'insee_co_1': 'TextEdit', 'alias_gauc': 'TextEdit', 'alias_droi': 'TextEdit', 'date_de_mi': 'TextEdit', 'identifi_1': 'TextEdit', 'identifi_2': 'TextEdit', 'liens_vers': 'TextEdit', 'liens_ve_1': 'TextEdit', 'cpx_numero': 'TextEdit', 'cpx_nume_1': 'TextEdit', 'cpx_classe': 'TextEdit', 'cpx_gestio': 'TextEdit', 'cpx_topony': 'TextEdit', 'cpx_topo_1': 'TextEdit', 'cpx_topo_2': 'TextEdit', 'cpx_nature': 'TextEdit', 'cpx_topo_3': 'TextEdit', 'delestage': 'TextEdit', 'source_voi': 'TextEdit', 'source_v_1': 'TextEdit', 'nom_voie_b': 'TextEdit', 'nom_voie_1': 'TextEdit', 'lieux_dits': 'TextEdit', 'lieux_di_1': 'TextEdit', 'identifi_3': 'TextEdit', 'identifi_4': 'TextEdit', 'sens_amena': 'TextEdit', 'sens_ame_1': 'TextEdit', 'amenagemen': 'TextEdit', 'amenagem_1': 'TextEdit', 'aire_de_re': 'TextEdit', 'gabarit_df': 'TextEdit', 'impasse_df': 'TextEdit', 'nature_det': 'TextEdit', 'ouvrage_d_': 'TextEdit', 'pente_maxi': 'TextEdit', 'piste_dfci': 'TextEdit', 'piste_df_1': 'TextEdit', 'piste_df_2': 'TextEdit', 'sens_de__1': 'TextEdit', 'tout_terra': 'TextEdit', 'vitesse__1': 'TextEdit', 'zone_de_cr': 'TextEdit', });
lyr_Au_moins_1_habitat_N2000_CBNB2_6.set('fieldImages', {'typezone': 'TextEdit', 'echelle_va': 'TextEdit', 'idreleve': 'TextEdit', 'idmilieux': 'TextEdit', 'pourcentag': 'TextEdit', 'nat2000': 'TextEdit', 'nat2000txt': 'TextEdit', 'nat2000dou': 'TextEdit', 'cahab': 'TextEdit', 'cahabtxt': 'TextEdit', 'cahabdoute': 'TextEdit', 'eunis': 'TextEdit', 'eunistxt': 'TextEdit', 'eunisdoute': 'TextEdit', 'corine': 'TextEdit', 'corinetxt': 'TextEdit', 'corinedout': 'TextEdit', 'datedebut': 'TextEdit', 'datefin': 'TextEdit', 'idetude': 'TextEdit', 'maitres_ou': 'TextEdit', 'references': 'TextEdit', 'idpmb': 'TextEdit', 'protocole': 'TextEdit', 'organismes': 'TextEdit', 'code_site': 'TextEdit', 'nom_site': 'TextEdit', 'antenne': 'TextEdit', 'dpt': 'TextEdit', 'legcorine': 'TextEdit', 'legeunis': 'TextEdit', 'legnat2000': 'TextEdit', 'legnat20_1': 'TextEdit', 'legnat20_2': 'TextEdit', 'legcahab': 'TextEdit', 'etatcons': 'TextEdit', 'degrad_n20': 'TextEdit', 'usages_n20': 'TextEdit', 'degrad_zni': 'TextEdit', 'degrad_fsd': 'TextEdit', 'surface_m2': 'TextEdit', });
lyr_Zone_chantier_7.set('fieldImages', {'id': 'TextEdit', 'SURF_M2': 'TextEdit', 'DATE_OUVER': 'DateTime', 'COMMENTAIR': 'TextEdit', });
lyr_Cad_Pluherlin_Lanbert93_8.set('fieldImages', {'GB_IDENT': 'TextEdit', 'GB_IDNUM': 'TextEdit', 'COAR': 'TextEdit', 'IDU': 'TextEdit', 'INDP': 'TextEdit', 'SUPF': 'TextEdit', 'TEX': 'TextEdit', });
lyr_P335_9.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Surface': 'TextEdit', 'Etiquette': 'TextEdit', });
lyr_P339_10.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Surface': 'TextEdit', 'Etiquette': 'TextEdit', });
lyr_EmplacementM_11.set('fieldImages', {'id': 'TextEdit', });
lyr_BDTOPO_zone_de_vegetation_zone_4.set('fieldLabels', {});
lyr_BDTOPO_tronco_de_route_zone_5.set('fieldLabels', {});
lyr_Au_moins_1_habitat_N2000_CBNB2_6.set('fieldLabels', {'typezone': 'no label', 'echelle_va': 'no label', 'idreleve': 'no label', 'idmilieux': 'no label', 'pourcentag': 'no label', 'nat2000': 'no label', 'nat2000txt': 'no label', 'nat2000dou': 'no label', 'cahab': 'no label', 'cahabtxt': 'no label', 'cahabdoute': 'no label', 'eunis': 'no label', 'eunistxt': 'no label', 'eunisdoute': 'no label', 'corine': 'no label', 'corinetxt': 'no label', 'corinedout': 'no label', 'datedebut': 'no label', 'datefin': 'no label', 'idetude': 'no label', 'maitres_ou': 'no label', 'references': 'no label', 'idpmb': 'no label', 'protocole': 'no label', 'organismes': 'no label', 'code_site': 'no label', 'nom_site': 'no label', 'antenne': 'no label', 'dpt': 'no label', 'legcorine': 'no label', 'legeunis': 'no label', 'legnat2000': 'no label', 'legnat20_1': 'no label', 'legnat20_2': 'no label', 'legcahab': 'no label', 'etatcons': 'no label', 'degrad_n20': 'no label', 'usages_n20': 'no label', 'degrad_zni': 'no label', 'degrad_fsd': 'no label', 'surface_m2': 'no label', });
lyr_Zone_chantier_7.set('fieldLabels', {'id': 'no label', 'SURF_M2': 'no label', 'DATE_OUVER': 'no label', 'COMMENTAIR': 'no label', });
lyr_Cad_Pluherlin_Lanbert93_8.set('fieldLabels', {'GB_IDENT': 'no label', 'GB_IDNUM': 'no label', 'COAR': 'no label', 'IDU': 'no label', 'INDP': 'no label', 'SUPF': 'no label', 'TEX': 'no label', });
lyr_P335_9.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Surface': 'no label', 'Etiquette': 'no label', });
lyr_P339_10.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Surface': 'no label', 'Etiquette': 'no label', });
lyr_EmplacementM_11.set('fieldLabels', {'id': 'no label', });
lyr_EmplacementM_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});