// 波动圆
function installWaveCircleMaterial() {
	var Color = Cesium.Color,
		defaultValue = Cesium.defaultValue,
		defineProperties = Object.defineProperties,
		Event = Cesium.Event,
		Property = Cesium.Property,
		Material = Cesium.Material;

	function _getDynamicCircleShader(options) {
		if (options && options.get) {
			return 'uniform vec4 color;\n\
                uniform float duration;\n\
                uniform float count;\n\
                uniform float gradient;\n\
                \n\
                czm_material czm_getMaterial(czm_materialInput materialInput)\n\
                {\n\
                    czm_material material = czm_getDefaultMaterial(materialInput);\n\
                    material.diffuse = 1.5 * color.rgb;\n\
                    vec2 st = materialInput.st;\n\
                    vec3 str = materialInput.str;\n\
                    float dis = distance(st, vec2(0.5, 0.5));\n\
                    float per = fract(czm_frameNumber / duration);\n\
                    if(abs(str.z) > 0.001){\n\
                        discard;\n\
                    }\n\
                    if(dis > 0.5){\n\
                        discard;\n\
                    } else {\n\
                        float perDis = 0.5 / count;\n\
                        float disNum;\n\
                        float bl = .0;\n\
                        for (int i = 0; i <= 10; i++) {\n\
                            if (float(i) <= count) {\n\
                                disNum = perDis * float(i) - dis + per / count;\n\
                                if (disNum > 0.0) {\n\
                                    if (disNum < perDis) {\n\
                                        bl = 1.0 - disNum / perDis;\n\
                                    } else if (disNum - perDis < perDis) {\n\
                                        bl = 1.0 - abs(1.0 - disNum / perDis);\n\
                                    }\n\
                                    material.alpha = pow(bl, gradient);\n\
                                }\n\
                            }\n\
                        }\n\
                    }\n\
                    return material;\n\
                }\n\
                ';
		}
	}

	function CircleWaveMaterialProperty(options) {
		options = options || {};
		this._definitionChanged = new Event();
		this._color = undefined;
		this._colorSubscription = undefined;
		this._duration = undefined;
		this._durationSubscription = undefined;
		this.color = defaultValue(options.color, Color.fromBytes(0, 255, 255, 255));
		this.duration = defaultValue(options.duration, 45);
		this.count = Math.max(defaultValue(options.count, 2), 1);
		this.gradient = defaultValue(options.gradient, 0.1);
		if (this.gradient < 0) {
			this.gradient = 0;
		} else if (this.gradient > 1) {
			this.gradient = 1;
		}
	}

	defineProperties(CircleWaveMaterialProperty.prototype, {
		isConstant: {
			get: function () {
				return false;
			},
		},
		definitionChanged: {
			get: function () {
				return this._definitionChanged;
			},
		},
	});

	CircleWaveMaterialProperty.prototype.getType = function (time) {
		return Material.CircleWaveType;
	};

	CircleWaveMaterialProperty.prototype.getValue = function (time, result) {
		if (!result) {
			result = {};
		}
		result.color = Property.getValueOrUndefined(this._color, time);
		result.duration = this._duration;
		result.count = this.count;
		result.gradient = this.gradient;
		return result;
	};

	CircleWaveMaterialProperty.prototype.equals = function (other) {
		return (
			this === other ||
			(other instanceof CircleWaveMaterialProperty &&
				Cesium.Property.equals(this._color, other._color))
		);
	};

	defineProperties(CircleWaveMaterialProperty.prototype, {
		color: Cesium.createPropertyDescriptor('color'),
		duration: Cesium.createPropertyDescriptor('duration'),
	});
	Cesium.CircleWaveMaterialProperty = CircleWaveMaterialProperty;
	Material.CircleWaveType = 'CircleWave';
	Material._materialCache.addMaterial(Material.CircleWaveType, {
		fabric: {
			type: Material.CircleWaveType,
			uniforms: {
				color: new Color(1.0, 0.0, 0.0, 0.7),
				duration: 45,
				count: 1,
				gradient: 0.1,
			},
			source: _getDynamicCircleShader({ get: true }),
		},
		translucent: function (material) {
			return true;
		},
	});
}
installWaveCircleMaterial();
