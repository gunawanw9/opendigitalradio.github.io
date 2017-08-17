var dataRegular = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"name": "DAB+ Bretzenheim",
				"channel": "12A",
				"location": "Bretzenheim, Kirchturm Maria Geburt",
				"start": "05.08.2017",
				"operator": "domradio Studio Nahe",
				"operatorUrl": "http://www.studio-nahe.de/",
				"moreInfoUrl": "https://www.facebook.com/digitalradiobretzenheim/"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [7.89941, 49.87998]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "RNT Associative",
				"channel": "9A",
				"location": "Montmartre, Paris, France",
				"start": "04.07.2015",
				"operator": "La Coop Radio",
				"operatorUrl": "http://lacoopradio.fr/",
				"moreInfoUrl": "https://www.facebook.com/RNTasso/"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [2.341789, 48.887569]
			}
		},		
		{
			"type": "Feature",
			"properties": {
				"name": "DIG3GE (1st pilot site with opendigitalradio)",
				"channel": "10D",
				"location": "Le Fierney (F), Geneva, Switzerland",
				"start": "01.05.2014",
				"operator": "Digris",
				"operatorUrl": "http://www.digris.ch/",
				"moreInfoUrl": "http://wiki.opendigitalradio.org/Start_of_transmission_of_new_DAB%2B_stations_on_Geneva"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [5.985, 46.290278]
			}
		}
	]
};
		
var dataTest = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Birmingham",
				"channel": "9A",
				"location": "Castle Vale, Birmingham, England",
				"start": "20.08.2015",
				"operator": "Switch Radio",
				"operatorUrl": "http://www.switchradio.co.uk/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-1.795126, 52.519995]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Bristol",
				"channel": "9A",
				"location": "Ashton, Bristol, England",
				"start": "26.08.2015",
				"operator": "Celador",
				"operatorUrl": "http://bristoldigitalradio.org/",
				"moreInfoUrl": "http://www.bristoldigitalradio.org/about-us/"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-2.628612, 51.439694]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Brighton",
				"channel": "9A",
				"location": "Sussex Heights, Brighton, PRBH",
				"start": "23.07.2015",
				"operator": "Brighton & Hove Radio Ltd.",
				"operatorUrl": "http://juicebrighton.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-0.150272, 50.821612]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Cambridge",
				"channel": "7D",
				"location": "Gog Magog, Camb, England",
				"start": "03.09.2015",
				"operator": "Star Radio",
				"operatorUrl": "http://starradioonline.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [0.177966, 52.157573]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Cambridge",
				"channel": "7D (Repeater, SFN)",
				"location": "Church, Cambridge, England",
				"start": "03.09.2015",
				"operator": "Star Radio",
				"operatorUrl": "http://starradioonline.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [0.127271, 52.19806]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Glasgow",
				"channel": "10B (SFN)",
				"location": "Cathkin Braes, Glasgow, Scotland",
				"start": "26.11.2015",
				"operator": "Brave Broadcasting Ltd.",
				"operatorUrl": "http://www.glasgowdab.uk/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-4.182513, 55.807868]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Glasgow",
				"channel": "10B (SFN)*INACTIVE",
				"location": "Edmonstone Court, Glasgow, Scotland",
				"start": "10.05.2016",
				"operator": "Brave Broadcasting Ltd.",
				"operatorUrl": "http://www.glasgowdab.uk/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-4.388742, 55.892105]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial London",
				"channel": "9A (SFN)",
				"location": "Southwood Park, London, England",
				"start": "09.09.2015",
				"operator": "U.DAB",
				"operatorUrl": "http://www.udab.co.uk/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-0.14874, 51.574230]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial London",
				"channel": "9A (SFN)",
				"location": "Honor Oak Park, London, England",
				"start": "07.10.2015",
				"operator": "U.DAB",
				"operatorUrl": "http://www.udab.co.uk/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-0.056047, 51.446845]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Manchester",
				"channel": "10B",
				"location": "Manchester One, Manchester, England",
				"start": "19.08.2015",
				"operator": "Niocast",
				"operatorUrl": "http://niocast.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-2.239504, 53.477193]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Norwich",
				"channel": "9A",
				"location": "Markham Tower, Norwich, England",
				"start": "04.07.2015",
				"operator": "FDN",
				"operatorUrl": "http://www.futuredigital.info/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [1.269804, 52.65034]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Portsmouth",
				"channel": "7D",
				"location": "Fort Widley, Portsmouth, England",
				"start": "06.08.2015",
				"operator": "Solent Wireless",
				"operatorUrl": "http://www.solentwireless.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-1.068117, 50.853233]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Aldershot",
				"channel": "8A (SFN)",
				"location": "Winston Churchill School, Woking, England",
				"start": "26.09.2015",
				"operator": "BFBS",
				"operatorUrl": "http://bfbs.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-0.602621, 51.312569]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "Trial Aldershot",
				"channel": "8A (SFN)",
				"location": "Health Centre, Aldershot, England",
				"start": "26.08.2016",
				"operator": "BFBS",
				"operatorUrl": "http://bfbs.com/",
				"moreInfoUrl": "https://www.ofcom.org.uk/manage-your-licence/radio-broadcast-licensing/look-up-radio-station-details/small-scale-dab-trial-coverage-maps"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-0.766306, 51.254165]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"name": "IRT-Radio-Test",
				"channel": "8A",
				"location": "Munich, BR-Funkhaus",
				"start": "16.02.2017",
				"operator": "Institut für Rundfunktechnik GmbH",
				"operatorUrl": "https://www.irt.de/en/",
				"moreInfoUrl": "https://www.irt.de/no_cache/aktuell/news/view/datum/2017/02/17/mehr-digitalradio-mit-small-scale-dab/"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [11.55368, 48.14297]
			}
		}
	]
};

var dataPlanned = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"location": "Leipzig, TBD",
				"start": "2017/18 (planned)",
				"moreInfoUrl": "https://www.slm-online.de/2017_pressemitteilungen-a-2996.html"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [12.3806, 51.3398]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"location": "Freiberg, TBD",
				"start": "2017/18 (planned)",
				"moreInfoUrl": "https://www.slm-online.de/2017_pressemitteilungen-a-2996.html"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [13.3332, 50.9174]
			}
		}
	]
};