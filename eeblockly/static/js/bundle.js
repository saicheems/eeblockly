(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "algorithms": [
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image on which to apply edge detection.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "threshold",
          "description": "Threshold value. The pixel is only considered for edge detection if the gradient magnitude is higher than this threshold.",
          "type": "Float"
        },
        {
          "argumentName": "sigma",
          "defaultValue": 1,
          "description": "Sigma value for a gaussian filter applied before edge detection. 0 means apply no filtering.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Applies the Canny edge detection algorithm to an image. The output is an image whose bands have the same names as the input bands, and in which non-zero values indicate edges, and the magnitude of the value is the gradient magnitude.",
      "name": "algorithms/CannyEdgeDetector",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "imageA",
          "description": "First image, with N bands.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "imageB",
          "description": "Second image, must have the same number of bands as imageA.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxGap",
          "description": "The greatest distance a pixel may shift in either X or Y.",
          "type": "Integer"
        },
        {
          "argumentName": "windowSize",
          "description": "Size of the window to be compared.",
          "type": "Integer"
        },
        {
          "argumentName": "maxMaskedFrac",
          "defaultValue": 0,
          "description": "The maximum fraction of pixels within the correlation window that are allowed to be masked. This test is applied at each offset location within the search region. For each offset, the overlapping image patches are compared and a correlation score computed. A pixel within these overlapping patches is considered masked if either of the patches is masked there. If the test fails at any single location in the search region, the ouput pixel for which the correlation is being computed is considered invalid, and will be masked.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Gives information on the quality of image registration between two (theoretically) co-registered images. The input is two images with the same number of bands. This function outputs an image composed of four bands of information. The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB. The fourth band is the value of the correlation coefficient for that pixel [-1 : +1].",
      "name": "algorithms/CrossCorrelation",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the transform.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "gridSize",
          "defaultValue": 256,
          "description": "Grid size.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "inputThreshold",
          "defaultValue": 64,
          "description": "Value threshold for input image. Pixels equal to or above this value are considered active.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "lineThreshold",
          "defaultValue": 72,
          "description": "Threshold for line detection. Values equal to or above this threshold on the Hough transform are considered to be detected lines.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "smooth",
          "defaultValue": true,
          "description": "Whether to smooth the Hough transform before line detection.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Applies the Hough transform to an image. For every input band, outputs a band where lines are detected by thresholding the Hough transform with a value of lineThreshold. The output band is named [input]_lines, where [input] is the name of the original band. The defaults provided for the parameters are intended as a starting point for use with UINT8 images. ",
      "name": "algorithms/HoughTransform",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "lastYear",
          "description": "Date range end point is the mosaic's last day.",
          "type": "DateRange"
        },
        {
          "argumentName": "reflectance",
          "description": "The MCD43A4 collection.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "quality",
          "description": "The MCD43A2 collection.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "numberOfYears",
          "description": "The number of years to draw images from.",
          "type": "Integer"
        },
        {
          "argumentName": "firstDayOfYear",
          "description": "The start of the season (1-360).",
          "type": "Integer"
        },
        {
          "argumentName": "numberOfDaysPerYear",
          "description": "The length of the season (8-368).",
          "type": "Integer"
        },
        {
          "argumentName": "numberOfQualityLevels",
          "description": "Only use pixels of lower quality level (1-5).",
          "type": "Integer"
        }
      ],
      "description": "Creates composites of MODIS MCD43A4 (\"Nadir BRDF-Adjusted Reflectance 16-Day\") 500m global mosaics, based on an algorithm by Alessandro Baccini, Mark Friedl and Damien Sulla-Menashe.",
      "hidden": true,
      "name": "algorithms/Baccini.modisComposite",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "lastYear",
          "description": "Date range end point is the mosaic's last day.",
          "type": "DateRange"
        },
        {
          "argumentName": "reflectance",
          "description": "The MCD43A4 collection.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "quality",
          "description": "The MCD43A2 collection.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "numberOfYears",
          "description": "The number of years to draw images from.",
          "type": "Integer"
        },
        {
          "argumentName": "firstDayOfYear",
          "description": "The start of the season (1-360).",
          "type": "Integer"
        },
        {
          "argumentName": "numberOfDaysPerYear",
          "description": "The length of the season (8-368).",
          "type": "Integer"
        },
        {
          "argumentName": "numberOfQualityLevels",
          "description": "Only use pixels of lower quality level (1-5).",
          "type": "Integer"
        }
      ],
      "description": "Creates composites of MODIS MCD43A4 (\"Nadir BRDF-Adjusted Reflectance 16-Day\") 500m global mosaics, based on an algorithm by Alessandro Baccini, Mark Friedl and Damien Sulla-Menashe.",
      "hidden": true,
      "name": "algorithms/BACCINI/ModisComposite",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The scene for which to compute cloud and shadow masks.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "cloud",
          "description": "Potential cloud mask image. Expected to contain 1s for cloudy pixels and masked pixels everywhere else.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "shadow",
          "description": "Potential shadow mask image. Expected to contain 1s for shadow pixels and masked pixels everywhere else.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "btemp",
          "description": "Brightness temperature image, in Celsius.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "sceneLow",
          "description": "The 0.175 percentile brightness temperature of the scene.",
          "type": "Float"
        },
        {
          "argumentName": "sceneHigh",
          "description": "The 0.825 percentile brightness temperature of the scene.",
          "type": "Float"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 50,
          "description": "The neighborhood to pad around each tile.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Runs the FMask cloud and shadow matching.  Outputs a single band ('csm'), containing the computed cloud and shadow masks.",
      "name": "algorithms/FMask.matchClouds",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "condition",
          "defaultValue": null,
          "description": "The condition that determines which result is returned. If this is not a boolean, it is interpreted as a boolean by the following rules:\n  - Numbers that are equal to 0 or a NaN are false.\n  - Empty strings, lists and dictionaries are false.\n  - Null is false.\n  - Everything else is true.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "trueCase",
          "defaultValue": null,
          "description": "The result to return if the condition is true.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "falseCase",
          "defaultValue": null,
          "description": "The result to return if the condition is false.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Selects one of its inputs based on a condition, similar to an if-then-else construct.",
      "name": "algorithms/If",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "defaultValue": null,
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "right",
          "defaultValue": null,
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Returns whether two objects are equal.",
      "name": "algorithms/IsEqual",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The object to describe.",
          "type": "Object"
        }
      ],
      "description": "Describes an object using a simple JSON-compatible structure.",
      "name": "algorithms/Describe",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The Landsat ImageCollection to limit.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "maxScenesPerPathRow",
          "defaultValue": 25,
          "description": "The max number of scenes to return per path/row.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxScenesTotal",
          "defaultValue": 100,
          "description": "The max number of scenes to return per request total.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Limits requests to an ImageCollection of Landsat scenes to return a controllable number of the best scenes for each request. This is intended for use with statistical algorithms like median composites that need a certain amount of good data to perform well, but that do not benefit substantially from additional data beyond that while becoming needlessly expensive.  The default arguments select approximately one year's worth of good data.\n\nNote that in rare circumstances, when the tile boundary aligns with a Landsat WRS cell bounadry, queries for adjacent tiles may yield conflicting results.  This is why it is important that this algorithm only be used with statistical methods that can tolerate these inconsistencies.",
      "name": "algorithms/Landsat.pathRowLimit",
      "returnType": "ImageCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The Landsat image to process.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calibrates Landsat DN to TOA reflectance and brightness temperature for Landsat and similar data. For recently-acquired scenes calibration coefficients are extracted from the image metadata; for older scenes the coefficients are derived from:\n Chander, Gyanesh, Brian L. Markham, and Dennis L. Helder. \"Summary of current radiometric calibration coefficients for Landsat MSS, TM, ETM+, and EO-1 ALI sensors.\" Remote sensing of environment 113.5 (2009): 893-903.",
      "name": "algorithms/Landsat.TOA",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input Landsat image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calibrates each band of an image by applying linear transformation with slope RADIANCE_MULT_BAND_N and y-intercept RADIANCE_ADD_BAND_N; these values are extracted from the image metadata.",
      "name": "algorithms/Landsat.calibratedRadiance",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The Landsat TOA image to process.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes a simple cloud-likelihood score in the range [0,100] using a combination of brightness, temperature, and NDSI.  This is not a robust cloud detector, and is intended mainly to compare multiple looks at the same point for *relative* cloud likelihood.",
      "name": "algorithms/Landsat.simpleCloudScore",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The asset to wrap.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Does nothing",
      "hidden": true,
      "name": "algorithms/Landsat.translateMetadata",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The raw Landsat ImageCollection to composite.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "percentile",
          "defaultValue": 50,
          "description": "The percentile value to use when compositing each band.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "cloudScoreRange",
          "defaultValue": 10,
          "description": "The size of the range of cloud scores to accept per pixel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxDepth",
          "defaultValue": 40,
          "description": "An approximate limit on the maximum number of scenes used to compute each pixel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "asFloat",
          "defaultValue": false,
          "description": "If true, output bands are in the same units as the Landsat.TOA algorithm; if false, TOA values are converted to uint8 by multiplying by 255 (reflective bands) or subtracting 100 (thermal bands) and rounding to the nearest integer.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes a Landsat TOA composite from a collection of raw Landsat scenes.  It applies standard TOA calibration and then assigns a cloud score to each pixel using the SimpleLandsatCloudScore algorithm. It selects the lowest possible range of cloud scores at each point and then computes per-band percentile values from the accepted pixels.  This algorithm also uses the LandsatPathRowLimit algorithm to select only the least-cloudy scenes in regions where more than maxDepth input scenes are available.",
      "name": "algorithms/Landsat.simpleComposite",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The raw Sentinel 1 UINT16 image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes Sentinel 1 decibel values from the stored raw UINT16 image. Also applies bicubic interpolation to the incidence angle band.",
      "hidden": true,
      "name": "algorithms/S1.dB",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Yearly time-series from which to extract breakpoints. The first band is usedto find breakpoints, and all subsequent bands are fitted using those breakpoints.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "maxSegments",
          "description": "Maximum number of segments to be fitted on the time series.",
          "type": "Integer"
        },
        {
          "argumentName": "spikeThreshold",
          "defaultValue": 0.9,
          "description": "Threshold for dampening the spikes (1.0 means no dampening).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "vertexCountOvershoot",
          "defaultValue": 3,
          "description": "The initial model can overshoot the maxSegments + 1 vertices by this amount. Later, it will be pruned down to maxSegments + 1.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "preventOneYearRecovery",
          "defaultValue": false,
          "description": "Prevent segments that represent one year recoveries.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "recoveryThreshold",
          "defaultValue": 0.25,
          "description": "If a segment has a recovery rate faster than 1/recoveryThreshold (in years), then the segment is disallowed.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "pvalThreshold",
          "defaultValue": 0.1,
          "description": "If the p-value of the fitted model exceeds this threshold, then the current model is discarded and another one is fitted using the Levenberg-Marquardt optimizer.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "bestModelProportion",
          "defaultValue": 1.25,
          "description": "Takes the model with most vertices that has a p-value that is at most this proportion away from the model with lowest p-value.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "minObservationsNeeded",
          "defaultValue": 6,
          "description": "Min observations needed to perform output fitting.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Landsat-based detection of Trends in Disturbance and Recovery: temporally segments a time-series of images by extracting the spectral trajectories of change over time. The first band of each image is used to find breakpoints, and those breakpoints are used to perform fitting on all subsequent bands. The breakpoints are returned as a 2-D matrix of 4 rows and as many columns as images. The first two rows are the original X and Y values. The third row contains the Y values fitted to the estimated segments, and the 4th row contains a 1 if the corresponding point was used as a segment vertex or 0 if not. Any additional fitted bands are appended as rows in the output. Breakpoint fitting assumes that increasing values represent disturbance and decreasing values represent recovery.\nSee: Kennedy, R.E., Yang, Z. and Cohen, W.B., 2010. Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1. LandTrendr - Temporal segmentation algorithms. Remote Sensing of Environment, 114(12), pp.2897-2910.\n",
      "name": "algorithms/TemporalSegmentation.LandTrendr",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Time series to interpolate.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "vertices",
          "description": "Vertices image. A 1D array of LandTrendr breakpoint years.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "spikeThreshold",
          "defaultValue": 0.9,
          "description": "Threshold for dampening input spikes (1.0 means no dampening).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "minObservationsNeeded",
          "defaultValue": 6,
          "description": "Min observations needed.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Interpolates a time series using a set of LandTrendr breakpoint years. For each input band in the timeSeries, outputs a new 1D array-valued band containing the input values interpolated between the breakpoint times identified by the vertices image.  See the LandTrendr Algorithm for more details.",
      "name": "algorithms/TemporalSegmentation.LandTrendrFit",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Collection from which to extract EWMA. This collection is expected to contain 1 image for each year and be sorted temporally.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "vegetationThreshold",
          "description": "Threshold for vegetation. Values below this are considered non-vegetation.",
          "type": "Float"
        },
        {
          "argumentName": "trainingStartYear",
          "description": "Start year of training period, inclusive.",
          "type": "Integer"
        },
        {
          "argumentName": "trainingEndYear",
          "description": "End year of training period, exclusive.",
          "type": "Integer"
        },
        {
          "argumentName": "harmonicCount",
          "defaultValue": 2,
          "description": "Number of harmonic function pairs (sine and cosine) used.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "xBarLimit1",
          "defaultValue": 1.5,
          "description": "Threshold for initial training xBar limit.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "xBarLimit2",
          "defaultValue": 20,
          "description": "Threshold for running xBar limit.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "lambda",
          "defaultValue": 0.3,
          "description": "The 'lambda' tuning parameter weighting new years vs the running average.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "lambdasigs",
          "defaultValue": 3,
          "description": "EWMA control bounds, in units of standard deviations.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "rounding",
          "defaultValue": true,
          "description": "Should rounding be performed for EWMA",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "persistence",
          "defaultValue": 3,
          "description": "Minimum number of observations needed to consider a change.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Exponentially Weighted Moving Average Change Detection. This algorithm computes a harmonic model for the 'training' portion of the input data and subtracts that from the original results.  The residuals are then subjected to Shewhart X-bar charts and an exponentially weighted moving average.  Disturbed pixels are indicated when the charts signal a deviation from the given control limits.\n The output is a 5 band image containining the bands:\n    ewma: a 1D array of the EWMA score for each input image. Negative values represent disturbance and positive values represent recovery.\n    harmonicCoefficients: A 1-D array of the computed harmonic coefficient pairs. The coefficients are ordered as [constant, sin0, cos0, sin1, cos1...]\n    rmse: the RMSE from the harmonic regression.\n    rSquared: r-squared value from the harmonic regression.\n    residuals: 1D array of residuals from the harmonic regression.\nSee: Brooks, E.B., Wynne, R.H., Thomas, V.A., Blinn, C.E. and Coulston, J.W., 2014. On-the-fly massively multitemporal change detection using statistical quality control charts and Landsat data. IEEE Transactions on Geoscience and Remote Sensing, 52(6), pp.3316-3332.",
      "name": "algorithms/TemporalSegmentation.Ewmacd",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Collection from which to extract VeRDET scores. This collection is expected to contain 1 image for each year, sorted temporally.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "tolerance",
          "defaultValue": 0.0001,
          "description": "convergence tolerance",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "alpha",
          "defaultValue": 0.03333333333333333,
          "description": "Regularization parameter for segmentation.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "nRuns",
          "defaultValue": 100,
          "description": "Maximum number of runs for convergence.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Vegetation Regeneration and Disturbance Estimates through Time, forest change detection algorithm. This algorithm generates a yearly clear-sky composite from satellite imagery, calculates a spectral vegetation index for each pixel in that composite, spatially segments the vegetation index image into patches, temporally divides the time series into differently sloped segments, and then labels those segments as disturbed, stable, or regenerating. Segmentation at both the spatial and temporal steps are performed using total variation regularization.\nThe output consists of a 1D array per pixel containing the slope of fitted trend lines. Negative values indicate disturbance and positive values regeneration.\nSee: Hughes, M.J., Kaylor, S.D. and Hayes, D.J., 2017.  Patch-based forest change detection from Landsat time series. Forests, 8(5), p.166.",
      "name": "algorithms/TemporalSegmentation.Verdet",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Collection from which to extract VCT disturbances, containing the bands: B3, B4, B5, B7, thermal, NDVI, DNBR and COMP.  This collection is expected to contain 1 image for each year, sorted by time.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "landCover",
          "description": "Collection from which to extract VCT masks. This collection is expected to contain 1 image for each image in the timeSeries, sorted by time.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "maxUd",
          "defaultValue": 4,
          "description": "Maximum Z-score composite value for detecting forest.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "minNdvi",
          "defaultValue": 0.45,
          "description": "Minimum NDVI value for forest.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "forThrMax",
          "defaultValue": 3,
          "description": "Maximum threshold for forest.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "nYears",
          "defaultValue": 30,
          "description": "Maximum number of years.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Vegetation Change Tracker, an automated approach for reconstructing recent forest disturbance history using dense Landsat time series stacks.\nThe output is a 2D array per pixel containing 6 rows x N years.  The output rows contain: input years, VCT landcover mask, magnitude in term of the UD composite, magnitude of distubance in B4, magnitude of distubance in NDVI, magnitude of distubance in dNBR.\nSee: Huang, C., Goward, S.N., Masek, J.G., Thomas, N., Zhu, Z. and Vogelmann, J.E., 2010. An automated approach for reconstructing recent forest disturbance history using dense Landsat time series stacks. Remote Sensing of Environment, 114(1), pp.183-198.",
      "name": "algorithms/TemporalSegmentation.VCT",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "type": "ImageCollection"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "geom",
          "type": "Geometry"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/ExtractRegion.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "geom",
          "type": "Geometry"
        },
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "tileScale",
          "type": "Float"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/ReduceRegion.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "classifierName",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifierParameters",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifierMode",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "numSubsamples",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "bootstrapSubsampling",
          "defaultValue": null,
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "bootstrapAggregator",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier",
          "defaultValue": null,
          "optional": true,
          "type": "OldClassifier"
        },
        {
          "argumentName": "bands",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "trainingImage",
          "defaultValue": null,
          "optional": true,
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "trainingBand",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "trainingRegion",
          "defaultValue": null,
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "trainingFeatures",
          "defaultValue": null,
          "optional": true,
          "type": "FeatureCollection"
        },
        {
          "argumentName": "trainingProperty",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "trainingProj",
          "defaultValue": null,
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "maxClass",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "subsampling",
          "defaultValue": 1,
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/TrainImageClassifier.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "classifierName",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifierParameters",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifierMode",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "numSubsamples",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "bootstrapSubsampling",
          "defaultValue": null,
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "bootstrapAggregator",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier",
          "defaultValue": null,
          "optional": true,
          "type": "OldClassifier"
        },
        {
          "argumentName": "propertyList",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "classProperty",
          "defaultValue": "classification",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "maxClass",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/TrainFeatureClassifier.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "region",
          "type": "Geometry"
        },
        {
          "argumentName": "factor",
          "type": "Float"
        },
        {
          "argumentName": "seed",
          "type": "Long"
        },
        {
          "argumentName": "dropNulls",
          "type": "Boolean"
        },
        {
          "argumentName": "tileScale",
          "type": "Float"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/SampleImage.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "classIndex",
          "type": "Integer"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "region",
          "type": "Geometry"
        },
        {
          "argumentName": "numPixels",
          "type": "Integer"
        },
        {
          "argumentName": "classValues",
          "type": "List<Integer>"
        },
        {
          "argumentName": "classPoints",
          "type": "List<Integer>"
        },
        {
          "argumentName": "dropNulls",
          "type": "Boolean"
        },
        {
          "argumentName": "seed",
          "type": "Long"
        },
        {
          "argumentName": "tileScale",
          "type": "Float"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/StratifiedSampleImage.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "enumerator",
          "type": "Object"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/ReduceRegions.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "collection",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "tileScale",
          "type": "Float"
        }
      ],
      "description": "Creates a Object.",
      "hidden": true,
      "name": "algorithms/ReduceRegions.ReduceRegionsEnumerator",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "enumerator",
          "type": "Object"
        },
        {
          "argumentName": "filter",
          "defaultValue": null,
          "optional": true,
          "type": "Filter"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/ReduceToVectors.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "geom",
          "type": "Geometry"
        },
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "geometryType",
          "type": "String"
        },
        {
          "argumentName": "eightConnected",
          "type": "Boolean"
        },
        {
          "argumentName": "labelProperty",
          "type": "String"
        },
        {
          "argumentName": "tileScale",
          "type": "Float"
        },
        {
          "argumentName": "geometryInNativeProjection",
          "type": "Boolean"
        },
        {
          "argumentName": "streaming",
          "type": "Boolean"
        }
      ],
      "description": "Creates a Object.",
      "hidden": true,
      "name": "algorithms/ReduceToVectors.ReduceSegmentsEnumerator",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "type": "ImageCollection"
        },
        {
          "argumentName": "bandNames",
          "type": "List<String>"
        },
        {
          "argumentName": "bandTypes",
          "type": "List<PixelType>"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/TypedImageCollection.Constructor",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "type": "Classifier"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/Classifier.TrainingContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "clusterer",
          "type": "Clusterer"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/Clusterer.TrainingContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "type": "FeatureCollection"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/WrappedFeatureCollection.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "templateImage",
          "description": "The image containing the point to align.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "searchImage",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "x",
          "type": "Integer"
        },
        {
          "argumentName": "y",
          "type": "Integer"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "maxOffset",
          "type": "Integer"
        },
        {
          "argumentName": "templateBandNames",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "searchBandNames",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "windowSize",
          "defaultValue": 15,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "expectedXOffset",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "expectedYOffset",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxResults",
          "defaultValue": 1,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxMaskedFrac",
          "defaultValue": 0,
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/PointMatcher.PointMatcherContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "type": "Classifier"
        }
      ],
      "description": "INTERNAL",
      "hidden": true,
      "name": "algorithms/Validate.AggregationContainer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "An elevation image, in meters.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates slope, aspect, and a simple hillshade from a terrain DEM.\n\nExpects an image containing either a single band of elevation, measured in meters, or if there's more than one band, one named 'elevation'. Adds output bands named 'slope' and 'aspect' measured in degrees plus an unsigned byte output band named 'hillshade' for visualization. All other bands and metadata are copied from the input image. The local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
      "name": "algorithms/Terrain.products",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "An elevation image, in meters.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates slope, aspect, and a simple hillshade from a terrain DEM.\n\nExpects an image containing either a single band of elevation, measured in meters, or if there's more than one band, one named 'elevation'. Adds output bands named 'slope' and 'aspect' measured in degrees plus an unsigned byte output band named 'hillshade' for visualization. All other bands and metadata are copied from the input image. The local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
      "name": "algorithms/Terrain",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "An elevation image, in meters.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates aspect in degrees from a terrain DEM.\n\nThe local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
      "name": "algorithms/Terrain.aspect",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "An elevation image, in meters.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "azimuth",
          "defaultValue": 270,
          "description": "The illumination azimuth in degrees from north.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "elevation",
          "defaultValue": 45,
          "description": "The illumination elevation in degrees.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Computes a simple hillshade from a DEM.",
      "name": "algorithms/Terrain.hillshade",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the shadow algorithm, in whicheach pixel should represent an elevation in meters.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "azimuth",
          "description": "Azimuth in degrees.",
          "type": "Float"
        },
        {
          "argumentName": "zenith",
          "description": "Zenith in degrees.",
          "type": "Float"
        },
        {
          "argumentName": "neighborhoodSize",
          "defaultValue": 0,
          "description": "Neighborhood size.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "hysteresis",
          "defaultValue": false,
          "description": "Use hysteresis. Less physically accurate, but may generate better images.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Creates a shadow band, with output 1 where pixels are illumunated and 0 where they are shadowed. Takes as input an elevation band, azimuth and zenith of the light source in degrees, a neighborhood size, and whether or not to apply hysteresis when a shadow appears. Currently, this algorithm only works for Mercator projections, in which light rays are parallel.",
      "name": "algorithms/Terrain.hillShadow",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the shadow algorithm, in whicheach pixel should represent an elevation in meters.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "azimuth",
          "description": "Azimuth in degrees.",
          "type": "Float"
        },
        {
          "argumentName": "zenith",
          "description": "Zenith in degrees.",
          "type": "Float"
        },
        {
          "argumentName": "neighborhoodSize",
          "defaultValue": 0,
          "description": "Neighborhood size.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "hysteresis",
          "defaultValue": false,
          "description": "Use hysteresis. Less physically accurate, but may generate better images.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Creates a shadow band, with output 1 where pixels are illumunated and 0 where they are shadowed. Takes as input an elevation band, azimuth and zenith of the light source in degrees, a neighborhood size, and whether or not to apply hysteresis when a shadow appears. Currently, this algorithm only works for Mercator projections, in which light rays are parallel.",
      "name": "algorithms/HillShadow",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to fill.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "borderValue",
          "defaultValue": null,
          "description": "The border value.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 50,
          "description": "The size of the neighborhood to compute over.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Fills local minima.  Only works on INT types.",
      "name": "algorithms/Terrain.fillMinima",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to fill.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "borderValue",
          "defaultValue": null,
          "description": "The border value.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 50,
          "description": "The size of the neighborhood to compute over.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Fills local minima.  Only works on INT types.",
      "name": "algorithms/FMask.fillMinima",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "An elevation image, in meters.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates slope in degrees from a terrain DEM.\n\nThe local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
      "name": "algorithms/Terrain.slope",
      "returnType": "Image<unknown bands>"
    },
    {
      "description": "Loads a collection of points from a FORMA CSV file.",
      "hidden": true,
      "name": "algorithms/Forma.points",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "A number (interpreted as milliseconds since 1970-01-01T00:00:00Z), or string such as '1996-01-01' or '1996-001' or '1996-01-01T08:00'.",
          "type": "Object"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Creates a Date.",
      "name": "algorithms/Date",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "delta",
          "type": "Float"
        },
        {
          "argumentName": "unit",
          "description": "One of 'year', 'month' 'week', 'day', 'hour', 'minute', or 'second'.",
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Create a new Date by adding the specified units to the given Date.",
      "name": "algorithms/Date.advance",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "start",
          "type": "Date"
        },
        {
          "argumentName": "unit",
          "description": "One of 'year', 'month' 'week', 'day', 'hour', 'minute', or 'second'.",
          "type": "String"
        }
      ],
      "description": "Returns the difference between two Dates in the specified units; the result is floating-point and based on the average length of the unit.",
      "name": "algorithms/Date.difference",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "format",
          "defaultValue": null,
          "description": "A pattern, as described at http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html; if omitted will use ISO standard date formatting.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Convert a date to string.",
      "name": "algorithms/Date.format",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "year",
          "type": "Integer"
        },
        {
          "argumentName": "month",
          "type": "Integer"
        },
        {
          "argumentName": "day",
          "type": "Integer"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a Date given year, month, day.",
      "name": "algorithms/Date.fromYMD",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "unit",
          "description": "One of 'year', 'month' (returns 1-12), 'week' (1-53), 'day' (1-31), 'hour' (0-23), 'minute' (0-59), or 'second' (0-59).",
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns the specified unit of this date.",
      "name": "algorithms/Date.get",
      "returnType": "Long"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "unit",
          "description": "One of 'year', 'month' 'week', 'day', 'hour', 'minute', or 'second'.",
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns this date's elapsed fraction of the specified unit (between 0 and 1).",
      "name": "algorithms/Date.getFraction",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "unit",
          "description": "One of 'year', 'month' 'week', 'day', 'hour', 'minute', or 'second'.",
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a DateRange covering the unit of the specified type that contains this date, e.g. Date('2013-3-15').getRange('year') returns DateRange('2013-1-1', '2014-1-1').",
      "name": "algorithms/Date.getRange",
      "returnType": "DateRange"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "unit",
          "description": "One of 'month' 'week', 'day', 'hour', 'minute', or 'second'.",
          "type": "String"
        },
        {
          "argumentName": "inUnit",
          "description": "One of 'year', 'month' 'week', 'day', 'hour', or 'minute'.",
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns the specified (0-based) unit of this date relative to a larger unit, e.g. getRelative('day', 'year') returns a value between 0 and 365.",
      "name": "algorithms/Date.getRelative",
      "returnType": "Long"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        }
      ],
      "description": "The number of milliseconds since 1970-01-01T00:00:00Z.",
      "name": "algorithms/Date.millis",
      "returnType": "Long"
    },
    {
      "arguments": [
        {
          "argumentName": "format",
          "description": "A pattern, as described at http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html.",
          "type": "String"
        },
        {
          "argumentName": "date",
          "description": "A string matching the given pattern.",
          "type": "String"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Parse a date string, given a string describing its format.",
      "name": "algorithms/Date.parse",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "numerator",
          "type": "String"
        },
        {
          "argumentName": "denominator",
          "type": "String"
        }
      ],
      "description": "Returns the ratio of the length of one unit to the length of another, e.g. unitRatio('day', 'minute') returns 1440.  Valid units are 'year', 'month' 'week', 'day', 'hour', 'minute', and 'second'.",
      "name": "algorithms/Date.unitRatio",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "date",
          "type": "Date"
        },
        {
          "argumentName": "year",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "month",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "day",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "hour",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minute",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "second",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "The time zone (e.g. 'America/Los_Angeles'); defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Create a new Date by setting one or more of the units of the given Date to a new value.  If a timeZone is given the new value(s) is interpreted in that zone.",
      "name": "algorithms/Date.update",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "start",
          "type": "Object"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "timeZone",
          "defaultValue": null,
          "description": "If start and/or end are provided as strings, the time zone in which to interpret them; defaults to UTC.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Creates a DateRange with the given start (inclusive) and end (exclusive), which may be Dates, numbers (interpreted as milliseconds since 1970-01-01T00:00:00Z), or strings (such as '1996-01-01T08:00'). If 'end' is not specified, a 1-millisecond range starting at 'start' is created.",
      "name": "algorithms/DateRange",
      "returnType": "DateRange"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        },
        {
          "argumentName": "other",
          "type": "Object"
        }
      ],
      "description": "Returns true if the given Date or DateRange is within this DateRange.",
      "name": "algorithms/DateRange.contains",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        }
      ],
      "description": "Returns the (exclusive) end of this DateRange.",
      "name": "algorithms/DateRange.end",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        },
        {
          "argumentName": "other",
          "type": "DateRange"
        }
      ],
      "description": "Returns a DateRange that contains all points in the intersection of this DateRange and another.",
      "name": "algorithms/DateRange.intersection",
      "returnType": "DateRange"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        },
        {
          "argumentName": "other",
          "type": "DateRange"
        }
      ],
      "description": "Returns true if the given DateRange has at least one point in common with this DateRange.",
      "name": "algorithms/DateRange.intersects",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        }
      ],
      "description": "Returns true if this DateRange contains no dates (i.e. start >= end).",
      "name": "algorithms/DateRange.isEmpty",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        }
      ],
      "description": "Returns true if this DateRange contains all dates.",
      "name": "algorithms/DateRange.isUnbounded",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        }
      ],
      "description": "Returns the (inclusive) start of this DateRange.",
      "name": "algorithms/DateRange.start",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "dateRange",
          "type": "DateRange"
        },
        {
          "argumentName": "other",
          "type": "DateRange"
        }
      ],
      "description": "Returns a DateRange that contains all points in the union of this DateRange and another.",
      "name": "algorithms/DateRange.union",
      "returnType": "DateRange"
    },
    {
      "description": "Returns a DateRange that includes all possible dates.",
      "name": "algorithms/DateRange.unbounded",
      "returnType": "DateRange"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The geometry of the feature.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "metadata",
          "defaultValue": {},
          "description": "The properties of the feature.",
          "optional": true,
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "geometryKey",
          "defaultValue": null,
          "description": "Obsolete; has no effect.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a Feature composed of the given geometry and metadata.",
      "name": "algorithms/Feature",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "defaultValue": null,
          "description": "The maximum error value allowed by the margin. Ignored if the unit is 'infinite'.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "unit",
          "defaultValue": "meters",
          "description": "The unit of this margin: 'meters', 'projected' or 'infinite'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns an ErrorMargin of the given type with the given value.",
      "name": "algorithms/ErrorMargin",
      "returnType": "ErrorMargin"
    },
    {
      "arguments": [
        {
          "argumentName": "startTime",
          "description": "The start time of the range, in msec since the epoch.",
          "type": "Long"
        },
        {
          "argumentName": "endTime",
          "description": "The ending time of the range, in msec since the epoch.",
          "type": "Long"
        },
        {
          "argumentName": "interval",
          "defaultValue": 1,
          "description": "The time interval between successive data ranges, in units specified by 'units'.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "units",
          "defaultValue": "days",
          "description": "The units in which 'period' is specified: currently only 'days' and 'years' are recognized.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "resetAtYearBoundaries",
          "defaultValue": false,
          "description": "If true, the intervals will align to the start of each year.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Returns a collection of objects with 'system:index', 'date_range' properties in a defined sequence at regular intervals, suitable for mapping over.",
      "hidden": true,
      "name": "algorithms/DateRangeCollection",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "start",
          "description": "The start of the date range (inclusive).",
          "type": "Date"
        },
        {
          "argumentName": "end",
          "description": "The end of the date range (exclusive).",
          "type": "Date"
        },
        {
          "argumentName": "delta",
          "defaultValue": 1,
          "description": "The time interval between successive date ranges, in units specified by 'units'. If negative, 'start' must be after 'end'.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "unit",
          "defaultValue": "day",
          "description": "The units in which 'delta' is specified:One of 'year', 'month' 'week', 'day', 'hour', 'minute', or 'second'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "resetAtYearBoundaries",
          "defaultValue": false,
          "description": "If true, the start time of the intervals will align to the start of each year (but the end times will still be delta * units).",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "format",
          "defaultValue": null,
          "description": "A pattern to use to format the system:index, as described at  http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html.If omitted will use a portion of the format 'YYYYMMddHHmmss', up to the specified 'unit' (ie: for unit='year' format will default to 'YYYY', and for unit='day', format will default to 'YYYYMMdd'.  When 'unit' is 'week' format defaultsto 'YYYYMMdd'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a collection of objects with 'system:index' and 'date_range' properties in a defined sequence at regular intervals, suitable for mapping over.",
      "hidden": true,
      "name": "algorithms/BetterDateRangeCollection",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "precision",
          "description": "The pixel precision, one of 'int', 'float', or 'double'.",
          "type": "Object"
        },
        {
          "argumentName": "minValue",
          "defaultValue": null,
          "description": "The minimum value of pixels of this type. If precision is 'float' or 'double', this can be null, signifying negative infinity.",
          "optional": true,
          "type": "Number"
        },
        {
          "argumentName": "maxValue",
          "defaultValue": null,
          "description": "The maximum value of pixels of this type. If precision is 'float' or 'double', this can be null, signifying positive infinity.",
          "optional": true,
          "type": "Number"
        },
        {
          "argumentName": "dimensions",
          "defaultValue": 0,
          "description": "The number of dimensions in which pixels of this type can vary; 0 is a scalar, 1 is a vector, 2 is a matrix, etc.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Returns a PixelType of the given precision with the given limits per element, and an optional dimensionality.",
      "name": "algorithms/PixelType",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 64-bit floating point pixel type.",
      "name": "algorithms/PixelType.double",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 32-bit floating point pixel type.",
      "name": "algorithms/PixelType.float",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 16-bit signed integer pixel type.",
      "name": "algorithms/PixelType.int16",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 32-bit signed integer pixel type.",
      "name": "algorithms/PixelType.int32",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 64-bit signed integer pixel type.",
      "name": "algorithms/PixelType.int64",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 8-bit signed integer pixel type.",
      "name": "algorithms/PixelType.int8",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 16-bit unsigned integer pixel type.",
      "name": "algorithms/PixelType.uint16",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 32-bit unsigned integer pixel type.",
      "name": "algorithms/PixelType.uint32",
      "returnType": "PixelType"
    },
    {
      "description": "Returns the 8-bit unsigned integer pixel type.",
      "name": "algorithms/PixelType.uint8",
      "returnType": "PixelType"
    },
    {
      "arguments": [
        {
          "argumentName": "paths",
          "type": "Object"
        }
      ],
      "description": "Returns a SelectorSet for a list of selector paths.",
      "name": "algorithms/SelectorSet",
      "returnType": "SelectorSet"
    },
    {
      "arguments": [
        {
          "argumentName": "map",
          "type": "Dictionary<SelectorSet>"
        }
      ],
      "description": "Returns a SelectorSet for a given set of property paths.",
      "hidden": true,
      "name": "algorithms/SelectorSet.Object",
      "returnType": "SelectorSet"
    },
    {
      "arguments": [
        {
          "argumentName": "errorMeters",
          "type": "Float"
        },
        {
          "argumentName": "region",
          "type": "Rectangle"
        }
      ],
      "description": "Returns a geometry SelectorSet for a given error margin and region.",
      "hidden": true,
      "name": "algorithms/SelectorSet.Geometry",
      "returnType": "SelectorSet"
    },
    {
      "arguments": [
        {
          "argumentName": "all",
          "type": "Boolean"
        }
      ],
      "description": "Returns a SelectorSet for either the whole object or nothing.",
      "hidden": true,
      "name": "algorithms/SelectorSet.Simple",
      "returnType": "SelectorSet"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a diamond-shaped boolean kernel.",
      "name": "algorithms/Kernel.diamond",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a square-shaped boolean kernel.",
      "name": "algorithms/Kernel.square",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "xRadius",
          "description": "The horizontal radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "yRadius",
          "description": "The vertical radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel (\"pixels\" or \"meters\"). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a rectangular-shaped kernel.",
      "name": "algorithms/Kernel.rectangle",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates an octagon-shaped boolean kernel.",
      "name": "algorithms/Kernel.octagon",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a plus-shaped boolean kernel.",
      "name": "algorithms/Kernel.plus",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a cross-shaped boolean kernel.",
      "name": "algorithms/Kernel.cross",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a circle-shaped boolean kernel.",
      "name": "algorithms/Kernel.circle",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a distance kernel based on Euclidean (straight-line) distance.",
      "name": "algorithms/Kernel.euclidean",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a distance kernel based on rectilinear (city-block) distance.",
      "name": "algorithms/Kernel.manhattan",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a distance kernel based on Chebyshev distance (greatest distance along any dimension).",
      "name": "algorithms/Kernel.chebyshev",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 3x3 Laplacian-4 edge-detection kernel.",
      "name": "algorithms/Kernel.laplacian4",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 3x3 Laplacian-8 edge-detection kernel.",
      "name": "algorithms/Kernel.laplacian8",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 3x3 Sobel edge-detection kernel.",
      "name": "algorithms/Kernel.sobel",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 2x2 Roberts edge-detection kernel.",
      "name": "algorithms/Kernel.roberts",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 3x3 Prewitt edge-detection kernel.",
      "name": "algorithms/Kernel.prewitt",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 3x3 Prewitt's Compass edge-detection kernel.",
      "name": "algorithms/Kernel.compass",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generates a 3x3 Kirsch's Compass edge-detection kernel.",
      "name": "algorithms/Kernel.kirsch",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "radius",
          "description": "The radius of the kernel to generate.",
          "type": "Float"
        },
        {
          "argumentName": "sigma",
          "defaultValue": 1,
          "description": "Standard deviation of the Gaussian function (same units as radius).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The system of measurement for the kernel ('pixels' or 'meters'). If the kernel is specified in meters, it will resize when the zoom-level is changed.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "normalize",
          "defaultValue": true,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "magnitude",
          "defaultValue": 1,
          "description": "Scale each value by this amount.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Generates a Gaussian kernel from a sampled continuous Gaussian.",
      "name": "algorithms/Kernel.gaussian",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "width",
          "defaultValue": -1,
          "description": "The width of the kernel in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "height",
          "defaultValue": -1,
          "description": "The height of the kernel in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "weights",
          "description": "The pixel values of the kernel.",
          "type": "List<List<Object>>"
        },
        {
          "argumentName": "x",
          "defaultValue": -1,
          "description": "The location of the focus, as an offset from the left.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "y",
          "defaultValue": -1,
          "description": "The location of the focus, as an offset from the top.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel values to sum to 1.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Creates a Kernel.",
      "name": "algorithms/Kernel.fixed",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "kernel",
          "description": "The kernel to be rotated.",
          "type": "Kernel"
        },
        {
          "argumentName": "rotations",
          "description": "Number of 90 deg. rotations to make (negative numbers rotate counterclockwise).",
          "type": "Integer"
        }
      ],
      "description": "Creates a Kernel.",
      "name": "algorithms/Kernel.rotate",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "kernel1",
          "description": "The first kernel.",
          "type": "Kernel"
        },
        {
          "argumentName": "kernel2",
          "description": "The second kernel.",
          "type": "Kernel"
        },
        {
          "argumentName": "normalize",
          "defaultValue": false,
          "description": "Normalize the kernel.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Adds two kernels (pointwise), after aligning their centers.",
      "name": "algorithms/Kernel.add",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "kernel",
          "description": "The kernel to have its entries inverted.",
          "type": "Kernel"
        }
      ],
      "description": "Returns a kernel which has each of its weights multiplicatively inverted. Weights with a value of zero are not inverted and remain zero.",
      "name": "algorithms/Kernel.inverse",
      "returnType": "Kernel"
    },
    {
      "arguments": [
        {
          "argumentName": "filebase",
          "description": "The base filename pattern.",
          "type": "String"
        },
        {
          "argumentName": "properties",
          "defaultValue": null,
          "description": "Metadata properties of the asset.",
          "optional": true,
          "type": "Dictionary<Object>"
        }
      ],
      "description": "Loads a FeatureCollection from a vector sstable.",
      "name": "algorithms/FeatureCollection.loadSSTable",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "id",
          "description": "The asset ID of the feature collection.",
          "type": "String"
        },
        {
          "argumentName": "version",
          "defaultValue": null,
          "description": "The version of the asset. -1 signifies the latest version.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Returns the feature collection given its ID.",
      "name": "algorithms/FeatureCollection.loadById",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "sql",
          "description": "The PLX SQL query to execute.",
          "type": "String"
        },
        {
          "argumentName": "queryEngine",
          "defaultValue": "DREMEL",
          "description": "The name of the PLX query engine to use.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "minCacheTimestampMs",
          "defaultValue": 0,
          "description": "Cached query results may be used if newer than the given time in milliseconds since the epoch (1970-01-01). If 0, the result cache may be used at the service's discretion. If -1, the result cache may not be used.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Returns a FeatureCollection containing the results of a Plx SQL query.",
      "name": "algorithms/FeatureCollection.plx",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "crossvalidationFactor",
          "defaultValue": 10,
          "description": "The cross-validation factor for pruning.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxDepth",
          "defaultValue": 10,
          "description": "Do not grow initial tree deeper than this many levels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minLeafPopulation",
          "defaultValue": 1,
          "description": "Only create nodes whose training set contains at least this many points.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minSplitPoplulation",
          "defaultValue": 1,
          "description": "Do not split unless node has at least this many points.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minSplitCost",
          "defaultValue": 1e-10,
          "description": "Do not split if training set cost less than this.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "prune",
          "defaultValue": false,
          "description": "Whether to skip pruning; i.e., only impose stopping criteria while growing the tree.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "pruneErrorTolerance",
          "defaultValue": 0.5,
          "description": "The standard error threshold to use in determining the simplest tree whose accuracy is comparable to the minimum cost-complexity tree.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "quantizationResolution",
          "defaultValue": 100,
          "description": "The quantization resolution for numerical features.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "quantizationMargin",
          "defaultValue": 0.1,
          "description": "The margin reserved by quantizer to avoid overload, as a fraction of the range observed in the training data.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "randomSeed",
          "defaultValue": 0,
          "description": "The randomization seed.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates an empty CART classifier. See:\n  \"Classification and Regression Trees,\"\n  L. Breiman, J. Friedman, R. Olshen, C. Stone\n  Chapman and Hall, 1984.",
      "name": "algorithms/Classifier.cart",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "treeString",
          "description": "The decision tree, specified in the text format generated by R and other similar tools.",
          "type": "String"
        }
      ],
      "description": "Creates a classifier that applies the given decision tree.",
      "name": "algorithms/Classifier.decisionTree",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "weight1",
          "defaultValue": 0,
          "description": "The weight for L1 regularization. Larger weight leads to heavier regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "weight2",
          "defaultValue": 0,
          "description": "The weight for L2 regularization. Larger weight leads to heavier regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "epsilon",
          "defaultValue": 9.999999747378752e-6,
          "description": "The epsilon for stopping optimization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxIterations",
          "defaultValue": 100,
          "description": "The maximum number of iterations.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "smooth",
          "defaultValue": false,
          "description": "Use a logistic loss function for the L1 regularization.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty linear regression. This regression supports L1 and L2 regularization as well as a smoothed L1 regularization using a logistic loss function. Note that the model used by this regression does not include a bias by default and a constant value should be included if a bias is required (it is suggested).  This classifier only supports REGRESSION mode.",
      "name": "algorithms/Classifier.gmoLinearRegression",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "weight1",
          "defaultValue": 0,
          "description": "The weight for L1 regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "weight2",
          "defaultValue": 9.999999747378752e-6,
          "description": "The weight for L2 regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "epsilon",
          "defaultValue": 9.999999747378752e-6,
          "description": "The epsilon for stopping optimization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "minIterations",
          "defaultValue": 0,
          "description": "The minimum number of iterations of optimizer.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxIterations",
          "defaultValue": 100,
          "description": "The maximum number of iterations of optimizer.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates an empty GMO Maximum Entropy classifier. See:\n  \"Ef\ufb01cient Large-Scale Distributed Training of Conditional Maximum Entropy Models,\"\n  G. Mann, R. McDonald, M. Mohri, N. Silberman, D. Walker.",
      "name": "algorithms/Classifier.gmoMaxEnt",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "numBins",
          "defaultValue": 10,
          "description": "The number of histogram bins per dimension.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "learningRate",
          "defaultValue": 0.1,
          "description": "The rate of learning from each example.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "epochs",
          "defaultValue": 5,
          "description": "The maximum number of epochs.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an IKPAMIR (Intersection Kernel Passive-Aggressive Method for Information Retrieval) classifier. See:\n  \"Classification using Intersection Kernel Support Vector Machinesis Efficient\"\n  S. Maji, A. Berg, J. Malik",
      "name": "algorithms/Classifier.ikpamir",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "metric",
          "defaultValue": "euclidean",
          "description": "The distance metric to use.  Options are:\n  'euclidean' - euclidean distance from the unnormalized class mean.\n  'cosine' - spectral angle from the unnormalized class mean.\n  'mahalanobis' - Mahalanobis distance from the class mean.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Creates a minimum distance classifier for the given distance metric.",
      "name": "algorithms/Classifier.minimumDistance",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "lambda",
          "defaultValue": 1e-6,
          "description": "A smoothing lambda. Used to avoid assigning zero probability to classes not seen during training, instead using lambda / (lambda * nFeatures).",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Creates an empty Fast Naive Bayes classifier.",
      "name": "algorithms/Classifier.naiveBayes",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "lambda",
          "defaultValue": 0.001,
          "description": "A smoothing lambda. Used to avoid assigning zero probability to classes not seen during training, instead using lambda / (lambda * nFeatures).",
          "optional": true,
          "type": "Float"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty Continuous Naive Bayes classifier.",
      "name": "algorithms/Classifier.continuousNaiveBayes",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "kernelType",
          "type": "String"
        },
        {
          "argumentName": "lossFunction",
          "type": "String"
        },
        {
          "argumentName": "lambda",
          "type": "Float"
        },
        {
          "argumentName": "iterations",
          "type": "Integer"
        },
        {
          "argumentName": "subsetSize",
          "type": "Integer"
        },
        {
          "argumentName": "regularizationNorm",
          "type": "Float"
        },
        {
          "argumentName": "multiGamma",
          "type": "Float"
        },
        {
          "argumentName": "useExponentiated",
          "defaultValue": null,
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "polyDegree",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "polyBias",
          "defaultValue": null,
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "rbfGamma",
          "defaultValue": null,
          "optional": true,
          "type": "Float"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates a Classifier.",
      "hidden": true,
      "name": "algorithms/Classifier.pegasos",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "rbfGamma",
          "defaultValue": 1,
          "description": "The gamma value of the Gaussian kernel.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "lossFunction",
          "defaultValue": "HingeSum",
          "description": "The loss function to use. Valid values are: 'HingeSum', 'HingeMax', 'LogSum' and 'LogMax'",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "lambda",
          "defaultValue": 0.001,
          "description": "The regularization parameter of SVM (lambda).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 0,
          "description": "The number of iterations (T). When set to 0 (default), the number of training iterations is automatically set to 5 * training data size (~5 epochs).",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "subsetSize",
          "defaultValue": 1,
          "description": "The subset size (k), i.e. the number of random samples to process on each iteration.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "regularizationNorm",
          "defaultValue": 1,
          "description": "The norm of w for regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "multiGamma",
          "defaultValue": 0.01,
          "description": "The gamma value for the loss function in multi-class classification.",
          "optional": true,
          "type": "Float"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty gaussian Pegasos classifier. See:\n  \"Pegasos (Primal Estimated sub-GrAdient SOlver for SVM)\"\n  S. Shalev-Shwartz, Y. Singer, N. Srebro, A. Cotter",
      "name": "algorithms/Classifier.pegasosGaussian",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "useExponentiated",
          "defaultValue": false,
          "description": "Whether to use exponentiated update.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "lossFunction",
          "defaultValue": "HingeSum",
          "description": "The loss function to use. Valid values are: 'HingeSum', 'HingeMax', 'LogSum' and 'LogMax'",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "lambda",
          "defaultValue": 0.001,
          "description": "The regularization parameter of SVM (lambda).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 0,
          "description": "The number of iterations (T). When set to 0 (default), the number of training iterations is automatically set to 5 * training data size (~5 epochs).",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "subsetSize",
          "defaultValue": 1,
          "description": "The subset size (k), i.e. the number of random samples to process on each iteration.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "regularizationNorm",
          "defaultValue": 1,
          "description": "The norm of w for regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "multiGamma",
          "defaultValue": 0.01,
          "description": "The gamma value for the loss function in multi-class classification.",
          "optional": true,
          "type": "Float"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty linear Pegasos classifier. See:\n  \"Pegasos (Primal Estimated sub-GrAdient SOlver for SVM)\"\n  S. Shalev-Shwartz, Y. Singer, N. Srebro, A. Cotter",
      "name": "algorithms/Classifier.pegasosLinear",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "polyDegree",
          "defaultValue": 3,
          "description": "The degree of the Polynomial kernel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "polyBias",
          "defaultValue": 1,
          "description": "The bias of the Polynomial kernel.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "lossFunction",
          "defaultValue": "HingeSum",
          "description": "The loss function to use. Valid values are: 'HingeSum', 'HingeMax', 'LogSum' and 'LogMax'",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "lambda",
          "defaultValue": 0.001,
          "description": "The regularization parameter of SVM (lambda).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 0,
          "description": "The number of iterations (T). When set to 0 (default), the number of training iterations is automatically set to 5 * training data size (~5 epochs).",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "subsetSize",
          "defaultValue": 1,
          "description": "The subset size (k), i.e. the number of random samples to process on each iteration.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "regularizationNorm",
          "defaultValue": 1,
          "description": "The norm of w for regularization.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "multiGamma",
          "defaultValue": 0.01,
          "description": "The gamma value for the loss function in multi-class classification.",
          "optional": true,
          "type": "Float"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty polynomial Pegasos classifier. See:\n  \"Pegasos (Primal Estimated sub-GrAdient SOlver for SVM)\"\n  S. Shalev-Shwartz, Y. Singer, N. Srebro, A. Cotter",
      "name": "algorithms/Classifier.pegasosPolynomial",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "epochs",
          "defaultValue": 10,
          "description": "The number of training epochs.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "averaged",
          "defaultValue": true,
          "description": "Whether to use an averaged perceptron.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty Perceptron classifier. See:\n  \"Practical Structured Learning Techniques for Natural Language Processing\"\n  H. Daume III, pp. 9-10",
      "name": "algorithms/Classifier.perceptron",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "numberOfTrees",
          "defaultValue": 1,
          "description": "The number of Rifle decision trees to create per class.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "variablesPerSplit",
          "defaultValue": 0,
          "description": "The number of variables per split. If set to 0 (default), defaults to the square root of the number of variables.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minLeafPopulation",
          "defaultValue": 1,
          "description": "The minimum size of a terminal node.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "bagFraction",
          "defaultValue": 0.5,
          "description": "The fraction of input to bag per tree.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "outOfBagMode",
          "defaultValue": false,
          "description": "Whether the classifier should run in out-of-bag mode.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "Random seed.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates an empty Rifle Serial classifier, which uses the Random Forest algorithm.",
      "name": "algorithms/Classifier.randomForest",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The coordinates of the polygon, as a list of rings. Each ring is a list of coordinate pairs (e.g.: [u1, v1, u2, v2, ..., uN, vN]).  No edge may intersect any other edge. The resulting classification will be a 1 wherever the input values are within the interior of the given polygon, that is, an odd number of polygon edges must be crossed to get outside the polygon and 0 otherwise.",
          "type": "List<List<Float>>"
        },
        {
          "argumentName": "schema",
          "defaultValue": null,
          "description": "The classifier's schema.  A list of band or property names that the classifier will operate on.  Since this classifier doesn't undergo a training step, these have to be specified manually.  Defaults to ['u', 'v'].",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Creates a classifier that tests if its inputs lie within a polygon defined by a set  of coordinates in an arbitrary 2D coordinate system.  Each input to be classified  must have 2 values (e.g.: images must have 2 bands).  The result will be 1 wherever  the input values are contained within the given polygon and 0 otherwise.",
      "name": "algorithms/Classifier.spectralRegion",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "decisionProcedure",
          "defaultValue": "Voting",
          "description": "The decision procedure to use for classification. Either 'Voting' or 'Margin'. Not used for regression.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "svmType",
          "defaultValue": "C_SVC",
          "description": "The SVM type. One of C_SVC, NU_SVC, ONE_CLASS, EPSILON_SVR or NU_SVR.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "kernelType",
          "defaultValue": "LINEAR",
          "description": "The kernel type. One of LINEAR (u\u2032\u00d7v), POLY ((\u03b3\u00d7u\u2032\u00d7v + coef\u2080)\u1d48\u1d49\u1d4d\u02b3\u1d49\u1d49), RBF (exp(-\u03b3\u00d7|u-v|\u00b2)) or SIGMOID (tanh(\u03b3\u00d7u\u2032\u00d7v + coef\u2080)).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "shrinking",
          "defaultValue": true,
          "description": "Whether to use shrinking heuristics.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "degree",
          "defaultValue": null,
          "description": "The degree of polynomial. Valid for POLY kernels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "gamma",
          "defaultValue": null,
          "description": "The gamma value in the kernel function. Defaults to the reciprocal of the number of features. Valid for POLY, RBF and SIGMOID kernels.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "coef0",
          "defaultValue": null,
          "description": "The coef\u2080 value in the kernel function. Defaults to 0. Valid for POLY and SIGMOID kernels.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "cost",
          "defaultValue": null,
          "description": "The cost (C) parameter. Defaults to 1. Only valid for C-SVC, epsilon-SVR, and nu-SVR.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "nu",
          "defaultValue": null,
          "description": "The nu parameter. Defaults to 0.5. Only valid for of nu-SVC, one-class SVM, and nu-SVR.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "terminationEpsilon",
          "defaultValue": null,
          "description": "The termination criterion tolerance (e). Defaults to 0.001. Only valid for epsilon-SVR.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "lossEpsilon",
          "defaultValue": null,
          "description": "The epsilon in the loss function (p). Defaults to 0.1. Only valid for epsilon-SVR.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "oneClass",
          "defaultValue": null,
          "description": "The class of the training data on which to train in a one-class svm.  Defaults to 0. Only valid for one-class SVM.  Possible values are 0 and 1.  The classifier output is binary (0/1) and will match this class value for the data determined to be in the class.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a Support Vector Machine classifier.",
      "name": "algorithms/Classifier.svm",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "epochs",
          "defaultValue": 5,
          "description": "The number of training epochs.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "learningRate",
          "defaultValue": 0.1,
          "description": "The learning rate.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "biasLearningRate",
          "defaultValue": 0.1,
          "description": "The learning rate for updating bias weights.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "margin",
          "defaultValue": 0.2,
          "description": "The \"wide-margin\" (or \"thick\"-separator) size. If this is nonzero, the classifier updates the weights even when it just barely got the answer right. See \"Mistake-Driven Learning in Text Categorization\" by I. Dagan, Y. Karov, and D. Roth.",
          "optional": true,
          "type": "Float"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Deprecated; will be removed eventually.",
      "description": "Creates an empty Winnow classifier. Uses an updating rule similar to the one described in:\n  \"Automatically categorizing written texts by author gender\"\n  M. Koppel, S. Argamon, A. Shimoni\n  Literary and Linguistic Computing 17(4), November 2002, pp. 401-412.",
      "name": "algorithms/Classifier.winnow",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "type": "Classifier"
        }
      ],
      "description": "Returns the classifier mode: CLASSIFICATION, REGRESSION or PROBABILITY.",
      "name": "algorithms/Classifier.mode",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "type": "Classifier"
        }
      ],
      "description": "Returns the names of the inputs used by this classifier, or null if this classifier has not had any training data added yet.",
      "name": "algorithms/Classifier.schema",
      "returnType": "List<String>"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "description": "The classifier to use.",
          "type": "Classifier"
        }
      ],
      "description": "Computes a 2D confusion matrix for a classifier based on its training data (ie: resubstitution error).  Axis 0 of the matrix correspond to the input classes, and axis 1 to the output classes.  The rows and columns  start at class 0 and increase sequentially up to the maximum class value, so some rows or columns might be empty if the input classes aren't 0-based or sequential.",
      "name": "algorithms/Classifier.confusionMatrix",
      "returnType": "ConfusionMatrix"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "description": "The classifier to describe.",
          "type": "Classifier"
        }
      ],
      "description": "Describe the results of a trained classifier.",
      "name": "algorithms/Classifier.explain",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "description": "An input classifier.",
          "type": "Classifier"
        },
        {
          "argumentName": "mode",
          "description": "The output mode. One of:\n  - CLASSIFICATION (default): The output is the class number.\n  - REGRESSION: The output is the result of standard regression.\n  - PROBABILITY: The output is the probability that the classification is correct.\nNot all classifier types support REGRESSION and PROBABILITY modes.",
          "type": "String"
        }
      ],
      "description": "Sets the output mode.",
      "name": "algorithms/Classifier.setOutputMode",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "classifier",
          "description": "An input classifier.",
          "type": "Classifier"
        },
        {
          "argumentName": "features",
          "description": "The collection to train on.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "classProperty",
          "description": "The name of the property containing the class value. Each feature must have this property, and its value must be numeric.",
          "type": "String"
        },
        {
          "argumentName": "inputProperties",
          "defaultValue": null,
          "description": "The list of property names to include as training data. Each feature must have all these properties, and their values must be numeric.  This argument is optional if the input collection contains a 'band_order' property, (as produced by Image.sample).",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "subsampling",
          "defaultValue": 1,
          "description": "An optional subsampling factor, within (0, 1].",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "subsamplingSeed",
          "defaultValue": 0,
          "description": "A randomization seed to use for subsampling.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Trains the classifier on a collection of features, using the specified numeric properties of each feature as training data. The geometry of the features is ignored.",
      "name": "algorithms/Classifier.train",
      "returnType": "Classifier"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "A square, 2D array of integers, representing the confusion matrix.",
          "type": "Object"
        },
        {
          "argumentName": "order",
          "defaultValue": null,
          "description": "The row and column size and order, for non-contiguous or non-zero based matrices.",
          "optional": true,
          "type": "List<Integer>"
        }
      ],
      "description": "Creates a confusion matrix. Axis 1 (the rows) of the matrix correspond to the actual values, and Axis 0 (the columns) to the predicted values.",
      "name": "algorithms/ConfusionMatrix",
      "returnType": "ConfusionMatrix"
    },
    {
      "arguments": [
        {
          "argumentName": "confusionMatrix",
          "type": "ConfusionMatrix"
        }
      ],
      "description": "Computes the overall accuracy of a confusion matrix defined as correct / total.",
      "name": "algorithms/ConfusionMatrix.accuracy",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "confusionMatrix",
          "type": "ConfusionMatrix"
        }
      ],
      "description": "Returns a confusion matrix as an Array.",
      "name": "algorithms/ConfusionMatrix.array",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "confusionMatrix",
          "type": "ConfusionMatrix"
        }
      ],
      "description": "Computes the consumer's accuracy (reliability) of a confusion matrix defined as (correct / total) for each row.",
      "name": "algorithms/ConfusionMatrix.consumersAccuracy",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "confusionMatrix",
          "type": "ConfusionMatrix"
        }
      ],
      "description": "Computes the Kappa statistic for the confusion matrix.",
      "name": "algorithms/ConfusionMatrix.kappa",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "confusionMatrix",
          "type": "ConfusionMatrix"
        }
      ],
      "description": "Returns the name and order of the rows and columns of the matrix.",
      "name": "algorithms/ConfusionMatrix.order",
      "returnType": "List<Integer>"
    },
    {
      "arguments": [
        {
          "argumentName": "confusionMatrix",
          "type": "ConfusionMatrix"
        }
      ],
      "description": "Computes the producer's accuracy of a confusion matrix defined as (correct / total) for each column.",
      "name": "algorithms/ConfusionMatrix.producersAccuracy",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "minClusters",
          "defaultValue": 2,
          "description": "Min number of clusters.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxClusters",
          "defaultValue": 10,
          "description": "Max number of clusters.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "restarts",
          "defaultValue": 10,
          "description": "Number of restarts.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "manual",
          "defaultValue": false,
          "description": "Manually select the number of clusters.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "init",
          "defaultValue": false,
          "description": "Set whether to initialize using the probabilistic farthest first like method of the k-means++ algorithm (rather than the standard random selection of initial cluster centers).",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "distanceFunction",
          "defaultValue": "Euclidean",
          "description": "Distance function to use.  Options are: Euclidean & Manhattan",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "maxIterations",
          "defaultValue": null,
          "description": "Maximum number of iterations for k-means.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Cascade simple k-means, selects the best k according to calinski-harabasz criterion. For more information see:\nCalinski, T. and J. Harabasz. 1974. A dendrite method for cluster analysis. Commun. Stat. 3: 1-27.",
      "name": "algorithms/Clusterer.wekaCascadeKMeans",
      "returnType": "Clusterer"
    },
    {
      "arguments": [
        {
          "argumentName": "acuity",
          "defaultValue": 1,
          "description": "Acuity (minimum standard deviation).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "cutoff",
          "defaultValue": 0.002,
          "description": "Cutoff (minimum category utility).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "seed",
          "defaultValue": 42,
          "description": "Random number seed.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Implementation of the Cobweb clustering algorithm. For more information see:\nD. Fisher (1987). Knowledge acquisition via incremental conceptual clustering. Machine Learning. 2(2):139-172. and J. H. Gennari, P. Langley, D. Fisher (1990). Models of incremental concept formation. Artificial Intelligence. 40:11-61.",
      "name": "algorithms/Clusterer.wekaCobweb",
      "returnType": "Clusterer"
    },
    {
      "arguments": [
        {
          "argumentName": "nClusters",
          "description": "Number of clusters.",
          "type": "Integer"
        },
        {
          "argumentName": "init",
          "defaultValue": 0,
          "description": "Initialization method to use.0 = random, 1 = k-means++, 2 = canopy, 3 = farthest first.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "canopies",
          "defaultValue": false,
          "description": "Use canopies to reduce the number of distance calculations.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxCandidates",
          "defaultValue": 100,
          "description": "Maximum number of candidate canopies to retain in memory at any one time when using canopy clustering. T2 distance plus, data characteristics, will determine how many candidate canopies are formed before periodic and final pruning are performed, which might result in exceess memory consumption. This setting avoids large numbers of candidate canopies consuming memory.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "periodicPruning",
          "defaultValue": 10000,
          "description": "How often to prune low density canopies when using canopy clustering.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minDensity",
          "defaultValue": 2,
          "description": "Minimum canopy density, when using canopy clustering, below which a canopy will be pruned during periodic pruning.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "t1",
          "defaultValue": -1.5,
          "description": "The T1 distance to use when using canopy clustering. A value < 0 is taken as a positive multiplier for T2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "t2",
          "defaultValue": -1,
          "description": "The T2 distance to use when using canopy clustering. Values < 0 cause a heuristic based on attribute std. deviation to be used.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "distanceFunction",
          "defaultValue": "Euclidean",
          "description": "Distance function to use.  Options are: Euclidean & Manhattan",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "maxIterations",
          "defaultValue": null,
          "description": "Maximum number of iterations.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "preserveOrder",
          "defaultValue": false,
          "description": "Preserve order of instances.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "fast",
          "defaultValue": false,
          "description": "Enables faster distance calculations, using cut-off values. Disables the calculation/output of squared errors/distances",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "seed",
          "defaultValue": 10,
          "description": "The randomization seed.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Cluster data using the k means algorithm. Can use either the Euclidean distance (default) or the Manhattan distance. If the Manhattan distance is used, then centroids are computed as the component-wise median rather than mean. For more information see:\nD. Arthur, S. Vassilvitskii: k-means++: the advantages of carefull seeding. In: Proceedings of the eighteenth annual ACM-SIAM symposium on Discrete algorithms, 1027-1035, 2007.",
      "name": "algorithms/Clusterer.wekaKMeans",
      "returnType": "Clusterer"
    },
    {
      "arguments": [
        {
          "argumentName": "numClusters",
          "defaultValue": 7,
          "description": "The number of clusters.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "learningRate",
          "defaultValue": 1,
          "description": "The learning rate for the training algorithm. (Value should be greaterthan 0 and less or equal to 1).",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "epochs",
          "defaultValue": 1000,
          "description": "Number of training epochs. (Value should be greater than or equal to 1).",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "normalizeInput",
          "defaultValue": false,
          "description": "Skip normalizing the attributes.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "A Clusterer that implements the Learning Vector Quantization algorithm. For more details, see:\nT. Kohonen, \"Learning Vector Quantization\", The Handbook of Brain Theory and Neural Networks, 2nd Edition, MIT Press, 2003, pp. 631-634.",
      "name": "algorithms/Clusterer.wekaLVQ",
      "returnType": "Clusterer"
    },
    {
      "arguments": [
        {
          "argumentName": "minClusters",
          "defaultValue": 2,
          "description": "Minimum number of clusters.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxClusters",
          "defaultValue": 8,
          "description": "Maximum number of clusters.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxIterations",
          "defaultValue": 3,
          "description": "Maximum number of overall iterations.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxKMeans",
          "defaultValue": 1000,
          "description": "The maximum number of iterations to perform in KMeans.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxForChildren",
          "defaultValue": 1000,
          "description": "The maximum number of iterations in KMeans that is performed on the child centers.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "useKD",
          "defaultValue": false,
          "description": "Use a KDTree.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "cutoffFactor",
          "defaultValue": 0,
          "description": "Takes the given percentage of the splitted centroids if none of the children win.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "distanceFunction",
          "defaultValue": "Euclidean",
          "description": "Distance function to use.  Options are: Chebyshev, Euclidean & Manhattan.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "seed",
          "defaultValue": 10,
          "description": "The randomization seed.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "X-Means is K-Means with an efficient estimation of the number of clusters. For more information see:\nDan Pelleg, Andrew W. Moore: X-means: Extending K-means with Efficient Estimation of the Number of Clusters. In: Seventeenth International Conference on Machine Learning, 727-734, 2000.",
      "name": "algorithms/Clusterer.wekaXMeans",
      "returnType": "Clusterer"
    },
    {
      "arguments": [
        {
          "argumentName": "clusterer",
          "description": "An input Clusterer.",
          "type": "Clusterer"
        },
        {
          "argumentName": "features",
          "description": "The collection to train on.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "inputProperties",
          "defaultValue": null,
          "description": "The list of property names to include as training data. Each feature must have all these properties, and their values must be numeric.  This argument is optional if the input collection contains a 'band_order' property, (as produced by Image.sample).",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "subsampling",
          "defaultValue": 1,
          "description": "An optional subsampling factor, within (0, 1].",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "subsamplingSeed",
          "defaultValue": 0,
          "description": "A randomization seed to use for subsampling.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Trains the Clusterer on a collection of features, using the specified numeric properties of each feature as training data. The geometry of the features is ignored.",
      "name": "algorithms/Clusterer.train",
      "returnType": "Clusterer"
    },
    {
      "arguments": [
        {
          "argumentName": "clusterer",
          "type": "Clusterer"
        }
      ],
      "description": "Returns the names of the inputs used by this Clusterer, or null if this Clusterer has not had any training data added yet.",
      "name": "algorithms/Clusterer.schema",
      "returnType": "List<String>"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The result is the grid cells that intersect with this region.",
          "type": "Geometry"
        },
        {
          "argumentName": "proj",
          "description": "The projection in which to construct the grid.  A feature is generated for each grid cell that intersects 'geometry', where cell corners are at integer-valued positions in the projection.  If the projection is scaled in meters, the points will be on a grid of that size at the point of true scale.",
          "type": "Projection"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "Overrides the scale of the projection, if provided.  May be required if the projection isn't already scaled.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
      "name": "algorithms/Geometry.coveringGrid",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "cellId",
          "description": "The S2 cell id.",
          "type": "Long"
        }
      ],
      "description": "Constructs the Polygon corresponding to an S2 cell id.",
      "name": "algorithms/Geometry.s2Cell",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the geometries intersect.",
      "name": "algorithms/Geometry.intersects",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "Cuts the lines of this geometry.",
          "type": "Geometry"
        },
        {
          "argumentName": "distances",
          "description": "Distances along each LineString to cut the line into separate pieces, measured in units of the given proj, or meters if proj is unspecified.",
          "type": "List<Float>"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "Projection of the result and distance measurements, or WGS84 if unspecified.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Converts LineStrings into a MultiLineString by cutting it in two at each distance along the length of the LineString.",
      "name": "algorithms/Geometry.cutLines",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the geometries are disjoint.",
      "name": "algorithms/Geometry.disjoint",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The geometry to union.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any  necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the union will be performed in this projection. Otherwise it will be performed in a spherical coordinate system.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
      "name": "algorithms/Geometry.dissolve",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff one geometry contains the other.",
      "name": "algorithms/Geometry.contains",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff one geometry is contained in the other.",
      "name": "algorithms/Geometry.containedIn",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "distance",
          "description": "The distance threshold. If a projection is specified, the distance is in units of that projected coordinate system, otherwise it is in meters.",
          "type": "Float"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the geometries are within a specified distance.",
      "name": "algorithms/Geometry.withinDistance",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the minimum distance between two geometries.",
      "name": "algorithms/Geometry.distance",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the intersection of the two geometries.",
      "name": "algorithms/Geometry.intersection",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the union of the two geometries.",
      "name": "algorithms/Geometry.union",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the result of subtracting the 'right' geometry from the 'left' geometry.",
      "name": "algorithms/Geometry.difference",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The geometry used as the left operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "right",
          "description": "The geometry used as the right operand of the operation.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the symmetric difference between two geometries.",
      "name": "algorithms/Geometry.symmetricDifference",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "Calculates the convex hull of this geometry.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of  everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
      "name": "algorithms/Geometry.convexHull",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The geometry being buffered.",
          "type": "Geometry"
        },
        {
          "argumentName": "distance",
          "description": "The distance of the buffering, which may be negative. If no projection is specified, the unit is meters. Otherwise the unit is in the coordinate system of the projection.",
          "type": "Float"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when approximating the buffering circle and performing any necessary reprojection. If unspecified, defaults to 1% of the distance.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the buffering will be performed in this projection and the distance will be interpreted as units of the coordinate system of this projection. Otherwise the distance is interpereted as meters and the buffering is performed in a spherical coordinate system.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
      "name": "algorithms/Geometry.buffer",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "Calculates the centroid of this geometry.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in this projection. Otherwise it will be in WGS84.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
      "name": "algorithms/Geometry.centroid",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "Return the bounding box of this geometry.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in this projection. Otherwise it will be in WGS84.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the bounding rectangle of the geometry.",
      "name": "algorithms/Geometry.bounds",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The geometry input.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any  necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in the units of the coordinate system of this projection. Otherwise it  will be in square meters.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the area of the geometry. Area of points and line strings is 0, and the area of multi geometries is the sum of the areas of their componenets (intersecting areas are counted multiple times).",
      "name": "algorithms/Geometry.area",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The input geometry.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in the units of the coordinate system of this projection. Otherwise it will be in meters.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
      "name": "algorithms/Geometry.length",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The input geometry.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in the units of the coordinate system of this projection. Otherwise it will be in meters.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
      "name": "algorithms/Geometry.perimeter",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The geometry to simplify.",
          "type": "Geometry"
        },
        {
          "argumentName": "maxError",
          "description": "The maximum amount of error by which the result may differ from the input.",
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in this projection. Otherwise it will be in the same projection as the input. If the error margin is in projected units, the margin will be interpreted as units of this projection",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Simplifies the geometry to within a given error margin. Note that this does not respect the error margin requested by the consumer of this algorithm, unless maxError is explicitly specified to be null.\nThis overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
      "name": "algorithms/Geometry.simplify",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The geometry to snap.",
          "type": "Geometry"
        },
        {
          "argumentName": "snapRadius",
          "description": "The max distance to move vertices during snapping. If in meters, 'proj' must not be specified, otherwise if in units, 'proj' must specified.",
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If unspecified the result will be in WGS84 with geodesic edges and the snap radius must be in meters, otherwise the snap radius must be in units and the result will be in this projection with planar edges.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Snaps the vertices of the  geometry to a regular cell grid with radius near but less than the given snap radius in meters. Snapping can reduce the number of vertices, close gaps in adjacent spatial features, and push degenerate elements to lower dimensional objects, e.g. a narrow polygon may collapse to a line. When applied to a GeometryCollection, overlap created between different elements is not removed.",
      "name": "algorithms/Geometry.snap",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "description": "The geometry to reproject.",
          "type": "Geometry"
        },
        {
          "argumentName": "proj",
          "defaultValue": {
            "crs": "EPSG:4326",
            "transform": [1, 0, 0, 0, 1, 0],
            "type": "Projection"
          },
          "description": "The target projection. Defaults to WGS84. If this has a geographic CRS, the edges of the geometry will be interpreted as geodesics. Otherwise they will be interpreted as straight lines in the projection.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum projection error.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Transforms the geometry to a specific projection.",
      "name": "algorithms/Geometry.transform",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "Returns a GeoJSON-style list of the geometry's coordinates.",
      "name": "algorithms/Geometry.coordinates",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
      "name": "algorithms/Geometry.edgesAreGeodesics",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
      "name": "algorithms/Geometry.geodesic",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
      "name": "algorithms/Geometry.geometries",
      "returnType": "List<Geometry>"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "Returns whether the geometry is unbounded.",
      "name": "algorithms/Geometry.isUnbounded",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "Returns the projection of the geometry.",
      "name": "algorithms/Geometry.projection",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "geometry",
          "type": "Geometry"
        }
      ],
      "description": "Returns the GeoJSON type of the geometry.",
      "name": "algorithms/Geometry.type",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Constructs a LineString from the given coordinates.",
      "name": "algorithms/GeometryConstructors.LineString",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Constructs a LinearRing from the given coordinates, automatically adding the first point at the end if the ring is not explicitly closed.",
      "name": "algorithms/GeometryConstructors.LinearRing",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "geometries",
          "description": "The list of geometries for the MultiGeometry.",
          "type": "List<Geometry>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Constructs a MultiGeometry from the given list of geometry elements.",
      "name": "algorithms/GeometryConstructors.MultiGeometry",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Constructs a MultiLineString from the given coordinates.",
      "name": "algorithms/GeometryConstructors.MultiLineString",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Constructs a MultiPoint from the given coordinates.",
      "name": "algorithms/GeometryConstructors.MultiPoint",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "evenOdd",
          "defaultValue": true,
          "description": "If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity. Otherwise polygons use the left-inside rule, where interiors are on the left side of the shell's edges when walking the vertices in the given order.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Constructs a MultiPolygon from the given coordinates.",
      "name": "algorithms/GeometryConstructors.MultiPolygon",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The coordinates of this Point in x,y order.",
          "type": "List<Number>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Constructs a new Point from the given x,y coordinates.",
      "name": "algorithms/GeometryConstructors.Point",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "A list of LinearRings where the first is the shell and the rest are holes, or for a simple polygon, a list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "evenOdd",
          "defaultValue": true,
          "description": "If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity. Otherwise polygons use the left-inside rule, where interiors are on the left side of the shell's edges when walking the vertices in the given order.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Constructs a Polygon from the given coordinates.",
      "name": "algorithms/GeometryConstructors.Polygon",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "coordinates",
          "description": "The low and then high corners of the Rectangle, as a list of Points or pairs of Numbers in x,y order.",
          "type": "List<Object>"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The coordinate reference system of the coordinates. The  default is the projection of the inputs, where Numbers are assumed to be EPSG:4326.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesic",
          "defaultValue": null,
          "description": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth. The default is the geodesic state of the inputs, or true if the inputs are numbers.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "evenOdd",
          "defaultValue": true,
          "description": "If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity. Otherwise polygons use the left-inside rule, where interiors are on the left side of the shell's edges when walking the vertices in the given order.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Constructs a rectangular polygon from the given corner points.",
      "name": "algorithms/GeometryConstructors.Rectangle",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "element",
          "description": "The element from which the ID is taken.",
          "type": "Element"
        }
      ],
      "description": "Returns the ID of a given element within a collection. Objects outside collections are not guaranteed to have IDs.",
      "name": "algorithms/Feature.id",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "element",
          "description": "The element from which the ID is taken.",
          "type": "Element"
        }
      ],
      "description": "Returns the ID of a given element within a collection. Objects outside collections are not guaranteed to have IDs.",
      "name": "algorithms/Image.id",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature from which the geometry is taken.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any  necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in the units of the coordinate system of this projection. Otherwise it  will be in square meters.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the area of the feature's default geometry. Area of points and line strings is 0, and the area of multi geometries is the sum of the areas of their componenets (intersecting areas are counted multiple times).",
      "name": "algorithms/Feature.area",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature the bound of which is being calculated.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in this projection. Otherwise it will be in WGS84.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature containing the bounding box of the geometry of a given feature.",
      "name": "algorithms/Feature.bounds",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature the geometry of which is being buffered.",
          "type": "Element"
        },
        {
          "argumentName": "distance",
          "description": "The distance of the buffering, which may be negative. If no projection is specified, the unit is meters. Otherwise the unit is in the coordinate system of the projection.",
          "type": "Float"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when approximating the buffering circle and performing any necessary reprojection. If unspecified, defaults to 1% of the distance.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the buffering will be performed in this projection and the distance will be interpreted as units of the coordinate system of this projection. Otherwise the distance is interpereted as meters and the buffering is performed in a spherical coordinate system.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
      "name": "algorithms/Feature.buffer",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "Calculates the centroid of this feature's default geometry.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in this projection. Otherwise it will be in WGS84.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature containing the point at the center of the highest-dimension components of the geometry of a feature. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
      "name": "algorithms/Feature.centroid",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the geometry of one feature is contained in the geometry of another.",
      "name": "algorithms/Feature.containedIn",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the geometry of one feature contains the geometry of another.",
      "name": "algorithms/Feature.contains",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature containing the geometry whole hull is being calculated.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the feature, with the geometry replaced by the convex hull of the original geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of  everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
      "name": "algorithms/Feature.convexHull",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "Cuts the lines of this feature's default geometry.",
          "type": "Element"
        },
        {
          "argumentName": "distances",
          "description": "Distances along each LineString to cut the line into separate pieces, measured in units of the given proj, or meters if proj is unspecified.",
          "type": "List<Float>"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "Projection of the result and distance measurements, or WGS84 if unspecified.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Converts LineStrings into a MultiLineString by cutting it in two at each distance along the length of the LineString.",
      "name": "algorithms/Feature.cutLines",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation. The properties of the result will be copied from this object.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation. The properties of this object are ignored.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature with the properties of the 'left' feature, and the geometry that results from subtracting the 'right' geometry from the 'left' geometry.",
      "name": "algorithms/Feature.difference",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the feature geometries are disjoint.",
      "name": "algorithms/Feature.disjoint",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature the geometry of which is being unioned.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any  necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the union will be performed in this projection. Otherwise it will be performed in a spherical coordinate system.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature containing the union of the geometry of a feature. This leaves single geometries untouched, and unions multi geometries.",
      "name": "algorithms/Feature.dissolve",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the minimum distance between the geometries of two features.",
      "name": "algorithms/Feature.distance",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation. The properties of the result will be copied from this object.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation. The properties of this object are ignored.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature containing the intersection of the geometries of two features, with the properties of the left feature.",
      "name": "algorithms/Feature.intersection",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the feature geometries intersect.",
      "name": "algorithms/Feature.intersects",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature from which the geometry is taken.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in the units of the coordinate system of this projection. Otherwise it will be in meters.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the length of the linear parts of the geometry of a given feature. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
      "name": "algorithms/Feature.length",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature from which the geometry is taken.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in the units of the coordinate system of this projection. Otherwise it will be in meters.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns the length of the perimeter of the polygonal parts of the geometry of a given feature. The perimeter of multi geometries is the sum of the perimeters of their components.",
      "name": "algorithms/Feature.perimeter",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The feature to select properties from.",
          "type": "Element"
        },
        {
          "argumentName": "propertySelectors",
          "description": "A list of names or regexes specifying the properties to select.",
          "type": "List<String>"
        },
        {
          "argumentName": "newProperties",
          "defaultValue": null,
          "description": "Optional new names for the output properties.  Must match the number of properties selected.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "retainGeometry",
          "defaultValue": true,
          "description": "When false, the result will have a NULL geometry.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Selects properties from a feature by name or RE2-compatible regex and optionally renames them.",
      "name": "algorithms/Feature.select",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature whose geometry is being simplified.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "description": "The maximum amount of error by which the result may differ from the input.",
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the result will be in this projection. Otherwise it will be in the same projection as the input. If the error margin is in projected units, the margin will be interpreted as units of this projection",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Simplifies the geometry of a feature to within a given error margin. Note that this does not respect the error margin requested by the consumer of this algorithm, unless maxError is explicitly specified to be null.\nThis overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
      "name": "algorithms/Feature.simplify",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature whose geometry is being snapped.",
          "type": "Element"
        },
        {
          "argumentName": "snapRadius",
          "description": "The max distance to move vertices during snapping. If in meters, 'proj' must not be specified, otherwise if in units, 'proj' must specified.",
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If unspecified the result will be in WGS84 with geodesic edges and the snap radius must be in meters, otherwise the snap radius must be in units and the result will be in this projection with planar edges.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Snaps the vertices of the default geometry to a regular cell grid with radius near but less than the given snap radius in meters. Snapping can reduce the number of vertices, close gaps in adjacent spatial features, and push degenerate elements to lower dimensional objects, e.g. a narrow polygon may collapse to a line. When applied to a GeometryCollection, overlap created between different elements is not removed.",
      "name": "algorithms/Feature.snap",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation. The properties of the result will be copied from this object.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation. The properties of this object are ignored.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature containing the symmetric difference between geometries of two features.",
      "name": "algorithms/Feature.symmetricDifference",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature the geometry of which is being converted.",
          "type": "Element"
        },
        {
          "argumentName": "proj",
          "defaultValue": {
            "crs": "EPSG:4326",
            "transform": [1, 0, 0, 0, 1, 0],
            "type": "Projection"
          },
          "description": "The target projection. Defaults to WGS84. If this has a geographic CRS, the edges of the geometry will be interpreted as geodesics. Otherwise they will be interpreted as straight lines in the projection.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum projection error.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Transforms the geometry of a feature to a specific projection.",
      "name": "algorithms/Feature.transform",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature the geometry of which is being converted.",
          "type": "Element"
        },
        {
          "argumentName": "proj",
          "defaultValue": {
            "crs": "EPSG:4326",
            "transform": [1, 0, 0, 0, 1, 0],
            "type": "Projection"
          },
          "description": "The target projection. Defaults to WGS84. If this has a geographic CRS, the edges of the geometry will be interpreted as geodesics. Otherwise they will be interpreted as straight lines in the projection.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum projection error.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Transforms the geometry of a feature to a specific projection.",
      "name": "algorithms/ProjectionTransform",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation. The properties of the result will be copied from this object.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation. The properties of this object are ignored.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns a feature containing the union of the geometries of two features.",
      "name": "algorithms/Feature.union",
      "returnType": "Feature"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The feature containing the geometry used as the left operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "right",
          "description": "The feature containing the geometry used as the right operand of the operation.",
          "type": "Element"
        },
        {
          "argumentName": "distance",
          "description": "The distance threshold. If a projection is specified, the distance is in units of that projected coordinate system, otherwise it is in meters.",
          "type": "Float"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to perform the operation. If not specified, the operation will be performed in a spherical coordinate system, and linear distances will be in meters on the sphere.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Returns true iff the geometries of two features are within a specified distance.",
      "name": "algorithms/Feature.withinDistance",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature on which to set the geometry.",
          "type": "Element"
        },
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The geometry to set.",
          "optional": true,
          "type": "Geometry"
        }
      ],
      "description": "Returns the feature, with the geometry replaced by the specified geometry.",
      "name": "algorithms/Feature.setGeometry",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "element",
          "type": "Element"
        }
      ],
      "description": "Returns the names of properties on this element.",
      "name": "algorithms/Element.propertyNames",
      "returnType": "List<String>"
    },
    {
      "arguments": [
        {
          "argumentName": "object",
          "description": "The object on which to set the property.",
          "type": "Element"
        },
        {
          "argumentName": "key",
          "description": "The name of the property to set.",
          "type": "String"
        },
        {
          "argumentName": "value",
          "defaultValue": null,
          "description": "The new value of the property.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Overrides a metadata property of an object.",
      "name": "algorithms/Element.set",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "object",
          "description": "The object whose properties to override.",
          "type": "Element"
        },
        {
          "argumentName": "properties",
          "description": "The property values to override.",
          "type": "Dictionary<Object>"
        }
      ],
      "description": "Overrides one or more metadata properties of an object.",
      "name": "algorithms/Element.setMulti",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "object",
          "description": "The feature to extract the property from.",
          "type": "Element"
        },
        {
          "argumentName": "property",
          "description": "The property to extract.",
          "type": "String"
        }
      ],
      "description": "Extract a property from a feature.",
      "name": "algorithms/Element.get",
      "returnType": "<any>"
    },
    {
      "arguments": [
        {
          "argumentName": "element",
          "description": "The feature to extract the property from.",
          "type": "Element"
        },
        {
          "argumentName": "properties",
          "defaultValue": null,
          "description": "The list of properties to extract.  Defaults to all non-system properties.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Extract properties from a feature as a dictionary.",
      "name": "algorithms/Element.toDictionary",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "destination",
          "defaultValue": null,
          "description": "The object whose properties to override.",
          "optional": true,
          "type": "Element"
        },
        {
          "argumentName": "source",
          "defaultValue": null,
          "description": "The object from which to copy the properties.",
          "optional": true,
          "type": "Element"
        },
        {
          "argumentName": "properties",
          "defaultValue": null,
          "description": "The properties to copy.  If omitted, all ordinary (i.e. non-system) properties are copied.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "exclude",
          "defaultValue": null,
          "description": "The list of properties to exclude when copying all properties. Must not be specified if properties is.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Copies metadata properties from one element to another.",
      "name": "algorithms/Element.copyProperties",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "destination",
          "defaultValue": null,
          "description": "The object whose properties to override.",
          "optional": true,
          "type": "Element"
        },
        {
          "argumentName": "source",
          "defaultValue": null,
          "description": "The object from which to copy the properties.",
          "optional": true,
          "type": "Element"
        },
        {
          "argumentName": "properties",
          "defaultValue": null,
          "description": "The properties to copy.  If omitted, all ordinary (i.e. non-system) properties are copied.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "exclude",
          "defaultValue": null,
          "description": "The list of properties to exclude when copying all properties. Must not be specified if properties is.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Use Element.copyProperties()",
      "description": "Copies metadata properties from one element to another.",
      "name": "algorithms/Image.copyProperties",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature from which the geometry is taken.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the geometry will be in this projection. If unspecified, the geometry will be in its default projection.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesics",
          "defaultValue": null,
          "description": "If true, the geometry will have geodesic edges. If false, it will have edges as straight lines in the specified projection. If null, the edge interpretation will be the same as the original geometry. This argument is ignored if proj is not specified.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Returns the geometry of a given feature in a given projection.",
      "name": "algorithms/Element.geometry",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature from which the geometry is taken.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the geometry will be in this projection. If unspecified, the geometry will be in its default projection.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesics",
          "defaultValue": null,
          "description": "If true, the geometry will have geodesic edges. If false, it will have edges as straight lines in the specified projection. If null, the edge interpretation will be the same as the original geometry. This argument is ignored if proj is not specified.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Use Element.geometry()",
      "description": "Returns the geometry of a given feature in a given projection.",
      "name": "algorithms/Feature.geometry",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The feature from which the geometry is taken.",
          "type": "Element"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "If specified, the geometry will be in this projection. If unspecified, the geometry will be in its default projection.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "geodesics",
          "defaultValue": null,
          "description": "If true, the geometry will have geodesic edges. If false, it will have edges as straight lines in the specified projection. If null, the edge interpretation will be the same as the original geometry. This argument is ignored if proj is not specified.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Use Element.geometry()",
      "description": "Returns the geometry of a given feature in a given projection.",
      "name": "algorithms/Image.geometry",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating a list of all the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.array",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the property value of the first object in the collection.",
      "name": "algorithms/AggregateFeatureCollection.first",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the number of non-null values of the property.",
      "name": "algorithms/AggregateFeatureCollection.count",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the minimum of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.min",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the maximum of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.max",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the mean of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.mean",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the product of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.product",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the sum of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.sum",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the sample std. deviation of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.sample_sd",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the sample variance of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.sample_var",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the total std. deviation of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.total_sd",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the total variance of the values of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.total_var",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the sum, min, max, mean, sample standard deviation, sample variance, total standard deviation and total variance of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.stats",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating a histogram of the selected property.",
      "name": "algorithms/AggregateFeatureCollection.histogram",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property",
          "description": "The property to use from each element of the collection.",
          "type": "String"
        }
      ],
      "description": "Aggregates over a given property of the objects in a collection, calculating the number of distinct values for the selected property.",
      "name": "algorithms/AggregateFeatureCollection.count_distinct",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "features",
          "description": "The features comprising the collection.",
          "type": "List<Element>"
        }
      ],
      "description": "Returns a Collection containing the specified features.",
      "name": "algorithms/Collection",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "columns",
          "description": "A list of values for each property; must have the same length as propertyNames.",
          "type": "List<List<Object>>"
        },
        {
          "argumentName": "propertyNames",
          "description": "The property names for features in this collection.",
          "type": "List<String>"
        },
        {
          "argumentName": "propertyTypes",
          "defaultValue": null,
          "description": "The type of each property; if present, must have the same length as propertyNames.",
          "optional": true,
          "type": "List<Object>"
        }
      ],
      "description": "Creates a FeatureCollection, given a list of values for each property.",
      "hidden": true,
      "name": "algorithms/Collection.fromColumns",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection whose geometries will be extracted.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 0
          },
          "description": "An error margin to use when merging geometries.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Extracts and merges the geometries of a collection. Requires that all the geometries in the collection share the projection and edge interpretation.",
      "name": "algorithms/Collection.geometry",
      "returnType": "Geometry"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to filter.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "filter",
          "description": "The filter to apply.",
          "type": "Filter"
        }
      ],
      "description": "Applies a filter to a given collection.",
      "name": "algorithms/Collection.filter",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to limit or order.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "limit",
          "defaultValue": null,
          "description": "The maximum number of items in the output collection. null is used to represent no limit.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "key",
          "defaultValue": null,
          "description": "The property on which the collection is sorted.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "ascending",
          "defaultValue": true,
          "description": "Whether the sorting is ascending rather than descending.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Applies an ordering and limit to a given collection.",
      "name": "algorithms/Collection.limit",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "tableId",
          "description": "The ID of the table to load. Either an asset ID or a Fusion Table DocID prefixed with 'ft:'.",
          "type": "Object"
        },
        {
          "argumentName": "geometryColumn",
          "defaultValue": null,
          "description": "The name of the column to use as the main feature geometry. Not used if tableId is an asset ID.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "version",
          "defaultValue": null,
          "description": "The version of the asset. -1 signifies the latest version. Ignored unless tableId is an asset ID.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Returns a Collection of features from a specified table.",
      "name": "algorithms/Collection.loadTable",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection1",
          "description": "The first collection to merge.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "collection2",
          "description": "The second collection to merge.",
          "type": "FeatureCollection"
        }
      ],
      "description": "Merges two collections into one. The result has all the elements that were in either collection.",
      "name": "algorithms/Collection.merge",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to aggregate over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply.",
          "type": "Reducer"
        },
        {
          "argumentName": "selectors",
          "description": "A selector for each input of the reducer.",
          "type": "List<String>"
        },
        {
          "argumentName": "weightSelectors",
          "defaultValue": null,
          "description": "A selector for each weighted input of the reducer.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Apply a reducer to each element of a collection, using the given selectors to determine the inputs.\nReturns a dictionary of results, keyed with the output names.",
      "name": "algorithms/Collection.reduceColumns",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to be modified.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "lookupIn",
          "description": "The input mapping values. Restricted to strings and integers.",
          "type": "List<Object>"
        },
        {
          "argumentName": "lookupOut",
          "description": "The output mapping values. Must be the same size as lookupIn.",
          "type": "List<Integer>"
        },
        {
          "argumentName": "columnName",
          "description": "The name of the property to remap.",
          "type": "String"
        }
      ],
      "description": "Remaps the value of a specific property in a collection. Takes two parallel lists and maps values found in one to values in the other. Any element with a value that is not specified in the first list is dropped from the output collection.",
      "name": "algorithms/Collection.remap",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to count.",
          "type": "FeatureCollection"
        }
      ],
      "description": "Returns the number of elements in the collection.",
      "name": "algorithms/Collection.size",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to cache.",
          "type": "FeatureCollection"
        }
      ],
      "description": "Caches the given collection.",
      "hidden": true,
      "name": "algorithms/Collection.cache",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "features",
          "description": "Feature collection from which to get features used to compute pixel distances.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "searchRadius",
          "defaultValue": 100000,
          "description": "Maximum distance in meters from each pixel to look for edges. Pixels will be masked unless there are edges within this distance.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxError",
          "defaultValue": 100,
          "description": "Maximum reprojection error in meters, only used if the input polylines require reprojection. If '0' is provided, then this operation will fail if projection is required.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Produces a DOUBLE image where each pixel is the distance in meters from the pixel center to the nearest part of any Point or LineString features in the collection. Pixels that are not within 'searchRadius' meters of a geometry will be masked out.\nDistances are computed on a sphere, so there is a small error proportional to the latitude difference between each pixel and the nearest geometry.",
      "name": "algorithms/Collection.distance",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection from which objects will be selected.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "selectors",
          "description": "Which parts of the object to use for comparisons.",
          "type": "SelectorSet"
        }
      ],
      "description": "Removes duplicates from a collection. Note that duplicates are determined using a strong hash over the serialized form of the selected properties.",
      "name": "algorithms/Collection.distinct",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to draw.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "color",
          "description": "A hex string in the format RRGGBB specifying the color to use for drawing the features.",
          "type": "String"
        },
        {
          "argumentName": "pointRadius",
          "defaultValue": 3,
          "description": "The radius in pixels of the point markers.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "strokeWidth",
          "defaultValue": 2,
          "description": "The width in pixels of lines and polygon borders.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Paints a vector collection for visualization. Not intended for use as input to other algorithms.",
      "name": "algorithms/Collection.draw",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "actual",
          "description": "The name of the property containing the actual value.",
          "type": "String"
        },
        {
          "argumentName": "predicted",
          "description": "The name of the property containing the predicted value.",
          "type": "String"
        },
        {
          "argumentName": "order",
          "defaultValue": null,
          "description": "A list of the expected values.  If this argument is not specified, the values are assumed to be contiguous and span the range 0 to maxValue. If specified, only values matching this list are used, and the matrix will have dimensions and order matching the this list.",
          "optional": true,
          "type": "List<Integer>"
        }
      ],
      "description": "Computes a 2D error matrix for a collection by comparing two columns of a collection: one containing the actual values, and one containing predicted values.The values are expected to be small contiguous integers, starting from 0. Axis 0 (the rows) of the matrix correspond to the actual values, and Axis 1 (the columns) to the predicted values.",
      "name": "algorithms/Collection.errorMatrix",
      "returnType": "ConfusionMatrix"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection from which to select the first entry.",
          "type": "FeatureCollection"
        }
      ],
      "description": "Returns the first entry from a given collection.",
      "name": "algorithms/Collection.first",
      "returnType": "Element"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection of collections.",
          "type": "FeatureCollection"
        }
      ],
      "description": "Flattens collections of collections.",
      "name": "algorithms/Collection.flatten",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to which the algorithm is applied.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "function",
          "description": "The function to apply to each element.  Must take two arguments: an element of the collection and the value from the previous iteration.",
          "type": "Algorithm"
        },
        {
          "argumentName": "first",
          "defaultValue": null,
          "description": "The initial state.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Applies a user-supplied function to each element of a collection. The user-supplied function is given two arguments: the current element, and the value returned by the previous call to iterate() or the first argument, for the first iteration.  The result is the value returned by the final call to the user-supplied function.",
      "name": "algorithms/Collection.iterate",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection of the elements to which the algorithm is applied.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "baseAlgorithm",
          "description": "The algorithm being applied to each element.",
          "type": "Algorithm"
        },
        {
          "argumentName": "dropNulls",
          "defaultValue": false,
          "description": "If true, the mapped algorithm is allowed to return nulls, and the elements for which it returns nulls will be dropped.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Maps an algorithm over a collection.",
      "name": "algorithms/Collection.map",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection to which to add a random column.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "columnName",
          "defaultValue": "random",
          "description": "The name of the column to add.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "A seed used when generating the random numbers.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Adds a column of deterministic pseudorandom numbers to a collection.  The numbers are double-precision floating point numbers in the range 0.0 (inclusive) to 1.0 (exclusive).",
      "name": "algorithms/Collection.randomColumn",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "Feature collection to intersect with each output pixel.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "properties",
          "description": "Properties to select from each feature and pass into the reducer.",
          "type": "List<String>"
        },
        {
          "argumentName": "reducer",
          "description": "A Reducer to combine the properties of each intersecting feature into a final result to store in the pixel.",
          "type": "Reducer"
        }
      ],
      "description": "Creates an image from a feature collection by applying a reducer over the selected properties of all the features that intersect each pixel.",
      "name": "algorithms/Collection.reduceToImage",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to draw.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "color",
          "defaultValue": "black",
          "description": "A default color (CSS 3.0 color value e.g. 'FF0000' or 'red') to use for drawing the features.  Supports opacity (e.g.: 'FF000088' for 50% transparent red).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "pointSize",
          "defaultValue": 3,
          "description": "The default size in pixels of the point markers.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "pointShape",
          "defaultValue": "circle",
          "description": "The default shape of the marker to draw at each point location.  One of: circle, square, diamond, cross, plus, pentagram, hexagram, triangle, triangle_up triangle_down, triangle_left, triangle_right, pentagon, hexagon, star5, star6. This argument also supports the following Matlab marker abbreviations: o, s, d, x, +, p, h, ^, v, <, >.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "width",
          "defaultValue": 2,
          "description": "The default line width for lines and outlines for polygons and point shapes.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "fillColor",
          "defaultValue": null,
          "description": "The color for filling polygons and point shapes.  Defaults to 'color' at 0.66 opacity.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "styleProperty",
          "defaultValue": null,
          "description": "A per-feature property expected to contain a dictionary. Values in the dictionary override any default values for that feature.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 5,
          "description": "If styleProperty is used and any feature has a pointSize or width larger than the defaults, tiling artifacts can occur. Specifies the maximum neighborhood (pointSize + width) needed for any feature.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Draw a vector collection for visualization using a simple style language.",
      "name": "algorithms/Collection.style",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection to fetch.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "count",
          "description": "The maximum number of elements to fetch.",
          "type": "Integer"
        },
        {
          "argumentName": "offset",
          "defaultValue": 0,
          "description": "The number of elements to discard from the start. If set, (offset + count) elements will be fetched and the first offset elements will be discarded.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Returns the elements of a collection as a list.",
      "name": "algorithms/Collection.toList",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection being merged.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "maxError",
          "defaultValue": null,
          "description": "The maximum error allowed when performing any necessary reprojections. If not specified, defaults to the error margin requested from the output.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Merges all geometries in a given collection into one and returns a collection containing a single feature with only an ID of 'union_result' and a geometry.",
      "name": "algorithms/Collection.union",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "features",
          "description": "The collection of features to classify. Each feature must contain all the properties in the classifier's schema.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "classifier",
          "description": "The classifier to use.",
          "type": "Object"
        },
        {
          "argumentName": "outputName",
          "defaultValue": "classification",
          "description": "The name of the output property to be added.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Classifies each feature in a collection.",
      "name": "algorithms/FeatureCollection.classify",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "features",
          "description": "The collection of features to cluster. Each feature must contain all the properties in the clusterer's schema.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "clusterer",
          "description": "The clusterer to use.",
          "type": "Clusterer"
        },
        {
          "argumentName": "outputName",
          "defaultValue": "cluster",
          "description": "The name of the output property to be added.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Clusters each feature in a collection, adding a new column to each feature containing the cluster number to which it has been assigned.",
      "name": "algorithms/FeatureCollection.cluster",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "Feature collection to use as source data for the estimation.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "range",
          "description": "Size of the interpolation window (in meters).",
          "type": "Float"
        },
        {
          "argumentName": "propertyName",
          "description": "Name of the numeric property to be estimated.",
          "type": "String"
        },
        {
          "argumentName": "mean",
          "description": "Global expected mean.",
          "type": "Float"
        },
        {
          "argumentName": "stdDev",
          "description": "Global standard deviation.",
          "type": "Float"
        },
        {
          "argumentName": "gamma",
          "defaultValue": 1,
          "description": "Determines how quickly the estimates tend towards the global mean.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "reducer",
          "defaultValue": null,
          "description": "Reducer used to collapse the 'propertyName' value of overlapping points into a single value.",
          "optional": true,
          "type": "Reducer"
        }
      ],
      "description": "Returns an inverse-distance weighted estimate of the value at each pixel.",
      "name": "algorithms/FeatureCollection.inverseDistance",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "Feature collection to use as source data for the estimation.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "propertyName",
          "description": "Property to be estimated (must be numeric).",
          "type": "String"
        },
        {
          "argumentName": "shape",
          "description": "Semivariogram shape (one of {exponential, gaussian, spherical}).",
          "type": "String"
        },
        {
          "argumentName": "range",
          "description": "Semivariogram range.",
          "type": "Float"
        },
        {
          "argumentName": "sill",
          "description": "Semivariogram sill.",
          "type": "Float"
        },
        {
          "argumentName": "nugget",
          "description": "Semivariogram nugget.",
          "type": "Float"
        },
        {
          "argumentName": "maxDistance",
          "defaultValue": null,
          "description": "Radius which determines which features are included in each pixel's computation. Defaults to the semivariogram's range.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "reducer",
          "defaultValue": null,
          "description": "Reducer used to collapse the 'propertyName' value of overlapping points into a single value.",
          "optional": true,
          "type": "Reducer"
        }
      ],
      "description": "Returns the results of sampling a Kriging estimator at each pixel.",
      "name": "algorithms/FeatureCollection.kriging",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "region",
          "description": "The region to generate points for.",
          "type": "Geometry"
        },
        {
          "argumentName": "points",
          "defaultValue": 1000,
          "description": "The number of points to generate.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "A seed for the random number generator.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 100
          },
          "description": "The maximum amount of error tolerated when performing any necessary reprojection.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Generates points that are uniformly random on the sphere, and within the given region.",
      "name": "algorithms/FeatureCollection.randomPoints",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "A collection of classified features to use for supervised classification.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "property_list",
          "defaultValue": null,
          "description": "The list of properties in each element of training_features to include in the training input.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "class_property",
          "defaultValue": "classification",
          "description": "The name of the property in each element of training_features containing its class number.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier_name",
          "defaultValue": "FastNaiveBayes",
          "description": "The name of the Abe classifier to use. Currently supported values are FastNaiveBayes, GmoMaxEnt, Winnow, MultiClassPerceptron, Pegasos, Cart, RifleSerialClassifier, IKPamir, VotingSvm, MarginSvm, ContinuousNaiveBayes. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier_parameters",
          "defaultValue": "",
          "description": "The Abe classifier parameters. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier_mode",
          "defaultValue": "classification",
          "description": "The classifier mode. Accepted values are 'classification', 'regression' and 'probability'. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "num_subsamples",
          "defaultValue": 1,
          "description": "The number of subsamples to use for cross-validation or bagging. If 1, no cross-validation or bagging is performed. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "bootstrap_subsampling",
          "defaultValue": null,
          "description": "The bootstrap subsampling factor. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "bootstrap_aggregator",
          "defaultValue": null,
          "description": "The bootstrap aggregator. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier",
          "defaultValue": null,
          "description": "A pre-built classifier to use.",
          "optional": true,
          "type": "OldClassifier"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Use Classifier.train().",
      "description": "Trains a classifier from features in a collection, using the specified numeric properties of each feature as training data.\n\nThe input data is specified with the collection  and property_list arguments.  The input is generated by extracting the specified properties from each feature in the collection. The list of properties should not include the class_property, as it is handled separately.  The classifier will expect future inputs to be classified to be in the same order.\n\nTo use the classifier library, specify the classifier_name, classifier_parameters, and classifier_mode arguments.\n\nTo enable cross-validation or bagging, set the num_subsamples argument. When bagging, set the bootstrap_subsampling factor and the bootstrap_aggregator as well.\n\nTo use a custom classifier, specify it using the classifier parameter.",
      "hidden": true,
      "name": "algorithms/FeatureCollection.trainClassifier",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand, a date range, contains the right operand, a date.",
      "name": "algorithms/Filter.dateRangeContains",
      "returnType": "Filter"
    },
    {
      "description": "Simple filter HAS_GEOMETRY.",
      "hidden": true,
      "name": "algorithms/Filter.hasGeometry",
      "returnType": "Filter"
    },
    {
      "description": "Simple filter ALWAYS.",
      "hidden": true,
      "name": "algorithms/Filter.always",
      "returnType": "Filter"
    },
    {
      "description": "Simple filter NEVER.",
      "hidden": true,
      "name": "algorithms/Filter.never",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "properties",
          "type": "List<String>"
        }
      ],
      "description": "Creates a Filter.",
      "name": "algorithms/Filter.notNull",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "filters",
          "description": "The filters to conjunct.",
          "type": "List<Filter>"
        }
      ],
      "description": "Returns a filter that passes if each of the component filters pass.",
      "name": "algorithms/Filter.and",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "filters",
          "description": "The filters to disjunct.",
          "type": "List<Filter>"
        }
      ],
      "description": "Returns a filter that passes if any of the component filters pass.",
      "name": "algorithms/Filter.or",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "filter",
          "description": "The filter to negate.",
          "type": "Filter"
        }
      ],
      "description": "Returns a filter that passes if the provided filter fails.",
      "name": "algorithms/Filter.not",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the two operands are equals.",
      "name": "algorithms/Filter.eq",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the two operands are equals.",
      "name": "algorithms/Filter.equals",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the two operands are equals.",
      "name": "algorithms/Filter.neq",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the two operands are equals.",
      "name": "algorithms/Filter.notEquals",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand is less than the right operand.",
      "name": "algorithms/Filter.lt",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand is less than the right operand.",
      "name": "algorithms/Filter.lessThan",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the left operand is less than the right operand.",
      "name": "algorithms/Filter.gte",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the left operand is less than the right operand.",
      "name": "algorithms/Filter.greaterThanOrEquals",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand is greater than the right operand.",
      "name": "algorithms/Filter.gt",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand is greater than the right operand.",
      "name": "algorithms/Filter.greaterThan",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the left operand is greater than the right operand.",
      "name": "algorithms/Filter.lte",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the left operand is greater than the right operand.",
      "name": "algorithms/Filter.lessThanOrEquals",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand, a string, starts with the right operand, also a string.",
      "name": "algorithms/Filter.stringStartsWith",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand, a string, ends with the right operand, also a string.",
      "name": "algorithms/Filter.stringEndsWith",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand, a string, contains the right operand, also a string.",
      "name": "algorithms/Filter.stringContains",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand, a list, contains the right operand.",
      "name": "algorithms/Filter.inList",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left operand, a list, contains the right operand.",
      "name": "algorithms/Filter.listContains",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "start",
          "description": "The start of the desired day range, inclusive.",
          "type": "Integer"
        },
        {
          "argumentName": "end",
          "description": "The end of the desired day range, exclusive.",
          "type": "Integer"
        }
      ],
      "description": "Returns a filter that passes if the object's timestamp falls within the given day-of-year range.",
      "name": "algorithms/Filter.dayOfYear",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "start",
          "description": "The start of the desired calendar field, inclusive.",
          "type": "Integer"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "description": "The end of the desired calendar field, inclusive. Defaults to the same value as start.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "field",
          "defaultValue": "day_of_year",
          "description": "The calendar field to filter over. Options are: 'year', 'month', 'hour', 'minute', 'day_of_year', 'day_of_month', and 'day_of_week'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a filter that passes if the object's timestamp falls within the given range of a calendar field.  The month, day_of_year, day_of_month, and day_of_week are 1-based.  Times are assumed to be in UTC.  Weeks are assumed to begin on Monday as day 1.   If end < start then this tests for value >= start OR value <= end, to allow for wrapping.",
      "name": "algorithms/Filter.calendarRange",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "field",
          "description": "A selector for the property being tested.",
          "type": "String"
        },
        {
          "argumentName": "minValue",
          "description": "The lower bound of the range.",
          "type": "Object"
        },
        {
          "argumentName": "maxValue",
          "description": "The upper bound of the range.",
          "type": "Object"
        }
      ],
      "description": "Returns a filter that passes if the value of the selected field is in the specified range (inclusive).",
      "name": "algorithms/Filter.rangeContains",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 0.1
          },
          "description": "The maximum reprojection error allowed during filter application.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left geometry contains the right geometry (empty geometries are not contained in anything).",
      "name": "algorithms/Filter.contains",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 0.1
          },
          "description": "The maximum reprojection error allowed during filter application.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the right geometry contains the left geometry (empty geometries are not contained in anything).",
      "name": "algorithms/Filter.isContained",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "difference",
          "description": "The maximum difference for which the filter will return true.",
          "type": "Float"
        },
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left and right operands, both numbers, are within a given maximum difference. If used as a join condition, this numeric difference is used as a join measure.",
      "name": "algorithms/Filter.maxDifference",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 0.1
          },
          "description": "The maximum reprojection error allowed during filter application.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left geometry intersects the right geometry.",
      "name": "algorithms/Filter.intersects",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 0.1
          },
          "description": "The maximum reprojection error allowed during filter application.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Creates a unary or binary filter that passes unless the left geometry intersects the right geometry.",
      "name": "algorithms/Filter.disjoint",
      "returnType": "Filter"
    },
    {
      "arguments": [
        {
          "argumentName": "distance",
          "description": "The maximum distance for which the filter will return true.",
          "type": "Float"
        },
        {
          "argumentName": "leftField",
          "defaultValue": null,
          "description": "A selector for the left operand. Should not be specified if leftValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "rightValue",
          "defaultValue": null,
          "description": "The value of the right operand. Should not be specified if rightField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "rightField",
          "defaultValue": null,
          "description": "A selector for the right operand. Should not be specified if rightValue is specified.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "leftValue",
          "defaultValue": null,
          "description": "The value of the left operand. Should not be specified if leftField is specified.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "maxError",
          "defaultValue": {
            "type": "ErrorMargin",
            "unit": "meters",
            "value": 0.1
          },
          "description": "The maximum reprojection error allowed during filter application.",
          "optional": true,
          "type": "ErrorMargin"
        }
      ],
      "description": "Creates a unary or binary filter that passes if the left geometry is within a specified distance of the right geometry. If used as a join condition, this distance is used as a join measure.",
      "name": "algorithms/Filter.withinDistance",
      "returnType": "Filter"
    },
    {
      "description": "Returns a join that produces the elements of the primary collection that match any element of the secondary collection. No properties are added to the results.",
      "name": "algorithms/Join.simple",
      "returnType": "Join"
    },
    {
      "description": "Returns a join that produces the elements of the primary collection that match no elements of the secondary collection. No properties are added to the results.",
      "name": "algorithms/Join.inverted",
      "returnType": "Join"
    },
    {
      "arguments": [
        {
          "argumentName": "matchKey",
          "description": "The property name used to save the match.",
          "type": "String"
        },
        {
          "argumentName": "ordering",
          "defaultValue": null,
          "description": "The property on which to sort the matches before selecting the first.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "ascending",
          "defaultValue": true,
          "description": "Whether the ordering is ascending.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "measureKey",
          "defaultValue": null,
          "description": "An optional property name used to save the measure of the join condition on the match.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a join that pairs each element from the first collection with a matching element from the second collection. The first match is added to the result as an additional property.",
      "name": "algorithms/Join.saveFirst",
      "returnType": "Join"
    },
    {
      "arguments": [
        {
          "argumentName": "matchKey",
          "description": "The key used to save the match.",
          "type": "String"
        },
        {
          "argumentName": "measureKey",
          "description": "The key used to save the measure of the join condition on the match.",
          "type": "String"
        }
      ],
      "description": "Returns a join that pairs each element from the first collection with a matching element from the second collection. The match with the best join measure is added to each result as an additional property. Join measures are produced when withinDistance or maxDifference filters are used as the join condition.",
      "name": "algorithms/Join.saveBest",
      "returnType": "Join"
    },
    {
      "arguments": [
        {
          "argumentName": "matchesKey",
          "description": "The property name used to save the matches list.",
          "type": "String"
        },
        {
          "argumentName": "ordering",
          "defaultValue": null,
          "description": "The property on which to sort the matches list.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "ascending",
          "defaultValue": true,
          "description": "Whether the ordering is ascending.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "measureKey",
          "defaultValue": null,
          "description": "An optional property name used to save the measure of the join condition on each match.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a join that pairs each element from the first collection with a group of matching elements from the second collection. The list of matches is added to each result as an additional property. If measureKey is specified, each match has the value of its join measure attached. Join measures are produced when withinDistance or maxDifference filters are used as the join condition.",
      "name": "algorithms/Join.saveAll",
      "returnType": "Join"
    },
    {
      "arguments": [
        {
          "argumentName": "primaryKey",
          "defaultValue": "primary",
          "description": "The property name used to save the primary match.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "secondaryKey",
          "defaultValue": "secondary",
          "description": "The property name used to save the secondary match.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "measureKey",
          "defaultValue": null,
          "description": "An optional property name used to save the measure of the join condition.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a join that pairs elements from the primary collection with matching elements from the secondary collection. Each result has a 'primary' property that contains the element from the primary collection, and a 'secondary' property containing the matching element from the secondary collection. If measureKey is specified, the join measure is also attached to the object as a property.",
      "name": "algorithms/Join.inner",
      "returnType": "Join"
    },
    {
      "arguments": [
        {
          "argumentName": "join",
          "description": "The join to apply; determines how the the results are constructed.",
          "type": "Join"
        },
        {
          "argumentName": "primary",
          "description": "The primary collection.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "secondary",
          "description": "The secondary collection.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "condition",
          "description": "The join condition used to select the matches from the two collections.",
          "type": "Filter"
        }
      ],
      "description": "Joins two collections.",
      "name": "algorithms/Join.apply",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the operations.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "radius",
          "defaultValue": 1.5,
          "description": "The radius of the kernel to use.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "kernelType",
          "defaultValue": "circle",
          "description": "The type of kernel to use. Options include: 'circle', 'square', 'cross', 'plus', octagon' and 'diamond'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "If a kernel is not specified, this determines whether the kernel is in meters or pixels.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 1,
          "description": "The number of times to apply the given kernel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "A custom kernel. If used, kernelType and radius are ignored.",
          "optional": true,
          "type": "Kernel"
        }
      ],
      "description": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
      "name": "algorithms/Window.min",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the operations.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "radius",
          "defaultValue": 1.5,
          "description": "The radius of the kernel to use.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "kernelType",
          "defaultValue": "circle",
          "description": "The type of kernel to use. Options include: 'circle', 'square', 'cross', 'plus', octagon' and 'diamond'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "If a kernel is not specified, this determines whether the kernel is in meters or pixels.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 1,
          "description": "The number of times to apply the given kernel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "A custom kernel. If used, kernelType and radius are ignored.",
          "optional": true,
          "type": "Kernel"
        }
      ],
      "description": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
      "name": "algorithms/Window.max",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the operations.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "radius",
          "defaultValue": 1.5,
          "description": "The radius of the kernel to use.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "kernelType",
          "defaultValue": "circle",
          "description": "The type of kernel to use. Options include: 'circle', 'square', 'cross', 'plus', octagon' and 'diamond'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "If a kernel is not specified, this determines whether the kernel is in meters or pixels.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 1,
          "description": "The number of times to apply the given kernel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "A custom kernel. If used, kernelType and radius are ignored.",
          "optional": true,
          "type": "Kernel"
        }
      ],
      "description": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
      "name": "algorithms/Window.median",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the operations.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "radius",
          "defaultValue": 1.5,
          "description": "The radius of the kernel to use.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "kernelType",
          "defaultValue": "circle",
          "description": "The type of kernel to use. Options include: 'circle', 'square', 'cross', 'plus', octagon' and 'diamond'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "If a kernel is not specified, this determines whether the kernel is in meters or pixels.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 1,
          "description": "The number of times to apply the given kernel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "A custom kernel. If used, kernelType and radius are ignored.",
          "optional": true,
          "type": "Kernel"
        }
      ],
      "description": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
      "name": "algorithms/Window.mode",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which to apply the operations.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "radius",
          "defaultValue": 1.5,
          "description": "The radius of the kernel to use.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "kernelType",
          "defaultValue": "circle",
          "description": "The type of kernel to use. Options include: 'circle', 'square', 'cross', 'plus', octagon' and 'diamond'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "If a kernel is not specified, this determines whether the kernel is in meters or pixels.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "iterations",
          "defaultValue": 1,
          "description": "The number of times to apply the given kernel.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "A custom kernel. If used, kernelType and radius are ignored.",
          "optional": true,
          "type": "Kernel"
        }
      ],
      "description": "Applies a morphological mean filter to each band of an image using a named or custom kernel.",
      "name": "algorithms/Window.mean",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Adds the first value to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.add",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Subtracts the second value from the first for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.subtract",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Multiplies the first value by the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.multiply",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Divides the first value by the second, returning 0 for division by 0 for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.divide",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Selects the maximum of the first and second values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.max",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Selects the minimum of the first and second values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.min",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Selects the value of the first value for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.first",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Selects the first value if it is non-zero, and the second value otherwise for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.firstNonZero",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Selects the first value if it is non-zero, and the second value otherwise for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.first_nonzero",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the remainder of the first value divided by the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.mod",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff both values are non-zero for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.and",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff either input value is non-zero for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.or",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff the first value is less than the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.lt",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff the first value is less than or equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.lte",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff the first value is greater than the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.gt",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff the first value is greater than or equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.gte",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff the first value is equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.eq",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 1 iff the first value is not equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
      "name": "algorithms/Image.neq",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Raises the first value to the power of the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
      "name": "algorithms/Image.pow",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the angle formed by the 2D vector [x, y] for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
      "name": "algorithms/Image.atan2",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the magnitude of the 2D vector [x, y] for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
      "name": "algorithms/Image.hypot",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise AND of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.bitwiseAnd",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise AND of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.bitwise_and",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise OR of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.bitwiseOr",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise OR of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.bitwise_or",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise XOR of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.bitwiseXor",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise XOR of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.bitwise_xor",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the left shift of v1 by v2 bits for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.leftShift",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the left shift of v1 by v2 bits for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.left_shift",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the signed right shift of v1 by v2 bits for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.rightShift",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the signed right shift of v1 by v2 bits for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.right_shift",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the regularized lower incomplete Gamma function \u03b3(x,a) for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
      "name": "algorithms/Image.gammainc",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
      "name": "algorithms/Image.bitwiseNot",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
      "name": "algorithms/Image.bitwise_not",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the number of one-bits in the 64-bit two's complement binary representation of the input.",
      "name": "algorithms/Image.bitCount",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns 0 if the input is non-zero, and 1 otherwise.",
      "name": "algorithms/Image.not",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the sine of the input in radians.",
      "name": "algorithms/Image.sin",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the cosine of the input in radians.",
      "name": "algorithms/Image.cos",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the tangent of the input in radians.",
      "name": "algorithms/Image.tan",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the arc sine in radians of the input.",
      "name": "algorithms/Image.asin",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the arc cosine in radians of the input.",
      "name": "algorithms/Image.acos",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the arc tangent in radians of the input.",
      "name": "algorithms/Image.atan",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the hyperbolic sine of the input.",
      "name": "algorithms/Image.sinh",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the hyperbolic cosine of the input.",
      "name": "algorithms/Image.cosh",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the hyperbolic tangent of the input.",
      "name": "algorithms/Image.tanh",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the square root of the input.",
      "name": "algorithms/Image.sqrt",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the natural logarithm of the input.",
      "name": "algorithms/Image.log",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the base-10 logarithm of the input.",
      "name": "algorithms/Image.log10",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the Euler's number e raised to the power of the input.",
      "name": "algorithms/Image.exp",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the absolute value of the input.",
      "name": "algorithms/Image.abs",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the largest integer less than or equal to the input.",
      "name": "algorithms/Image.floor",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the smallest integer greater than or equal to the input.",
      "name": "algorithms/Image.ceil",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the integer nearest to the input.",
      "name": "algorithms/Image.round",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the cubic root of the input.",
      "name": "algorithms/Image.cbrt",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the gamma function of the input.",
      "name": "algorithms/Image.gamma",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the digamma function of the input.",
      "name": "algorithms/Image.digamma",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the trigamma function of the input.",
      "name": "algorithms/Image.trigamma",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the error function of the input.",
      "name": "algorithms/Image.erf",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the complementary error function of the input.",
      "name": "algorithms/Image.erfc",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the inverse error function of the input.",
      "name": "algorithms/Image.erfInv",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the inverse complementary error function of the input.",
      "name": "algorithms/Image.erfcInv",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the Lanczos approximation of the input.",
      "name": "algorithms/Image.lanczos",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Image.uint8",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Image.toUint8",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 8-bit integer.",
      "name": "algorithms/Image.int8",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 8-bit integer.",
      "name": "algorithms/Image.toInt8",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 16-bit integer.",
      "name": "algorithms/Image.uint16",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 16-bit integer.",
      "name": "algorithms/Image.toUint16",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Image.int32",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Image.toInt32",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 32-bit integer.",
      "name": "algorithms/Image.uint32",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 32-bit integer.",
      "name": "algorithms/Image.toUint32",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Image.int16",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Image.toInt16",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Image.byte",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Image.toByte",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Image.short",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Image.toShort",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Image.int",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Image.toInt",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Image.long",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Image.toLong",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Image.int64",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Image.toInt64",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a 32-bit float.",
      "name": "algorithms/Image.float",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a 32-bit float.",
      "name": "algorithms/Image.toFloat",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a 64-bit float.",
      "name": "algorithms/Image.double",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Casts the input value to a 64-bit float.",
      "name": "algorithms/Image.toDouble",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "dstImg",
          "description": "An image into which to copy bands.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "srcImg",
          "description": "An image containing bands to copy.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "names",
          "defaultValue": null,
          "description": "Optional list of band names to copy. If names is omitted, all bands from srcImg will be copied over.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "overwrite",
          "defaultValue": false,
          "description": "If true, bands from srcImg will override bands with the same names in dstImg. Otherwise the new band will be renamed with a numerical suffix ('foo' to 'foo_1' unless 'foo_1' exists, then 'foo_2' unless it exists, etc).",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Returns an image containing all bands copied from the first input and selected bands from the second input, optionally overwriting bands in the first image with the same name. The new image has the metadata and footprint from the first input image.",
      "name": "algorithms/Image.addBands",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "annotation",
          "description": "The annotation to add to the image.",
          "type": "Annotation"
        }
      ],
      "description": "Adds an Annotation to an image.",
      "name": "algorithms/Image.annotate",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image from which to get band names.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns a list containing the names of the bands of an image.",
      "name": "algorithms/Image.bandNames",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image from which to get band types.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns a dictionary of the image's band types.",
      "name": "algorithms/Image.bandTypes",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Turns the bits of an integer into a 1-D array.  The array has a lengthup to the highest 'on' bit in the input.",
      "name": "algorithms/Image.bitsToArrayImage",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "bottom",
          "description": "The bottom image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "top",
          "description": "The top image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Overlays one image on top of another. The images are blended together using the masks as opacity. If either of images has only 1 band, it is replicated to match the number of bands in the other image.",
      "name": "algorithms/Image.blend",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to cast.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "bandTypes",
          "description": "A dictionary from band name to band types. Types can be PixelTypes or strings. The valid strings are: 'int8', 'int16', 'int32', 'int64', 'uint8', 'uint16', 'uint32', 'byte', 'short', 'int', 'long', 'float' and 'double'. If bandTypes includes bands that are not already in the input image, they will be added to the image as transparent bands. If bandOrder isn't also specified, new bands will be appended in alphabetical order.",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "bandOrder",
          "defaultValue": null,
          "description": "A list specifying the order of the bands in the result. If specified, must match the full list of bands in the result.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Casts some or all bands of an image to the specified types.",
      "name": "algorithms/Image.cast",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "srcProj",
          "description": "The original projection.",
          "type": "Projection"
        },
        {
          "argumentName": "dstProj",
          "description": "The new projection.",
          "type": "Projection"
        }
      ],
      "description": "Tweaks the projection of the input image, moving each pixel from its location in srcProj to the same coordinates in dstProj.",
      "name": "algorithms/Image.changeProj",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to clamp.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "low",
          "description": "The minimum allowed value in the range.",
          "type": "Float"
        },
        {
          "argumentName": "high",
          "description": "The maximum allowed value in the range.",
          "type": "Float"
        }
      ],
      "description": "Clamps the values in all bands of an image to all lie within the specified range.",
      "name": "algorithms/Image.clamp",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to classify.  Bands are extracted from this image by name, and it must contain all the bands named in the classifier's schema.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "classifier",
          "description": "The classifier to use.",
          "type": "Object"
        },
        {
          "argumentName": "outputName",
          "defaultValue": "classification",
          "description": "The name of the band to be added.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Classifies an image.",
      "name": "algorithms/Image.classify",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to cluster. Must contain all the bands in the clusterer's schema.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "clusterer",
          "description": "The clusterer to use.",
          "type": "Clusterer"
        },
        {
          "argumentName": "outputName",
          "defaultValue": "cluster",
          "description": "The name of the output band.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Applies a clusterer to an image.  Returns a new image with a single band containing values from 0 to N, indicating the cluster each pixel is assigned to.",
      "name": "algorithms/Image.cluster",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxSize",
          "defaultValue": 100,
          "description": "The maximum size of the neighborhood in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "eightConnected",
          "defaultValue": true,
          "description": "Whether to use 8-connected rather 4-connected rules.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Generate an image where each pixel contains the number of 4- or 8-connected neighbors (including itself).",
      "name": "algorithms/Image.connectedPixelCount",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to label.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "connectedness",
          "description": "Connectedness kernel.",
          "type": "Kernel"
        },
        {
          "argumentName": "maxSize",
          "description": "Maximum size of objects to be labeled.",
          "type": "Integer"
        }
      ],
      "description": "Finds connected components with the same value of the first band of the input and labels them with a globally unique value.  Connectedness is specified by the given kernel.  Objects larger than maxSize are considered background, and are masked.",
      "name": "algorithms/Image.connectedComponents",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The value of the pixels in the constant image. Must be a number or an Array or a list of numbers or Arrays.",
          "type": "Object"
        }
      ],
      "description": "Generates an image containing a constant value everywhere.",
      "name": "algorithms/Image.constant",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to convolve.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "kernel",
          "description": "The kernel to convolve with.",
          "type": "Kernel"
        }
      ],
      "description": "Convolves each band of an image with the given kernel.",
      "name": "algorithms/Image.convolve",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "cost",
          "description": "A single-band image representing the cost to traverse each pixel. Masked pixels can't be traversed.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "source",
          "description": "A single-band image representing the sources. A pixel value different from 0  defines a source pixel.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxDistance",
          "description": "Maximum distance for computation, in meters.",
          "type": "Float"
        },
        {
          "argumentName": "geodeticDistance",
          "defaultValue": true,
          "description": "If true, geodetic distance along the curved surface is used, assuming a spherical Earth of radius 6378137.0. If false, euclidean distance in the 2D plane of the map projection is used (faster, but less accurate).",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes a cumulative cost map based on an image containing costs to traverse each pixel and an image containing source locations.",
      "name": "algorithms/Image.cumulativeCost",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image whose acquisition time to return.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns the acquisition time of an image as a Date object.  This helper function is equivalent to ee.Date(image.get('system:time_start')).",
      "name": "algorithms/Image.date",
      "returnType": "Date"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the X and Y discrete derivatives for each band in the input image, in pixel coordinates.\nFor each band of the input image, the output image will have two bands named with the suffixes '_x' and '_y', containing the respective derivatives.",
      "name": "algorithms/Image.derivative",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to warp.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "displacement",
          "description": "An image containing displacement values. The first band is interpreted as the 'X' displacement and the second as the 'Y' displacement. Each displacement pixel is a [dx,dy] vector added to the pixel location to determine the corresponding pixel location in 'image'. Displacements are interpreted as meters in the default projection of the displacement image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "mode",
          "defaultValue": "bicubic",
          "description": "The interpolation mode to use.  One of 'nearest_neighbor', 'bilinear' or 'bicubic'.)",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Warps an image using an image of displacements.",
      "name": "algorithms/Image.displace",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to register.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "referenceImage",
          "description": "The image to register to.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxOffset",
          "description": "The maximum offset allowed when attempting to align the input images, in meters. Using a smaller value can reduce computation time significantly, but it must still be large enough to cover the greatest displacement within the entire image region.",
          "type": "Float"
        },
        {
          "argumentName": "projection",
          "defaultValue": null,
          "description": "The projection in which to output displacement values. The default is the projection of the first band of the reference image.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "patchWidth",
          "defaultValue": null,
          "description": "Patch size for detecting image offsets, in meters. This should be set large enough to capture texture, as well as large enough that ignorable objects are small within the patch. Default is null. Patch size will be determined automatically if not provided.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "stiffness",
          "defaultValue": 5,
          "description": "Enforces a stiffness constraint on the solution. Valid values are in the range [0,10]. The stiffness is used for outlier rejection when determining displacements at adjacent grid points. Higher values move the solution towards a rigid transformation. Lower values allow more distortion or warping of the image during registration.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Determines displacements required to register an image to a reference image while allowing local, rubber sheet deformations. Displacements are computed in the CRS of the reference image, at a scale dictated by the lowest resolution of the following three projections: input image projection, reference image projection, and requested projection. The displacements are then transformed into the user-specified projection for output.",
      "name": "algorithms/Image.displacement",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "The distance kernel.",
          "optional": true,
          "type": "Kernel"
        },
        {
          "argumentName": "skipMasked",
          "defaultValue": true,
          "description": "Mask output pixels if the corresponding input pixel is masked.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes the distance to the nearest non-zero pixel in each band, using the specified distance kernel.",
      "name": "algorithms/Image.distance",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image for which to compute the entropy.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "kernel",
          "description": "A kernel specifying the window in which to compute.",
          "type": "Kernel"
        }
      ],
      "description": "Computes the windowed entropy for each band using the specified kernel centered on each input pixel.",
      "name": "algorithms/Image.entropy",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "sigma",
          "description": "The standard deviation of the Gaussian kernel, in meters. Equivalently, the spatial wavelength of the low-pass filter.",
          "type": "Float"
        }
      ],
      "description": "Applies an approximate Gaussian blurring operation to each band of an image.\n\nThis algorithm computes the convolution of the image with a Gaussian smoothing kernel with the given standard deviation. Equivalently, this algorithm applies a spatial low-pass filter with a cutoff at the given spatial wavelength.\n\nThe implementation uses an efficient, approximate method for large kernels: it will evaluate the input data at a reduced resolution, apply a smaller kernel to that data, and then bicubically resample the result.\n\nNOTE: The kernel size is specified in meters, and this is converted to a kernel size in pixels based on the particular map projection in which this operation is being applied. As a result, the effective kernel size may vary if you apply this operation in a region away from the map projection's region of true scale. For example, if you are operating in a Mercator projection then the kernel size will be accurate near the equator but will become increasingly inaccurate at high latitudes.",
      "name": "algorithms/Image.fastGaussianBlur",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 256,
          "description": "Neighborhood size in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The units of the neighborhood, currently only 'pixels' are supported.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "metric",
          "defaultValue": "squared_euclidean",
          "description": "Distance metric to use: options are 'squared_euclidean', 'manhattan' or 'chebyshev'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns the distance, as determined by the specified distance metric, to the nearest non-zero valued pixel in the input.  The output contains values for all pixels within the given neighborhood size, regardless of the input's mask.  Note: the default distance metric returns squared distance.",
      "name": "algorithms/Image.fastDistanceTransform",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image for which to compute texture metrics.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "size",
          "defaultValue": 1,
          "description": "The size of the neighborhood to include in each GLCM.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "A kernel specifying the x and y offsets over which to compute the GLCMs.  A GLCM is computed for each pixel in the kernel that is non-zero, except the center pixel and as long as a GLCM hasn't already been computed for the same direction and distance.  For example, if either or both of the east and west pixels are set, only 1 (horizontal) GLCM is computed.  Kernels are scanned from left to right and top to bottom.  The default is a 3x3 square, resulting in 4 GLCMs with the offsets (-1, -1), (0, -1), (1, -1) and (-1, 0).",
          "optional": true,
          "type": "Kernel"
        },
        {
          "argumentName": "average",
          "defaultValue": true,
          "description": "If true, the directional bands for each metric are averaged.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes texture metrics from the Gray Level Co-occurrence Matrix around each pixel of every band.",
      "name": "algorithms/Image.glcmTexture",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the x and y gradient.",
      "name": "algorithms/Image.gradient",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to transform.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Transforms the image from the HSV color space to the RGB color space. Produces three bands: red, green and blue, all floating point values in the range [0, 1].",
      "name": "algorithms/Image.hsvToRgb",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which the interpolation is applied.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "x",
          "description": "The x axis (input) values in the piecewise function.",
          "type": "List<Float>"
        },
        {
          "argumentName": "y",
          "description": "The y axis (output) values in the piecewise function.",
          "type": "List<Float>"
        },
        {
          "argumentName": "behavior",
          "defaultValue": "extrapolate",
          "description": "The behavior for points that are outside of the range of the supplied function.  Options are: 'extrapolate', 'clamp', 'mask' or 'input'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Interpolates each point in the first band of the input image into the piecewise-linear function specified by the x and y arrays.  The x values must be strictly increasing.  If an input point is less than the first or greater than the last x value, then the output is specified by the \"behavior\" argument: \"extrapolate\" specifies the output value is extrapolated from the two nearest points, \"clamp\" specifies the output value is taken from the nearest point, \"input\"  specifies the output value is copied from the input and \"mask\" specifies the output value is masked.",
      "name": "algorithms/Image.interpolate",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to process.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "boxKernel",
          "description": "The size and shape of the 'gliding box' is defined by the nonzero weights in this kernel.",
          "type": "Kernel"
        },
        {
          "argumentName": "windowKernel",
          "description": "The region of gliding box centers over which the distribution is computed to define lacunarity for each pixel of the output image. Weights in the kernel scale the contribution of each box to the distribution.",
          "type": "Kernel"
        }
      ],
      "description": "Computes lacunarity for each band in the input image, producing matching output bands.\n\nThe method used is the Differential Box-Counting algorithm, except that pixel values are not quantized into boxes, and the box and window may instead be arbitrary kernels.",
      "name": "algorithms/Image.lacunarity",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "id",
          "description": "The asset ID of the image.",
          "type": "String"
        },
        {
          "argumentName": "version",
          "defaultValue": -1,
          "description": "The version of the asset. -1 signifies the latest version.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Returns the image given its ID.",
      "name": "algorithms/Image.load",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "mask",
          "defaultValue": null,
          "description": "The mask image. If specified, the input image is copied to the output but given the mask by the values of this image. If this is a single band, it is used for all bands in the input image. If not specified, returns an image created from the mask of the input image, scaled to the range [0:1] (invalid = 0, valid = 1.0).",
          "optional": true,
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Gets or sets an image's mask. The output image retains the metadata and footprint of the input image. Pixels where the mask changes from zero to another value will be filled with zeros, or the values closest to zero within the range of the pixel type.\nNote: the version that sets a mask will be deprecated. To set a mask from an image on previously unmasked pixels, use Image.updateMask. To unmask previously masked pixels, use Image.unmask.",
      "name": "algorithms/Image.mask",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 256,
          "description": "Neighborhood size in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The units of the neighborhood, currently only 'pixels' are supported.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Computes the discrete medial axis of the zero valued pixels of the first band of the input.  Outputs 4 bands:\n medial - the medial axis points, scaled by the distance.\n coverage - the number of points supporting each medial axis point.\n xlabel - the horizontal distance to the power point for each pixel.\n ylabel - the vertical distance to the power point for each pixel.\n",
      "name": "algorithms/Image.medialAxis",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image from which to get the metadata",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "property",
          "description": "The property from which to take the value.",
          "type": "String"
        },
        {
          "argumentName": "name",
          "defaultValue": null,
          "description": "The name for the output band.  If unspecified, it will be the same as the property name.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Generates a constant image of type double from a metadata property.",
      "name": "algorithms/Image.metadata",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to get pixels from.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "kernel",
          "description": "The kernel specifying the neighborhood. Zero-weight values are ignored.",
          "type": "Kernel"
        }
      ],
      "description": "Turn the neighborhood of a pixel into a set of bands. The neighborhood is specified using a Kernel, and only non-zero-weight kernel values are used. The weights of the kernel is otherwise ignored.\n\nEach input band produces x * y output bands.  Each output band is named 'input_x_y' where x and y indicate the pixel's location in the kernel. For example, a 3x3 kernel operating on a 2-band image produces 18 output bands.",
      "name": "algorithms/Image.neighborhoodToBands",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to get pixels from; must be scalar-valued.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "kernel",
          "description": "The kernel specifying the shape of the neighborhood. Only fixed, square and rectangle kernels are supported. Weights are ignored; only the shape of the kernel is used.",
          "type": "Kernel"
        },
        {
          "argumentName": "defaultValue",
          "defaultValue": 0,
          "description": "The value to use in the output arrays to replace the invalid (masked) pixels of the input. If the band type is integral, the fractional part of this value is discarded; in all cases, the value is clamped to the value range of the band.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Turns the neighborhood of each pixel in a scalar image into a 2D array. Axes 0 and 1 of the output array correspond to Y and X axes of the image, respectively. The output image will have as many bands as the input; each output band has the same mask as the corresponding input band. The footprint and metadata of the input image are preserved.",
      "name": "algorithms/Image.neighborhoodToArray",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "bandNames",
          "defaultValue": null,
          "description": "A list of names specifying the bands to use.  If not specified, the first and second bands are used.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Computes the normalized difference between two bands. If the bands to use are not specified, uses the first two bands. The normalized difference is computed as (first \u2212 second) / (first + second).",
      "name": "algorithms/Image.normalizedDifference",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image on which the collection is painted.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "featureCollection",
          "description": "The collection painted onto the image.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "color",
          "defaultValue": 0,
          "description": "Either the name of a color property or a number.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "width",
          "defaultValue": null,
          "description": "Either the name of a line-width property or a number.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Paints the geometries of a collection onto an image.",
      "name": "algorithms/Image.paint",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "expression",
          "description": "The expression to parse.",
          "type": "String"
        },
        {
          "argumentName": "argName",
          "description": "The name of the default image argument.",
          "type": "String"
        },
        {
          "argumentName": "vars",
          "description": "The parameters the resulting algorithm should have, which must be a superset of the free variables in the expression, including the default image argument if it is used.",
          "type": "List<String>"
        }
      ],
      "description": "Generates an algorithm from an arithmetic expression on images. By default the generated algorithm takes one argument to denote the 'default' image. Other variables in the expression are interpreted as image arguments that will be passed to the returned algorithm. The bands of each image can be accessed as image.band_name or image[0]. The bands of the default image are available using the built-in function b(), as b(0) or b('band_name').  Both b() and image[] allow multiple arguments, to specify multiple bands, such as b(1, 'name', 3).  Calling b() with no arguments returns all bands of the image.",
      "hidden": true,
      "name": "algorithms/Image.parseExpression",
      "returnType": "Algorithm"
    },
    {
      "description": "Generate an image in which the value of each pixel is the area of that pixel in square meters.",
      "name": "algorithms/Image.pixelArea",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "description": "The projection in which to provide pixel.",
          "type": "Projection"
        }
      ],
      "description": "Creates a two band image containing the x and y coordinates of each pixel in the given projection.",
      "name": "algorithms/Image.pixelCoordinates",
      "returnType": "Image<unknown bands>"
    },
    {
      "description": "Creates an image with two bands named 'longitude' and 'latitude', containing the longitude and latitude at each pixel, in degrees.",
      "name": "algorithms/Image.pixelLonLat",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "coefficients",
          "description": "The polynomial coefficients in increasing order of degree starting with the constant term.",
          "type": "List<Float>"
        }
      ],
      "description": "Compute a polynomial at each pixel using the given coefficients.",
      "name": "algorithms/Image.polynomial",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image from which to get the projection.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns the default projection of an Image.  Throws an error if the bands of the image don't all have the same projection.",
      "name": "algorithms/Image.projection",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "Seed for the random number generator.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Generates a uniform random number at each pixel location, in the range of 0 to 1.",
      "name": "algorithms/Image.random",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image with at least one band.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Creates a vizualization image by assigning a random color to each unique value of the pixels of the first band. The first three bands of the output image will contan 8-bit R, G and B values, followed by all bands of the input image.",
      "name": "algorithms/Image.randomVisualizer",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to pixels within the neighborhood.",
          "type": "Reducer"
        },
        {
          "argumentName": "kernel",
          "description": "The kernel defining the neighborhood.",
          "type": "Kernel"
        },
        {
          "argumentName": "inputWeight",
          "defaultValue": "kernel",
          "description": "One of 'mask', 'kernel', or 'min'.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "skipMasked",
          "defaultValue": true,
          "description": "Mask output pixels if the corresponding input pixel is masked.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "optimization",
          "defaultValue": null,
          "description": "Optimization strategy.  Options are 'boxcar' and 'window'.  The 'boxcar' method is a fast method for computing count, sum or mean.  It requires a homogeneous kernel, a single-input reducer and either MASK, KERNEL or no weighting. The 'window' method uses a running window, and has the same requirements as 'boxcar', but can use any single input reducer.  Both methods require considerable additional memory.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Applies the given reducer to the neighborhood around each pixel, as determined by the given kernel. If the reducer has a single input, it will be applied separately to each band of the collection; otherwise it must have the same number of inputs as the input image has bands.\nThe reducer output names determine the names of the output bands: reducers with multiple inputs will use the output names directly, while reducers with a single input will prefix the output name with the input band name (e.g. '10_mean', '20_mean', etc.).\nReducers with weighted inputs can have the input weight based on the input mask, the kernel value, or the smaller of those two.",
      "name": "algorithms/Image.reduceNeighborhood",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to reduce.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to the given image.",
          "type": "Reducer"
        }
      ],
      "description": "Applies a reducer to all of the bands of an image.\nThe reducer must have a single input and will be called at each pixel to reduce the stack of band values.\nThe output image will have one band for each reducer output.",
      "name": "algorithms/Image.reduce",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to reduce.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply.",
          "type": "Reducer"
        },
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The region over which to reduce data.  Defaults to the footprint of the image's first band.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to work in.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The projection to work in. If unspecified, the projection of the image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The list of CRS transform values.  This is a row-major ordering of the 3x2 transform matrix.  This option is mutually exclusive with 'scale', and replaces any transform already set on the projection.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "bestEffort",
          "defaultValue": false,
          "description": "If the polygon would contain too many pixels at the given scale, compute and use a larger scale which would allow the operation to succeed.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxPixels",
          "defaultValue": 10000000,
          "description": "The maximum number of pixels to reduce.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Apply a reducer to all the pixels in a specific region.\nEither the reducer must have the same number of inputs as the input image has bands, or it must have a single input and will be repeated for each band.\nReturns a dictionary of the reducer's outputs.",
      "name": "algorithms/Image.reduceRegion",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to reduce.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "collection",
          "description": "The features to reduce over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply.",
          "type": "Reducer"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to work in.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The projection to work in. If unspecified, the projection of the image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The list of CRS transform values.  This is a row-major ordering of the 3x2 transform matrix.  This option is mutually exclusive with 'scale', and will replace any transform already set on the projection.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Apply a reducer over the area of each feature in the given collection.\nThe reducer must have the same number of inputs as the input image has bands.\nReturns the input features, each augmented with the corresponding reducer outputs.",
      "name": "algorithms/Image.reduceRegions",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to be used for combining pixels.",
          "type": "Reducer"
        },
        {
          "argumentName": "bestEffort",
          "defaultValue": false,
          "description": "If using the input at its default resolution would require too many pixels, start with already-reduced input pixels from a pyramid level that allows the operation to succeed.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxPixels",
          "defaultValue": 64,
          "description": "The maximum number of input pixels to combine for each output pixel.  Setting this too large will cause out-of-memory problems.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Enables reprojection using the given reducer to combine all input pixels corresponding to each output pixel. If the reducer has a single input, it will be applied separately to each band of the collection; otherwise it must have the same number of inputs as the input image has bands.\nThe reducer output names determine the names of the output bands: reducers with multiple inputs will use the output names directly, reducers with a single input and single output will preserve the input band names, and reducers with a single input and multiple outputs will prefix the output name with the input band name (e.g. '10_mean', '10_stdDev', '20_mean', '20_stdDev', etc.).\nReducer input weights will be the product of the  input mask and the fraction of the output pixel covered by the input pixel.",
      "name": "algorithms/Image.reduceResolution",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image. The first band is expected to be an integer type; adjacent pixels will be in the same segment if they have the same value in this band.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "defaultValue": null,
          "description": "The reducer to apply.  Its inputs will be taken from the image's bands after dropping the first band.  Defaults to Reducer.countEvery()",
          "optional": true,
          "type": "Reducer"
        },
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The region over which to reduce data.  Defaults to the footprint of the image's first band.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to work in.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometryType",
          "defaultValue": "polygon",
          "description": "How to choose the geometry of each generated feature; one of 'polygon' (a polygon enclosing the pixels in the segment), 'bb' (a rectangle bounding the pixels), or 'centroid' (the centroid of the pixels).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "eightConnected",
          "defaultValue": true,
          "description": "If true, diagonally-connected pixels are considered adjacent; otherwise only pixels that share an edge are.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "labelProperty",
          "defaultValue": "label",
          "description": "If non-null, the value of the first band will be saved as the specified property of each feature.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The projection to work in. If unspecified, the projection of the image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The list of CRS transform values.  This is a row-major ordering of the 3x2 transform matrix.  This option is mutually exclusive with 'scale', and replaces any transform already set on the projection.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "bestEffort",
          "defaultValue": false,
          "description": "If the polygon would contain too many pixels at the given scale, compute and use a larger scale which would allow the operation to succeed.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxPixels",
          "defaultValue": 10000000,
          "description": "The maximum number of pixels to reduce.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometryInNativeProjection",
          "defaultValue": false,
          "description": "Create geometries in the pixel projection, rather than WGS84.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Convert an image to a feature collection by reducing homogenous regions. Given an image containing a band of labeled segments and zero or more additional bands, runs a reducer over the pixels in each segment producing a feature per segment.\nEither the reducer must have one fewer inputs than the image has bands, or it must have a single input and will be repeated for each band.",
      "name": "algorithms/Image.reduceToVectors",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image. The first band is expected to be an integer type; adjacent pixels will be in the same segment if they have the same value in this band.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "defaultValue": null,
          "description": "The reducer to apply.  Its inputs will be taken from the image's bands after dropping the first band.  Defaults to Reducer.countEvery()",
          "optional": true,
          "type": "Reducer"
        },
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The region over which to reduce data.  Defaults to the footprint of the image's first band.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to work in.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometryType",
          "defaultValue": "polygon",
          "description": "How to choose the geometry of each generated feature; one of 'polygon' (a polygon enclosing the pixels in the segment), 'bb' (a rectangle bounding the pixels), or 'centroid' (the centroid of the pixels).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "eightConnected",
          "defaultValue": true,
          "description": "If true, diagonally-connected pixels are considered adjacent; otherwise only pixels that share an edge are.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "labelProperty",
          "defaultValue": "label",
          "description": "If non-null, the value of the first band will be saved as the specified property of each feature.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The projection to work in. If unspecified, the projection of the image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The list of CRS transform values.  This is a row-major ordering of the 3x2 transform matrix.  This option is mutually exclusive with 'scale', and replaces any transform already set on the projection.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "bestEffort",
          "defaultValue": false,
          "description": "If the polygon would contain too many pixels at the given scale, compute and use a larger scale which would allow the operation to succeed.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxPixels",
          "defaultValue": 10000000,
          "description": "The maximum number of pixels to reduce.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometryInNativeProjection",
          "defaultValue": false,
          "description": "Create geometries in the pixel projection, rather than WGS84.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Convert an image to a feature collection by reducing homogenous regions. Given an image containing a band of labeled segments and zero or more additional bands, runs a reducer over the pixels in each segment producing a feature per segment.\nEither the reducer must have one fewer inputs than the image has bands, or it must have a single input and will be repeated for each band.",
      "hidden": true,
      "name": "algorithms/Image.reduceToVectorsStreaming",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image containing the bands to rename.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "regex",
          "description": "A regular expression to match in each band name.",
          "type": "String"
        },
        {
          "argumentName": "replacement",
          "description": "The text with which to replace each match.  Supports $n syntax for captured values.",
          "type": "String"
        },
        {
          "argumentName": "all",
          "defaultValue": true,
          "description": "If true, all matches in a given string will be replaced.  Otherwise, only the first match in each string will be replaced.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Renames the bands of an image by applying a regular expression replacement to the current band names.  Any bands not matched by the regex will be copied over without renaming.",
      "name": "algorithms/Image.regexpRename",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to select bands from.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "names",
          "description": "New names for the image's bands.  Must exactly match the number of bands in input.",
          "type": "List<String>"
        }
      ],
      "description": "Renames the bands of an image.",
      "name": "algorithms/Image.rename",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to which the remapping is applied.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "from",
          "description": "The source values (numbers or EEArrays). All values in this list will be mapped to the corresponding value in 'to'.",
          "type": "List<Object>"
        },
        {
          "argumentName": "to",
          "description": "The destination values (numbers or EEArrays). These are used to replace the corresponding values in 'from'. Must have the same number of values as 'from'.",
          "type": "List<Object>"
        },
        {
          "argumentName": "defaultValue",
          "defaultValue": null,
          "description": "The default value to replace values that weren't matched by a value in 'from'. If not specified, unmatched values are masked out.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "bandName",
          "defaultValue": null,
          "description": "The name of the band to remap. If not specified, the first  band in the image is used.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Maps from input values to output values, represented by two parallel lists. Any input values not included in the input list are either set to defaultValue if it is given, or masked if it isn't.  Note that inputs containing floating point values might sometimes fail to match due to  floating point precision errors.",
      "name": "algorithms/Image.remap",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The Image to reproject.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "crs",
          "description": "The CRS to project the image to.",
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The list of CRS transform values.  This is a row-major ordering of the 3x2 transform matrix.  This option is mutually exclusive with the scale option, and replaces any transform already on the projection.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "If scale is specified, then the projection is scaled by dividing the specified scale value by the nominal size of a meter in the specified projection. If scale is not specified, then the scale of the given projection will be used.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Force an image to be computed in a given projection and resolution.",
      "name": "algorithms/Image.reproject",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to transform.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Transforms the image from the RGB color space to the HSV color space. Produces three bands: hue, saturation and value, all floating point values in the range [0, 1].",
      "name": "algorithms/Image.rgbToHsv",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The Image to resample.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "mode",
          "defaultValue": "bilinear",
          "description": "The interpolation mode to use.  One of 'bilinear' or 'bicubic'.)",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "An algorithm that returns an image identical to its argument, but which uses bilinear or bicubic interpolation (rather than the default nearest-neighbor) to compute pixels in projections other than its native projection or other levels of the same image pyramid.\nThis relies on the input image's default projection being meaningful, and so cannot be used on composites, for example. (Instead, you should resample the images that are used to create the composite.)",
      "name": "algorithms/Image.resample",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "neighborhood",
          "defaultValue": 256,
          "description": "Neighborhood size in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "units",
          "defaultValue": "pixels",
          "description": "The units of the neighborhood, currently only 'pixels' are supported.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Computes the 2D maximal height surface created by placing an inverted parabola over each non-zero pixel of the input image, where the pixel's value is the height of the parabola.  Viewed as a binary image (zero/not-zero) this is equivalent to buffering each non-zero input pixel by the square root of its value, in pixels.",
      "name": "algorithms/Image.rsedTransform",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to sample.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "region",
          "defaultValue": null,
          "description": "The region to sample from. If unspecified, uses the image's whole footprint.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to sample in.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "projection",
          "defaultValue": null,
          "description": "The projection in which to sample. If unspecified, the projection of the image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "factor",
          "defaultValue": null,
          "description": "A subsampling factor, within (0, 1]. If specified, 'numPixels' must not be specified. Defaults to no subsampling.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "numPixels",
          "defaultValue": null,
          "description": "The approximate number of pixels to sample. If specified, 'factor' must not be specified.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "A randomization seed to use for subsampling.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "dropNulls",
          "defaultValue": true,
          "description": "Post filter the result to drop features that have null-valued properties.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometries",
          "defaultValue": false,
          "description": "If true, adds the center of the sampled pixel as the geometry property of the output feature.  Otherwise, geometries will be omitted (saving memory).",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Samples the pixels of an image, returning them as a FeatureCollection. Each feature will have 1 property per band in the input image.",
      "name": "algorithms/Image.sample",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to sample.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "collection",
          "description": "The regions to sample over.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "properties",
          "defaultValue": null,
          "description": "The list of properties to copy from each input feature.  Defaults to all non-system properties.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to sample in.  If unspecified,the scale of the image's first band is used.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "projection",
          "defaultValue": null,
          "description": "The projection in which to sample. If unspecified, the projection of the image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometries",
          "defaultValue": false,
          "description": "If true, the results will include a geometry per sampled pixel.  Otherwise, geometries will be omitted (saving memory).",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Samples the pixels of an image in one or more regions, returning them as a FeatureCollection.  Each output feature will have 1 property per band in the input image, as well as any specified properties copied from the input feature. Note that geometries will be snapped to pixel centers.",
      "name": "algorithms/Image.sampleRegions",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to select bands from.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "bandSelectors",
          "description": "A list of names, regexes or numeric indicies specifying the bands to select.",
          "type": "List<Object>"
        },
        {
          "argumentName": "newNames",
          "defaultValue": null,
          "description": "Optional new names for the output bands.  Must match the number of bands selected.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Selects bands from an image by name, RE2-compatible regex or index and optionally renames them.",
      "name": "algorithms/Image.select",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to mask with itself.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Updates an image's mask at all positions where the existing mask is not zero using the value of the image as the new mask value. The output image retains the metadata and footprint of the input image.",
      "name": "algorithms/Image.selfMask",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The Image to reproject.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "crs",
          "description": "The CRS to project the image to.",
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The list of CRS transform values.  This is a row-major ordering of the 3x2 transform matrix.  This option is mutually exclusive with the scale option, and replaces any transform already on the projection.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "If scale is specified, then the projection is scaled by dividing the specified scale value by the nominal size of a meter in the specified projection. If scale is not specified, then the scale of the given projection will be used.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Set a default projection to be applied to this image. The projection's resolution may be overridden by later operations.",
      "name": "algorithms/Image.setDefaultProjection",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to rendering using the SLD.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "sldXml",
          "description": "The OGC SLD 1.0 or 1.1 document (or fragment).",
          "type": "String"
        }
      ],
      "description": "Styles a raster input with the provided OGC SLD styling.\n\nPoints of note:\n * OGC SLD 1.0 and OGC SE 1.1 are supported.\n * The XML document passed in can be complete, or just the   SldRasterSymbolizer element and down.\n * Exactly one SldRasterSymbolizer is required.\n * Bands may be selected by their proper EarthEngine names or   using numeric identifiers (\"1\", \"2\", ...). Proper   EarthEngine names are tried first.\n * The Histogram and Normalize contrast stretch mechanisms are   supported.\n * The type=\"values\", type=\"intervals\" and type=\"ramp\"   attributes for ColorMap element in SLD 1.0 (GeoServer   extensions) are\n   supported.\n * Opacity is only taken into account when it is 0.0   (transparent). Non-zero opacity values are treated as   completely opaque.\n * The OverlapBehavior definition is currently ignored.\n * The ShadedRelief mechanism is not currently supported.\n * The ImageOutline mechanism is not currently supported.\n * The Geometry element is ignored.\n\nThe output image will have histogram_bandname metadata if histogram equalization or normalization is requested.\n",
      "name": "algorithms/Image.sldStyle",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image from which to select bands.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "start",
          "description": "Where to start the selection.  Negative numbers select from the end, counting backwards.",
          "type": "Integer"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "description": "Where to end the selection.  If omitted, selects all bands from the start position to the end.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Selects a contiguous group of bands from an image by position.",
      "name": "algorithms/Image.slice",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to sample.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "numPoints",
          "description": "The default number of points to sample in each class.  Can be overridden for specific classes using the 'classValues' and 'classPoints' properties.",
          "type": "Integer"
        },
        {
          "argumentName": "classBand",
          "defaultValue": null,
          "description": "The name of the band containing the classes to use for stratification. If unspecified, the first band of the input image is used.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "region",
          "defaultValue": null,
          "description": "The region to sample from. If unspecified, the input image's whole footprint is used.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to sample in.  Defaults to the scale of the first band of the input image.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "projection",
          "defaultValue": null,
          "description": "The projection in which to sample. If unspecified, the projection of the input image's first band is used. If specified in addition to scale, rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "A randomization seed to use for subsampling.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "classValues",
          "defaultValue": null,
          "description": "A list of class values for which to override the numPixels parameter. Must be the same size as classPoints or null.",
          "optional": true,
          "type": "List<Integer>"
        },
        {
          "argumentName": "classPoints",
          "defaultValue": null,
          "description": "A list of the per-class maximum number of pixels to sample for each class in  the classValues list.  Must be the same size as classValues or null.",
          "optional": true,
          "type": "List<Integer>"
        },
        {
          "argumentName": "dropNulls",
          "defaultValue": true,
          "description": "Skip pixels in which any band is masked.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "tileScale",
          "defaultValue": 1,
          "description": "A scaling factor used to reduce aggregation tile size; using a larger tileScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "geometries",
          "defaultValue": false,
          "description": "If true, the results will include a geometry per sampled pixel.  Otherwise, geometries will be omitted (saving memory).",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Extracts a stratified random sample of points from an image.  Extracts the specified number of samples for each distinct value discovered within the 'classBand'.  Returns a FeatureCollection of 1 Feature per extracted point, with each feature having 1 property per band in the input image.  If there are less than the specified number of samples available for a given class value, then all of the points for that class will be included.  Requires that the classBand contain integer values.",
      "name": "algorithms/Image.stratifiedSample",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "fit",
          "description": "Image produced by the TIMESAT reducer, where the first band must be a TIMESAT fit.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "x",
          "description": "Value of the independent variable at which to evaluate the fit.",
          "type": "Float"
        },
        {
          "argumentName": "function",
          "description": "The local function used to fit the data: [AsymmetricGaussian, Fourier1, Fourier2, Fourier3]",
          "type": "String"
        }
      ],
      "description": "Evaluates a fit computed by the TIMESAT reducer.",
      "name": "algorithms/Image.timesatValue",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "templateImage",
          "description": "The image containing the point to align.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "searchImage",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "x",
          "type": "Integer"
        },
        {
          "argumentName": "y",
          "type": "Integer"
        },
        {
          "argumentName": "proj",
          "type": "Projection"
        },
        {
          "argumentName": "maxOffset",
          "type": "Integer"
        },
        {
          "argumentName": "templateBandNames",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "searchBandNames",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "windowSize",
          "defaultValue": 15,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "expectedXOffset",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "expectedYOffset",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxResults",
          "defaultValue": 1,
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxMaskedFrac",
          "defaultValue": 0,
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Wraps correlation as an algorithm so that single points may be matched, and the results will be cached. An image patch from the templateImage at (x, y) is correlated with multiple patches in the searchImage over a search window, and a set of the best offsets with scores is returned. ",
      "hidden": true,
      "name": "algorithms/Image.pointMatch",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to register.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "referenceImage",
          "description": "The image to register to.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxOffset",
          "description": "The maximum offset allowed when attempting to align the input images, in meters. Using a smaller value can reduce computation time significantly, but it must still be large enough to cover the greatest displacement within the entire image region.",
          "type": "Float"
        },
        {
          "argumentName": "patchWidth",
          "defaultValue": null,
          "description": "Patch size for detecting image offsets, in meters. This should be set large enough to capture texture, as well as large enough that ignorable objects are small within the patch. Default is null. Patch size will be determined automatically if notprovided.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "stiffness",
          "defaultValue": 5,
          "description": "Enforces a stiffness constraint on the solution. Valid values are in the range [0,10]. The stiffness is used for outlier rejection when determining displacements at adjacent grid points. Higher values move the solution towards a rigid transformation. Lower values allow more distortion or warping of the image during registration.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Registers an image to a reference image while allowing local, rubber sheet deformations. Displacements are computed in the CRS of the reference image, at a scale dictated by the lowest resolution of the following three projections: input image projection, reference image projection, and requested projection. The displacements then applied to the input image to register it with the reference.",
      "name": "algorithms/Image.register",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Input image. The result will have the same bands and properties.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "size",
          "description": "Edge length in pixels of the tile grid to use; must be between 1 and 256.",
          "type": "Integer"
        }
      ],
      "description": "Change the size of tiles in which the input image is calculated.\n\nWhen pixels of this image are needed, they are computed in tiles of the specified size. This allows a memory-intensive image computation, such as one involving large array bands, to be broken up into smaller pieces that will fit into memory where larger ones will not.\n\nCurrently, if the image is used in a reduce operation, the tileScale parameter should be used instead of retile(). retile() will also have no or detrimental effect in an Export.video task.",
      "name": "algorithms/Image.retile",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input data.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "bands",
          "defaultValue": null,
          "description": "The names of the bands from the image argument to train on.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "training_image",
          "defaultValue": null,
          "description": "The pre-classified image for supervised training. If specified, training_band must be specified. Either this or training_features must be specified.",
          "optional": true,
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "training_band",
          "defaultValue": null,
          "description": "The name of the band in training_image to use. Ignored if training_image is not used.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "training_region",
          "defaultValue": null,
          "description": "The region of the training band to use for training. If not specified, the whole band is used. Ignored if training_image is not used.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "training_features",
          "defaultValue": null,
          "description": "A collection of classified features to use for supervised classification. Either this or training_image must be specified.",
          "optional": true,
          "type": "FeatureCollection"
        },
        {
          "argumentName": "training_property",
          "defaultValue": "classification",
          "description": "The name of the property in each element of training_features containing its class number.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "crs",
          "defaultValue": null,
          "description": "The ID of the coordinate reference system into which the training data will be rasterized. If not specified, the projection of the training data is used. If not applicable,  the projection of the input data. If this is specified, crs_transform must be specified too.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "crs_transform",
          "defaultValue": null,
          "description": "The 6-element CRS transform matrix in the order: xScale, yShearing, xShearing, yScale, xTranslation and yTranslation. If crs is specified, this must be specified.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "max_classification",
          "defaultValue": null,
          "description": "The maximum class number. Deprecated and unused.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "subsampling",
          "defaultValue": 1,
          "description": "Random sample the training raster by this factor. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "seed",
          "defaultValue": 0,
          "description": "The random seed used for subsampling.",
          "optional": true,
          "type": "Long"
        },
        {
          "argumentName": "classifier_name",
          "defaultValue": "FastNaiveBayes",
          "description": "The name of the Abe classifier to use. Currently supported values are FastNaiveBayes, GmoMaxEnt, Winnow, MultiClassPerceptron, Pegasos, Cart, RifleSerialClassifier, IKPamir, VotingSvm, MarginSvm, ContinuousNaiveBayes. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier_parameters",
          "defaultValue": "",
          "description": "The Abe classifier parameters. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier_mode",
          "defaultValue": "classification",
          "description": "The classifier mode. Accepted values are 'classification', 'regression' and 'probability'. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "num_subsamples",
          "defaultValue": 1,
          "description": "The number of subsamples to use for cross-validation or bagging. If 1, no cross-validation or bagging is performed. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "bootstrap_subsampling",
          "defaultValue": null,
          "description": "The bootstrap subsampling factor. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "bootstrap_aggregator",
          "defaultValue": null,
          "description": "The bootstrap aggregator. Ignored if a classifier argument is provided.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "classifier",
          "defaultValue": null,
          "description": "A pre-built classifier to use.",
          "optional": true,
          "type": "OldClassifier"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Use Classifier.train().",
      "description": "Trains an image classifier.\n\nThe input data is specified with the image and bands arguments.\n\nTo use a raster as training data, specify training_image, training_band, and training_region. The region is optional if the band is bounded. To use vector training data, specify training_features and training_property. The property defaults to 'classification'. You must specify either raster or vector training data, but not both.\n\nThe training data will be rasterized in a projection configured by the crs and crs_transform arguments. By default the projection of your training data will be used (if applicable); otherwise the projection of your input data.\n\nTo use the classifier library, specify the classifier_name, classifier_parameters, and classifier_mode arguments.\n\nTo enable cross-validation or bagging, set the num_subsamples argument. When bagging, set the bootstrap_subsampling factor and the bootstrap_aggregator as well.\n\nTo use a custom classifier, specify it using the classifier parameter.",
      "hidden": true,
      "name": "algorithms/Image.trainClassifier",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "x",
          "type": "Float"
        },
        {
          "argumentName": "y",
          "type": "Float"
        },
        {
          "argumentName": "units",
          "defaultValue": "meters",
          "description": "The units for x and y; \"meters\" or \"pixels\".",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "proj",
          "defaultValue": null,
          "description": "The projection in which to translate the image; defaults to the projection of the first band.",
          "optional": true,
          "type": "Projection"
        }
      ],
      "description": "Translate the input image.",
      "name": "algorithms/Image.translate",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to scale.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "low",
          "description": "The value mapped to 0.",
          "type": "Float"
        },
        {
          "argumentName": "high",
          "description": "The value mapped to 1.",
          "type": "Float"
        }
      ],
      "description": "Scales the input so that the range of input values [low, high] becomes [0, 1]. Values outside the range are NOT clamped. This algorithm always produces floating point pixels.",
      "name": "algorithms/Image.unitScale",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "value",
          "defaultValue": null,
          "description": "New value and mask for the masked pixels of the input image. If not specified, defaults to constant zero image which is valid everywhere.",
          "optional": true,
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "sameFootprint",
          "defaultValue": true,
          "description": "If true (or unspecified), the output retains the footprint of the input image. If false, the footprint of the output is the union of the input footprint with the footprint of the value image.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Replaces mask and value of the input image with the mask and value of another image at all positions where the input mask is zero. The output image retains the metadata of the input image. By default, the output image also retains the footprint of the input, but setting sameFootprint to false allows to extend the footprint.",
      "name": "algorithms/Image.unmask",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "endmembers",
          "description": "The endmembers to unmix with.",
          "type": "List<List<Float>>"
        },
        {
          "argumentName": "sumToOne",
          "defaultValue": false,
          "description": "Constrain the outputs to sum to one.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "nonNegative",
          "defaultValue": false,
          "description": "Constrain the outputs to be non-negative.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Unmix each pixel with the given endmembers, by computing the pseudo-inverse and multiplying it through each pixel.  Returns an image of doubles with the same number of bands as endmembers.",
      "name": "algorithms/Image.unmix",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "mask",
          "description": "New mask for the image, as a floating-point value in the range [0, 1] (invalid = 0, valid = 1). If this image has a single band, it is used for all bands in the input image; otherwise, must have the same number of bands as the input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Updates an image's mask at all positions where the existing mask is not zero. The output image retains the metadata and footprint of the input image.",
      "name": "algorithms/Image.updateMask",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to visualize.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "bands",
          "defaultValue": null,
          "description": "A list of the bands to visualize.  If empty, the first 3 are used.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "gain",
          "defaultValue": null,
          "description": "The visualization gain(s) to use.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "bias",
          "defaultValue": null,
          "description": "The visualization bias(es) to use.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "min",
          "defaultValue": null,
          "description": "The value(s) to map to RGB8 value 0.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "max",
          "defaultValue": null,
          "description": "The value(s) to map to RGB8 value 255.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "gamma",
          "defaultValue": null,
          "description": "The gamma correction factor(s) to use.",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "opacity",
          "defaultValue": null,
          "description": "The opacity scaling factor to use.",
          "optional": true,
          "type": "Number"
        },
        {
          "argumentName": "palette",
          "defaultValue": null,
          "description": "The color palette to use. List of CSS color identifiers or hexadecimal color strings (e.g. ['red', '00FF00', 'bluevlolet']).",
          "optional": true,
          "type": "Object"
        },
        {
          "argumentName": "forceRgbOutput",
          "defaultValue": false,
          "description": "Whether to produce RGB output even for single-band inputs.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Produces an RGB or grayscale visualization of an image.  Each of the gain, bias, min, max and gamma arguments can take either a single value, which will be applied to all bands, or a list of values the same length as bands.",
      "name": "algorithms/Image.visualize",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "test",
          "description": "The test image. The pixels of this image determines which of the input pixels is returned. If this is a single band, it is used for all bands in the input image. This may not be an array image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "value",
          "description": "The output value to use where test is not zero. If this is a single band, it is used for all bands in the input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Performs conditional replacement of values.\n\nFor each pixel in each band of 'input', if the corresponding pixel in 'test' is nonzero, output the corresponding pixel in value, otherwise output the input pixel.\n\nIf at a given pixel, either test or value is masked, the input value is used. If the input is masked, nothing is done.\n\nThe output bands have the same names as the input bands. The output type of each band is the larger of the input and value types. The output image retains the metadata and footprint of the input image.",
      "name": "algorithms/Image.where",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image from which to compute zero crossings.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Finds zero-crossings on each band of an image.",
      "name": "algorithms/Image.zeroCrossing",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to clip.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The Geometry or Feature to clip to.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Clips an image to a Geometry or Feature (use clipToCollection to clip an image to a FeatureCollection). The output bands correspond exactly the input bands, except data not covered by the geometry is masked.  The output image retains the metadata of the input image.",
      "name": "algorithms/Image.clip",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to clip and scale.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "geometry",
          "defaultValue": null,
          "description": "The Geometry to clip the image to. The image will be clipped to the bounding box, in the image's projection, of this geometry.",
          "optional": true,
          "type": "Geometry"
        },
        {
          "argumentName": "width",
          "defaultValue": null,
          "description": "The width to scale the image to, in pixels. Must be provided along with \"height\". Exclusive with \"maxDimension\" and \"scale\".",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "height",
          "defaultValue": null,
          "description": "The height to scale the image to, in pixels. Must be provided along with \"width\". Exclusive with \"maxDimension\" and \"scale\".",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "maxDimension",
          "defaultValue": null,
          "description": "The maximum dimension to scale the image to, in pixels. Exclusive with \"width\", \"height\" and \"scale\".",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "If scale is specified, then the projection is scaled by dividing the specified scale value by the nominal size of a meter in the image's projection. Exclusive with \"width\", \"height\" and \"maxDimension\".",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Clips an image to the bounds of a Geometry, and scales the clipped image to a particular size or scale.",
      "name": "algorithms/Image.clipToBoundsAndScale",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The image to clip.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "collection",
          "description": "The FeatureCollection to clip to.",
          "type": "Object"
        }
      ],
      "description": "Clips an image to a FeatureCollection. The output bands correspond exactly the input bands, except data not covered by the geometry of at least one feature from the collection is masked. The output image retains the metadata of the input image.",
      "name": "algorithms/Image.clipToCollection",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "size",
          "defaultValue": 5,
          "description": "The superpixel seed location spacing, in pixels. If 'seeds' image is provided, no grid is produced.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "compactness",
          "defaultValue": 1,
          "description": "Compactness factor. Larger values cause clusters to be more compact (square). Setting this to 0 disables spatial distance weighting.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "connectivity",
          "defaultValue": 8,
          "description": "Connectivity.  Either 4 or 8.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "neighborhoodSize",
          "defaultValue": null,
          "description": "Tile neighborhood size (to avoid tile boundary artifacts). Defaults to 2 * size.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "seeds",
          "defaultValue": null,
          "description": "If provided, any non-zero valued pixels are used as seed locations. Pixels that touch (as specified by 'connectivity') are considered to belong to the same cluster.",
          "optional": true,
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Superpixel clustering based on SNIC (Simple Non-Iterative Clustering). Outputs a band of cluster IDs and the per-cluster averages for each of the input bands. If the 'seeds' image isn't provided as input, the output will include a 'seeds' band containing the generated seed locations. See: Achanta, Radhakrishna and Susstrunk, Sabine, 'Superpixels and Polygons using Simple Non-Iterative Clustering', CVPR, 2017.",
      "name": "algorithms/Image.Segmentation.SNIC",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "size",
          "defaultValue": 5,
          "description": "The superpixel seed location spacing, in pixels.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "gridType",
          "defaultValue": "square",
          "description": "Type of grid. One of 'square' or 'hex'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Selects seed pixels for clustering.",
      "name": "algorithms/Image.Segmentation.seedGrid",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "metric",
          "defaultValue": "sam",
          "description": "The spectral distance metric to use.  One of  'sam' (spectral angle mapper), 'sid' (spectral information divergence),  'sed' (squared euclidean distance), or 'emd' (earth movers distance).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "Connectedness kernel.  Defaults to a square of radius 1 (8-way connected).",
          "optional": true,
          "type": "Kernel"
        },
        {
          "argumentName": "useCentroid",
          "defaultValue": false,
          "description": "If true, distances are computed from the mean of all pixels under the kernel instead of the kernel's center pixel.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes the spectral/spatial erosion of an image by computing the spectral distance of each pixel under a structuring kernel from the centroid of all pixels under the kernel and taking the closest result.  See 'Spatial/spectral endmember extraction by multidimensional morphological operations.' IEEE transactions on geoscience and remote sensing 40.9 (2002): 2025-2041.\n",
      "name": "algorithms/Image.spectralErosion",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "metric",
          "defaultValue": "sam",
          "description": "The spectral distance metric to use.  One of  'sam' (spectral angle mapper), 'sid' (spectral information divergence),  'sed' (squared euclidean distance), or 'emd' (earth movers distance).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "Connectedness kernel.  Defaults to a square of radius 1 (8-way connected).",
          "optional": true,
          "type": "Kernel"
        },
        {
          "argumentName": "useCentroid",
          "defaultValue": false,
          "description": "If true, distances are computed from the mean of all pixels under the kernel instead of the kernel's center pixel.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes the spectral gradient over all bands of an image (or the first band if the image is Array typed) by computing the per-pixel difference between the spectral erosion and dilation with a given structuring kernel and distance metric. See: Plaza, Antonio, et al. 'Spatial/spectral endmember extraction by multidimensional morphological operations.' IEEE transactions on geoscience and remote sensing 40.9 (2002): 2025-2041.",
      "name": "algorithms/Image.spectralGradient",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "metric",
          "defaultValue": "sam",
          "description": "The spectral distance metric to use.  One of  'sam' (spectral angle mapper), 'sid' (spectral information divergence),  'sed' (squared euclidean distance), or 'emd' (earth movers distance).",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "kernel",
          "defaultValue": null,
          "description": "Connectedness kernel.  Defaults to a square of radius 1 (8-way connected).",
          "optional": true,
          "type": "Kernel"
        },
        {
          "argumentName": "useCentroid",
          "defaultValue": false,
          "description": "If true, distances are computed from the mean of all pixels under the kernel instead of the kernel's center pixel.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Computes the spectral/spatial dilation of an image by computing the spectral distance of each pixel under a structuring kernel from the centroid of all pixels under the kernel and taking the most distant result. See 'Spatial/spectral endmember extraction by multidimensional morphological operations.' IEEE transactions on geoscience and remote sensing 40.9 (2002): 2025-2041.\n",
      "name": "algorithms/Image.spectralDilation",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The first image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The second image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "metric",
          "defaultValue": "sam",
          "description": "The spectral distance metric to use.  One of  'sam' (spectral angle mapper), 'sid' (spectral information divergence),  'sed' (squared euclidean distance), or 'emd' (earth movers distance).",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Computes the per-pixel spectral distance between two images.  If the images are array based then only the first band of each image is used; otherwise all bands are involved in the distance computation.  The two images are therefore expected  to contain the same number of bands or have the same 1-dimensional array length.",
      "name": "algorithms/Image.spectralDistance",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to pixels within the connected component.",
          "type": "Reducer"
        },
        {
          "argumentName": "labelBand",
          "defaultValue": null,
          "description": "The name of the band to use to detect connectedness.  If unspecified, the first band is used.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "maxSize",
          "defaultValue": 256,
          "description": "Size of the neighborhood to consider when aggregating values.  Any objects larger than maxSize in either the horizontal or vertical dimension will be masked, since portions of the object might be outside of the neighborhood.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Applies a reducer to all of the pixels inside of each 'object'. Pixels are considered to belong to an object if they are connected (8-way) and have the same value in the 'label' band.  The label band is only used to identify the connectedness; the rest are provided as inputs to the reducer.",
      "name": "algorithms/Image.reduceConnectedComponents",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "numIterations",
          "defaultValue": 10,
          "description": "Number of iterations. Default 10.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "pValue",
          "defaultValue": 50,
          "description": "Significance level for normality test.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "neighborhoodSize",
          "defaultValue": 0,
          "description": "Neighborhood size.  The amount to extend each tile (overlap) when computing the clusters. This option is mutually exclusive with gridSize.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "gridSize",
          "defaultValue": null,
          "description": "Grid cell-size.  If greater than 0, kMeans will be run independently on cells of this size. This has the effect of limiting the size of any cluster to be gridSize or smaller.  This option is mutually exclusive with neighborhoodSize.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "uniqueLabels",
          "defaultValue": true,
          "description": "If true, clusters are assigned unique IDs. Otherwise, they repeat per tile or grid cell.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Performs G-Means clustering on the input image. Iteratively applies k-means followed by a normality test to automatically determine the number of clusters to use. The output contains a 'clusters' band containing the integer ID of the cluster that each pixel belongs to. The algorithm can work either on a fixed grid of non-overlapping cells (gridSize, which can be smaller than a tile) or on tiles with overlap (neighborhoodSize). The default is to use tiles with no overlap. Clusters in one cell or tile are unrelated to clusters in another. Any cluster that spans a cell or tile boundary may receive two different labels in the two halves. Any input pixels with partial masks are fully masked in the output. This algorithm is only expected to perform well for images with a narrow dynamic range (i.e. bytes or shorts).\nSee: G. Hamerly and C. Elkan. 'Learning the k in k-means'. NIPS, 2003.",
      "name": "algorithms/Image.Segmentation.GMeans",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "numClusters",
          "defaultValue": 8,
          "description": "Number of clusters.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "numIterations",
          "defaultValue": 20,
          "description": "Number of iterations.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "neighborhoodSize",
          "defaultValue": 0,
          "description": "Neighborhood size.  The amount to extend each tile (overlap) when computing the clusters. This option is mutually exclusive with gridSize.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "gridSize",
          "defaultValue": null,
          "description": "Grid cell-size.  If greater than 0, kMeans will be run independently on cells of this size. This has the effect of limiting the size of any cluster to be gridSize or smaller.  This option is mutually exclusive with neighborhoodSize.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "forceConvergence",
          "defaultValue": false,
          "description": "If true, an error is thrown if convergence is not achieved before numIterations.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "uniqueLabels",
          "defaultValue": true,
          "description": "If true, clusters are assigned unique IDs. Otherwise, they repeat per tile or grid cell.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Performs K-Means clustering on the input image. Outputs a 1-band image  containing the ID of the cluster that each pixel belongs to.  The algorithm can work either on a fixed grid of non-overlapping cells (gridSize, which can be smaller than a tile) or on tiles with overlap (neighborhoodSize). The default is to use tiles with no overlap.  Clusters in one cell or tile are unrelated to clusters in another.  Any cluster that spans a cell or tile boundary may receive two different labels in the two halves.  Any input pixels with partial masks are fully masked in the output.",
      "name": "algorithms/Image.Segmentation.KMeans",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "id",
          "description": "The asset ID of the image collection.",
          "type": "String"
        },
        {
          "argumentName": "version",
          "defaultValue": null,
          "description": "The version of the asset. -1 signifies the latest version.",
          "optional": true,
          "type": "Long"
        }
      ],
      "description": "Returns the image collection given its ID.",
      "name": "algorithms/ImageCollection.load",
      "returnType": "ImageCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to cast.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "bandTypes",
          "description": "A dictionary from band name to band types. Types can be PixelTypes or strings. The valid strings are: 'int8', 'int16', 'int32', 'int64', 'uint8', 'uint16', 'uint32', 'byte', 'short', 'int', 'long', 'float' and 'double'. Must include all bands already in any image in the collection. If this includes bands that are not already in an input image, they will be added to the image as transparent bands.",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "bandOrder",
          "description": "A list specifying the order of the bands in the result.Must match the keys of bandTypes.",
          "type": "List<String>"
        }
      ],
      "description": "Casts some or all bands of each image in an ImageCollection to the specified types.",
      "name": "algorithms/ImageCollection.cast",
      "returnType": "ImageCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "primary",
          "description": "The primary collection to join.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "secondary",
          "description": "The secondary collection to join.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "overwrite",
          "defaultValue": false,
          "description": "If true, bands with the same name will get overwritten. If false, bands with the same name will be renamed.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Makes a new collection that is a copy of the images in primary, adding all the bands from the image in secondary with a matching ID. If there's no matching image, the primary image is just copied. This is equivalent to a join on ID with merging of the bands of the result.\n\nNote that this algorithm assumes that for a matching pair of inputs, both have the same footprint and metadata.",
      "name": "algorithms/ImageCollection.combine",
      "returnType": "ImageCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Collection from which to extract trends.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "covariates",
          "defaultValue": null,
          "description": "Cofactors to use in the trend analysis.",
          "optional": true,
          "type": "ImageCollection"
        },
        {
          "argumentName": "windowSize",
          "defaultValue": 6,
          "description": "Short term trend analysis window size, in images.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Computes the long and short term trends of a time series or optionally, the trends of the ratio of the time series and a covariate.  The long term trend is estimated from the linear term of a regression on the full time series.  The short term trend is computed as the windowed minimum over the time series.\nThe time series and covariate series are expected to contain a single band each, and the time series is expected to be evenly spaced in time.  The output is 4 float bands: the long and short term trends, the t-test of the long term trend against the time series, and the Bruce Hansen test of parameter stability.",
      "name": "algorithms/ImageCollection.formaTrend",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "images",
          "description": "The images to include in the collection.",
          "type": "List<Image<unknown bands>>"
        }
      ],
      "description": "Returns the image collection containing the given images.",
      "name": "algorithms/ImageCollection.fromImages",
      "returnType": "ImageCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to extract data from.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "geometry",
          "description": "The region over which to extract data.",
          "type": "Geometry"
        },
        {
          "argumentName": "scale",
          "defaultValue": null,
          "description": "A nominal scale in meters of the projection to work in.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "crs",
          "defaultValue": {
            "crs": "EPSG:4326",
            "transform": [1, 0, 0, 0, 1, 0],
            "type": "Projection"
          },
          "description": "The projection to work in. If unspecified, defaults to EPSG:4326. If specified in addition to scale, the projection is rescaled to the specified scale.",
          "optional": true,
          "type": "Projection"
        },
        {
          "argumentName": "crsTransform",
          "defaultValue": null,
          "description": "The array of CRS transform values.  This is a row-major ordering of a 3x2 affine transform.  This option is mutually exclusive with the scale option, and will replace any transform already set on the given projection.",
          "optional": true,
          "type": "List<Float>"
        }
      ],
      "description": "Output an array of values for each [pixel, band, image] tuple in an ImageCollection.  The output contains rows of id, lon, lat, time, and all bands for each image that intersects each pixel in the given region.",
      "name": "algorithms/ImageCollection.getRegion",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to the given collection.",
          "type": "Reducer"
        },
        {
          "argumentName": "parallelScale",
          "defaultValue": 1,
          "description": "A scaling factor used to limit memory use; using a larger parallelScale (e.g. 2 or 4) may enable computations that run out of memory with the default.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Applies a reducer across all of the images in a collection.\nIf the reducer has a single input, it will be applied separately to each band of the collection; otherwise it must have the same number of inputs as the collection has bands.\nThe reducer output names determine the names of the output bands: reducers with multiple inputs will use the output names directly, while reducers with a single input will prefix the output name with the input band name (e.g. '10_mean', '20_mean', etc.).",
      "name": "algorithms/ImageCollection.reduce",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection1",
          "description": "The first collection to merge.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "collection2",
          "description": "The second collection to merge.",
          "type": "ImageCollection"
        }
      ],
      "description": "Merges two image collections into one. The result has all the images that were in either collection.",
      "name": "algorithms/ImageCollection.merge",
      "returnType": "ImageCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to mosaic.",
          "type": "ImageCollection"
        }
      ],
      "description": "Composites all the images in a collection, using the mask.",
      "name": "algorithms/ImageCollection.mosaic",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to mosaic.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "qualityBand",
          "description": "The name of the quality band in the collection.",
          "type": "String"
        }
      ],
      "description": "Composites all the images in a collection, using a quality band as a per-pixel ordering function.",
      "name": "algorithms/ImageCollection.qualityMosaic",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection.",
          "type": "ImageCollection"
        }
      ],
      "description": "Converts a collection to a single multi-band image containing all of the bands of every image in the collection.  Output bands are named by prefixing the existing band names with the image id from which it came (e.g.: 'image1_band1')",
      "name": "algorithms/ImageCollection.toBands",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the minimum value of each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.min",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the maximum value of each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.max",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the number of images with a valid mask at each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.count",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the sum of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.sum",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the product of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.product",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the mean of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.mean",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by setting each pixel to 1 iff all the non-masked values at that pixel are non-zero across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.and",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by setting each pixel to 1 iff any of the non-masked values at that pixel are non-zero across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.or",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the median of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.median",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The image collection to reduce.",
          "type": "ImageCollection"
        }
      ],
      "description": "Reduces an image collection by calculating the most common value at each pixel across the stack of all matching bands. Bands are matched by name.",
      "name": "algorithms/reduce.mode",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "dst",
          "type": "Annotation"
        },
        {
          "argumentName": "src",
          "description": "An annotation or a List of annotations to add as children of dst.",
          "type": "Object"
        }
      ],
      "description": "Append src as a child of dst.",
      "name": "algorithms/Annotation.append",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "annotation",
          "type": "Annotation"
        },
        {
          "argumentName": "attr",
          "type": "Dictionary<Object>"
        }
      ],
      "description": "Apply additional attributes to an annotation.",
      "name": "algorithms/Annotation.attr",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "cx",
          "description": "The x-axis coordinate of the center of the circle.",
          "type": "Float"
        },
        {
          "argumentName": "cy",
          "description": "The y-axis coordinate of the center of the circle.",
          "type": "Float"
        },
        {
          "argumentName": "r",
          "description": "The radius of the circle.",
          "type": "Float"
        }
      ],
      "description": "Creates a circle annotation.",
      "name": "algorithms/Annotation.circle",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "cx",
          "description": "The x-axis coordinate of the center of the ellipse.",
          "type": "Float"
        },
        {
          "argumentName": "cy",
          "description": "The y-axis coordinate of the center of the ellipse.",
          "type": "Float"
        },
        {
          "argumentName": "rx",
          "description": "The x-axis radius of the ellipse.",
          "type": "Float"
        },
        {
          "argumentName": "ry",
          "description": "The y-axis radius of the ellipse.",
          "type": "Float"
        }
      ],
      "description": "Creates an ellipse annotation.",
      "name": "algorithms/Annotation.ellipse",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "x",
          "description": "The x-axis coordinate of the upper-left corner of the rectangle.",
          "type": "Float"
        },
        {
          "argumentName": "y",
          "description": "The y-axis coordinate of the upper-left corner of the rectangle.",
          "type": "Float"
        },
        {
          "argumentName": "width",
          "description": "The width of the rectangle.",
          "type": "Float"
        },
        {
          "argumentName": "height",
          "description": "The height of the rectangle.",
          "type": "Float"
        },
        {
          "argumentName": "fill",
          "defaultValue": null,
          "description": "The color with which to fill the rectangle.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "radius",
          "defaultValue": null,
          "description": "For rounded rectangles, the radius of the circle to used to round off corners of the rectangle.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Creates a rectangle annotation.",
      "name": "algorithms/Annotation.rect",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "annotation",
          "type": "Annotation"
        },
        {
          "argumentName": "style",
          "type": "Dictionary<Object>"
        }
      ],
      "description": "Apply a style to an annotation.",
      "name": "algorithms/Annotation.style",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "x",
          "description": "The x-axis coordinate of the upper-left corner.",
          "type": "Float"
        },
        {
          "argumentName": "y",
          "description": "The y-axis coordinate of the upper-left corner.",
          "type": "Float"
        }
      ],
      "description": "Creates a SVG container. Any annotations added to the container are positioned relative to the container's x and y position, and inherit any styles applied to the container.",
      "name": "algorithms/Annotation.svg",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "x",
          "description": "The x-axis coordinate for the start of the text.",
          "type": "Float"
        },
        {
          "argumentName": "y",
          "description": "The y-axis coordinate for the start of the text.",
          "type": "Float"
        },
        {
          "argumentName": "text",
          "description": "The text to render.",
          "type": "String"
        },
        {
          "argumentName": "fontSize",
          "defaultValue": null,
          "description": "The size of the font to use in rendering the text (in pixels).",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Creates a text annotation.",
      "name": "algorithms/Annotation.text",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "attributes",
          "type": "Object"
        },
        {
          "argumentName": "style",
          "defaultValue": null,
          "optional": true,
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "transforms",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "children",
          "defaultValue": null,
          "optional": true,
          "type": "List<Annotation>"
        }
      ],
      "description": "Creates a Annotation.",
      "hidden": true,
      "name": "algorithms/Annotation",
      "returnType": "Annotation"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Appends the element to the end of list.",
      "name": "algorithms/List.add",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "other",
          "type": "List<Object>"
        }
      ],
      "description": "Concatenates the contents of other onto list.",
      "name": "algorithms/List.cat",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Returns true if list contains element.",
      "name": "algorithms/List.contains",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "other",
          "type": "List<Object>"
        }
      ],
      "description": "Returns true if list contains all of the elements of other, regardless of order.",
      "name": "algorithms/List.containsAll",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        }
      ],
      "description": "Returns a copy of list without duplicate elements.",
      "name": "algorithms/List.distinct",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "other",
          "type": "List<Object>"
        }
      ],
      "description": "Returns true if list contains the same elements as other, in the same order.",
      "name": "algorithms/List.equals",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "filter",
          "type": "Filter"
        }
      ],
      "description": "Filters a list to only the elements that match the given filter. To filter list items that aren't images or features, test a property named'item', e.g.: ee.Filter.gt('item', 3)",
      "name": "algorithms/List.filter",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        }
      ],
      "description": "Flattens any sublists into a single list.",
      "name": "algorithms/List.flatten",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Returns the number of elements in list equal to element.",
      "name": "algorithms/List.frequency",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "index",
          "type": "Integer"
        }
      ],
      "description": "Returns the element at the specified position in list.  A negative index counts backwards from the end of the list.",
      "name": "algorithms/List.get",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Returns the position of the first occurrence of target in list, or -1 if list does not contain target.",
      "name": "algorithms/List.indexOf",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "target",
          "type": "List<Object>"
        }
      ],
      "description": "Returns the starting position of the first occurrence of target within list, or -1 if there is no such occurrence.",
      "name": "algorithms/List.indexOfSublist",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "index",
          "type": "Integer"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Inserts element at the specified position in list. A negative index counts backwards from the end of the list.",
      "name": "algorithms/List.insert",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "function",
          "type": "Algorithm"
        },
        {
          "argumentName": "first",
          "type": "Object"
        }
      ],
      "description": "Iterate an algorithm over a list.  The algorithm is expected to take two objects, the current list item, and the result from the previous iteration or the value of first for the first iteration.",
      "name": "algorithms/List.iterate",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "separator",
          "defaultValue": "",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a string containing the elements of the list joined together with the specified separator between elements.",
      "name": "algorithms/List.join",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "target",
          "type": "List<Object>"
        }
      ],
      "description": "Returns the starting position of the last occurrence of target within list, or -1 if there is no such occurrence.",
      "name": "algorithms/List.lastIndexOfSubList",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        }
      ],
      "description": "Returns the number of elements in list.",
      "name": "algorithms/List.length",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "baseAlgorithm",
          "type": "Algorithm"
        }
      ],
      "description": "Map an algorithm over a list.  The algorithm is expected to take an Object and return an Object.",
      "name": "algorithms/List.map",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "reducer",
          "type": "Reducer"
        }
      ],
      "description": "Apply a reducer to a list.  If the reducer takes more than 1 input, then each element in the list is assumed to be a list of inputs.  If the reducer returns a single output, it is returned directly, otherwise returns a dictionary containing the named reducer outputs.",
      "name": "algorithms/List.reduce",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Removes the first occurrence of the specified element from list, if it is present.",
      "name": "algorithms/List.remove",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "other",
          "type": "List<Object>"
        }
      ],
      "description": "Removes from list all of the elements that are contained in other list.",
      "name": "algorithms/List.removeAll",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "type": "Object"
        },
        {
          "argumentName": "count",
          "type": "Integer"
        }
      ],
      "description": "Returns a new list containing value repeated count times.",
      "name": "algorithms/List.repeat",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "oldval",
          "type": "Object"
        },
        {
          "argumentName": "newval",
          "type": "Object"
        }
      ],
      "description": "Replaces the first occurrence of oldVal in list with newVal.",
      "name": "algorithms/List.replace",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "oldval",
          "type": "Object"
        },
        {
          "argumentName": "newval",
          "type": "Object"
        }
      ],
      "description": "Replaces all occurrences of oldVal in list with newVal.",
      "name": "algorithms/List.replaceAll",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        }
      ],
      "description": "Reverses the order of the elements in list.",
      "name": "algorithms/List.reverse",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "distance",
          "type": "Integer"
        }
      ],
      "description": "Rotates the elements of the list by the specified distance.",
      "name": "algorithms/List.rotate",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "start",
          "type": "Number"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "optional": true,
          "type": "Number"
        },
        {
          "argumentName": "step",
          "defaultValue": 1,
          "optional": true,
          "type": "Number"
        },
        {
          "argumentName": "count",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Generate a sequence of numbers from start to end (inclusive) in increments of step, or in count equally-spaced increments.  If end is not specified it is computed from start + step * count, so at least one of end or count must be specified.",
      "name": "algorithms/List.sequence",
      "returnType": "List<Number>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "index",
          "type": "Integer"
        },
        {
          "argumentName": "element",
          "type": "Object"
        }
      ],
      "description": "Replaces the value at the specified position in list with element.  A negative index counts backwards from the end of the list.",
      "name": "algorithms/List.set",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        }
      ],
      "description": "Returns the number of elements in list.",
      "name": "algorithms/List.size",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "start",
          "type": "Integer"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Returns a portion of list between the start index, inclusive, and end index, exclusive.  Negative values for start or end count backwards from the end of the list.  Values greater than the size of the list are legal but are truncated to the size of list.",
      "name": "algorithms/List.slice",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        }
      ],
      "description": "Sorts the list into ascending order.",
      "name": "algorithms/List.sort",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "start",
          "type": "Integer"
        },
        {
          "argumentName": "count",
          "type": "Integer"
        },
        {
          "argumentName": "other",
          "defaultValue": null,
          "optional": true,
          "type": "List<Object>"
        }
      ],
      "description": "Starting at the start index, removes count elements from list and insert the contents of other at that location.  If start is negative, it counts backwards from the end of the list.",
      "name": "algorithms/List.splice",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "pos1",
          "type": "Integer"
        },
        {
          "argumentName": "pos2",
          "type": "Integer"
        }
      ],
      "description": "Swaps the elements at the specified positions.  A negative position counts backwards from the end of the list.",
      "name": "algorithms/List.swap",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "list",
          "type": "List<Object>"
        },
        {
          "argumentName": "other",
          "type": "List<Object>"
        }
      ],
      "description": "Pairs the elements of two lists to create a list of two-element lists.  When the input lists are of different sizes, the final list has the same size as the shortest one.",
      "name": "algorithms/List.zip",
      "returnType": "List<List<Object>>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "defaultValue": null,
          "description": "An object to convert to a dictionary.  Either a JSON dictionary or a list of alternating key/value pairs.  Keys must be strings.",
          "optional": true,
          "type": "Object"
        }
      ],
      "description": "Constructs a dictionary.",
      "name": "algorithms/Dictionary",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "first",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "second",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "overwrite",
          "defaultValue": true,
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Combines two dictionaries.  In the case of duplicate names, the output will contain the value of the second dictionary unless overwrite is false.  Null values in both dictionaries are ignored / removed.",
      "name": "algorithms/Dictionary.combine",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "key",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns true if the dictionary contains the given key.",
      "name": "algorithms/Dictionary.contains",
      "returnType": "Boolean"
    },
    {
      "arguments": [
        {
          "argumentName": "keys",
          "type": "List<String>"
        },
        {
          "argumentName": "values",
          "type": "List<Object>"
        }
      ],
      "description": "Construct a dictionary from two parallel lists of keys and values.",
      "name": "algorithms/Dictionary.fromLists",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "key",
          "type": "String"
        }
      ],
      "description": "Extracts a named value from a dictionary.",
      "name": "algorithms/Dictionary.get",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        }
      ],
      "description": "Retrieve the keys of a dictionary as a list.  The keys will be sorted in natural order.",
      "name": "algorithms/Dictionary.keys",
      "returnType": "List<String>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "baseAlgorithm",
          "type": "Algorithm"
        }
      ],
      "description": "Map an algorithm over a dictionary.  The algorithm is expected to take 2 arguments, a key from the existing dictionary and the value it corresponds to, and return a new value for the given key.  If the algorithm returns null, the key is dropped.",
      "name": "algorithms/Dictionary.map",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "selectors",
          "description": "A list of keys names or regular expressions of key names to remove.",
          "type": "List<String>"
        },
        {
          "argumentName": "ignoreMissing",
          "defaultValue": false,
          "description": "Ignore selectors that don't match at least 1 key.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Returns a dictionary with the specified keys removed.",
      "name": "algorithms/Dictionary.remove",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "from",
          "description": "A list of keys to be renamed.",
          "type": "List<String>"
        },
        {
          "argumentName": "to",
          "description": "A list of the new names for the keys listed in the 'from' parameter.  Must have the same length as the 'from' list.",
          "type": "List<String>"
        },
        {
          "argumentName": "overwrite",
          "defaultValue": false,
          "description": "Allow overwriting existing properties with the same name.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Rename elements in a dictionary.",
      "name": "algorithms/Dictionary.rename",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "selectors",
          "description": "A list of keys or regular expressions to select.",
          "type": "List<String>"
        },
        {
          "argumentName": "ignoreMissing",
          "defaultValue": false,
          "description": "Ignore selectors that don't match at least 1 key.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Returns a dictionary with only the specified keys.",
      "name": "algorithms/Dictionary.select",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "key",
          "type": "String"
        },
        {
          "argumentName": "value",
          "type": "Object"
        }
      ],
      "description": "Set a value in a dictionary.",
      "name": "algorithms/Dictionary.set",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        }
      ],
      "description": "Returns the number of entries in a dictionary.",
      "name": "algorithms/Dictionary.size",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "keys",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Returns numeric values of a dictionary as an array. If no keys are specified, all values are returned in the natural ordering of the dictionary's keys. The default 'axis' is 0.",
      "name": "algorithms/Dictionary.toArray",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "keys",
          "defaultValue": null,
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Returns the values of a dictionary as a list.  If no keys are specified, all values are returned in the natural ordering of the dictionary's keys.",
      "name": "algorithms/Dictionary.values",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "dictionary",
          "description": "The dictionary to convert.",
          "type": "Dictionary<Object>"
        },
        {
          "argumentName": "names",
          "defaultValue": null,
          "description": "The order of the output bands.",
          "optional": true,
          "type": "List<String>"
        }
      ],
      "description": "Creates an image of constants from values in a dictionary. The bands of the image are ordered and named according to the names argument.  If no names are specified, the bands are sorted alpha-numerically.",
      "name": "algorithms/Dictionary.toImage",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "string1",
          "description": "The first string.",
          "type": "String"
        },
        {
          "argumentName": "string2",
          "description": "The second string.",
          "type": "String"
        }
      ],
      "description": "Concatenates two strings.",
      "name": "algorithms/String.cat",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "string1",
          "description": "The string to compare.",
          "type": "String"
        },
        {
          "argumentName": "string2",
          "description": "The string to be compared.",
          "type": "String"
        }
      ],
      "description": "Compares two strings lexicographically. Returns: the value 0 if the two strings are lexicographically equal; a value less than 0 if string1 is less than string2;  and a value greater than 0 if string1 is lexicographically greater than string2. ",
      "name": "algorithms/String.compareTo",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string to decode.",
          "type": "String"
        }
      ],
      "description": "Decodes a JSON string.",
      "name": "algorithms/String.decodeJSON",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "target",
          "description": "The string to search.",
          "type": "String"
        },
        {
          "argumentName": "pattern",
          "description": "The string to find.",
          "type": "String"
        }
      ],
      "description": "Searches a string for the first occurrence of a substring.  Returns the index of the first match, or -1.",
      "name": "algorithms/String.index",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string from which to get the length.",
          "type": "String"
        }
      ],
      "description": "Returns the length of a string.",
      "name": "algorithms/String.length",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The string in which to search.",
          "type": "String"
        },
        {
          "argumentName": "regex",
          "description": "The regular expression to match.",
          "type": "String"
        },
        {
          "argumentName": "flags",
          "defaultValue": "",
          "description": "A string specifying a combination of regular expression flags, specifically one or more of: 'g' (global match) or 'i' (ignore case)",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Matches a string against a regular expression.  Returns a list of matching strings.",
      "name": "algorithms/String.match",
      "returnType": "List<String>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The string in which to search.",
          "type": "String"
        },
        {
          "argumentName": "regex",
          "description": "The regular expression to match.",
          "type": "String"
        },
        {
          "argumentName": "replacement",
          "description": "The string that replaces the matched substring.",
          "type": "String"
        },
        {
          "argumentName": "flags",
          "defaultValue": "",
          "description": "A string specifying a combination of regular expression flags, specifically one or more of: 'g' (global match) or 'i' (ignore case)",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a new string with some or all matches of a pattern replaced.",
      "name": "algorithms/String.replace",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "target",
          "description": "The string to search.",
          "type": "String"
        },
        {
          "argumentName": "pattern",
          "description": "The string to find.",
          "type": "String"
        }
      ],
      "description": "Searches a string for the last occurrence of a substring.  Returns the index of the first match, or -1.",
      "name": "algorithms/String.rindex",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string to subset.",
          "type": "String"
        },
        {
          "argumentName": "start",
          "description": "The beginning index, inclusive.  Negative numbers count backwards from the end of the string.",
          "type": "Integer"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "description": "The ending index, exclusive.  Defaults to the length of the string. Negative numbers count backwards from the end of the string.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Returns a substring of the given string. If the specified range exceeds the length of the string, returns a shorter substring.",
      "name": "algorithms/String.slice",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string to split.",
          "type": "String"
        },
        {
          "argumentName": "regex",
          "description": "A regular expression to split on. If regex is the empty string, then the input string is split into individual characters.",
          "type": "String"
        },
        {
          "argumentName": "flags",
          "defaultValue": "",
          "description": "A string specifying the regular expression flag: 'i' (ignore case)",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Splits a string on a regular expression, Returning a list of strings.",
      "name": "algorithms/String.split",
      "returnType": "List<String>"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string to convert to lower case.",
          "type": "String"
        }
      ],
      "description": "Converts all of the characters in a string to lower case.",
      "name": "algorithms/String.toLowerCase",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string to convert to upper case.",
          "type": "String"
        }
      ],
      "description": "Converts all of the characters in a string to upper case.",
      "name": "algorithms/String.toUpperCase",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "string",
          "description": "The string to trim.",
          "type": "String"
        }
      ],
      "description": "Returns a string whose value is the original string, with any leading and trailing whitespace removed.",
      "name": "algorithms/String.trim",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The object to convert.",
          "type": "Object"
        }
      ],
      "description": "Converts the input to a string.",
      "name": "algorithms/String",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Adds the first value to the second.",
      "name": "algorithms/Number.add",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Subtracts the second value from the first.",
      "name": "algorithms/Number.subtract",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Multiplies the first value by the second.",
      "name": "algorithms/Number.multiply",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Divides the first value by the second, returning 0 for division by 0.",
      "name": "algorithms/Number.divide",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Selects the maximum of the first and second values.",
      "name": "algorithms/Number.max",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Selects the minimum of the first and second values.",
      "name": "algorithms/Number.min",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Selects the value of the first value.",
      "name": "algorithms/Number.first",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Selects the first value if it is non-zero, and the second value otherwise.",
      "name": "algorithms/Number.firstNonZero",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Selects the first value if it is non-zero, and the second value otherwise.",
      "name": "algorithms/Number.first_nonzero",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the remainder of the first value divided by the second.",
      "name": "algorithms/Number.mod",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff both values are non-zero.",
      "name": "algorithms/Number.and",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff either input value is non-zero.",
      "name": "algorithms/Number.or",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff the first value is less than the second.",
      "name": "algorithms/Number.lt",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff the first value is less than or equal to the second.",
      "name": "algorithms/Number.lte",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff the first value is greater than the second.",
      "name": "algorithms/Number.gt",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff the first value is greater than or equal to the second.",
      "name": "algorithms/Number.gte",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff the first value is equal to the second.",
      "name": "algorithms/Number.eq",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Returns 1 iff the first value is not equal to the second.",
      "name": "algorithms/Number.neq",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Raises the first value to the power of the second.",
      "name": "algorithms/Number.pow",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the angle formed by the 2D vector [x, y].",
      "name": "algorithms/Number.atan2",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the magnitude of the 2D vector [x, y].",
      "name": "algorithms/Number.hypot",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise AND of the input values.",
      "name": "algorithms/Number.bitwiseAnd",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise AND of the input values.",
      "name": "algorithms/Number.bitwise_and",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise OR of the input values.",
      "name": "algorithms/Number.bitwiseOr",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise OR of the input values.",
      "name": "algorithms/Number.bitwise_or",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise XOR of the input values.",
      "name": "algorithms/Number.bitwiseXor",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise XOR of the input values.",
      "name": "algorithms/Number.bitwise_xor",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the left shift of v1 by v2 bits.",
      "name": "algorithms/Number.leftShift",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the left shift of v1 by v2 bits.",
      "name": "algorithms/Number.left_shift",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the signed right shift of v1 by v2 bits.",
      "name": "algorithms/Number.rightShift",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the signed right shift of v1 by v2 bits.",
      "name": "algorithms/Number.right_shift",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Number"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the regularized lower incomplete Gamma function \u03b3(x,a).",
      "name": "algorithms/Number.gammainc",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
      "name": "algorithms/Number.bitwiseNot",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
      "name": "algorithms/Number.bitwise_not",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Calculates the number of one-bits in the 64-bit two's complement binary representation of the input.",
      "name": "algorithms/Number.bitCount",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Returns 0 if the input is non-zero, and 1 otherwise.",
      "name": "algorithms/Number.not",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the sine of the input in radians.",
      "name": "algorithms/Number.sin",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the cosine of the input in radians.",
      "name": "algorithms/Number.cos",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the tangent of the input in radians.",
      "name": "algorithms/Number.tan",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the arc sine in radians of the input.",
      "name": "algorithms/Number.asin",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the arc cosine in radians of the input.",
      "name": "algorithms/Number.acos",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the arc tangent in radians of the input.",
      "name": "algorithms/Number.atan",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the hyperbolic sine of the input.",
      "name": "algorithms/Number.sinh",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the hyperbolic cosine of the input.",
      "name": "algorithms/Number.cosh",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the hyperbolic tangent of the input.",
      "name": "algorithms/Number.tanh",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the square root of the input.",
      "name": "algorithms/Number.sqrt",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the natural logarithm of the input.",
      "name": "algorithms/Number.log",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the base-10 logarithm of the input.",
      "name": "algorithms/Number.log10",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the Euler's number e raised to the power of the input.",
      "name": "algorithms/Number.exp",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the absolute value of the input.",
      "name": "algorithms/Number.abs",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the largest integer less than or equal to the input.",
      "name": "algorithms/Number.floor",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the smallest integer greater than or equal to the input.",
      "name": "algorithms/Number.ceil",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the integer nearest to the input.",
      "name": "algorithms/Number.round",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the cubic root of the input.",
      "name": "algorithms/Number.cbrt",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the gamma function of the input.",
      "name": "algorithms/Number.gamma",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the digamma function of the input.",
      "name": "algorithms/Number.digamma",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the trigamma function of the input.",
      "name": "algorithms/Number.trigamma",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the error function of the input.",
      "name": "algorithms/Number.erf",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the complementary error function of the input.",
      "name": "algorithms/Number.erfc",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the inverse error function of the input.",
      "name": "algorithms/Number.erfInv",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the inverse complementary error function of the input.",
      "name": "algorithms/Number.erfcInv",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Computes the Lanczos approximation of the input.",
      "name": "algorithms/Number.lanczos",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Number.uint8",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Number.toUint8",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 8-bit integer.",
      "name": "algorithms/Number.int8",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 8-bit integer.",
      "name": "algorithms/Number.toInt8",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 16-bit integer.",
      "name": "algorithms/Number.uint16",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 16-bit integer.",
      "name": "algorithms/Number.toUint16",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Number.int32",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Number.toInt32",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 32-bit integer.",
      "name": "algorithms/Number.uint32",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 32-bit integer.",
      "name": "algorithms/Number.toUint32",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Number.int16",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Number.toInt16",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Number.byte",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Number.toByte",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Number.short",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Number.toShort",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Number.int",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Number.toInt",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Number.long",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Number.toLong",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Number.int64",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Number.toInt64",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a 32-bit float.",
      "name": "algorithms/Number.float",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a 32-bit float.",
      "name": "algorithms/Number.toFloat",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a 64-bit float.",
      "name": "algorithms/Number.double",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input value.",
          "type": "Number"
        }
      ],
      "description": "Casts the input value to a 64-bit float.",
      "name": "algorithms/Number.toDouble",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "number",
          "description": "The number to convert to a string.",
          "type": "Number"
        },
        {
          "argumentName": "pattern",
          "defaultValue": "%s",
          "description": "A printf-style format string. For example, '%.2f' produces numbers formatted like '3.14', and '%05d' produces numbers formatted like '00042'. The format string must satisfy the following criteria:\n1. Zero or more prefix characters.\n2. Exactly one '%'.\n3. Zero or more modifier characters in the set [#-+ 0,(.\\d].\n4. Exactly one conversion character in the set [sdoxXeEfgGaA].\n5. Zero or more suffix characters.\n \nFor more about format strings, see https://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Convert a number to a string using printf-style formatting.",
      "name": "algorithms/Number.format",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The string to convert to a number.",
          "type": "String"
        },
        {
          "argumentName": "radix",
          "defaultValue": 10,
          "description": "An integer representing the base number system from which to convert. If input is not an integer, radix must equal 10 or not be specified.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Convert a string to a number.",
      "name": "algorithms/Number.parse",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "crs",
          "description": "The base coordinate reference system of this Projection, given as a well-known authority code (e.g. 'EPSG:4326') or a WKT string.",
          "type": "Object"
        },
        {
          "argumentName": "transform",
          "defaultValue": null,
          "description": "The transform between projected coordinates and the base coordinate system, specified as a 2x3 affine transform matrix in row-major order: [xScale, xShearing, xTranslation, yShearing, yScale, yTranslation]. May not specify both this and 'transformWkt'.",
          "optional": true,
          "type": "List<Object>"
        },
        {
          "argumentName": "transformWkt",
          "defaultValue": null,
          "description": "The transform between projected coordinates and the base coordinate system, specified as a WKT string. May not specify both this and 'transform'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns a Projection with the given base coordinate system and the given transform between projected coordinates and the base. If no transform is specified, the identity transform is assumed.",
      "name": "algorithms/Projection",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "crs",
          "description": "The base coordinate reference system of this Projection, given as a well-known authority code (e.g. 'EPSG:4326') or a WKT string.",
          "type": "Object"
        },
        {
          "argumentName": "transform",
          "defaultValue": null,
          "description": "The transform between projected coordinates and the base coordinate system, specified as a 2x3 affine transform matrix in row-major order: [xScale, xShearing, xTranslation, yShearing, yScale, yTranslation]. May not specify both this and 'transformWkt'.",
          "optional": true,
          "type": "List<Object>"
        },
        {
          "argumentName": "transformWkt",
          "defaultValue": null,
          "description": "The transform between projected coordinates and the base coordinate system, specified as a WKT string. May not specify both this and 'transform'.",
          "optional": true,
          "type": "String"
        }
      ],
      "deprecated": true,
      "deprecationReason": "Use Projection().",
      "description": "Returns a Projection with the given base coordinate system and the given transform between projected coordinates and the base. If no transform is specified, the identity transform is assumed.",
      "name": "algorithms/Proj",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "type": "Projection"
        },
        {
          "argumentName": "meters",
          "type": "Float"
        }
      ],
      "description": "Returns the projection scaled such that its units have the given scale in linear meters, as measured at the point of true scale.",
      "name": "algorithms/Projection.atScale",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "type": "Projection"
        }
      ],
      "description": "Returns the authority code (e.g. 'EPSG:4326') for the base coordinate system of this projection, or null if the base coordinate system is not found in any available database.",
      "name": "algorithms/Projection.crs",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "proj",
          "type": "Projection"
        }
      ],
      "description": "Returns the linear scale in meters of the units of this projection, as measured at the point of true scale.",
      "name": "algorithms/Projection.nominalScale",
      "returnType": "Float"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "type": "Projection"
        },
        {
          "argumentName": "x",
          "type": "Float"
        },
        {
          "argumentName": "y",
          "type": "Float"
        }
      ],
      "description": "Returns the projection scaled by the given amount in each axis.",
      "name": "algorithms/Projection.scale",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "type": "Projection"
        }
      ],
      "description": "Returns a WKT representation of the transform of this Projection. This is the transform that converts from projected coordinates to the base coordinate system.",
      "name": "algorithms/Projection.transform",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "type": "Projection"
        },
        {
          "argumentName": "x",
          "type": "Float"
        },
        {
          "argumentName": "y",
          "type": "Float"
        }
      ],
      "description": "Returns the projection translated by the given amount in each axis.",
      "name": "algorithms/Projection.translate",
      "returnType": "Projection"
    },
    {
      "arguments": [
        {
          "argumentName": "projection",
          "type": "Projection"
        }
      ],
      "description": "Returns a WKT representation of the base coordinate system of this Projection.",
      "name": "algorithms/Projection.wkt",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "url",
          "description": "The Blob's Google Cloud Storage URL.",
          "type": "String"
        }
      ],
      "description": "Loads a Blob from a Google Cloud Storage URL.",
      "name": "algorithms/Blob",
      "returnType": "Blob"
    },
    {
      "arguments": [
        {
          "argumentName": "blob",
          "type": "Blob"
        },
        {
          "argumentName": "encoding",
          "defaultValue": null,
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Returns the contents of the blob as a String.",
      "name": "algorithms/Blob.string",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "blob",
          "type": "Blob"
        }
      ],
      "description": "Returns the Blob's Google Cloud Storage URL.",
      "name": "algorithms/Blob.url",
      "returnType": "String"
    },
    {
      "arguments": [
        {
          "argumentName": "feature",
          "description": "The object from which to select array properties.",
          "type": "Feature"
        },
        {
          "argumentName": "properties",
          "description": "The property selectors for each array element.",
          "type": "List<String>"
        }
      ],
      "description": "Creates an array from the given properties of an object, which must all be numbers.",
      "name": "algorithms/Feature.toArray",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The input collection from which properties will be selected.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "properties",
          "description": "The properties to select.",
          "type": "List<String>"
        },
        {
          "argumentName": "name",
          "defaultValue": "array",
          "description": "The name of the new array property.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Add a 1-D Array to each feature in a collection by combining a list of properties for each feature into a 1-D Array. All of the properties must be numeric values.  If a feature doesn't contain all of the named properties, or any of them aren't numeric, the feature will be dropped from the resulting collection.",
      "name": "algorithms/FeatureCollection.makeArray",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis",
          "description": "Axis along which to perform the cumulative sum.",
          "type": "Integer"
        },
        {
          "argumentName": "reducer",
          "defaultValue": null,
          "description": "Reducer to accumulate values. Default is SUM, to produce the cumulative sum of each vector along the given axis.",
          "optional": true,
          "type": "Reducer"
        }
      ],
      "description": "Accumulates elements of each array pixel along the given axis, by setting each element of the result array pixel to the reduction of elements in that pixel along the given axis, up to and including the current position on the axis. May be used to make a cumulative sum, a monotonically increasing sequence, etc.",
      "name": "algorithms/Image.arrayAccum",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "First array image to concatenate.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "Second array image to concatenate.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis",
          "description": "Axis to concatenate along.",
          "type": "Integer"
        }
      ],
      "description": "Creates an array image by concatenating each array pixel along the given axis in each band.",
      "name": "algorithms/Image.arrayCat",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image of multidimensional pixels to flatten.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "coordinateLabels",
          "description": "Name of each position along each axis. For example, 2x2 arrays with axes meaning 'day' and 'color' could have labels like [['monday', 'tuesday'], ['red', 'green']], resulting in band names'monday_red', 'monday_green', 'tuesday_red', and 'tuesday_green'.",
          "type": "List<List<String>>"
        },
        {
          "argumentName": "separator",
          "defaultValue": "_",
          "description": "Separator between array labels in each band name.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Converts a single band image of equal-shape multidimensional pixels to an image of scalar pixels, with one band for each element of the array.",
      "name": "algorithms/Image.arrayFlatten",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Array to get an element from.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "position",
          "description": "The coordinates of the element to get. There must be as many scalar bands as there are dimensions in the input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "For each band, an output band of the same name is created with the value at the given position extracted from the input multidimensional pixel in that band.",
      "name": "algorithms/Image.arrayGet",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns the number of dimensions in each array band, and 0 for scalar image bands.",
      "name": "algorithms/Image.arrayDimensions",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "First array image of 1-D vectors.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "Second array image of 1-D vectors.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the dot product of each pair of 1-D arrays in the bands of the input images.",
      "name": "algorithms/Image.arrayDotProduct",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis",
          "description": "The axis along which to take the length.",
          "type": "Integer"
        }
      ],
      "description": "Returns the length of each pixel's array along the given axis.",
      "name": "algorithms/Image.arrayLength",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns a 1D array image with the length of each array axis.",
      "name": "algorithms/Image.arrayLengths",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Array image to mask.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "mask",
          "description": "Array image to mask with.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Creates an array image where each array-valued pixel is masked with another array-valued pixel, retaining only the elements where the mask is non-zero. If the mask image has one band it will be applied to all the bands of 'input', otherwise they must have the same number of bands.",
      "name": "algorithms/Image.arrayMask",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axes",
          "description": "The axes to retain. Other axes will be discarded and must be at most length 1.",
          "type": "List<Integer>"
        }
      ],
      "description": "Projects the array in each pixel to a lower dimensional space by specifying the axes to retain. Dropped axes must be at most length 1.",
      "name": "algorithms/Image.arrayProject",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply",
          "type": "Reducer"
        },
        {
          "argumentName": "axes",
          "description": "The list of array axes to reduce in each pixel.  The output will have a length of 1 in all these axes.",
          "type": "List<Integer>"
        },
        {
          "argumentName": "fieldAxis",
          "defaultValue": null,
          "description": "The axis for the reducer's input and output fields.  Only required if the reducer has multiple inputs or outputs.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Reduces elements of each array pixel.",
      "name": "algorithms/Image.arrayReduce",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Image of array pixels to be repeated.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis",
          "description": "Axis along which to repeat each pixel's array.",
          "type": "Integer"
        },
        {
          "argumentName": "copies",
          "description": "Number of copies of each pixel.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Repeats each array pixel along the given axis. Each output pixel will have the shape of the input pixel, except length along the repeated axis, which will be multiplied by the number of copies.",
      "name": "algorithms/Image.arrayRepeat",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input array image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "description": "Axis to subset.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "start",
          "defaultValue": null,
          "description": "The coordinate of the first slice (inclusive) along 'axis'. Negative numbers are used to position the start of slicing relative to the end of the array, where -1 starts at the last position on the axis, -2 starts at the next to last position, etc. There must one band for start indices, or one band per 'input' band. If this argument is not set or masked at some pixel, then the slice at that pixel will start at index 0.",
          "optional": true,
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "description": "The coordinate (exclusive) at which to stop taking slices. By default this will be the length of the given axis. Negative numbers are used to position the end of slicing relative to the end of the array, where -1 will exclude the last position, -2 will exclude the last two positions, etc. There must be one band for end indices, or one band per 'input' band. If this argument is not set or masked at some pixel, then the slice at that pixel will end just after the last index.",
          "optional": true,
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "step",
          "defaultValue": 1,
          "description": "The separation between slices along 'axis'; a slice will be taken at each whole multiple of 'step' from 'start' (inclusive) to 'end' (exclusive). Must be positive.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a subarray by slicing out each position along the given axis from the 'start' (inclusive) to 'end' (exclusive) by increments of 'step'. The result will have as many dimensions as the input, and the same length in all directions except the slicing axis, where the length will be the number of positions from 'start' to 'end' by 'step' that are in range of the input array's length along 'axis'. This means the result can be length 0 along the given axis if start=end, or if the start or end values are entirely out of range.",
      "name": "algorithms/Image.arraySlice",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Array image to sort.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "keys",
          "defaultValue": null,
          "description": "Optional keys to sort by. If not provided, the values are used as the keys. The keys can only have multiple elements along one axis, which determines the direction to sort in.",
          "optional": true,
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Sorts elements of each array pixel along one axis.",
      "name": "algorithms/Image.arraySort",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis1",
          "defaultValue": 0,
          "description": "First axis to swap.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "axis2",
          "defaultValue": 1,
          "description": "Second axis to swap.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Transposes two dimensions of each array pixel.",
      "name": "algorithms/Image.arrayTranspose",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Input image.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis1",
          "defaultValue": 0,
          "description": "First axis to swap.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "axis2",
          "defaultValue": 1,
          "description": "Second axis to swap.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Transposes two dimensions of each array pixel.",
      "name": "algorithms/Image.matrixTranspose",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "size",
          "description": "The length of each axis.",
          "type": "Integer"
        }
      ],
      "description": "Creates an image where each pixel is a 2D identity matrix of the given size.",
      "name": "algorithms/Image.matrixIdentity",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image of bands to convert to an array per pixel. Bands must have scalar pixels, or array pixels with equal dimensionality.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "description": "Axis to concatenate along; must be at least 0 and at most the dimension of the inputs. If the axis equals the dimension of the inputs, the result will have 1 more dimension than the inputs.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Concatenates pixels from each band into a single array per pixel. The result will be masked if any input bands are masked.",
      "name": "algorithms/Image.toArray",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "Image collection to convert to an array image. Bands must have scalar values, not array values.",
          "type": "ImageCollection"
        }
      ],
      "description": "Converts an image collection into an image of 2D arrays.  At each pixel, the images that have valid (unmasked) values in all bands are laid out along the first axis of the array in the order they appear in the image collection.  The bands of each image are laid out along the second axis of the array, in the order the bands appear in that image.  The array element type will be the union of the types of each band.",
      "name": "algorithms/ImageCollection.toArray",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "Images to concatenate. A separate concatenation is done per band, so all the images must have the same dimensionality and shape per band, except length along the concatenation axis.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "description": "Axis to concatenate along; must be at least 0 and at most the minimum dimension of any band in the collection.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Concatenates multiple images into a single array image. The result will be masked if any input is masked.",
      "name": "algorithms/ImageCollection.toArrayPerBand",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "values",
          "description": "An existing array to cast, or a number/list of numbers/nested list of numbers of any depth to create an array from. For nested lists, all inner arrays at the same depth must have the same length, and numbers may only be present at the deepest level.",
          "type": "Object"
        },
        {
          "argumentName": "pixelType",
          "defaultValue": null,
          "description": "The type of each number in the values argument. If the pixel type is not provided, it will be inferred from the numbers in 'values'. If there aren't any numbers in 'values', this type must be provided.",
          "optional": true,
          "type": "PixelType"
        }
      ],
      "description": "Returns an array with the given coordinates.",
      "name": "algorithms/Array",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to accumulate.",
          "type": "Array"
        },
        {
          "argumentName": "axis",
          "description": "Axis along which to perform the accumulation.",
          "type": "Integer"
        },
        {
          "argumentName": "reducer",
          "defaultValue": null,
          "description": "Reducer to accumulate values. Default is SUM, to produce the cumulative sum of each vector along the given axis.",
          "optional": true,
          "type": "Reducer"
        }
      ],
      "description": "Accumulates elements of an array along the given axis, by setting each element of the result to the reduction of elements along that axis up to and including the current position. May be used to make a cumulative sum, a monotonically increasing sequence, etc.",
      "name": "algorithms/Array.accum",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "type": "Number"
        }
      ],
      "description": "Convert the bits of an integer to an Array.  The array has as many elements as the position of the highest set bit, or a single 0 for a value of 0.",
      "name": "algorithms/Array.bitsToArray",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "arrays",
          "description": "Arrays to concatenate.",
          "type": "List<Array>"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "description": "Axis to concatenate along.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Concatenates multiple arrays into a single array along the given axis.  Each array must have the same dimensionality and the same length on all axes except the concatenation axis.",
      "name": "algorithms/Array.cat",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array to cut.",
          "type": "Array"
        },
        {
          "argumentName": "position",
          "description": "Cut an array along one or more axes.  The positions args specifies either a single value for each axis of the array, or -1, indicating the whole axis.  The output will be an array that has the same dimensions as the input, with a length of 1 on each axis that was not -1 in the positions array.",
          "type": "List<Integer>"
        }
      ],
      "description": "Cut an array along one or more axes.",
      "name": "algorithms/Array.cut",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array1",
          "description": "The first 1-D array.",
          "type": "Array"
        },
        {
          "argumentName": "array2",
          "description": "The second 1-D array.",
          "type": "Array"
        }
      ],
      "description": "Compute the dot product between two 1-D arrays.",
      "name": "algorithms/Array.dotProduct",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array to extract from.",
          "type": "Array"
        },
        {
          "argumentName": "position",
          "description": "The coordinates of the element to get.",
          "type": "List<Integer>"
        }
      ],
      "description": "Extracts the value at the given position from the input array.",
      "name": "algorithms/Array.get",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "size",
          "description": "The length of each axis.",
          "type": "Integer"
        }
      ],
      "description": "Creates a 2D identity matrix of the given size.",
      "name": "algorithms/Array.identity",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array from which to extract the axis lengths.",
          "type": "Array"
        }
      ],
      "description": "Returns a 1-D EEArray containing the length of each dimension of the given EEArray.",
      "name": "algorithms/Array.length",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "Array to mask.",
          "type": "Array"
        },
        {
          "argumentName": "mask",
          "description": "Mask array.",
          "type": "Array"
        }
      ],
      "description": "Creates a subarray by slicing out each position in an input array that is parallel to a non-zero element of the given mask array.",
      "name": "algorithms/Array.mask",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to project.",
          "type": "Array"
        },
        {
          "argumentName": "axes",
          "description": "The axes to project onto. Other axes will be discarded, and must be at most length 1.",
          "type": "List<Integer>"
        }
      ],
      "description": "Projects an array to a lower dimensional space by specifying the axes to retain. Dropped axes must be at most length 1.",
      "name": "algorithms/Array.project",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array.",
          "type": "Array"
        },
        {
          "argumentName": "reducer",
          "description": "The reducer to apply",
          "type": "Reducer"
        },
        {
          "argumentName": "axes",
          "description": "The list of axes over which to reduce.  The output will have a length of 1 in all these axes.",
          "type": "List<Integer>"
        },
        {
          "argumentName": "fieldAxis",
          "defaultValue": null,
          "description": "The axis for the reducer's input and output fields.  Only required if the reducer has multiple inputs or outputs.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Apply a reducer to an array by collapsing all the input values along each specified axis into a single output value computed by the reducer.",
      "name": "algorithms/Array.reduce",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to repeat.",
          "type": "Array"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "description": "The axis along which to repeat the array.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "copies",
          "defaultValue": 2,
          "description": "The number of copies of this array to concatenate along the given axis.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Repeats the array along the given axis. The result will have the shape of the input, except length along the repeated axis will be multiplied by the given number of copies.",
      "name": "algorithms/Array.repeat",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to slice.",
          "type": "Array"
        },
        {
          "argumentName": "axis",
          "defaultValue": 0,
          "description": "The axis to slice on.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "start",
          "defaultValue": 0,
          "description": "The coordinate of the first slice (inclusive) along 'axis'. Negative numbers are used to position the start of slicing relative to the end of the array, where -1 starts at the last position on the axis, -2 starts at the next to last position, etc.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "end",
          "defaultValue": null,
          "description": "The coordinate (exclusive) at which to stop taking slices. By default this will be the length of the given axis. Negative numbers are used to position the end of slicing relative to the end of the array, where -1 will exclude the last position, -2 will exclude the last two positions, etc.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "step",
          "defaultValue": 1,
          "description": "The separation between slices along 'axis'; a slice will be taken at each whole multiple of 'step' from 'start' (inclusive) to 'end' (exclusive). Must be positive.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a subarray by slicing out each position along the given axis from the 'start' (inclusive) to 'end' (exclusive) by increments of 'step'. The result will have as many dimensions as the input, and the same length in all directions except the slicing axis, where the length will be the number of positions from 'start' to 'end' by 'step' that are in range of the input array's length along 'axis'. This means the result can be length 0 along the given axis if start=end, or if the start or end values are entirely out of range.",
      "name": "algorithms/Array.slice",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array image to sort.",
          "type": "Array"
        },
        {
          "argumentName": "keys",
          "defaultValue": null,
          "description": "Optional keys to sort by. If not provided, the values are used as the keys. The keys can only have multiple elements along one axis, which determines the direction to sort in.",
          "optional": true,
          "type": "Array"
        }
      ],
      "description": "Sorts elements of the array along one axis.",
      "name": "algorithms/Array.sort",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to transpose.",
          "type": "Array"
        },
        {
          "argumentName": "axis1",
          "defaultValue": 0,
          "description": "First axis to swap.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "axis2",
          "defaultValue": 1,
          "description": "Second axis to swap.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Transposes two dimensions of an array.",
      "name": "algorithms/Array.transpose",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to transpose.",
          "type": "Array"
        },
        {
          "argumentName": "axis1",
          "defaultValue": 0,
          "description": "First axis to swap.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "axis2",
          "defaultValue": 1,
          "description": "Second axis to swap.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Transposes two dimensions of an array.",
      "name": "algorithms/Array.matrixTranspose",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "A square, 2D array from which to compute the eigenvalue decomposition.",
          "type": "Array"
        }
      ],
      "description": "Computes the real eigenvectors and eigenvalues of a square 2D array of A rows and A columns. Returns an array with A rows and A+1 columns, where each row contains an eigenvalue in the first column, and the corresponding eigenvector in the remaining A columns. The rows are sorted by eigenvalue, in descending order.",
      "name": "algorithms/Array.eigen",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "Array to convert.",
          "type": "Array"
        }
      ],
      "description": "Turns an Array into a list of lists of numbers.",
      "name": "algorithms/Array.toList",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
      "name": "algorithms/Array.bitwiseNot",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
      "name": "algorithms/Array.bitwise_not",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the number of one-bits in the 64-bit two's complement binary representation of the input.",
      "name": "algorithms/Array.bitCount",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 0 if the input is non-zero, and 1 otherwise.",
      "name": "algorithms/Array.not",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the sine of the input in radians.",
      "name": "algorithms/Array.sin",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the cosine of the input in radians.",
      "name": "algorithms/Array.cos",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the tangent of the input in radians.",
      "name": "algorithms/Array.tan",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the arc sine in radians of the input.",
      "name": "algorithms/Array.asin",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the arc cosine in radians of the input.",
      "name": "algorithms/Array.acos",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the arc tangent in radians of the input.",
      "name": "algorithms/Array.atan",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the hyperbolic sine of the input.",
      "name": "algorithms/Array.sinh",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the hyperbolic cosine of the input.",
      "name": "algorithms/Array.cosh",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the hyperbolic tangent of the input.",
      "name": "algorithms/Array.tanh",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the square root of the input.",
      "name": "algorithms/Array.sqrt",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the natural logarithm of the input.",
      "name": "algorithms/Array.log",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the base-10 logarithm of the input.",
      "name": "algorithms/Array.log10",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the Euler's number e raised to the power of the input.",
      "name": "algorithms/Array.exp",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the absolute value of the input.",
      "name": "algorithms/Array.abs",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the largest integer less than or equal to the input.",
      "name": "algorithms/Array.floor",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the smallest integer greater than or equal to the input.",
      "name": "algorithms/Array.ceil",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the integer nearest to the input.",
      "name": "algorithms/Array.round",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the cubic root of the input.",
      "name": "algorithms/Array.cbrt",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the gamma function of the input.",
      "name": "algorithms/Array.gamma",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the digamma function of the input.",
      "name": "algorithms/Array.digamma",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the trigamma function of the input.",
      "name": "algorithms/Array.trigamma",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the error function of the input.",
      "name": "algorithms/Array.erf",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the complementary error function of the input.",
      "name": "algorithms/Array.erfc",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the inverse error function of the input.",
      "name": "algorithms/Array.erfInv",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the inverse complementary error function of the input.",
      "name": "algorithms/Array.erfcInv",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, computes the Lanczos approximation of the input.",
      "name": "algorithms/Array.lanczos",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Array.uint8",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Array.toUint8",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 8-bit integer.",
      "name": "algorithms/Array.int8",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 8-bit integer.",
      "name": "algorithms/Array.toInt8",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 16-bit integer.",
      "name": "algorithms/Array.uint16",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 16-bit integer.",
      "name": "algorithms/Array.toUint16",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Array.int32",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Array.toInt32",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 32-bit integer.",
      "name": "algorithms/Array.uint32",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 32-bit integer.",
      "name": "algorithms/Array.toUint32",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Array.int16",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Array.toInt16",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Array.byte",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
      "name": "algorithms/Array.toByte",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Array.short",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
      "name": "algorithms/Array.toShort",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Array.int",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
      "name": "algorithms/Array.toInt",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Array.long",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Array.toLong",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Array.int64",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
      "name": "algorithms/Array.toInt64",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a 32-bit float.",
      "name": "algorithms/Array.float",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a 32-bit float.",
      "name": "algorithms/Array.toFloat",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a 64-bit float.",
      "name": "algorithms/Array.double",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, casts the input value to a 64-bit float.",
      "name": "algorithms/Array.toDouble",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "Computes the diagonal of the matrix in a single column.",
      "name": "algorithms/Array.matrixDiagonal",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "Computes a square diagonal matrix from a single column matrix.",
      "name": "algorithms/Array.matrixToDiag",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "Computes the inverse of the matrix.",
      "name": "algorithms/Array.matrixInverse",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The input array.",
          "type": "Array"
        }
      ],
      "description": "Computes the Moore-Penrose pseudoinverse of the matrix.",
      "name": "algorithms/Array.matrixPseudoInverse",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The array to compute on.",
          "type": "Array"
        }
      ],
      "description": "Computes the Frobenius norm of the matrix.",
      "name": "algorithms/Array.matrixFnorm",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The array to compute on.",
          "type": "Array"
        }
      ],
      "description": "Computes the trace of the matrix.",
      "name": "algorithms/Array.matrixTrace",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "input",
          "description": "The array to compute on.",
          "type": "Array"
        }
      ],
      "description": "Computes the determinant of the matrix.",
      "name": "algorithms/Array.matrixDeterminant",
      "returnType": "Number"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, adds the first value to the second.",
      "name": "algorithms/Array.add",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, subtracts the second value from the first.",
      "name": "algorithms/Array.subtract",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, multiplies the first value by the second.",
      "name": "algorithms/Array.multiply",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, divides the first value by the second, returning 0 for division by 0.",
      "name": "algorithms/Array.divide",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, selects the maximum of the first and second values.",
      "name": "algorithms/Array.max",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, selects the minimum of the first and second values.",
      "name": "algorithms/Array.min",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, selects the value of the first value.",
      "name": "algorithms/Array.first",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, selects the first value if it is non-zero, and the second value otherwise.",
      "name": "algorithms/Array.firstNonZero",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, selects the first value if it is non-zero, and the second value otherwise.",
      "name": "algorithms/Array.first_nonzero",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the remainder of the first value divided by the second.",
      "name": "algorithms/Array.mod",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff both values are non-zero.",
      "name": "algorithms/Array.and",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff either input value is non-zero.",
      "name": "algorithms/Array.or",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff the first value is less than the second.",
      "name": "algorithms/Array.lt",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff the first value is less than or equal to the second.",
      "name": "algorithms/Array.lte",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff the first value is greater than the second.",
      "name": "algorithms/Array.gt",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff the first value is greater than or equal to the second.",
      "name": "algorithms/Array.gte",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff the first value is equal to the second.",
      "name": "algorithms/Array.eq",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, returns 1 iff the first value is not equal to the second.",
      "name": "algorithms/Array.neq",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, raises the first value to the power of the second.",
      "name": "algorithms/Array.pow",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the angle formed by the 2D vector [x, y].",
      "name": "algorithms/Array.atan2",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the magnitude of the 2D vector [x, y].",
      "name": "algorithms/Array.hypot",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise AND of the input values.",
      "name": "algorithms/Array.bitwiseAnd",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise AND of the input values.",
      "name": "algorithms/Array.bitwise_and",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise OR of the input values.",
      "name": "algorithms/Array.bitwiseOr",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise OR of the input values.",
      "name": "algorithms/Array.bitwise_or",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise XOR of the input values.",
      "name": "algorithms/Array.bitwiseXor",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the bitwise XOR of the input values.",
      "name": "algorithms/Array.bitwise_xor",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the left shift of v1 by v2 bits.",
      "name": "algorithms/Array.leftShift",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the left shift of v1 by v2 bits.",
      "name": "algorithms/Array.left_shift",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the signed right shift of v1 by v2 bits.",
      "name": "algorithms/Array.rightShift",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the signed right shift of v1 by v2 bits.",
      "name": "algorithms/Array.right_shift",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "On an element-wise basis, calculates the regularized lower incomplete Gamma function \u03b3(x,a).",
      "name": "algorithms/Array.gammainc",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "Returns the matrix multiplication A*B.",
      "name": "algorithms/Array.matrixMultiply",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "left",
          "description": "The left-hand value.",
          "type": "Array"
        },
        {
          "argumentName": "right",
          "description": "The right-hand value.",
          "type": "Array"
        }
      ],
      "description": "Solves for x in the matrix equation A*x=B, finding a least-squares solution if A is overdetermined.",
      "name": "algorithms/Array.matrixSolve",
      "returnType": "Array"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the diagonal of the matrix in a single column.",
      "name": "algorithms/Image.matrixDiagonal",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes a square diagonal matrix from a single column matrix.",
      "name": "algorithms/Image.matrixToDiag",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the inverse of the matrix.",
      "name": "algorithms/Image.matrixInverse",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the Moore-Penrose pseudoinverse of the matrix.",
      "name": "algorithms/Image.matrixPseudoInverse",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the Frobenius norm of the matrix.",
      "name": "algorithms/Image.matrixFnorm",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the trace of the matrix.",
      "name": "algorithms/Image.matrixTrace",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "value",
          "description": "The image to which the operation is applied.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Computes the determinant of the matrix.",
      "name": "algorithms/Image.matrixDeterminant",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Returns the matrix multiplication A*B for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.matrixMultiply",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image1",
          "description": "The image from which the left operand bands are taken.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "image2",
          "description": "The image from which the right operand bands are taken.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Solves for x in the matrix equation A*x=B, finding a least-squares solution if A is overdetermined for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
      "name": "algorithms/Image.matrixSolve",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array to decompose.",
          "type": "Array"
        }
      ],
      "description": "Calculates the Cholesky decomposition of a matrix. The Cholesky decomposition is a decomposition into the form L*L' where L is a lower triangular matrix. The input must be a symmetric positive-definite matrix. Returns a dictionary with 1 entry named 'L'.",
      "name": "algorithms/Array.matrixCholeskyDecomposition",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array to decompose.",
          "type": "Array"
        }
      ],
      "description": "Calculates the Singular Value Decomposition of the input matrix into U\u00d7S\u00d7V', such that U and V are orthogonal and S is diagonal. Returns a dictionary with entries named 'U', 'S' and 'V'.",
      "name": "algorithms/Array.matrixSingularValueDecomposition",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array to decompose.",
          "type": "Array"
        }
      ],
      "description": "Calculates the LU matrix decomposition such that P\u00d7input=L\u00d7U, where L is lower triangular (with unit diagonal terms), U is upper triangular and P is a partial pivot permutation matrix. The input matrix must be square. Returns a dictionary with entries named 'L', 'U' and 'P'.",
      "name": "algorithms/Array.matrixLUDecomposition",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "array",
          "description": "The array to decompose.",
          "type": "Array"
        }
      ],
      "description": "Calculates the QR-decomposition of a matrix into two matrices Q and R such that input = QR, where Q is orthogonal, and R is upper triangular. Returns a dictionary with entries named 'Q' and 'R'.",
      "name": "algorithms/Array.matrixQRDecomposition",
      "returnType": "Dictionary<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image of 2-D matrices to be decomposed.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the Cholesky decomposition of a matrix. The Cholesky decomposition is a decomposition into the form L*L' where L is a lower triangular matrix. The input must be a symmetric positive-definite matrix. Returns an image with 1 band named 'L'.",
      "name": "algorithms/Image.matrixCholeskyDecomposition",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image of 2-D matrices to be decomposed.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the Singular Value Decomposition of the input matrix into U\u00d7S\u00d7V', such that U and V are orthogonal and S is diagonal. Returns an image with bands named 'U', 'S' and 'V'.",
      "name": "algorithms/Image.matrixSingularValueDecomposition",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image of 2-D matrices to be decomposed.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the LU matrix decomposition such that P\u00d7input=L\u00d7U, where L is lower triangular (with unit diagonal terms), U is upper triangular and P is a partial pivot permutation matrix. The input matrix must be square. Returns an image with bands named 'L', 'U' and 'P'.",
      "name": "algorithms/Image.matrixLUDecomposition",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "Image of 2-D matrices to be decomposed.",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Calculates the QR-decomposition of a matrix into two matrices Q and R such that input = QR, where Q is orthogonal, and R is upper triangular. Returns an image with bands named 'Q' and 'R'.",
      "name": "algorithms/Image.matrixQRDecomposition",
      "returnType": "Image<unknown bands>"
    },
    {
      "description": "Returns a Reducer that computes the minimum and maximum of its inputs.",
      "name": "algorithms/Reducer.minMax",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the number of inputs.",
      "name": "algorithms/Reducer.countEvery",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the number of non-null inputs.",
      "name": "algorithms/Reducer.count",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the (weighted) sum of its inputs.",
      "name": "algorithms/Reducer.sum",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the (weighted) arithmetic mean of its inputs.",
      "name": "algorithms/Reducer.mean",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the product of its inputs.",
      "name": "algorithms/Reducer.product",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the bitwise-or summation of its inputs.",
      "name": "algorithms/Reducer.bitwiseOr",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the bitwise-and summation of its inputs.",
      "name": "algorithms/Reducer.bitwiseAnd",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns 1 if all of its inputs are non-zero, 0 otherwise.",
      "name": "algorithms/Reducer.allNonZero",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns 1 if any of its inputs are non-zero, 0 otherwise.",
      "name": "algorithms/Reducer.anyNonZero",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the slope and offset for a (weighted) linear regression of 2 inputs.  The inputs are expected to be x data followed by y data..",
      "name": "algorithms/Reducer.linearFit",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the standard deviation of its inputs.",
      "name": "algorithms/Reducer.stdDev",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the sample standard deviation of its inputs.",
      "name": "algorithms/Reducer.sampleStdDev",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the variance of its inputs.",
      "name": "algorithms/Reducer.variance",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the sample variance of its inputs.",
      "name": "algorithms/Reducer.sampleVariance",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that Computes the skewness of its inputs.",
      "name": "algorithms/Reducer.skew",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that Computes the kurtosis of its inputs.",
      "name": "algorithms/Reducer.kurtosis",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns the first of its inputs.",
      "name": "algorithms/Reducer.first",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns the first of its non-null inputs.",
      "name": "algorithms/Reducer.firstNonNull",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns the last of its inputs.",
      "name": "algorithms/Reducer.last",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns the last of its non-null inputs.",
      "name": "algorithms/Reducer.lastNonNull",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that returns a (weighted) frequency table of its inputs.",
      "name": "algorithms/Reducer.frequencyHistogram",
      "returnType": "Reducer"
    },
    {
      "description": "Returns a Reducer that computes the number of distinct inputs.",
      "name": "algorithms/Reducer.countDistinct",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The number of buckets of the output histogram. If null, the default is used.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum bucket width of the output histogram. If null, the default is used.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Some doc",
      "hidden": true,
      "name": "algorithms/Reducer.histogramCombiner",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The maximum number of buckets to use when building a histogram; will be rounded up to a power of 2.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum histogram bucket width, or null to allow any power of 2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxRaw",
          "defaultValue": null,
          "description": "The number of values to accumulate before building the initial histogram.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Create a reducer that will compute a histogram of the inputs.  The output is a Nx2 array of the lower bucket bounds and the counts of each bucket, and is suitable for use per-pixel.",
      "name": "algorithms/Reducer.autoHistogram",
      "returnType": "Reducer"
    },
    {
      "description": "Creates a reducer that reduces some number of 1-D arrays of the same length N to a covariance matrix of shape NxN.  WARNING: this reducer requires that the data has been mean centered.",
      "name": "algorithms/Reducer.centeredCovariance",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer1",
          "type": "Reducer"
        },
        {
          "argumentName": "reducer2",
          "type": "Reducer"
        },
        {
          "argumentName": "outputPrefix",
          "defaultValue": "",
          "description": "Prefix for reducer2's output names.",
          "optional": true,
          "type": "String"
        },
        {
          "argumentName": "sharedInputs",
          "defaultValue": false,
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Creates a Reducer that runs two reducers in parallel.  The combined reducer's outputs will be those of reducer1 followed by those of reducer2, where the output names of reducer2 are prefixed with the given string.\nIf sharedInputs is true, the reducers must have the same number of inputs, and the combined reducer's will match them; if it is false, the inputs of the combined reducer will be those of reducer1 followed by those of reducer2.",
      "name": "algorithms/Reducer.combine",
      "returnType": "Reducer"
    },
    {
      "description": "Creates a reducer that reduces some number of 1-D arrays of the same length N to a covariance matrix of shape NxN.  This reducer uses the one-pass covariance formula from Sandia National Laboratories Technical Report SAND2008-6212, which can lose accuracy if the values span a large range.",
      "name": "algorithms/Reducer.covariance",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "description": "The reducer for which to disaggregate inputs.",
          "type": "Reducer"
        },
        {
          "argumentName": "axis",
          "defaultValue": null,
          "description": "If specified, indicates an array axis along which to disaggregate.  If not specified, arrays are completely disaggregated.  Ignored for non-array types.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Separates aggregate inputs (Arrays, Lists or Dictionaries) into individual items that are then each passed to the specified reducer.  When used on dictionaries, the dictionary keys are ignored.  Non-aggregated inputs (ie: numbers or strings) are passed to the underlying reducer directly.",
      "name": "algorithms/Reducer.disaggregate",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "min",
          "description": "The lower (inclusive) bound of the first bucket.",
          "type": "Float"
        },
        {
          "argumentName": "max",
          "description": "The upper (exclusive) bound of the last bucket.",
          "type": "Float"
        },
        {
          "argumentName": "steps",
          "description": "The number of buckets to use.",
          "type": "Integer"
        }
      ],
      "description": "Creates a reducer that will compute a histogram of the inputs using a fixed number of fixed width bins. Values outside of the [min, max) range are ignored.  The output is a Nx2 array of bucket lower edges and counts and is suitable for use per-pixel.",
      "name": "algorithms/Reducer.fixedHistogram",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "image",
          "type": "Image<unknown bands>"
        }
      ],
      "description": "Creates a Reducer by combining a copy of the given reducer for each band in the given image, using the band names as output names.",
      "name": "algorithms/Reducer.forEachBand",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to each array element.",
          "type": "Reducer"
        }
      ],
      "description": "Separately reduces each position in array inputs of equal shape, producing an array output of the same shape.\nFor example, with the 'sum' reducer applied to 5 arrays with shape 2x2, the output will be a 2x2 array, where each position is the sum of the 5 values at that position.",
      "name": "algorithms/Reducer.forEachElement",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "outputNames",
          "type": "List<String>"
        }
      ],
      "description": "Creates a Reducer by combining a copy of the given reducer for each output name in the given list.  If the reducer has a single output, the output names are used as-is; otherwise they are prefixed to the original output names.",
      "name": "algorithms/Reducer.forEach",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        }
      ],
      "description": "Returns a list of the output names of the given reducer.",
      "name": "algorithms/Reducer.getOutputs",
      "returnType": "List<Object>"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "description": "The reducer to apply to each group, without the group field.",
          "type": "Reducer"
        },
        {
          "argumentName": "groupField",
          "defaultValue": 0,
          "description": "The field that contains record groups.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "groupName",
          "defaultValue": "group",
          "description": "The dictionary key that contains the group. Defaults to 'group'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Groups reducer records by the value of a given input, and reduces each group with the given reducer.",
      "name": "algorithms/Reducer.group",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The maximum number of buckets to use when building a histogram; will be rounded up to a power of 2.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum histogram bucket width, or null to allow any power of 2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxRaw",
          "defaultValue": null,
          "description": "The number of values to accumulate before building the initial histogram.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Create a reducer that will compute a histogram of the inputs.",
      "name": "algorithms/Reducer.histogram",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "minPercentile",
          "description": "The lower bound of the percentile range.",
          "type": "Float"
        },
        {
          "argumentName": "maxPercentile",
          "description": "The upper bound of the percentile range.",
          "type": "Float"
        },
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The maximum number of buckets to use when building a histogram; will be rounded up to a power of 2.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum histogram bucket width, or null to allow any power of 2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxRaw",
          "defaultValue": null,
          "description": "The number of values to accumulate before building the initial histogram.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a Reducer to compute the mean of all inputs in the specified percentile range.  For small numbers of inputs (up to maxRaw) the mean will be computed directly; for larger numbers of inputs the mean will be derived from a histogram.",
      "name": "algorithms/Reducer.intervalMean",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "numInputs",
          "defaultValue": 1,
          "description": "The number of inputs to expect (1 or 2).  If 1 is specified, automatically generates sequence numbers for the x value (meaning there can be no ties).",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a reducer that computes the Kendall's Tau-b rank correlation and p-value on a two-sided test of H0: x and y are independent.  A positive tau value indicates an increasing trend; negative value indicates a decreasing trend. Currently the p-value test is disabled and only returns null.",
      "name": "algorithms/Reducer.kendallsCorrelation",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "numX",
          "description": "The number of input dimensions.",
          "type": "Integer"
        },
        {
          "argumentName": "numY",
          "defaultValue": 1,
          "description": "The number of output dimensions.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a reducer that computes a linear least squares regression with numX independent variables and numY dependent variables.\nEach input tuple will have values for the independent variables followed by the dependent variables.\nThe first output is a coefficients array with dimensions (numX, numY); each column contains the coefficients for the corresponding dependent variable.  The second output is a vector of the root mean square of the residuals of each dependent variable.  Both outputs are null if the system is underdetermined, e.g. the number of inputs is less than or equal to numX.",
      "name": "algorithms/Reducer.linearRegression",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "numInputs",
          "defaultValue": 1,
          "description": "The number of inputs.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a reducer that outputs the maximum value of its (first) input.  If numInputs is greater than one, also outputs the corresponding values of the additional inputs.",
      "name": "algorithms/Reducer.max",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The maximum number of buckets to use when building a histogram; will be rounded up to a power of 2.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum histogram bucket width, or null to allow any power of 2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxRaw",
          "defaultValue": null,
          "description": "The number of values to accumulate before building the initial histogram.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Create a reducer that will compute the median of the inputs.  For small numbers of inputs (up to maxRaw) the median will be computed directly; for larger numbers of inputs the median will be derived from a histogram.",
      "name": "algorithms/Reducer.median",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "numInputs",
          "defaultValue": 1,
          "description": "The number of inputs.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a reducer that outputs the minimum value of its (first) input.  If numInputs is greater than one, also outputs the corresponding values of the additional inputs.",
      "name": "algorithms/Reducer.min",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The maximum number of buckets to use when building a histogram; will be rounded up to a power of 2.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum histogram bucket width, or null to allow any power of 2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxRaw",
          "defaultValue": null,
          "description": "The number of values to accumulate before building the initial histogram.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Create a reducer that will compute the mode of the inputs.  For small numbers of inputs (up to maxRaw) the mode will be computed directly; for larger numbers of inputs the mode will be derived from a histogram.",
      "name": "algorithms/Reducer.mode",
      "returnType": "Reducer"
    },
    {
      "description": "Creates a two-input reducer that computes Pearson's product-moment correlation coefficient and the 2-sided p-value test for correlation = 0.",
      "name": "algorithms/Reducer.pearsonsCorrelation",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "percentiles",
          "description": "A list of numbers between 0 and 100.",
          "type": "List<Number>"
        },
        {
          "argumentName": "outputNames",
          "defaultValue": null,
          "description": "A list of names for the outputs, or null to get default names.",
          "optional": true,
          "type": "List<String>"
        },
        {
          "argumentName": "maxBuckets",
          "defaultValue": null,
          "description": "The maximum number of buckets to use when building a histogram; will be rounded up to a power of 2.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "minBucketWidth",
          "defaultValue": null,
          "description": "The minimum histogram bucket width, or null to allow any power of 2.",
          "optional": true,
          "type": "Float"
        },
        {
          "argumentName": "maxRaw",
          "defaultValue": null,
          "description": "The number of values to accumulate before building the initial histogram.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Create a reducer that will compute the specified percentiles, e.g. given [0, 50, 100] will produce outputs named 'p0', 'p50', and 'p100' with the min, median, and max respectively.  For small numbers of inputs (up to maxRaw) the percentiles will be computed directly; for larger numbers of inputs the percentiles will be derived from a histogram.",
      "name": "algorithms/Reducer.percentile",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "count",
          "type": "Integer"
        }
      ],
      "description": "Creates a Reducer by combining the specified number of copies of the given reducer.  Output names are the same as the given reducer, but each is a list of the corresponding output from each of the reducers.",
      "name": "algorithms/Reducer.repeat",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "numX",
          "description": "The number of input dimensions.",
          "type": "Integer"
        },
        {
          "argumentName": "numY",
          "defaultValue": 1,
          "description": "The number of output dimensions.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "beta",
          "defaultValue": null,
          "description": "Residual error outlier margin. If null, a default value will be computed.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Creates a reducer that computes a robust least squares regression with numX independent variables and numY dependent variables, using iteratively reweighted least squares with the Talwar cost function. A point is considered an outlier if the RMS of residuals is greater than beta.\nEach input tuple will have values for the independent variables followed by the dependent variables.\nThe first output is a coefficients array with dimensions (numX, numY); each column contains the coefficients for the corresponding dependent variable.  The second is a vector of the root mean square of the residuals of each dependent variable.  Both outputs are null if the system is underdetermined, e.g. the number of inputs is less than numX.",
      "name": "algorithms/Reducer.robustLinearRegression",
      "returnType": "Reducer"
    },
    {
      "description": "Creates a two-input reducer that computes the Sen's slope estimator.  The inputs are expected to be x data followed by y data.  It returns two double values; the estimated slope and the offset.",
      "name": "algorithms/Reducer.sensSlope",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        },
        {
          "argumentName": "outputs",
          "description": "The new output names; any output whose name is null or empty will be dropped.",
          "type": "List<String>"
        }
      ],
      "description": "Returns a Reducer with the same inputs as the given Reducer, but with outputs renamed and/or removed.",
      "name": "algorithms/Reducer.setOutputs",
      "returnType": "Reducer"
    },
    {
      "description": "Creates a two-input reducer that computes the Spearman's rank-moment correlation and its p-value on a two-sided test of H0: x and y are independent.  Currently, the p-value test is disabled and returns null.",
      "name": "algorithms/Reducer.spearmansCorrelation",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        }
      ],
      "description": "Returns a Reducer with the same outputs as the given Reducer, but with each weighted input replaced by two unweighted inputs.",
      "name": "algorithms/Reducer.splitWeights",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "function",
          "description": "The local function to be used to fit the data: [AsymmetricGaussian, Fourier1, Fourier2, Fourier3]",
          "type": "String"
        },
        {
          "argumentName": "envelope",
          "defaultValue": false,
          "description": "Apply a second pass fit after adjusting the weights to fit the upper envelope of the data more closely.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Creates a reducer that computes a nonlinear regression using the TIMESAT algorithm by Jonsson and Eklundh. TIMESAT fits a function in neighborhoods around local extrema and merges the local fits together to create a global fit. An asymmetric Gaussian or low-order Fourier series can be used for the local function.\nEach input tuple will have a (weighted) value for the independent and dependent variable.\nThe first output is a two-dimensional array describing the resulting fit, with the local fits along the first axis, and the parameters of each fit along the second axis. To evaluate the fit, use timesatValue(). The second output is the root mean square of the residuals.",
      "name": "algorithms/Reducer.timesat",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "propertyNames",
          "description": "The property names that will be defined on each output feature; determines the number of reducer inputs.",
          "type": "List<String>"
        },
        {
          "argumentName": "numOptional",
          "defaultValue": 0,
          "description": "The last numOptional inputs will be considered optional; the other inputs must be non-null or the input tuple will be dropped.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Returns a reducer that collects its inputs into a FeatureCollection.",
      "name": "algorithms/Reducer.toCollection",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "tupleSize",
          "defaultValue": null,
          "description": "The size of each output tuple, or null for no grouping. Also determines the number of inputs (null tupleSize has 1 input).",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "numOptional",
          "defaultValue": 0,
          "description": "The last numOptional inputs will be considered optional; the other inputs must be non-null or the input tuple will be dropped.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Creates a reducer that collects its inputs into a list, optionally grouped into tuples.",
      "name": "algorithms/Reducer.toList",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "reducer",
          "type": "Reducer"
        }
      ],
      "description": "Returns a Reducer with the same inputs and outputs as the given Reducer, but with no weighted inputs.",
      "name": "algorithms/Reducer.unweighted",
      "returnType": "Reducer"
    },
    {
      "deprecated": true,
      "deprecationReason": "Use Reducer.allNonZero().",
      "description": "Returns a Reducer that returns 1 if all of its inputs are non-zero, 0 otherwise.",
      "name": "algorithms/Reducer.and",
      "returnType": "Reducer"
    },
    {
      "deprecated": true,
      "deprecationReason": "Use Reducer.anyNonZero().",
      "description": "Returns a Reducer that returns 1 if any of its inputs are non-zero, 0 otherwise.",
      "name": "algorithms/Reducer.or",
      "returnType": "Reducer"
    },
    {
      "arguments": [
        {
          "argumentName": "collection",
          "description": "The collection to combine.",
          "type": "FeatureCollection"
        },
        {
          "argumentName": "intersections",
          "description": "The minimum number of intersecting points.",
          "type": "Integer"
        },
        {
          "argumentName": "pixelSize",
          "description": "Pixel size",
          "type": "Float"
        }
      ],
      "description": "Averaged values of observations in a pixel if the number of  observations exceeds a threshold.",
      "hidden": true,
      "name": "algorithms/WHRC.CombinePoints",
      "returnType": "FeatureCollection"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The image to segment.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "numIterations",
          "description": "Number of iterations, also known as scale parameter: The number of iterations determines how strict of a threshold is enforced with respect to spectral and shape properties in allowing merging. Successive iterations allow for merges with increasingly poor merge criteria up to the final threshold, determined by the number of iterations. Thus, a large number of iterations will generate few large segments while a small number of iterations will generate many small segments.",
          "type": "Integer"
        },
        {
          "argumentName": "shape",
          "description": "Shape parameter: The shape parameter determines how important the shape of a merged segment is relative to spectral similarity. Shape and spectral parameters add to 1 (e.g., if you only care about spectral, put shape as 0).",
          "type": "Float"
        },
        {
          "argumentName": "compactness",
          "description": "Compactness parameter: Within the shape consideration, there are two properties evaluated - compactness and smoothness. Compactness can be thought of as the area of an object compared to its perimeter (e.g., a square has high compactness, a long and thin rectangle does not). Smoothness can be thought of as the perimeter of an object compared to its bounding box perimeter (e.g., a square has high smoothness, an amoeba-like shape would not). Compactness and smoothness add to 1 (e.g., if you only care about smoothness, put compactness as 0).",
          "type": "Float"
        },
        {
          "argumentName": "maxObjectSize",
          "defaultValue": 256,
          "description": "Maximum object size. Regions cannot be merged across tiles iftheir length is over this limit.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "bandWeights",
          "defaultValue": null,
          "description": "The weights for each band, in order of the bands. This determines the spectral importance of each band in merging. Defaulted to uniform band weights. If band weights are specified, they will be automatically normalized.",
          "optional": true,
          "type": "List<Float>"
        }
      ],
      "description": "Performs region merging image segmentation. Initially, each pixel is its own segment. Over a series of iterations, adjacent segments with sufficient criteria are merged. Merging criteria is determined by user specified parameters. The output image will have a segment label band and bands corresponding to each of the input bands with the spectral mean for each segment.",
      "hidden": true,
      "name": "algorithms/Test.Clustering.BerkeleySegmentation",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "scale",
          "description": "Scale parameter, also known as number of iterations: The number of iterations determines how strict of a threshold is enforced with respect to spectral and shape properties in allowing merging. Successive iterations allow for merges with increasingly poor merge criteria up to the final threshold, determined by the number of iterations. For inter-tile merging post-processing, the scale parameter determines how strict a threshold to allow for merging regions across adjacent tiles.",
          "type": "Integer"
        },
        {
          "argumentName": "shape",
          "description": "Shape parameter: The shape parameter determines how important the shape of a merged segment is relative to spectral similarity. Shape and spectral parameters add to 1 (e.g., if you only care about spectral, put shape as 0).",
          "type": "Float"
        },
        {
          "argumentName": "compactness",
          "description": "Compactness parameter: Within the shape consideration, there are two properties evaluated - compactness and smoothness. Compactness can be thought of as the area of an object compared to its perimeter (e.g., a square has high compactness, a long and thin rectangle does not). Smoothness can be thought of as the perimeter of an object compared to its bounding box perimeter (e.g., a square has high smoothness, an amoeba-like shape would not). Compactness and smoothness add to 1 (e.g., if you only care about smoothness, put compactness as 0).",
          "type": "Float"
        },
        {
          "argumentName": "bandWeights",
          "defaultValue": null,
          "description": "The weights for each band, in order of the bands. This determines the spectral importance of each band in merging. Defaulted to uniform band weights. If band weights are specified, they will be automatically normalized.",
          "optional": true,
          "type": "List<Float>"
        },
        {
          "argumentName": "maxObjectSize",
          "defaultValue": 256,
          "description": "Maximum object size. Regions cannot be merged across tiles iftheir length is over this limit.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "cornerCases",
          "defaultValue": true,
          "description": "Whether to treat corner cases. If enabled, as is by default, if a region A in the center tile is determined to merge with a region B in an adjacent tile (either north or west) and region B is determined to merge with a region C in its adjacent tile (this is the northwest tile from the center tile's perspective), then both regions A and B will take on the label of region C. That is, enabling this allows merging between 3 tiles at corners.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Performs post-processing inter-tile region merging phase according to Berkeley image segmentation algorithm. Takes image that is a result of running tile-independent segmentation. Input image should have first band named 'clusters' containing segment labels. The other bands are spectral bands. Examines tile boundaries and merges adjacent segments across tiles if sufficient merging critieria is satisfied. Merging criteria is determined by user specified parameters indicating relative importance of spectral and shape properties.",
      "hidden": true,
      "name": "algorithms/Test.Clustering.InterTileRegionMerge",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "threshold",
          "description": "The distance threshold. As a cluster grows, a distance measure is computed between the starting point's value and the new point's value. If it is greater than the threshold, the pixel is not included in the cluster.",
          "type": "Float"
        },
        {
          "argumentName": "useCosine",
          "defaultValue": true,
          "description": "Whether to use cosine distance instead of euclidean distance.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "secondPass",
          "defaultValue": true,
          "description": "Whether to apply a second pass of clustering.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "maxObjectSize",
          "defaultValue": 256,
          "description": "Maximum object size.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "An algorithm that performs clustering on the input image by region growing. It performs a flood fill like procedure based on either the euclidean or the cosine distance between the value of the starting growth point of the cluster and the neighboring points. The cluster grows until this distance is above the threshold; at this point, a new cluster starts to grow. The algorithm works independently on cells of a grid. This grid is defined by maxObjectSize and can be different from the tile size. Per-cell clusters are unrelated. A cluster that spans a cell boundary may receive two different labels in the two cells. The output is an INT32 image in which each value is the cluster to which the pixel belongs. A pixel in the output band is only defined (i.e. has a non-zero mask) if all the inputs are defined.",
      "hidden": true,
      "name": "algorithms/Test.Clustering.RegionGrow",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxObjectSize",
          "defaultValue": 256,
          "description": "Maximum object size.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "useCentroid",
          "defaultValue": true,
          "description": "Use centroid to search for corresponding cluster.",
          "optional": true,
          "type": "Boolean"
        },
        {
          "argumentName": "cornerCases",
          "defaultValue": true,
          "description": "Treat corner cases.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Performs clustering on the input image in a consistent way across tiles. The algorithm works as follows: first, renumber the current tile clusters based on an offset; then, for each cluster that touches the left or the top edge, look at the adjacent tile and find that tile's cluster label. Assign this label, added to that tile's offset, to the current cluster and continue. Ambiguities can be resolved either by number of pixels touching the current pixel, or by closest mean. Corner cases can be resolved by looking at the northwest tile. Note that not all cases can be resolved.\nInput should be an image where one of the bands is named 'clusters' and represents the cluster labels. The remaining bands are spectral data.\nThe output is an INT32 image in which each value is the cluster to which he pixel belongs.",
      "hidden": true,
      "name": "algorithms/Test.Clustering.SpatialConsistency",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "image",
          "description": "The input image for clustering.",
          "type": "Image<unknown bands>"
        },
        {
          "argumentName": "maxObjectSize",
          "defaultValue": 256,
          "description": "Maximum object size.",
          "optional": true,
          "type": "Integer"
        },
        {
          "argumentName": "binSize",
          "defaultValue": 100,
          "description": "Bin size for quantization.",
          "optional": true,
          "type": "Float"
        }
      ],
      "description": "Perform consistent clustering across tiles by binning per-tile clustered labels into slots according to the cluster means. Input should be an image where one of the bands is named 'clusters' and represents the cluster labels. The remaining bands are spectral data.\nWorks better when dealing with a small number of clusters. The output is an INT32 image in which each value is the cluster to which the pixel belongs.",
      "hidden": true,
      "name": "algorithms/Test.Clustering.HashedConsistency",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "timeSeries",
          "description": "Collection from which to extract trends. Must be sorted by time in ascending order.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "rmse",
          "description": "Sum of the root mean square error (RMSE) from all band fits at which we consider the set of fits to have become disturbed.",
          "type": "Float"
        },
        {
          "argumentName": "disturbanceWindow",
          "defaultValue": 3,
          "description": "Consecutive disturbances to force reclassifying the terrain.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "Provides Continuous Change Detection and Classification (CCDC) coefficients by fitting a simple piecewise linear model to a given image collection.\nThe linear model used for each fit is 'Y = A + B*t + C*sin(season(t)) + D*cos(season(t))', where 't' is the start time of the image in years, and season(t) returns the phase of the year from 0 to 2*PI.\nThe result is a 3D array per pixel, with axis 0 having as many elements as there are pieces in the piecewise fit, axis 1 having as many elements as there are bands, and axis 2 having length 7, for each parameter of the fit:\n1. Start time in years (e.g. 2005.678.)\n2. End time in years (e.g. 2006.0123.)\n3. Total root mean square error (RMSE) summed from each separately fit band's RMSE.\n4. A coefficient.\n5. B coefficient.\n6. C coefficient.\n7. D coefficient.\nThe function is fit for each band separately, and the RMSE is summed from all the fits. If the sum exceeds the given RMSE, that sample is considered disturbed. If there are 'disturbanceWindow' disturbed samples in a row, the last good fit that did not involve disturbed samples is added to the output array, and a new fit is started after the last disturbed sample. The samples in the disturbed area are thus not part of any of the fit results.",
      "hidden": true,
      "name": "algorithms/CcdcCoefficients",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "inputs",
          "description": "The MCD43A4 collection to mosaic.",
          "type": "ImageCollection"
        },
        {
          "argumentName": "ndviStartPercentile",
          "type": "Float"
        },
        {
          "argumentName": "ndviEndPercentile",
          "type": "Float"
        }
      ],
      "description": "Mosaicks an MCD43A4 image collection by taking the top fraction graded by NDVI, then selecting the geometric mediod.",
      "hidden": true,
      "name": "algorithms/green_mosaic/com.google.earthengine.examples.greenmosaic.GreenMosaic",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "ids",
          "description": "One or more profile IDs returned by previous computations.",
          "type": "List<String>"
        },
        {
          "argumentName": "format",
          "defaultValue": "text",
          "description": "Format to return data in, either 'text' or 'json'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Retrieve computation profile data given profile IDs.",
      "hidden": true,
      "name": "algorithms/Profile.getProfiles",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "ids",
          "description": "One or more profile IDs returned by previous computations.",
          "type": "List<String>"
        },
        {
          "argumentName": "format",
          "defaultValue": "text",
          "description": "Format to return data in, either 'text' or 'json'.",
          "optional": true,
          "type": "String"
        }
      ],
      "description": "Retrieve computation profile data given profile IDs. Includes internal-only information about tasks.",
      "hidden": true,
      "name": "algorithms/Profile.getProfilesInternal",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "size",
          "description": "Size of allocation in bytes.",
          "type": "Long"
        }
      ],
      "description": "Temporarily allocates the specified amount of memory, in the view of Earth Engine memorytracking. Does not affect the actual Java heap.\n\nReturns its argument so as to have a value to return.",
      "name": "algorithms/Fail.allocateMemory",
      "returnType": "Long"
    },
    {
      "description": "Never returns. For triggering timeouts cheaply.",
      "name": "algorithms/Fail.hang",
      "returnType": "Object"
    },
    {
      "description": "Starts an infinite loop on a compute thread. For testing run-away requests.",
      "name": "algorithms/Fail.loop",
      "returnType": "Integer"
    },
    {
      "arguments": [
        {
          "argumentName": "isUserQuota",
          "defaultValue": true,
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "Fakes an out-of-memory error. Does not actually allocate.",
      "name": "algorithms/Fail.outOfMemory",
      "returnType": "Object"
    },
    {
      "arguments": [
        {
          "argumentName": "border",
          "defaultValue": false,
          "description": "Whether to draw a border of masked pixels to highlight tile edges.",
          "optional": true,
          "type": "Boolean"
        }
      ],
      "description": "An image in which the bands are the coordinates of the requested BB.\n\nIntended for use in debugging computation only.",
      "name": "algorithms/Image.requestArea",
      "returnType": "Image<unknown bands>"
    },
    {
      "arguments": [
        {
          "argumentName": "inset",
          "defaultValue": 0,
          "description": "Number of pixels to inset the lines from the boundary.",
          "optional": true,
          "type": "Integer"
        }
      ],
      "description": "An image in which the edges of the region actually computed are marked by line segments. In a tiled map, the effect will be to draw crosshairs on the corner points where tiles meet.\n\nThe image has only a mask. Use visualization parameters to change the displayed color.\n\nIntended for use in debugging tile boundary artifacts only.",
      "name": "algorithms/Image.requestBoundary",
      "returnType": "Image<unknown bands>"
    }
  ]
}

},{}],2:[function(require,module,exports){
"use strict";
/// <reference path="blockly.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
function expression(block) {
    return {
        values: { "0": valueNode(block) },
        result: "0"
    };
}
exports.expression = expression;
function valueNode(block) {
    switch (block.type) {
        case "Number":
            return { constantValue: +block.getFieldValue("value") };
        case "String":
            return { constantValue: block.getFieldValue("value") };
        default:
            return { functionInvocationValue: functionInvocation(block) };
    }
}
function functionInvocation(block) {
    let node = {
        functionName: block.type,
        arguments: {}
    };
    for (let i = 1; i < block.inputList.length; i++) {
        let input = block.inputList[i];
        node.arguments[input.name] = valueNode(input.connection.targetBlock());
    }
    return node;
}

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consoleEntries = document.getElementById("console-entries");
class Entry {
    constructor(text) {
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(""));
        this.node = p;
        this.setText(text);
    }
    setText(text) {
        this.node.firstChild.nodeValue = "> " + text;
    }
}
exports.Entry = Entry;
function clearEntries() {
    // Removes all nodes after the first. I don't know why there are 3
    // children by default, but there are...
    while (consoleEntries.childNodes.length > 3) {
        consoleEntries.removeChild(consoleEntries.childNodes[3]);
    }
}
exports.clearEntries = clearEntries;
function addEntry(text) {
    let entry = new Entry(text);
    consoleEntries.append(entry.node);
    return entry;
}
exports.addEntry = addEntry;

},{}],4:[function(require,module,exports){
"use strict";
/// <reference path="blockly.d.ts" />
/// <reference path="googlemaps.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const build = require("./build");
const console_ = require("./console");
const eeApi = require("./ee_api");
const eeBlocks = require("./ee_blocks");
const map = require("./map");
const workspace = init();
const runButton = document.getElementById("run-button");
var computationId;
runButton.onclick = function (e) {
    let thisComputationId = Math.random().toString(36);
    computationId = thisComputationId;
    console_.clearEntries();
    map.clearLayers();
    let topBlocks = getTopBlocks();
    let layerCount = 0;
    var chain = Promise.resolve();
    for (let block of topBlocks) {
        if (block.type == "Print") {
            let expression = build.expression(block.getInputTargetBlock("value"));
            let entry = console_.addEntry("Computing...");
            eeApi
                .computeValue(expression)
                .then(response => response.json())
                .then(json => {
                console.log(json);
                entry.setText(JSON.stringify(json.result));
            });
        }
        else if (block.type == "Map.addLayer") {
            layerCount++;
            let expression = build.expression(block.getInputTargetBlock("value"));
            map.addLayer(() => new Promise(resolve => eeApi
                .createMap(expression)
                .then(response => response.json())
                .then(json => {
                let base = `http://localhost:5000/v1/${json.name}/tiles/`;
                let imageMapType = new google.maps.ImageMapType({
                    getTileUrl: function (coord, zoom) {
                        return base + `${zoom}/${coord.x}/${coord.y}`;
                    },
                    tileSize: new google.maps.Size(256, 256)
                });
                resolve(imageMapType);
            })));
        }
    }
};
function getTopBlocks() {
    return workspace.getTopBlocks(true);
}
function init() {
    Blockly.defineBlocksWithJsonArray(eeBlocks.BLOCKS);
    let blocklyArea = document.getElementById("blockly-area");
    let blocklyDiv = document.getElementById("blockly-div");
    let workspace = Blockly.inject(blocklyDiv, {
        toolbox: Blockly.Options.parseToolboxTree(eeBlocks.TOOLBOX_XML)
    });
    function onresize() {
        let element = blocklyArea;
        let x = 0;
        let y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + "px";
        blocklyDiv.style.top = y + "px";
        blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
        blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
        Blockly.svgResize(workspace);
    }
    blocklyArea.contentWindow.addEventListener("resize", onresize, false);
    onresize();
    Blockly.svgResize(workspace);
    workspace.getFlyout_().CORNER_RADIUS = 0;
    return workspace;
}

},{"./build":2,"./console":3,"./ee_api":5,"./ee_blocks":6,"./map":8}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMap(expression) {
    return fetch("http://localhost:5000/v1/projects/earthengine-legacy/maps", {
        method: "POST",
        body: JSON.stringify({
            expression: expression,
            fileFormat: "PNG",
            visualizationOptions: {}
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
exports.createMap = createMap;
function computeValue(expression) {
    return fetch("http://localhost:5000/v1/value:compute", {
        method: "POST",
        body: JSON.stringify({ expression: expression }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
exports.computeValue = computeValue;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("./algorithms.json");
const ALGORITHMS = _["algorithms"];
const TYPE_MAP = {
    "Image<unknown bands>": "Image",
    Long: "Number",
    Number: "Number",
    String: "String",
    Object: null
};
const SPECIAL_BLOCKS = [
    {
        message0: "Map.addLayer %1",
        type: "Map.addLayer",
        args0: [{ type: "input_value", name: "value" }]
    },
    {
        message0: "Print %1",
        type: "Print",
        args0: [{ type: "input_value", name: "value" }]
    }
];
const TYPE_BLOCKS = [
    {
        message0: "%1",
        type: "Number",
        args0: [{ type: "field_number", name: "value", value: 0 }],
        output: "Number"
    },
    {
        message0: "%1",
        type: "String",
        args0: [{ type: "field_input", name: "value", text: "text" }],
        output: "String"
    }
];
const ALGORITHM_GROUP_NAMES = ["Image", "Number", "String"];
const SPECIAL_GROUPS = generateSpecialGroups();
const ALGORITHM_GROUPS = generateAlgorithmGroups();
exports.BLOCKS = generateBlocks();
exports.TOOLBOX_XML = generateToolboxXml();
function generateBlocks() {
    let blocks = [];
    for (let groups of [SPECIAL_GROUPS, ALGORITHM_GROUPS]) {
        for (let group in groups) {
            for (let type in groups[group]) {
                blocks.push(groups[group][type]);
            }
        }
    }
    return blocks;
}
function generateToolboxXml() {
    let xml = "<xml>";
    for (let groups of [SPECIAL_GROUPS, ALGORITHM_GROUPS]) {
        for (let group in groups) {
            xml += `<category name="${group}">`;
            for (let type in groups[group]) {
                let block = groups[group][type];
                xml += `<block type="${type}">`;
                for (let argument of block.args0) {
                    if ("defaultValue" in argument) {
                        xml += `<value name="${argument.name}">`;
                        if (argument.check == "Number") {
                            xml += '<shadow type="Number">';
                            xml += `<field name="value">${argument.defaultValue}</field>`;
                            xml += "</shadow>";
                        }
                        xml += "</value>";
                    }
                }
                xml += "</block>";
            }
            xml += "</category>";
        }
        xml += "<sep></sep>";
    }
    xml += "</xml>";
    return xml;
}
function generateSpecialGroups() {
    let groups = {};
    for (let block of SPECIAL_BLOCKS) {
        let type = block.type;
        let group = type.split(".")[0];
        if (ALGORITHM_GROUP_NAMES.indexOf(group) == -1) {
            groups[group] = {};
        }
        groups[group][type] = block;
    }
    return groups;
}
function generateAlgorithmGroups() {
    let groups = {};
    for (let group of ALGORITHM_GROUP_NAMES) {
        groups[group] = {};
    }
    for (let block of TYPE_BLOCKS) {
        let type = block.type;
        groups[type][type] = block;
    }
    for (let algorithm of ALGORITHMS) {
        if (algorithm.name == "algorithms/Image.constant") {
            groups["Image"]["Image.constant"] = generateBlock(algorithm);
        }
        else if (algorithm.name == "algorithms/Image.load") {
            groups["Image"]["Image.load"] = generateBlock(algorithm);
        }
    }
    return groups;
}
function generateBlock(algorithm) {
    let id = algorithmId(algorithm);
    let block = {
        args0: [{ type: "input_dummy" }],
        message0: `${id} %1 `,
        type: id
    };
    for (let i in algorithm.arguments) {
        let argument = algorithm.arguments[i];
        let argumentName = argument.argumentName;
        let a = {
            check: TYPE_MAP[argument.type],
            name: argumentName,
            type: "input_value"
        };
        if ("defaultValue" in argument) {
            a.defaultValue = argument.defaultValue;
        }
        block.args0.push(a);
        block.message0 += `${argumentName} %${+i + 2} `;
    }
    block.message0 = block.message0.trim();
    block.output = TYPE_MAP[algorithm.returnType];
    return block;
}
exports.generateBlock = generateBlock;
function algorithmId(algorithm) {
    return algorithm.name.split("/")[1];
}

},{"./algorithms.json":1}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./editor.ts");
require("./map.ts");
Split(["#left-pane", "#right-pane"], {
    direction: "horizontal",
    cursor: "col-resize",
    gutterSize: 24,
    minSize: [0, 400]
});
Split(["#editor", "#console"], {
    direction: "vertical",
    cursor: "row-resize",
    gutterSize: 24,
    sizes: [60, 40]
});

},{"./editor.ts":4,"./map.ts":8}],8:[function(require,module,exports){
"use strict";
/// <reference path="googlemaps.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var map;
var layersControlNode;
window.initMap = function () {
    window.initMap = null;
    map = init();
    layersControlNode = initLayerControl();
};
var layers = [];
var lastLoader = Promise.resolve(1);
class Layer {
    constructor(index) {
        var template = document.createElement("template");
        template.innerHTML = `<li class="mdc-list-item" role="checkbox">
  <span class="mdc-list-item__graphic">
    <div class="mdc-checkbox">
      <input type="checkbox"
             class="mdc-checkbox__native-control"
             id="layer-${index}-checkbox"/>
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
             viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
  </span>
  <label class="mdc-list-item__text"
         for="layer-list-checkbox-item-${index}">Layer ${index + 1}</label>
</li>`;
        this.node = template.content.firstChild;
        this.checkbox = template.content.querySelector(`#layer-${index}-checkbox`);
        this.checkbox.onchange = () => toggleLayer(this);
        this.condemned = false;
        this.enable(false);
        this.index = index;
    }
    check(checked) {
        this.checkbox.checked = checked;
    }
    condemn() {
        this.condemned = true;
    }
    enable(enabled) {
        this.checkbox.disabled = !enabled;
    }
    load(loader) {
        loader.then(imageMapType => {
            // TODO: If imageMapType is null, set this layer to an error state.
            this.imageMapType = imageMapType;
            this.enable(true);
            this.check(true);
            toggleLayer(this);
        });
    }
}
exports.Layer = Layer;
function init() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        disableDefaultUI: true
    });
    return map;
}
function initLayerControl() {
    let ul = document.createElement("ul");
    ul.setAttribute("class", "mdc-list mdc-list--dense");
    ul.setAttribute("role", "group");
    ul.style.backgroundColor = "#fff";
    ul.style.margin = "8px";
    ul.style.borderRadius = "2px";
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ul);
    return ul;
}
function clearLayers() {
    lastLoader.catch(reason => console.warn(reason));
    lastLoader = Promise.resolve(1);
    while (layersControlNode.firstChild) {
        layersControlNode.removeChild(layersControlNode.firstChild);
    }
    for (let layer of layers) {
        layer.condemn();
    }
    layers = [];
    map.overlayMapTypes.clear();
}
exports.clearLayers = clearLayers;
function addLayer(loader) {
    let layer = new Layer(layersControlNode.childNodes.length);
    lastLoader = lastLoader
        .then(() => new Promise((resolve, reject) => {
        if (layer.condemned) {
            reject(new Error("Layer was condemned, aborting!!!"));
        }
        resolve(null);
    }))
        .then(loader, error => {
        console.warn(error);
        return null;
    });
    layer.load(lastLoader);
    layersControlNode.appendChild(layer.node);
    layers.push(layer);
    return layer;
}
exports.addLayer = addLayer;
function toggleLayer(layer) {
    if (layer.condemned) {
        // This can happen if "Run" is clicked twice in succession and a single
        // layer is loaded on each click. The reason is that the loader will toggle
        // the layer when the createMap call returns, and the layer may already be
        // condemned at that point.
        console.warn("Toggled a condemned layer.");
        return;
    }
    if (layer.checkbox.checked) {
        map.overlayMapTypes.setAt(layer.index, layer.imageMapType);
    }
    else {
        map.overlayMapTypes.setAt(layer.index, null);
    }
}

},{}]},{},[7]);
