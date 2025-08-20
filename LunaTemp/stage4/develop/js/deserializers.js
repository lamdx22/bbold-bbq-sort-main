var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.JointSpring' )
  var i873 = data
  i872.spring = i873[0]
  i872.damper = i873[1]
  i872.targetPosition = i873[2]
  return i872
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.JointMotor' )
  var i875 = data
  i874.m_TargetVelocity = i875[0]
  i874.m_Force = i875[1]
  i874.m_FreeSpin = i875[2]
  return i874
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.JointLimits' )
  var i877 = data
  i876.m_Min = i877[0]
  i876.m_Max = i877[1]
  i876.m_Bounciness = i877[2]
  i876.m_BounceMinVelocity = i877[3]
  i876.m_ContactDistance = i877[4]
  i876.minBounce = i877[5]
  i876.maxBounce = i877[6]
  return i876
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.JointDrive' )
  var i879 = data
  i878.m_PositionSpring = i879[0]
  i878.m_PositionDamper = i879[1]
  i878.m_MaximumForce = i879[2]
  i878.m_UseAcceleration = i879[3]
  return i878
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i881 = data
  i880.m_Spring = i881[0]
  i880.m_Damper = i881[1]
  return i880
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i883 = data
  i882.m_Limit = i883[0]
  i882.m_Bounciness = i883[1]
  i882.m_ContactDistance = i883[2]
  return i882
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i885 = data
  i884.m_ExtremumSlip = i885[0]
  i884.m_ExtremumValue = i885[1]
  i884.m_AsymptoteSlip = i885[2]
  i884.m_AsymptoteValue = i885[3]
  i884.m_Stiffness = i885[4]
  return i884
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i887 = data
  i886.m_LowerAngle = i887[0]
  i886.m_UpperAngle = i887[1]
  return i886
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i889 = data
  i888.m_MotorSpeed = i889[0]
  i888.m_MaximumMotorTorque = i889[1]
  return i888
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i891 = data
  i890.m_DampingRatio = i891[0]
  i890.m_Frequency = i891[1]
  i890.m_Angle = i891[2]
  return i890
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i893 = data
  i892.m_LowerTranslation = i893[0]
  i892.m_UpperTranslation = i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i895 = data
  i894.position = new pc.Vec3( i895[0], i895[1], i895[2] )
  i894.scale = new pc.Vec3( i895[3], i895[4], i895[5] )
  i894.rotation = new pc.Quat(i895[6], i895[7], i895[8], i895[9])
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i897 = data
  i896.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i897[0], i896.main)
  i896.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i897[1], i896.colorBySpeed)
  i896.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i897[2], i896.colorOverLifetime)
  i896.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i897[3], i896.emission)
  i896.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i897[4], i896.rotationBySpeed)
  i896.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i897[5], i896.rotationOverLifetime)
  i896.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i897[6], i896.shape)
  i896.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i897[7], i896.sizeBySpeed)
  i896.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i897[8], i896.sizeOverLifetime)
  i896.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i897[9], i896.textureSheetAnimation)
  i896.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i897[10], i896.velocityOverLifetime)
  i896.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i897[11], i896.noise)
  i896.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i897[12], i896.inheritVelocity)
  i896.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i897[13], i896.forceOverLifetime)
  i896.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i897[14], i896.limitVelocityOverLifetime)
  i896.useAutoRandomSeed = !!i897[15]
  i896.randomSeed = i897[16]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemMain()
  var i899 = data
  i898.duration = i899[0]
  i898.loop = !!i899[1]
  i898.prewarm = !!i899[2]
  i898.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.startDelay)
  i898.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[4], i898.startLifetime)
  i898.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[5], i898.startSpeed)
  i898.startSize3D = !!i899[6]
  i898.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[7], i898.startSizeX)
  i898.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[8], i898.startSizeY)
  i898.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[9], i898.startSizeZ)
  i898.startRotation3D = !!i899[10]
  i898.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[11], i898.startRotationX)
  i898.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[12], i898.startRotationY)
  i898.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[13], i898.startRotationZ)
  i898.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i899[14], i898.startColor)
  i898.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[15], i898.gravityModifier)
  i898.simulationSpace = i899[16]
  request.r(i899[17], i899[18], 0, i898, 'customSimulationSpace')
  i898.simulationSpeed = i899[19]
  i898.useUnscaledTime = !!i899[20]
  i898.scalingMode = i899[21]
  i898.playOnAwake = !!i899[22]
  i898.maxParticles = i899[23]
  i898.emitterVelocityMode = i899[24]
  i898.stopAction = i899[25]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i900 = root || new pc.MinMaxCurve()
  var i901 = data
  i900.mode = i901[0]
  i900.curveMin = new pc.AnimationCurve( { keys_flow: i901[1] } )
  i900.curveMax = new pc.AnimationCurve( { keys_flow: i901[2] } )
  i900.curveMultiplier = i901[3]
  i900.constantMin = i901[4]
  i900.constantMax = i901[5]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i902 = root || new pc.MinMaxGradient()
  var i903 = data
  i902.mode = i903[0]
  i902.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i903[1], i902.gradientMin)
  i902.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i903[2], i902.gradientMax)
  i902.colorMin = new pc.Color(i903[3], i903[4], i903[5], i903[6])
  i902.colorMax = new pc.Color(i903[7], i903[8], i903[9], i903[10])
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i905 = data
  i904.mode = i905[0]
  var i907 = i905[1]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i907[i + 0]) );
  }
  i904.colorKeys = i906
  var i909 = i905[2]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i909[i + 0]) );
  }
  i904.alphaKeys = i908
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemColorBySpeed()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i911[1], i910.color)
  i910.range = new pc.Vec2( i911[2], i911[3] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i915 = data
  i914.color = new pc.Color(i915[0], i915[1], i915[2], i915[3])
  i914.time = i915[4]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i919 = data
  i918.alpha = i919[0]
  i918.time = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemColorOverLifetime()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i921[1], i920.color)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemEmitter()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.rateOverTime)
  i922.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.rateOverDistance)
  var i925 = i923[3]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i925[i + 0]) );
  }
  i922.bursts = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemBurst()
  var i929 = data
  i928.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[0], i928.count)
  i928.cycleCount = i929[1]
  i928.minCount = i929[2]
  i928.maxCount = i929[3]
  i928.repeatInterval = i929[4]
  i928.time = i929[5]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemRotationBySpeed()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[1], i930.x)
  i930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.y)
  i930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[3], i930.z)
  i930.separateAxes = !!i931[4]
  i930.range = new pc.Vec2( i931[5], i931[6] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i932 = root || new pc.ParticleSystemRotationOverLifetime()
  var i933 = data
  i932.enabled = !!i933[0]
  i932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[1], i932.x)
  i932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[2], i932.y)
  i932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i933[3], i932.z)
  i932.separateAxes = !!i933[4]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemShape()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.shapeType = i935[1]
  i934.randomDirectionAmount = i935[2]
  i934.sphericalDirectionAmount = i935[3]
  i934.randomPositionAmount = i935[4]
  i934.alignToDirection = !!i935[5]
  i934.radius = i935[6]
  i934.radiusMode = i935[7]
  i934.radiusSpread = i935[8]
  i934.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[9], i934.radiusSpeed)
  i934.radiusThickness = i935[10]
  i934.angle = i935[11]
  i934.length = i935[12]
  i934.boxThickness = new pc.Vec3( i935[13], i935[14], i935[15] )
  i934.meshShapeType = i935[16]
  request.r(i935[17], i935[18], 0, i934, 'mesh')
  request.r(i935[19], i935[20], 0, i934, 'meshRenderer')
  request.r(i935[21], i935[22], 0, i934, 'skinnedMeshRenderer')
  i934.useMeshMaterialIndex = !!i935[23]
  i934.meshMaterialIndex = i935[24]
  i934.useMeshColors = !!i935[25]
  i934.normalOffset = i935[26]
  i934.arc = i935[27]
  i934.arcMode = i935[28]
  i934.arcSpread = i935[29]
  i934.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i935[30], i934.arcSpeed)
  i934.donutRadius = i935[31]
  i934.position = new pc.Vec3( i935[32], i935[33], i935[34] )
  i934.rotation = new pc.Vec3( i935[35], i935[36], i935[37] )
  i934.scale = new pc.Vec3( i935[38], i935[39], i935[40] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemSizeBySpeed()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.x)
  i936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.y)
  i936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[3], i936.z)
  i936.separateAxes = !!i937[4]
  i936.range = new pc.Vec2( i937[5], i937[6] )
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemSizeOverLifetime()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[1], i938.x)
  i938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[2], i938.y)
  i938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[3], i938.z)
  i938.separateAxes = !!i939[4]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.mode = i941[1]
  i940.animation = i941[2]
  i940.numTilesX = i941[3]
  i940.numTilesY = i941[4]
  i940.useRandomRow = !!i941[5]
  i940.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[6], i940.frameOverTime)
  i940.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[7], i940.startFrame)
  i940.cycleCount = i941[8]
  i940.rowIndex = i941[9]
  i940.flipU = i941[10]
  i940.flipV = i941[11]
  i940.spriteCount = i941[12]
  var i943 = i941[13]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.sprites = i942
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.x)
  i946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.y)
  i946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[3], i946.z)
  i946.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[4], i946.radial)
  i946.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[5], i946.speedModifier)
  i946.space = i947[6]
  i946.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[7], i946.orbitalX)
  i946.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[8], i946.orbitalY)
  i946.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[9], i946.orbitalZ)
  i946.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[10], i946.orbitalOffsetX)
  i946.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[11], i946.orbitalOffsetY)
  i946.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[12], i946.orbitalOffsetZ)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemNoise()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.separateAxes = !!i949[1]
  i948.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.strengthX)
  i948.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[3], i948.strengthY)
  i948.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[4], i948.strengthZ)
  i948.frequency = i949[5]
  i948.damping = !!i949[6]
  i948.octaveCount = i949[7]
  i948.octaveMultiplier = i949[8]
  i948.octaveScale = i949[9]
  i948.quality = i949[10]
  i948.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[11], i948.scrollSpeed)
  i948.scrollSpeedMultiplier = i949[12]
  i948.remapEnabled = !!i949[13]
  i948.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[14], i948.remapX)
  i948.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[15], i948.remapY)
  i948.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[16], i948.remapZ)
  i948.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[17], i948.positionAmount)
  i948.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[18], i948.rotationAmount)
  i948.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[19], i948.sizeAmount)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemInheritVelocity()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.mode = i951[1]
  i950.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.curve)
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemForceOverLifetime()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.x)
  i952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.y)
  i952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.z)
  i952.space = i953[4]
  i952.randomized = !!i953[5]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[1], i954.limit)
  i954.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[2], i954.limitX)
  i954.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[3], i954.limitY)
  i954.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[4], i954.limitZ)
  i954.dampen = i955[5]
  i954.separateAxes = !!i955[6]
  i954.space = i955[7]
  i954.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[8], i954.drag)
  i954.multiplyDragByParticleSize = !!i955[9]
  i954.multiplyDragByParticleVelocity = !!i955[10]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i957 = data
  i956.enabled = !!i957[0]
  request.r(i957[1], i957[2], 0, i956, 'sharedMaterial')
  var i959 = i957[3]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i956.sharedMaterials = i958
  i956.receiveShadows = !!i957[4]
  i956.shadowCastingMode = i957[5]
  i956.sortingLayerID = i957[6]
  i956.sortingOrder = i957[7]
  i956.lightmapIndex = i957[8]
  i956.lightmapSceneIndex = i957[9]
  i956.lightmapScaleOffset = new pc.Vec4( i957[10], i957[11], i957[12], i957[13] )
  i956.lightProbeUsage = i957[14]
  i956.reflectionProbeUsage = i957[15]
  request.r(i957[16], i957[17], 0, i956, 'mesh')
  i956.meshCount = i957[18]
  i956.activeVertexStreamsCount = i957[19]
  i956.alignment = i957[20]
  i956.renderMode = i957[21]
  i956.sortMode = i957[22]
  i956.lengthScale = i957[23]
  i956.velocityScale = i957[24]
  i956.cameraVelocityScale = i957[25]
  i956.normalDirection = i957[26]
  i956.sortingFudge = i957[27]
  i956.minParticleSize = i957[28]
  i956.maxParticleSize = i957[29]
  i956.pivot = new pc.Vec3( i957[30], i957[31], i957[32] )
  request.r(i957[33], i957[34], 0, i956, 'trailMaterial')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i963 = data
  i962.name = i963[0]
  i962.tagId = i963[1]
  i962.enabled = !!i963[2]
  i962.isStatic = !!i963[3]
  i962.layer = i963[4]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i964 = root || new pc.UnityMaterial()
  var i965 = data
  i964.name = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'shader')
  i964.renderQueue = i965[3]
  i964.enableInstancing = !!i965[4]
  var i967 = i965[5]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i967[i + 0]) );
  }
  i964.floatParameters = i966
  var i969 = i965[6]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i969[i + 0]) );
  }
  i964.colorParameters = i968
  var i971 = i965[7]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i971[i + 0]) );
  }
  i964.vectorParameters = i970
  var i973 = i965[8]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i973[i + 0]) );
  }
  i964.textureParameters = i972
  var i975 = i965[9]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i975[i + 0]) );
  }
  i964.materialFlags = i974
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i979 = data
  i978.name = i979[0]
  i978.value = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i983 = data
  i982.name = i983[0]
  i982.value = new pc.Color(i983[1], i983[2], i983[3], i983[4])
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i987 = data
  i986.name = i987[0]
  i986.value = new pc.Vec4( i987[1], i987[2], i987[3], i987[4] )
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i991 = data
  i990.name = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'value')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i995 = data
  i994.name = i995[0]
  i994.enabled = !!i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i997 = data
  i996.name = i997[0]
  i996.width = i997[1]
  i996.height = i997[2]
  i996.mipmapCount = i997[3]
  i996.anisoLevel = i997[4]
  i996.filterMode = i997[5]
  i996.hdr = !!i997[6]
  i996.format = i997[7]
  i996.wrapMode = i997[8]
  i996.alphaIsTransparency = !!i997[9]
  i996.alphaSource = i997[10]
  i996.graphicsFormat = i997[11]
  i996.sRGBTexture = !!i997[12]
  i996.desiredColorSpace = i997[13]
  i996.wrapU = i997[14]
  i996.wrapV = i997[15]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i999 = data
  i998.name = i999[0]
  i998.halfPrecision = !!i999[1]
  i998.useUInt32IndexFormat = !!i999[2]
  i998.vertexCount = i999[3]
  i998.aabb = i999[4]
  var i1001 = i999[5]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( !!i1001[i + 0] );
  }
  i998.streams = i1000
  i998.vertices = i999[6]
  var i1003 = i999[7]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1003[i + 0]) );
  }
  i998.subMeshes = i1002
  var i1005 = i999[8]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 16) {
    i1004.push( new pc.Mat4().setData(i1005[i + 0], i1005[i + 1], i1005[i + 2], i1005[i + 3],  i1005[i + 4], i1005[i + 5], i1005[i + 6], i1005[i + 7],  i1005[i + 8], i1005[i + 9], i1005[i + 10], i1005[i + 11],  i1005[i + 12], i1005[i + 13], i1005[i + 14], i1005[i + 15]) );
  }
  i998.bindposes = i1004
  var i1007 = i999[9]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1007[i + 0]) );
  }
  i998.blendShapes = i1006
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1013 = data
  i1012.triangles = i1013[0]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1019 = data
  i1018.name = i1019[0]
  var i1021 = i1019[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1021[i + 0]) );
  }
  i1018.frames = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1023 = data
  i1022.pivot = new pc.Vec2( i1023[0], i1023[1] )
  i1022.anchorMin = new pc.Vec2( i1023[2], i1023[3] )
  i1022.anchorMax = new pc.Vec2( i1023[4], i1023[5] )
  i1022.sizeDelta = new pc.Vec2( i1023[6], i1023[7] )
  i1022.anchoredPosition3D = new pc.Vec3( i1023[8], i1023[9], i1023[10] )
  i1022.rotation = new pc.Quat(i1023[11], i1023[12], i1023[13], i1023[14])
  i1022.scale = new pc.Vec3( i1023[15], i1023[16], i1023[17] )
  return i1022
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'm_FillRect')
  request.r(i1025[2], i1025[3], 0, i1024, 'm_HandleRect')
  i1024.m_Direction = i1025[4]
  i1024.m_MinValue = i1025[5]
  i1024.m_MaxValue = i1025[6]
  i1024.m_WholeNumbers = !!i1025[7]
  i1024.m_Value = i1025[8]
  i1024.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1025[9], i1024.m_OnValueChanged)
  i1024.m_Navigation = request.d('UnityEngine.UI.Navigation', i1025[10], i1024.m_Navigation)
  i1024.m_Transition = i1025[11]
  i1024.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1025[12], i1024.m_Colors)
  i1024.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1025[13], i1024.m_SpriteState)
  i1024.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1025[14], i1024.m_AnimationTriggers)
  i1024.m_Interactable = !!i1025[15]
  request.r(i1025[16], i1025[17], 0, i1024, 'm_TargetGraphic')
  return i1024
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1027 = data
  i1026.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1027[0], i1026.m_PersistentCalls)
  return i1026
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('UnityEngine.Events.PersistentCall', i1031[i + 0]));
  }
  i1028.m_Calls = i1030
  return i1028
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'm_Target')
  i1034.m_TargetAssemblyTypeName = i1035[2]
  i1034.m_MethodName = i1035[3]
  i1034.m_Mode = i1035[4]
  i1034.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1035[5], i1034.m_Arguments)
  i1034.m_CallState = i1035[6]
  return i1034
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1037 = data
  i1036.m_Mode = i1037[0]
  i1036.m_WrapAround = !!i1037[1]
  request.r(i1037[2], i1037[3], 0, i1036, 'm_SelectOnUp')
  request.r(i1037[4], i1037[5], 0, i1036, 'm_SelectOnDown')
  request.r(i1037[6], i1037[7], 0, i1036, 'm_SelectOnLeft')
  request.r(i1037[8], i1037[9], 0, i1036, 'm_SelectOnRight')
  return i1036
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1039 = data
  i1038.m_NormalColor = new pc.Color(i1039[0], i1039[1], i1039[2], i1039[3])
  i1038.m_HighlightedColor = new pc.Color(i1039[4], i1039[5], i1039[6], i1039[7])
  i1038.m_PressedColor = new pc.Color(i1039[8], i1039[9], i1039[10], i1039[11])
  i1038.m_SelectedColor = new pc.Color(i1039[12], i1039[13], i1039[14], i1039[15])
  i1038.m_DisabledColor = new pc.Color(i1039[16], i1039[17], i1039[18], i1039[19])
  i1038.m_ColorMultiplier = i1039[20]
  i1038.m_FadeDuration = i1039[21]
  return i1038
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'm_HighlightedSprite')
  request.r(i1041[2], i1041[3], 0, i1040, 'm_PressedSprite')
  request.r(i1041[4], i1041[5], 0, i1040, 'm_SelectedSprite')
  request.r(i1041[6], i1041[7], 0, i1040, 'm_DisabledSprite')
  return i1040
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1043 = data
  i1042.m_NormalTrigger = i1043[0]
  i1042.m_HighlightedTrigger = i1043[1]
  i1042.m_PressedTrigger = i1043[2]
  i1042.m_SelectedTrigger = i1043[3]
  i1042.m_DisabledTrigger = i1043[4]
  return i1042
}

Deserializers["ComboVfx"] = function (request, data, root) {
  var i1044 = root || request.c( 'ComboVfx' )
  var i1045 = data
  i1044.comboCount = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'comboText')
  request.r(i1045[3], i1045[4], 0, i1044, 'comboSlider')
  request.r(i1045[5], i1045[6], 0, i1044, 'fillSlider')
  request.r(i1045[7], i1045[8], 0, i1044, 'flameRed')
  request.r(i1045[9], i1045[10], 0, i1044, 'flameViolet')
  request.r(i1045[11], i1045[12], 0, i1044, 'flameBlue')
  var i1047 = i1045[13]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 1, i1046, '')
  }
  i1044.prefabTextVfxs = i1046
  request.r(i1045[14], i1045[15], 0, i1044, 'parentSpawnVfx')
  i1044.offsetSpawnTextVfx = new pc.Vec3( i1045[16], i1045[17], i1045[18] )
  request.r(i1045[19], i1045[20], 0, i1044, 'lvCtr')
  request.r(i1045[21], i1045[22], 0, i1044, 'noticeNewMaxComboVfx')
  request.r(i1045[23], i1045[24], 0, i1044, 'posSpawnNotice')
  i1044.timeCount = i1045[25]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1051 = data
  i1050.cullTransparentMesh = !!i1051[0]
  return i1050
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.Image' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'm_Sprite')
  i1052.m_Type = i1053[2]
  i1052.m_PreserveAspect = !!i1053[3]
  i1052.m_FillCenter = !!i1053[4]
  i1052.m_FillMethod = i1053[5]
  i1052.m_FillAmount = i1053[6]
  i1052.m_FillClockwise = !!i1053[7]
  i1052.m_FillOrigin = i1053[8]
  i1052.m_UseSpriteMesh = !!i1053[9]
  i1052.m_PixelsPerUnitMultiplier = i1053[10]
  request.r(i1053[11], i1053[12], 0, i1052, 'm_Material')
  i1052.m_Maskable = !!i1053[13]
  i1052.m_Color = new pc.Color(i1053[14], i1053[15], i1053[16], i1053[17])
  i1052.m_RaycastTarget = !!i1053[18]
  i1052.m_RaycastPadding = new pc.Vec4( i1053[19], i1053[20], i1053[21], i1053[22] )
  return i1052
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.UI.Text' )
  var i1055 = data
  i1054.m_FontData = request.d('UnityEngine.UI.FontData', i1055[0], i1054.m_FontData)
  i1054.m_Text = i1055[1]
  request.r(i1055[2], i1055[3], 0, i1054, 'm_Material')
  i1054.m_Maskable = !!i1055[4]
  i1054.m_Color = new pc.Color(i1055[5], i1055[6], i1055[7], i1055[8])
  i1054.m_RaycastTarget = !!i1055[9]
  i1054.m_RaycastPadding = new pc.Vec4( i1055[10], i1055[11], i1055[12], i1055[13] )
  return i1054
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'm_Font')
  i1056.m_FontSize = i1057[2]
  i1056.m_FontStyle = i1057[3]
  i1056.m_BestFit = !!i1057[4]
  i1056.m_MinSize = i1057[5]
  i1056.m_MaxSize = i1057[6]
  i1056.m_Alignment = i1057[7]
  i1056.m_AlignByGeometry = !!i1057[8]
  i1056.m_RichText = !!i1057[9]
  i1056.m_HorizontalOverflow = i1057[10]
  i1056.m_VerticalOverflow = i1057[11]
  i1056.m_LineSpacing = i1057[12]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1059 = data
  i1058.enabled = !!i1059[0]
  i1058.planeDistance = i1059[1]
  i1058.referencePixelsPerUnit = i1059[2]
  i1058.isFallbackOverlay = !!i1059[3]
  i1058.renderMode = i1059[4]
  i1058.renderOrder = i1059[5]
  i1058.sortingLayerName = i1059[6]
  i1058.sortingOrder = i1059[7]
  i1058.scaleFactor = i1059[8]
  request.r(i1059[9], i1059[10], 0, i1058, 'worldCamera')
  i1058.overrideSorting = !!i1059[11]
  i1058.pixelPerfect = !!i1059[12]
  i1058.targetDisplay = i1059[13]
  i1058.overridePixelPerfect = !!i1059[14]
  return i1058
}

Deserializers["BetterOutline"] = function (request, data, root) {
  var i1060 = root || request.c( 'BetterOutline' )
  var i1061 = data
  i1060.m_EffectColor = new pc.Color(i1061[0], i1061[1], i1061[2], i1061[3])
  i1060.m_EffectDistance = new pc.Vec2( i1061[4], i1061[5] )
  i1060.m_UseGraphicAlpha = !!i1061[6]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1063 = data
  i1062.enabled = !!i1063[0]
  request.r(i1063[1], i1063[2], 0, i1062, 'sharedMaterial')
  var i1065 = i1063[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 2) {
  request.r(i1065[i + 0], i1065[i + 1], 2, i1064, '')
  }
  i1062.sharedMaterials = i1064
  i1062.receiveShadows = !!i1063[4]
  i1062.shadowCastingMode = i1063[5]
  i1062.sortingLayerID = i1063[6]
  i1062.sortingOrder = i1063[7]
  i1062.lightmapIndex = i1063[8]
  i1062.lightmapSceneIndex = i1063[9]
  i1062.lightmapScaleOffset = new pc.Vec4( i1063[10], i1063[11], i1063[12], i1063[13] )
  i1062.lightProbeUsage = i1063[14]
  i1062.reflectionProbeUsage = i1063[15]
  i1062.color = new pc.Color(i1063[16], i1063[17], i1063[18], i1063[19])
  request.r(i1063[20], i1063[21], 0, i1062, 'sprite')
  i1062.flipX = !!i1063[22]
  i1062.flipY = !!i1063[23]
  i1062.drawMode = i1063[24]
  i1062.size = new pc.Vec2( i1063[25], i1063[26] )
  i1062.tileMode = i1063[27]
  i1062.adaptiveModeThreshold = i1063[28]
  i1062.maskInteraction = i1063[29]
  i1062.spriteSortPoint = i1063[30]
  return i1062
}

Deserializers["Grill"] = function (request, data, root) {
  var i1066 = root || request.c( 'Grill' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 1, i1068, '')
  }
  i1066.liSprRend = i1068
  var i1071 = i1067[1]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(i1071[i + 0]);
  }
  i1066.liSprRendDefaultLayer = i1070
  request.r(i1067[2], i1067[3], 0, i1066, 'platePrefab')
  request.r(i1067[4], i1067[5], 0, i1066, 'skewerPrefab')
  request.r(i1067[6], i1067[7], 0, i1066, 'sprRendGrill')
  request.r(i1067[8], i1067[9], 0, i1066, 'lockGrillOB')
  request.r(i1067[10], i1067[11], 0, i1066, 'animSmoke')
  request.r(i1067[12], i1067[13], 0, i1066, 'sprOnePlace')
  request.r(i1067[14], i1067[15], 0, i1066, 'sprThreePlaces')
  request.r(i1067[16], i1067[17], 0, i1066, 'sprSale')
  request.r(i1067[18], i1067[19], 0, i1066, 'sprNotMatch3')
  request.r(i1067[20], i1067[21], 0, i1066, 'posSpawnPlate')
  i1066.offsetYPlate = i1067[22]
  i1066.grillUnlockType = i1067[23]
  i1066.grillType = i1067[24]
  i1066.numberSkewerUnlock = i1067[25]
  i1066.skewerTypeUnlock = i1067[26]
  i1066.numOfPosPlaceSkewers = i1067[27]
  i1066.isSaleGrill = !!i1067[28]
  i1066.maxPlace = i1067[29]
  var i1073 = i1067[30]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('PosPlaceAtGrill')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('PosPlaceAtGrill', i1073[i + 0]));
  }
  i1066.posPlaceSkewers = i1072
  var i1075 = i1067[31]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('Plate')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1066.plates = i1074
  request.r(i1067[32], i1067[33], 0, i1066, 'levelCtr')
  i1066.grillData = request.d('GrillData', i1067[34], i1066.grillData)
  i1066.sortingLayerPress = i1067[35]
  i1066._offSetDrag = new pc.Vec2( i1067[36], i1067[37] )
  var i1077 = i1067[38]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(i1077[i + 0]);
  }
  i1066.liSprRendDefaultOrderLayer = i1076
  return i1066
}

Deserializers["PosPlaceAtGrill"] = function (request, data, root) {
  var i1084 = root || request.c( 'PosPlaceAtGrill' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'grill')
  request.r(i1085[2], i1085[3], 0, i1084, 'pos')
  request.r(i1085[4], i1085[5], 0, i1084, 'skewerAtPos')
  return i1084
}

Deserializers["GrillData"] = function (request, data, root) {
  var i1088 = root || request.c( 'GrillData' )
  var i1089 = data
  i1088.grillType = i1089[0]
  i1088.typeUnlock = i1089[1]
  i1088.isSaleGrill = !!i1089[2]
  i1088.skewerTypeUnLocked = i1089[3]
  i1088.numOfPosSkewer = i1089[4]
  i1088.numberSkewerUnlock = i1089[5]
  i1088.rowIndex = i1089[6]
  i1088.colIndex = i1089[7]
  var i1091 = i1089[8]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('PlateData')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('PlateData', i1091[i + 0]));
  }
  i1088.plateDatas = i1090
  var i1093 = i1089[9]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(request.d('SkewerData', i1093[i + 0]));
  }
  i1088.skewerDatasOnGrill = i1092
  return i1088
}

Deserializers["PlateData"] = function (request, data, root) {
  var i1096 = root || request.c( 'PlateData' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('SkewerData', i1099[i + 0]));
  }
  i1096.skewers = i1098
  return i1096
}

Deserializers["SkewerData"] = function (request, data, root) {
  var i1102 = root || request.c( 'SkewerData' )
  var i1103 = data
  i1102.skewerType = i1103[0]
  i1102.typeAppear = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1107 = data
  i1106.usedByComposite = !!i1107[0]
  i1106.autoTiling = !!i1107[1]
  i1106.size = new pc.Vec2( i1107[2], i1107[3] )
  i1106.edgeRadius = i1107[4]
  i1106.enabled = !!i1107[5]
  i1106.isTrigger = !!i1107[6]
  i1106.usedByEffector = !!i1107[7]
  i1106.density = i1107[8]
  i1106.offset = new pc.Vec2( i1107[9], i1107[10] )
  request.r(i1107[11], i1107[12], 0, i1106, 'material')
  return i1106
}

Deserializers["SmokeGrill"] = function (request, data, root) {
  var i1108 = root || request.c( 'SmokeGrill' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'anim')
  i1108.nameAnim = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'animatorController')
  request.r(i1111[2], i1111[3], 0, i1110, 'avatar')
  i1110.updateMode = i1111[4]
  i1110.hasTransformHierarchy = !!i1111[5]
  i1110.applyRootMotion = !!i1111[6]
  var i1113 = i1111[7]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 2, i1112, '')
  }
  i1110.humanBones = i1112
  i1110.enabled = !!i1111[8]
  return i1110
}

Deserializers["LockOfGrillOB"] = function (request, data, root) {
  var i1116 = root || request.c( 'LockOfGrillOB' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1116.liSprRend = i1118
  var i1121 = i1117[1]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(i1121[i + 0]);
  }
  i1116.liSprRendDefaultLayer = i1120
  request.r(i1117[2], i1117[3], 0, i1116, 'grill')
  request.r(i1117[4], i1117[5], 0, i1116, 'sprRendGrillLocked')
  request.r(i1117[6], i1117[7], 0, i1116, 'sprRendAdsUnlock')
  request.r(i1117[8], i1117[9], 0, i1116, 'sprRendSkewerUnlock')
  request.r(i1117[10], i1117[11], 0, i1116, 'sprLockedByNumber')
  request.r(i1117[12], i1117[13], 0, i1116, 'textLocked')
  request.r(i1117[14], i1117[15], 0, i1116, 'textNumberSkewer')
  request.r(i1117[16], i1117[17], 0, i1116, 'col')
  i1116.sortingLayerPress = i1117[18]
  i1116._offSetDrag = new pc.Vec2( i1117[19], i1117[20] )
  var i1123 = i1117[21]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(i1123[i + 0]);
  }
  i1116.liSprRendDefaultOrderLayer = i1122
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1125 = data
  i1124.center = new pc.Vec3( i1125[0], i1125[1], i1125[2] )
  i1124.size = new pc.Vec3( i1125[3], i1125[4], i1125[5] )
  i1124.enabled = !!i1125[6]
  i1124.isTrigger = !!i1125[7]
  request.r(i1125[8], i1125[9], 0, i1124, 'material')
  return i1124
}

Deserializers["GrillMouseEvent"] = function (request, data, root) {
  var i1126 = root || request.c( 'GrillMouseEvent' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'grill')
  return i1126
}

Deserializers["Plate"] = function (request, data, root) {
  var i1128 = root || request.c( 'Plate' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('posAtPlate')))
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.add(request.d('posAtPlate', i1131[i + 0]));
  }
  i1128.posPlaceSkewers = i1130
  request.r(i1129[1], i1129[2], 0, i1128, 'skewerPrefab')
  request.r(i1129[3], i1129[4], 0, i1128, 'grill')
  return i1128
}

Deserializers["posAtPlate"] = function (request, data, root) {
  var i1134 = root || request.c( 'posAtPlate' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'plate')
  request.r(i1135[2], i1135[3], 0, i1134, 'pos')
  request.r(i1135[4], i1135[5], 0, i1134, 'skewerAtPos')
  return i1134
}

Deserializers["Skewer"] = function (request, data, root) {
  var i1136 = root || request.c( 'Skewer' )
  var i1137 = data
  var i1139 = i1137[0]
  var i1138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 1, i1138, '')
  }
  i1136.liSprRend = i1138
  var i1141 = i1137[1]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(i1141[i + 0]);
  }
  i1136.liSprRendDefaultLayer = i1140
  i1136.skewerType = i1137[2]
  i1136.skewerTypeAppear = i1137[3]
  request.r(i1137[4], i1137[5], 0, i1136, 'sprRend')
  request.r(i1137[6], i1137[7], 0, i1136, 'sprRendSkin')
  request.r(i1137[8], i1137[9], 0, i1136, 'sprSecret')
  var i1143 = i1137[10]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1136.sprIces = i1142
  request.r(i1137[11], i1137[12], 0, i1136, 'sprOutLine')
  request.r(i1137[13], i1137[14], 0, i1136, 'animBreakSecretSkin')
  request.r(i1137[15], i1137[16], 0, i1136, 'vfxBreakIce')
  request.r(i1137[17], i1137[18], 0, i1136, 'vfxSmoke')
  var i1145 = i1137[19]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 1, i1144, '')
  }
  i1136.posIces = i1144
  request.r(i1137[20], i1137[21], 0, i1136, 'rb')
  request.r(i1137[22], i1137[23], 0, i1136, 'col')
  request.r(i1137[24], i1137[25], 0, i1136, 'pickBox')
  request.r(i1137[26], i1137[27], 0, i1136, 'levelCtrl')
  i1136.curPosIn = request.d('PosPlaceAtGrill', i1137[28], i1136.curPosIn)
  i1136.lastPosIn = request.d('PosPlaceAtGrill', i1137[29], i1136.lastPosIn)
  i1136.posAtPlate = request.d('posAtPlate', i1137[30], i1136.posAtPlate)
  var i1147 = i1137[31]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1136.colGrills = i1146
  i1136.defaultScale = new pc.Vec3( i1137[32], i1137[33], i1137[34] )
  i1136.pressScale = new pc.Vec3( i1137[35], i1137[36], i1137[37] )
  i1136.pressRo = new pc.Vec3( i1137[38], i1137[39], i1137[40] )
  i1136.putInToSound = i1137[41]
  i1136.pickUpSound = i1137[42]
  i1136.putDownSound = i1137[43]
  request.r(i1137[44], i1137[45], 0, i1136, 'parent')
  i1136.limitDistance = i1137[46]
  i1136._isPressing = !!i1137[47]
  i1136._isMoveByDragg = !!i1137[48]
  i1136.sortingLayerPress = i1137[49]
  i1136._offSetDrag = new pc.Vec2( i1137[50], i1137[51] )
  var i1149 = i1137[52]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(i1149[i + 0]);
  }
  i1136.liSprRendDefaultOrderLayer = i1148
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1157 = data
  i1156.bodyType = i1157[0]
  request.r(i1157[1], i1157[2], 0, i1156, 'material')
  i1156.simulated = !!i1157[3]
  i1156.useAutoMass = !!i1157[4]
  i1156.mass = i1157[5]
  i1156.drag = i1157[6]
  i1156.angularDrag = i1157[7]
  i1156.gravityScale = i1157[8]
  i1156.collisionDetectionMode = i1157[9]
  i1156.sleepMode = i1157[10]
  i1156.constraints = i1157[11]
  return i1156
}

Deserializers["SkewerMouseEvent"] = function (request, data, root) {
  var i1158 = root || request.c( 'SkewerMouseEvent' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'skewer')
  return i1158
}

Deserializers["Shipper"] = function (request, data, root) {
  var i1160 = root || request.c( 'Shipper' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'animOrderAppear')
  request.r(i1161[2], i1161[3], 0, i1160, 'animShipperSmall')
  request.r(i1161[4], i1161[5], 0, i1160, 'parentSpawnItem')
  request.r(i1161[6], i1161[7], 0, i1160, 'cover')
  request.r(i1161[8], i1161[9], 0, i1160, 'itemOrderPrefab')
  request.r(i1161[10], i1161[11], 0, i1160, 'sliderTimer')
  request.r(i1161[12], i1161[13], 0, i1160, 'textTimer')
  request.r(i1161[14], i1161[15], 0, i1160, 'posAppear')
  request.r(i1161[16], i1161[17], 0, i1160, 'posDriveTo')
  request.r(i1161[18], i1161[19], 0, i1160, 'posDriveAway')
  request.r(i1161[20], i1161[21], 0, i1160, 'emotionHappy')
  request.r(i1161[22], i1161[23], 0, i1160, 'emotionAngry')
  var i1163 = i1161[24]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('ItemOrder')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1160.itemOrders = i1162
  request.r(i1161[25], i1161[26], 0, i1160, 'levelCtr')
  i1160.isCompletedOrder = !!i1161[27]
  return i1160
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1167 = data
  i1166.m_Spacing = i1167[0]
  i1166.m_ChildForceExpandWidth = !!i1167[1]
  i1166.m_ChildForceExpandHeight = !!i1167[2]
  i1166.m_ChildControlWidth = !!i1167[3]
  i1166.m_ChildControlHeight = !!i1167[4]
  i1166.m_ChildScaleWidth = !!i1167[5]
  i1166.m_ChildScaleHeight = !!i1167[6]
  i1166.m_ReverseArrangement = !!i1167[7]
  i1166.m_Padding = UnityEngine.RectOffset.FromPaddings(i1167[8], i1167[9], i1167[10], i1167[11])
  i1166.m_ChildAlignment = i1167[12]
  return i1166
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.Button' )
  var i1169 = data
  i1168.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1169[0], i1168.m_OnClick)
  i1168.m_Navigation = request.d('UnityEngine.UI.Navigation', i1169[1], i1168.m_Navigation)
  i1168.m_Transition = i1169[2]
  i1168.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1169[3], i1168.m_Colors)
  i1168.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1169[4], i1168.m_SpriteState)
  i1168.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1169[5], i1168.m_AnimationTriggers)
  i1168.m_Interactable = !!i1169[6]
  request.r(i1169[7], i1169[8], 0, i1168, 'm_TargetGraphic')
  return i1168
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1171 = data
  i1170.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1171[0], i1170.m_PersistentCalls)
  return i1170
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'm_ObjectArgument')
  i1172.m_ObjectArgumentAssemblyTypeName = i1173[2]
  i1172.m_IntArgument = i1173[3]
  i1172.m_FloatArgument = i1173[4]
  i1172.m_StringArgument = i1173[5]
  i1172.m_BoolArgument = !!i1173[6]
  return i1172
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1175 = data
  i1174.m_IgnoreReversedGraphics = !!i1175[0]
  i1174.m_BlockingObjects = i1175[1]
  i1174.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1175[2] )
  return i1174
}

Deserializers["ItemOrder"] = function (request, data, root) {
  var i1176 = root || request.c( 'ItemOrder' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'bg')
  request.r(i1177[2], i1177[3], 0, i1176, 'normalBg')
  request.r(i1177[4], i1177[5], 0, i1176, 'saleBg')
  request.r(i1177[6], i1177[7], 0, i1176, 'iconSkewer')
  request.r(i1177[8], i1177[9], 0, i1176, 'iconCompleted')
  request.r(i1177[10], i1177[11], 0, i1176, 'shipper')
  i1176.idSkewer = i1177[12]
  request.r(i1177[13], i1177[14], 0, i1176, 'level')
  i1176.isDone = !!i1177[15]
  i1176.isSaleItem = !!i1177[16]
  return i1176
}

Deserializers["PlateCompleted"] = function (request, data, root) {
  var i1178 = root || request.c( 'PlateCompleted' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'sprPlate')
  var i1181 = i1179[2]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 1, i1180, '')
  }
  i1178.posMoveInCompletedSkewers = i1180
  request.r(i1179[3], i1179[4], 0, i1178, 'vfxStar')
  i1178.canChoose = !!i1179[5]
  i1178.originPos = new pc.Vec3( i1179[6], i1179[7], i1179[8] )
  return i1178
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1183 = data
  i1182.m_hasFontAssetChanged = !!i1183[0]
  request.r(i1183[1], i1183[2], 0, i1182, 'm_baseMaterial')
  i1182.m_maskOffset = new pc.Vec4( i1183[3], i1183[4], i1183[5], i1183[6] )
  i1182.m_text = i1183[7]
  i1182.m_isRightToLeft = !!i1183[8]
  request.r(i1183[9], i1183[10], 0, i1182, 'm_fontAsset')
  request.r(i1183[11], i1183[12], 0, i1182, 'm_sharedMaterial')
  var i1185 = i1183[13]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 2, i1184, '')
  }
  i1182.m_fontSharedMaterials = i1184
  request.r(i1183[14], i1183[15], 0, i1182, 'm_fontMaterial')
  var i1187 = i1183[16]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1182.m_fontMaterials = i1186
  i1182.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1183[17], i1183[18], i1183[19], i1183[20])
  i1182.m_fontColor = new pc.Color(i1183[21], i1183[22], i1183[23], i1183[24])
  i1182.m_enableVertexGradient = !!i1183[25]
  i1182.m_colorMode = i1183[26]
  i1182.m_fontColorGradient = request.d('TMPro.VertexGradient', i1183[27], i1182.m_fontColorGradient)
  request.r(i1183[28], i1183[29], 0, i1182, 'm_fontColorGradientPreset')
  request.r(i1183[30], i1183[31], 0, i1182, 'm_spriteAsset')
  i1182.m_tintAllSprites = !!i1183[32]
  request.r(i1183[33], i1183[34], 0, i1182, 'm_StyleSheet')
  i1182.m_TextStyleHashCode = i1183[35]
  i1182.m_overrideHtmlColors = !!i1183[36]
  i1182.m_faceColor = UnityEngine.Color32.ConstructColor(i1183[37], i1183[38], i1183[39], i1183[40])
  i1182.m_fontSize = i1183[41]
  i1182.m_fontSizeBase = i1183[42]
  i1182.m_fontWeight = i1183[43]
  i1182.m_enableAutoSizing = !!i1183[44]
  i1182.m_fontSizeMin = i1183[45]
  i1182.m_fontSizeMax = i1183[46]
  i1182.m_fontStyle = i1183[47]
  i1182.m_HorizontalAlignment = i1183[48]
  i1182.m_VerticalAlignment = i1183[49]
  i1182.m_textAlignment = i1183[50]
  i1182.m_characterSpacing = i1183[51]
  i1182.m_wordSpacing = i1183[52]
  i1182.m_lineSpacing = i1183[53]
  i1182.m_lineSpacingMax = i1183[54]
  i1182.m_paragraphSpacing = i1183[55]
  i1182.m_charWidthMaxAdj = i1183[56]
  i1182.m_enableWordWrapping = !!i1183[57]
  i1182.m_wordWrappingRatios = i1183[58]
  i1182.m_overflowMode = i1183[59]
  request.r(i1183[60], i1183[61], 0, i1182, 'm_linkedTextComponent')
  request.r(i1183[62], i1183[63], 0, i1182, 'parentLinkedComponent')
  i1182.m_enableKerning = !!i1183[64]
  i1182.m_enableExtraPadding = !!i1183[65]
  i1182.checkPaddingRequired = !!i1183[66]
  i1182.m_isRichText = !!i1183[67]
  i1182.m_parseCtrlCharacters = !!i1183[68]
  i1182.m_isOrthographic = !!i1183[69]
  i1182.m_isCullingEnabled = !!i1183[70]
  i1182.m_horizontalMapping = i1183[71]
  i1182.m_verticalMapping = i1183[72]
  i1182.m_uvLineOffset = i1183[73]
  i1182.m_geometrySortingOrder = i1183[74]
  i1182.m_IsTextObjectScaleStatic = !!i1183[75]
  i1182.m_VertexBufferAutoSizeReduction = !!i1183[76]
  i1182.m_useMaxVisibleDescender = !!i1183[77]
  i1182.m_pageToDisplay = i1183[78]
  i1182.m_margin = new pc.Vec4( i1183[79], i1183[80], i1183[81], i1183[82] )
  i1182.m_isUsingLegacyAnimationComponent = !!i1183[83]
  i1182.m_isVolumetricText = !!i1183[84]
  request.r(i1183[85], i1183[86], 0, i1182, 'm_Material')
  i1182.m_Maskable = !!i1183[87]
  i1182.m_Color = new pc.Color(i1183[88], i1183[89], i1183[90], i1183[91])
  i1182.m_RaycastTarget = !!i1183[92]
  i1182.m_RaycastPadding = new pc.Vec4( i1183[93], i1183[94], i1183[95], i1183[96] )
  return i1182
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.VertexGradient' )
  var i1189 = data
  i1188.topLeft = new pc.Color(i1189[0], i1189[1], i1189[2], i1189[3])
  i1188.topRight = new pc.Color(i1189[4], i1189[5], i1189[6], i1189[7])
  i1188.bottomLeft = new pc.Color(i1189[8], i1189[9], i1189[10], i1189[11])
  i1188.bottomRight = new pc.Color(i1189[12], i1189[13], i1189[14], i1189[15])
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'clip')
  request.r(i1191[2], i1191[3], 0, i1190, 'outputAudioMixerGroup')
  i1190.playOnAwake = !!i1191[4]
  i1190.loop = !!i1191[5]
  i1190.time = i1191[6]
  i1190.volume = i1191[7]
  i1190.pitch = i1191[8]
  i1190.enabled = !!i1191[9]
  return i1190
}

Deserializers["EpicToonFX.ETFXLightFade"] = function (request, data, root) {
  var i1192 = root || request.c( 'EpicToonFX.ETFXLightFade' )
  var i1193 = data
  i1192.life = i1193[0]
  i1192.killAfterLife = !!i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1195 = data
  i1194.enabled = !!i1195[0]
  i1194.type = i1195[1]
  i1194.color = new pc.Color(i1195[2], i1195[3], i1195[4], i1195[5])
  i1194.cullingMask = i1195[6]
  i1194.intensity = i1195[7]
  i1194.range = i1195[8]
  i1194.spotAngle = i1195[9]
  i1194.shadows = i1195[10]
  i1194.shadowNormalBias = i1195[11]
  i1194.shadowBias = i1195[12]
  i1194.shadowStrength = i1195[13]
  i1194.shadowResolution = i1195[14]
  i1194.lightmapBakeType = i1195[15]
  i1194.renderMode = i1195[16]
  request.r(i1195[17], i1195[18], 0, i1194, 'cookie')
  i1194.cookieSize = i1195[19]
  return i1194
}

Deserializers["Popup.PopupSystem"] = function (request, data, root) {
  var i1196 = root || request.c( 'Popup.PopupSystem' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'popupCamera')
  request.r(i1197[2], i1197[3], 0, i1196, 'bgEffect')
  request.r(i1197[4], i1197[5], 0, i1196, 'backBlocker')
  request.r(i1197[6], i1197[7], 0, i1196, 'rootTransform')
  request.r(i1197[8], i1197[9], 0, i1196, 'addOnTransform')
  var i1199 = i1197[10]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('Popup.PopupSystem+PopupTypePrefabPair')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('Popup.PopupSystem+PopupTypePrefabPair', i1199[i + 0]));
  }
  i1196.popupList = i1198
  i1196.testPopup = i1197[11]
  return i1196
}

Deserializers["Popup.PopupSystem+PopupTypePrefabPair"] = function (request, data, root) {
  var i1202 = root || request.c( 'Popup.PopupSystem+PopupTypePrefabPair' )
  var i1203 = data
  i1202.type = i1203[0]
  request.r(i1203[1], i1203[2], 0, i1202, 'prefab')
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1205 = data
  i1204.enabled = !!i1205[0]
  i1204.aspect = i1205[1]
  i1204.orthographic = !!i1205[2]
  i1204.orthographicSize = i1205[3]
  i1204.backgroundColor = new pc.Color(i1205[4], i1205[5], i1205[6], i1205[7])
  i1204.nearClipPlane = i1205[8]
  i1204.farClipPlane = i1205[9]
  i1204.fieldOfView = i1205[10]
  i1204.depth = i1205[11]
  i1204.clearFlags = i1205[12]
  i1204.cullingMask = i1205[13]
  i1204.rect = i1205[14]
  request.r(i1205[15], i1205[16], 0, i1204, 'targetTexture')
  i1204.usePhysicalProperties = !!i1205[17]
  i1204.focalLength = i1205[18]
  i1204.sensorSize = new pc.Vec2( i1205[19], i1205[20] )
  i1204.lensShift = new pc.Vec2( i1205[21], i1205[22] )
  i1204.gateFit = i1205[23]
  i1204.commandBufferCount = i1205[24]
  i1204.cameraType = i1205[25]
  return i1204
}

Deserializers["PopupDarkEffect"] = function (request, data, root) {
  var i1206 = root || request.c( 'PopupDarkEffect' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'image')
  i1206.enabledColor = new pc.Color(i1207[2], i1207[3], i1207[4], i1207[5])
  i1206.disabledColor = new pc.Color(i1207[6], i1207[7], i1207[8], i1207[9])
  i1206.enabledDuration = i1207[10]
  i1206.disabledDuration = i1207[11]
  return i1206
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1209 = data
  i1208.m_UiScaleMode = i1209[0]
  i1208.m_ReferencePixelsPerUnit = i1209[1]
  i1208.m_ScaleFactor = i1209[2]
  i1208.m_ReferenceResolution = new pc.Vec2( i1209[3], i1209[4] )
  i1208.m_ScreenMatchMode = i1209[5]
  i1208.m_MatchWidthOrHeight = i1209[6]
  i1208.m_PhysicalUnit = i1209[7]
  i1208.m_FallbackScreenDPI = i1209[8]
  i1208.m_DefaultSpriteDPI = i1209[9]
  i1208.m_DynamicPixelsPerUnit = i1209[10]
  i1208.m_PresetInfoIsWorld = !!i1209[11]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1211 = data
  i1210.m_Alpha = i1211[0]
  i1210.m_Interactable = !!i1211[1]
  i1210.m_BlocksRaycasts = !!i1211[2]
  i1210.m_IgnoreParentGroups = !!i1211[3]
  i1210.enabled = !!i1211[4]
  return i1210
}

Deserializers["PopupLiteMessage"] = function (request, data, root) {
  var i1212 = root || request.c( 'PopupLiteMessage' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'messageText')
  i1212.showDuration = i1213[2]
  i1212.fadeOutDuration = i1213[3]
  i1212.info = request.d('CurrencyInfo', i1213[4], i1212.info)
  i1212.cancelable = !!i1213[5]
  return i1212
}

Deserializers["CurrencyInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'CurrencyInfo' )
  var i1215 = data
  i1214.showCurrency = !!i1215[0]
  i1214.showSetting = !!i1215[1]
  i1214.showMoreGem = !!i1215[2]
  i1214.showMoreCoin = !!i1215[3]
  return i1214
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1217 = data
  i1216.m_EffectColor = new pc.Color(i1217[0], i1217[1], i1217[2], i1217[3])
  i1216.m_EffectDistance = new pc.Vec2( i1217[4], i1217[5] )
  i1216.m_UseGraphicAlpha = !!i1217[6]
  return i1216
}

Deserializers["PopupBlurEffect"] = function (request, data, root) {
  var i1218 = root || request.c( 'PopupBlurEffect' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'image')
  request.r(i1219[2], i1219[3], 0, i1218, 'material')
  i1218.enabledDuration = i1219[4]
  i1218.disabledDuration = i1219[5]
  return i1218
}

Deserializers["Popup.BlockingImage"] = function (request, data, root) {
  var i1220 = root || request.c( 'Popup.BlockingImage' )
  var i1221 = data
  return i1220
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'm_Texture')
  i1222.m_UVRect = UnityEngine.Rect.MinMaxRect(i1223[2], i1223[3], i1223[4], i1223[5])
  request.r(i1223[6], i1223[7], 0, i1222, 'm_Material')
  i1222.m_Maskable = !!i1223[8]
  i1222.m_Color = new pc.Color(i1223[9], i1223[10], i1223[11], i1223[12])
  i1222.m_RaycastTarget = !!i1223[13]
  i1222.m_RaycastPadding = new pc.Vec4( i1223[14], i1223[15], i1223[16], i1223[17] )
  return i1222
}

Deserializers["PopupSample1"] = function (request, data, root) {
  var i1224 = root || request.c( 'PopupSample1' )
  var i1225 = data
  i1224.info = request.d('CurrencyInfo', i1225[0], i1224.info)
  i1224.cancelable = !!i1225[1]
  return i1224
}

Deserializers["PopupSample2"] = function (request, data, root) {
  var i1226 = root || request.c( 'PopupSample2' )
  var i1227 = data
  i1226.info = request.d('CurrencyInfo', i1227[0], i1226.info)
  i1226.cancelable = !!i1227[1]
  return i1226
}

Deserializers["RestUI"] = function (request, data, root) {
  var i1228 = root || request.c( 'RestUI' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'canvas')
  return i1228
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1230 = root || request.c( 'AudioManager' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'audioClipTable')
  request.r(i1231[2], i1231[3], 0, i1230, 'effectsSource')
  request.r(i1231[4], i1231[5], 0, i1230, 'musicSource')
  request.r(i1231[6], i1231[7], 0, i1230, 'effectsSource2')
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1233 = data
  i1232.name = i1233[0]
  i1232.index = i1233[1]
  i1232.startup = !!i1233[2]
  return i1232
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'm_FirstSelected')
  i1234.m_sendNavigationEvents = !!i1235[2]
  i1234.m_DragThreshold = i1235[3]
  return i1234
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1237 = data
  i1236.m_HorizontalAxis = i1237[0]
  i1236.m_VerticalAxis = i1237[1]
  i1236.m_SubmitButton = i1237[2]
  i1236.m_CancelButton = i1237[3]
  i1236.m_InputActionsPerSecond = i1237[4]
  i1236.m_RepeatDelay = i1237[5]
  i1236.m_ForceModuleActive = !!i1237[6]
  i1236.m_SendPointerHoverToParent = !!i1237[7]
  return i1236
}

Deserializers["PlayerDataPreview"] = function (request, data, root) {
  var i1238 = root || request.c( 'PlayerDataPreview' )
  var i1239 = data
  i1238.playerData = request.d('PlayerData', i1239[0], i1238.playerData)
  i1238.level = i1239[1]
  return i1238
}

Deserializers["PlayerData"] = function (request, data, root) {
  var i1240 = root || request.c( 'PlayerData' )
  var i1241 = data
  i1240.languageType = i1241[0]
  i1240.localFirstActiveTime = i1241[1]
  i1240.localLastActiveTime = i1241[2]
  i1240.lastHeartRecoveryTime = i1241[3]
  i1240.lastClickGetCoinDailyShop = i1241[4]
  i1240.lastClickGetCoinDailyReward = i1241[5]
  i1240.timeToNextHeart = i1241[6]
  i1240.enterGameTimeCount = i1241[7]
  i1240.coinCount = i1241[8]
  i1240.gemCount = i1241[9]
  i1240.curHeart = i1241[10]
  i1240.maxHeart = i1241[11]
  i1240.numOfRemoveMatch3Bts = i1241[12]
  i1240.numOfSwapBts = i1241[13]
  i1240.numOfFreezeTimeBts = i1241[14]
  i1240.numOfBreakIceBts = i1241[15]
  i1240.timeToAddHeart = i1241[16]
  i1240.noAds = !!i1241[17]
  i1240.vip = !!i1241[18]
  i1240.removeAds1dExpiredTime = i1241[19]
  i1240.namePlayer = i1241[20]
  i1240.avatarPLayer = i1241[21]
  i1240.level = i1241[22]
  i1240.fakeIndexLevel = i1241[23]
  i1240.hasInfiniteHearts = !!i1241[24]
  i1240.infiniteHeartsExpireTime = i1241[25]
  i1240.numSkipAds = i1241[26]
  i1240.curPiggyBankCoin = i1241[27]
  i1240.maxPiggyBankCoin = i1241[28]
  i1240.coinTier1PiggyBank = i1241[29]
  i1240.lastClaimedRewardId = i1241[30]
  i1240.checkGetFreeCoin = !!i1241[31]
  i1240.currentDailyBonusDay = i1241[32]
  i1240.lastReceiveDailyBonusTime = i1241[33]
  var i1243 = i1241[34]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(i1243[i + 0]);
  }
  i1240.coinShop = i1242
  var i1245 = i1241[35]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('DailyRewardPlayerState')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('DailyRewardPlayerState', i1245[i + 0]));
  }
  i1240.dailyRewardStates = i1244
  i1240.gameData = request.d('GameData', i1241[36], i1240.gameData)
  i1240.tempData = request.d('TempData', i1241[37], i1240.tempData)
  return i1240
}

Deserializers["DailyRewardPlayerState"] = function (request, data, root) {
  var i1248 = root || request.c( 'DailyRewardPlayerState' )
  var i1249 = data
  i1248.rewardId = i1249[0]
  i1248.state = i1249[1]
  i1248.claimDate = request.d('System.DateTime', i1249[2], i1248.claimDate)
  return i1248
}

Deserializers["GameData"] = function (request, data, root) {
  var i1250 = root || request.c( 'GameData' )
  var i1251 = data
  i1250.musicState = !!i1251[0]
  i1250.soundState = !!i1251[1]
  i1250.vibrateState = !!i1251[2]
  return i1250
}

Deserializers["TempData"] = function (request, data, root) {
  var i1252 = root || request.c( 'TempData' )
  var i1253 = data
  i1252.rewardedVideoCount = i1253[0]
  i1252.lastTimeBBButonShowAd = i1253[1]
  i1252.winLevelCount = i1253[2]
  i1252.loseLevelCount = i1253[3]
  i1252.earnedGemCount = i1253[4]
  i1252.push_earnedGemCount_event = !!i1253[5]
  i1252.spentIAP = i1253[6]
  i1252.push_spentIAP_event = !!i1253[7]
  i1252.push_retention_day7 = !!i1253[8]
  i1252.push_retention_day5 = !!i1253[9]
  i1252.push_retention_day3 = !!i1253[10]
  i1252.push_firstIAP_event = !!i1253[11]
  return i1252
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1254 = root || request.c( 'UIManager' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 2, i1256, '')
  }
  i1254.screens = i1256
  request.r(i1255[1], i1255[2], 0, i1254, 'canvas')
  request.r(i1255[3], i1255[4], 0, i1254, 'camUI')
  request.r(i1255[5], i1255[6], 0, i1254, 'transition')
  request.r(i1255[7], i1255[8], 0, i1254, 'popUpLose')
  request.r(i1255[9], i1255[10], 0, i1254, 'popUpWin')
  return i1254
}

Deserializers["SafeArea"] = function (request, data, root) {
  var i1260 = root || request.c( 'SafeArea' )
  var i1261 = data
  return i1260
}

Deserializers["PlayScreen"] = function (request, data, root) {
  var i1262 = root || request.c( 'PlayScreen' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'curLevelCtrl')
  request.r(i1263[2], i1263[3], 0, i1262, 'processSlide')
  request.r(i1263[4], i1263[5], 0, i1262, 'processSliderBooster')
  request.r(i1263[6], i1263[7], 0, i1262, 'timerText')
  request.r(i1263[8], i1263[9], 0, i1262, 'levelText')
  request.r(i1263[10], i1263[11], 0, i1262, 'titleFreeBlock')
  request.r(i1263[12], i1263[13], 0, i1262, 'titleFillBlock')
  request.r(i1263[14], i1263[15], 0, i1262, 'textLv')
  request.r(i1263[16], i1263[17], 0, i1262, 'timerTextTMP')
  request.r(i1263[18], i1263[19], 0, i1262, 'settingBtn')
  request.r(i1263[20], i1263[21], 0, i1262, 'panelDark')
  request.r(i1263[22], i1263[23], 0, i1262, 'vfxFreezeScreen')
  request.r(i1263[24], i1263[25], 0, i1262, 'vfxLimitedTimeWarning')
  request.r(i1263[26], i1263[27], 0, i1262, 'animSuggest')
  i1262.revive = i1263[28]
  i1262.timeLimitLv = i1263[29]
  i1262.isCompletedBooster = !!i1263[30]
  i1262.isFreezeTime = !!i1263[31]
  i1262.hackBooster = !!i1263[32]
  i1262.isShowing = !!i1263[33]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'sharedMesh')
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'additionalVertexStreams')
  i1266.enabled = !!i1267[2]
  request.r(i1267[3], i1267[4], 0, i1266, 'sharedMaterial')
  var i1269 = i1267[5]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 2, i1268, '')
  }
  i1266.sharedMaterials = i1268
  i1266.receiveShadows = !!i1267[6]
  i1266.shadowCastingMode = i1267[7]
  i1266.sortingLayerID = i1267[8]
  i1266.sortingOrder = i1267[9]
  i1266.lightmapIndex = i1267[10]
  i1266.lightmapSceneIndex = i1267[11]
  i1266.lightmapScaleOffset = new pc.Vec4( i1267[12], i1267[13], i1267[14], i1267[15] )
  i1266.lightProbeUsage = i1267[16]
  i1266.reflectionProbeUsage = i1267[17]
  return i1266
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1270 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1271 = data
  i1270.loop = !!i1271[0]
  i1270.timeScale = i1271[1]
  request.r(i1271[2], i1271[3], 0, i1270, 'skeletonDataAsset')
  i1270.initialSkinName = i1271[4]
  i1270.fixPrefabOverrideViaMeshFilter = i1271[5]
  i1270.initialFlipX = !!i1271[6]
  i1270.initialFlipY = !!i1271[7]
  i1270.updateWhenInvisible = i1271[8]
  i1270.zSpacing = i1271[9]
  i1270.useClipping = !!i1271[10]
  i1270.immutableTriangles = !!i1271[11]
  i1270.pmaVertexColors = !!i1271[12]
  i1270.clearStateOnDisable = !!i1271[13]
  i1270.tintBlack = !!i1271[14]
  i1270.singleSubmesh = !!i1271[15]
  i1270.fixDrawOrder = !!i1271[16]
  i1270.addNormals = !!i1271[17]
  i1270.calculateTangents = !!i1271[18]
  i1270.maskInteraction = i1271[19]
  i1270.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1271[20], i1270.maskMaterials)
  i1270.disableRenderingOnOverride = !!i1271[21]
  i1270.updateTiming = i1271[22]
  i1270.unscaledTime = !!i1271[23]
  i1270._animationName = i1271[24]
  var i1273 = i1271[25]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1270.separatorSlotNames = i1272
  i1270.physicsPositionInheritanceFactor = new pc.Vec2( i1271[26], i1271[27] )
  i1270.physicsRotationInheritanceFactor = i1271[28]
  request.r(i1271[29], i1271[30], 0, i1270, 'physicsMovementRelativeTo')
  return i1270
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1274 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 2, i1276, '')
  }
  i1274.materialsMaskDisabled = i1276
  var i1279 = i1275[1]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 2, i1278, '')
  }
  i1274.materialsInsideMask = i1278
  var i1281 = i1275[2]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 2) {
  request.r(i1281[i + 0], i1281[i + 1], 2, i1280, '')
  }
  i1274.materialsOutsideMask = i1280
  return i1274
}

Deserializers["LevelCtr"] = function (request, data, root) {
  var i1284 = root || request.c( 'LevelCtr' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'grillPrefab')
  request.r(i1285[2], i1285[3], 0, i1284, 'grillPrefab1')
  request.r(i1285[4], i1285[5], 0, i1284, 'shipperPrefab')
  request.r(i1285[6], i1285[7], 0, i1284, 'curShipper')
  request.r(i1285[8], i1285[9], 0, i1284, 'posSpawnShipper')
  request.r(i1285[10], i1285[11], 0, i1284, 'posAppear')
  request.r(i1285[12], i1285[13], 0, i1284, 'posDriveTo')
  request.r(i1285[14], i1285[15], 0, i1284, 'posDriveAway')
  var i1287 = i1285[16]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('PosGrillAtLv')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('PosGrillAtLv', i1287[i + 0]));
  }
  i1284.posGrills = i1286
  var i1289 = i1285[17]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 1, i1288, '')
  }
  i1284.grills = i1288
  var i1291 = i1285[18]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 1, i1290, '')
  }
  i1284.totalActiveSkewer = i1290
  var i1293 = i1285[19]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 1, i1292, '')
  }
  i1284.onGrillSkewers = i1292
  var i1295 = i1285[20]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1284.onPlateSkewers = i1294
  var i1297 = i1285[21]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 1, i1296, '')
  }
  i1284.onFistPlatesSkewers = i1296
  request.r(i1285[22], i1285[23], 0, i1284, 'plateCompletedPrefab')
  request.r(i1285[24], i1285[25], 0, i1284, 'posPlateWinAppear')
  request.r(i1285[26], i1285[27], 0, i1284, 'posPlateWinOut')
  i1284.easeCompletedSkewerMove = new pc.AnimationCurve( { keys_flow: i1285[28] } )
  i1284.numOfSkewer = i1285[29]
  i1284.numOfCompletedSkewer = i1285[30]
  i1284.isFinishInit = !!i1285[31]
  i1284.isHandlingBooster = !!i1285[32]
  i1284.isFinishLv = !!i1285[33]
  i1284.levelDatas = request.d('LevelData', i1285[34], i1284.levelDatas)
  i1284.orderShipper = i1285[35]
  i1284.doneOrders = i1285[36]
  i1284.stepShipper = i1285[37]
  i1284.isSuggestting = !!i1285[38]
  var i1299 = i1285[39]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1299.length; i += 2) {
  request.r(i1299[i + 0], i1299[i + 1], 1, i1298, '')
  }
  i1284.suggestSkewers = i1298
  request.r(i1285[40], i1285[41], 0, i1284, 'darkPanel')
  request.r(i1285[42], i1285[43], 0, i1284, 'animRemoveIce')
  request.r(i1285[44], i1285[45], 0, i1284, 'boosterCtr')
  var i1301 = i1285[46]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 1, i1300, '')
  }
  i1284.hightLightSkewers = i1300
  request.r(i1285[47], i1285[48], 0, i1284, 'choosenSkewer')
  request.r(i1285[49], i1285[50], 0, i1284, 'animHand')
  request.r(i1285[51], i1285[52], 0, i1284, 'parentGrill')
  request.r(i1285[53], i1285[54], 0, i1284, 'curSkewerSwapMoving')
  i1284.isChoosingSkewerMoving = !!i1285[55]
  request.r(i1285[56], i1285[57], 0, i1284, 'comboVfx')
  i1284.maxCombo = i1285[58]
  i1284.countMatch = i1285[59]
  request.r(i1285[60], i1285[61], 0, i1284, 'coinPrefab')
  request.r(i1285[62], i1285[63], 0, i1284, 'currOrder')
  request.r(i1285[64], i1285[65], 0, i1284, 'UITransform')
  var i1303 = i1285[66]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('PlateCompleted')))
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 1, i1302, '')
  }
  i1284.plateCompleteds = i1302
  i1284.typeSkewerCompleted = i1285[67]
  request.r(i1285[68], i1285[69], 0, i1284, 'animSwap1')
  request.r(i1285[70], i1285[71], 0, i1284, 'animSwap2')
  request.r(i1285[72], i1285[73], 0, i1284, 'prefaVfxSwap')
  request.r(i1285[74], i1285[75], 0, i1284, 'holderVfx')
  request.r(i1285[76], i1285[77], 0, i1284, 'effectShockWave')
  return i1284
}

Deserializers["PosGrillAtLv"] = function (request, data, root) {
  var i1306 = root || request.c( 'PosGrillAtLv' )
  var i1307 = data
  i1306.rowIndex = i1307[0]
  i1306.colIndex = i1307[1]
  request.r(i1307[2], i1307[3], 0, i1306, 'pos')
  return i1306
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1310 = root || request.c( 'LevelData' )
  var i1311 = data
  i1310.levelID = i1311[0]
  i1310.diff = i1311[1]
  i1310.time = i1311[2]
  i1310.order = i1311[3]
  i1310.width = i1311[4]
  i1310.height = i1311[5]
  var i1313 = i1311[6]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(i1313[i + 0]);
  }
  i1310.skewerDataType = i1312
  var i1315 = i1311[7]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('GrillData')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('GrillData', i1315[i + 0]));
  }
  i1310.grills = i1314
  return i1310
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1320 = root || request.c( 'Tutorial' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'startGrill')
  request.r(i1321[2], i1321[3], 0, i1320, 'endGrill')
  i1320.indexGrillStart = i1321[4]
  i1320.indexGrillEnd = i1321[5]
  request.r(i1321[6], i1321[7], 0, i1320, 'hand')
  request.r(i1321[8], i1321[9], 0, i1320, 'title')
  request.r(i1321[10], i1321[11], 0, i1320, 'levelCtr')
  i1320.moveTime = i1321[12]
  i1320.fadeTime = i1321[13]
  return i1320
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i1322 = root || request.c( 'CoinManager' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'textCoin')
  request.r(i1323[2], i1323[3], 0, i1322, 'coinBag')
  request.r(i1323[4], i1323[5], 0, i1322, 'coinPrefab')
  request.r(i1323[6], i1323[7], 0, i1322, 'textFloatPrefab')
  return i1322
}

Deserializers["PopUp"] = function (request, data, root) {
  var i1324 = root || request.c( 'PopUp' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'button')
  return i1324
}

Deserializers["LevelDataCtrl"] = function (request, data, root) {
  var i1326 = root || request.c( 'LevelDataCtrl' )
  var i1327 = data
  i1326.levelDatas = request.d('LevelDatas', i1327[0], i1326.levelDatas)
  i1326.curLevel = request.d('LevelData', i1327[1], i1326.curLevel)
  i1326._currentLevelIDToLoad = i1327[2]
  return i1326
}

Deserializers["LevelDatas"] = function (request, data, root) {
  var i1328 = root || request.c( 'LevelDatas' )
  var i1329 = data
  var i1331 = i1329[0]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('LevelData')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('LevelData', i1331[i + 0]));
  }
  i1328.levelDatas = i1330
  return i1328
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1334 = root || request.c( 'GameManager' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'uiManager')
  i1334.level = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1337 = data
  i1336.ambientIntensity = i1337[0]
  i1336.reflectionIntensity = i1337[1]
  i1336.ambientMode = i1337[2]
  i1336.ambientLight = new pc.Color(i1337[3], i1337[4], i1337[5], i1337[6])
  i1336.ambientSkyColor = new pc.Color(i1337[7], i1337[8], i1337[9], i1337[10])
  i1336.ambientGroundColor = new pc.Color(i1337[11], i1337[12], i1337[13], i1337[14])
  i1336.ambientEquatorColor = new pc.Color(i1337[15], i1337[16], i1337[17], i1337[18])
  i1336.fogColor = new pc.Color(i1337[19], i1337[20], i1337[21], i1337[22])
  i1336.fogEndDistance = i1337[23]
  i1336.fogStartDistance = i1337[24]
  i1336.fogDensity = i1337[25]
  i1336.fog = !!i1337[26]
  request.r(i1337[27], i1337[28], 0, i1336, 'skybox')
  i1336.fogMode = i1337[29]
  var i1339 = i1337[30]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1339[i + 0]) );
  }
  i1336.lightmaps = i1338
  i1336.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1337[31], i1336.lightProbes)
  i1336.lightmapsMode = i1337[32]
  i1336.mixedBakeMode = i1337[33]
  i1336.environmentLightingMode = i1337[34]
  i1336.ambientProbe = new pc.SphericalHarmonicsL2(i1337[35])
  i1336.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1337[36])
  i1336.useReferenceAmbientProbe = !!i1337[37]
  request.r(i1337[38], i1337[39], 0, i1336, 'customReflection')
  request.r(i1337[40], i1337[41], 0, i1336, 'defaultReflection')
  i1336.defaultReflectionMode = i1337[42]
  i1336.defaultReflectionResolution = i1337[43]
  i1336.sunLightObjectId = i1337[44]
  i1336.pixelLightCount = i1337[45]
  i1336.defaultReflectionHDR = !!i1337[46]
  i1336.hasLightDataAsset = !!i1337[47]
  i1336.hasManualGenerate = !!i1337[48]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'lightmapColor')
  request.r(i1343[2], i1343[3], 0, i1342, 'lightmapDirection')
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1344 = root || new UnityEngine.LightProbes()
  var i1345 = data
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1355[i + 0]));
  }
  i1352.ShaderCompilationErrors = i1354
  i1352.name = i1353[1]
  i1352.guid = i1353[2]
  var i1357 = i1353[3]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( i1357[i + 0] );
  }
  i1352.shaderDefinedKeywords = i1356
  var i1359 = i1353[4]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1359[i + 0]) );
  }
  i1352.passes = i1358
  var i1361 = i1353[5]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1361[i + 0]) );
  }
  i1352.usePasses = i1360
  var i1363 = i1353[6]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1363[i + 0]) );
  }
  i1352.defaultParameterValues = i1362
  request.r(i1353[7], i1353[8], 0, i1352, 'unityFallbackShader')
  i1352.readDepth = !!i1353[9]
  i1352.isCreatedByShaderGraph = !!i1353[10]
  i1352.compiled = !!i1353[11]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1367 = data
  i1366.shaderName = i1367[0]
  i1366.errorMessage = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1370 = root || new pc.UnityShaderPass()
  var i1371 = data
  i1370.id = i1371[0]
  i1370.subShaderIndex = i1371[1]
  i1370.name = i1371[2]
  i1370.passType = i1371[3]
  i1370.grabPassTextureName = i1371[4]
  i1370.usePass = !!i1371[5]
  i1370.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[6], i1370.zTest)
  i1370.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[7], i1370.zWrite)
  i1370.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[8], i1370.culling)
  i1370.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1371[9], i1370.blending)
  i1370.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1371[10], i1370.alphaBlending)
  i1370.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[11], i1370.colorWriteMask)
  i1370.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[12], i1370.offsetUnits)
  i1370.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[13], i1370.offsetFactor)
  i1370.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[14], i1370.stencilRef)
  i1370.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[15], i1370.stencilReadMask)
  i1370.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1371[16], i1370.stencilWriteMask)
  i1370.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1371[17], i1370.stencilOp)
  i1370.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1371[18], i1370.stencilOpFront)
  i1370.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1371[19], i1370.stencilOpBack)
  var i1373 = i1371[20]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1373[i + 0]) );
  }
  i1370.tags = i1372
  var i1375 = i1371[21]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1370.passDefinedKeywords = i1374
  var i1377 = i1371[22]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1377[i + 0]) );
  }
  i1370.passDefinedKeywordGroups = i1376
  var i1379 = i1371[23]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1379[i + 0]) );
  }
  i1370.variants = i1378
  var i1381 = i1371[24]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1381[i + 0]) );
  }
  i1370.excludedVariants = i1380
  i1370.hasDepthReader = !!i1371[25]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1383 = data
  i1382.val = i1383[0]
  i1382.name = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1385 = data
  i1384.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1385[0], i1384.src)
  i1384.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1385[1], i1384.dst)
  i1384.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1385[2], i1384.op)
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1387 = data
  i1386.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1387[0], i1386.pass)
  i1386.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1387[1], i1386.fail)
  i1386.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1387[2], i1386.zFail)
  i1386.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1387[3], i1386.comp)
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.value = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( i1397[i + 0] );
  }
  i1394.keywords = i1396
  i1394.hasDiscard = !!i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1401 = data
  i1400.passId = i1401[0]
  i1400.subShaderIndex = i1401[1]
  var i1403 = i1401[2]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( i1403[i + 0] );
  }
  i1400.keywords = i1402
  i1400.vertexProgram = i1401[3]
  i1400.fragmentProgram = i1401[4]
  i1400.exportedForWebGl2 = !!i1401[5]
  i1400.readDepth = !!i1401[6]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'shader')
  i1406.pass = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1411 = data
  i1410.name = i1411[0]
  i1410.type = i1411[1]
  i1410.value = new pc.Vec4( i1411[2], i1411[3], i1411[4], i1411[5] )
  i1410.textureValue = i1411[6]
  i1410.shaderPropertyFlag = i1411[7]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1413 = data
  i1412.name = i1413[0]
  request.r(i1413[1], i1413[2], 0, i1412, 'texture')
  i1412.aabb = i1413[3]
  i1412.vertices = i1413[4]
  i1412.triangles = i1413[5]
  i1412.textureRect = UnityEngine.Rect.MinMaxRect(i1413[6], i1413[7], i1413[8], i1413[9])
  i1412.packedRect = UnityEngine.Rect.MinMaxRect(i1413[10], i1413[11], i1413[12], i1413[13])
  i1412.border = new pc.Vec4( i1413[14], i1413[15], i1413[16], i1413[17] )
  i1412.transparency = i1413[18]
  i1412.bounds = i1413[19]
  i1412.pixelsPerUnit = i1413[20]
  i1412.textureWidth = i1413[21]
  i1412.textureHeight = i1413[22]
  i1412.nativeSize = new pc.Vec2( i1413[23], i1413[24] )
  i1412.pivot = new pc.Vec2( i1413[25], i1413[26] )
  i1412.textureRectOffset = new pc.Vec2( i1413[27], i1413[28] )
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1415 = data
  i1414.name = i1415[0]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.wrapMode = i1417[1]
  i1416.isLooping = !!i1417[2]
  i1416.length = i1417[3]
  var i1419 = i1417[4]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1419[i + 0]) );
  }
  i1416.curves = i1418
  var i1421 = i1417[5]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1421[i + 0]) );
  }
  i1416.events = i1420
  i1416.halfPrecision = !!i1417[6]
  i1416._frameRate = i1417[7]
  i1416.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1417[8], i1416.localBounds)
  i1416.hasMuscleCurves = !!i1417[9]
  var i1423 = i1417[10]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( i1423[i + 0] );
  }
  i1416.clipMuscleConstant = i1422
  i1416.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1417[11], i1416.clipBindingConstant)
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1427 = data
  i1426.path = i1427[0]
  i1426.hash = i1427[1]
  i1426.componentType = i1427[2]
  i1426.property = i1427[3]
  i1426.keys = i1427[4]
  var i1429 = i1427[5]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1429[i + 0]) );
  }
  i1426.objectReferenceKeys = i1428
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1433 = data
  i1432.time = i1433[0]
  request.r(i1433[1], i1433[2], 0, i1432, 'value')
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1437 = data
  i1436.functionName = i1437[0]
  i1436.floatParameter = i1437[1]
  i1436.intParameter = i1437[2]
  i1436.stringParameter = i1437[3]
  request.r(i1437[4], i1437[5], 0, i1436, 'objectReferenceParameter')
  i1436.time = i1437[6]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1439 = data
  i1438.center = new pc.Vec3( i1439[0], i1439[1], i1439[2] )
  i1438.extends = new pc.Vec3( i1439[3], i1439[4], i1439[5] )
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1443 = data
  var i1445 = i1443[0]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1442.genericBindings = i1444
  var i1447 = i1443[1]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( i1447[i + 0] );
  }
  i1442.pptrCurveMapping = i1446
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.ascent = i1449[1]
  i1448.originalLineHeight = i1449[2]
  i1448.fontSize = i1449[3]
  var i1451 = i1449[4]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1451[i + 0]) );
  }
  i1448.characterInfo = i1450
  request.r(i1449[5], i1449[6], 0, i1448, 'texture')
  i1448.originalFontSize = i1449[7]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1455 = data
  i1454.index = i1455[0]
  i1454.advance = i1455[1]
  i1454.bearing = i1455[2]
  i1454.glyphWidth = i1455[3]
  i1454.glyphHeight = i1455[4]
  i1454.minX = i1455[5]
  i1454.maxX = i1455[6]
  i1454.minY = i1455[7]
  i1454.maxY = i1455[8]
  i1454.uvBottomLeftX = i1455[9]
  i1454.uvBottomLeftY = i1455[10]
  i1454.uvBottomRightX = i1455[11]
  i1454.uvBottomRightY = i1455[12]
  i1454.uvTopLeftX = i1455[13]
  i1454.uvTopLeftY = i1455[14]
  i1454.uvTopRightX = i1455[15]
  i1454.uvTopRightY = i1455[16]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1457 = data
  i1456.name = i1457[0]
  var i1459 = i1457[1]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1459[i + 0]) );
  }
  i1456.layers = i1458
  var i1461 = i1457[2]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1461[i + 0]) );
  }
  i1456.parameters = i1460
  i1456.animationClips = i1457[3]
  i1456.avatarUnsupported = i1457[4]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.defaultWeight = i1465[1]
  i1464.blendingMode = i1465[2]
  i1464.avatarMask = i1465[3]
  i1464.syncedLayerIndex = i1465[4]
  i1464.syncedLayerAffectsTiming = !!i1465[5]
  i1464.syncedLayers = i1465[6]
  i1464.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1465[7], i1464.stateMachine)
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1467 = data
  i1466.id = i1467[0]
  i1466.name = i1467[1]
  i1466.path = i1467[2]
  var i1469 = i1467[3]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1469[i + 0]) );
  }
  i1466.states = i1468
  var i1471 = i1467[4]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1471[i + 0]) );
  }
  i1466.machines = i1470
  var i1473 = i1467[5]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1473[i + 0]) );
  }
  i1466.entryStateTransitions = i1472
  var i1475 = i1467[6]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1475[i + 0]) );
  }
  i1466.exitStateTransitions = i1474
  var i1477 = i1467[7]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1477[i + 0]) );
  }
  i1466.anyStateTransitions = i1476
  i1466.defaultStateId = i1467[8]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1481 = data
  i1480.id = i1481[0]
  i1480.name = i1481[1]
  i1480.cycleOffset = i1481[2]
  i1480.cycleOffsetParameter = i1481[3]
  i1480.cycleOffsetParameterActive = !!i1481[4]
  i1480.mirror = !!i1481[5]
  i1480.mirrorParameter = i1481[6]
  i1480.mirrorParameterActive = !!i1481[7]
  i1480.motionId = i1481[8]
  i1480.nameHash = i1481[9]
  i1480.fullPathHash = i1481[10]
  i1480.speed = i1481[11]
  i1480.speedParameter = i1481[12]
  i1480.speedParameterActive = !!i1481[13]
  i1480.tag = i1481[14]
  i1480.tagHash = i1481[15]
  i1480.writeDefaultValues = !!i1481[16]
  var i1483 = i1481[17]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 2, i1482, '')
  }
  i1480.behaviours = i1482
  var i1485 = i1481[18]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1485[i + 0]) );
  }
  i1480.transitions = i1484
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1491 = data
  i1490.fullPath = i1491[0]
  i1490.canTransitionToSelf = !!i1491[1]
  i1490.duration = i1491[2]
  i1490.exitTime = i1491[3]
  i1490.hasExitTime = !!i1491[4]
  i1490.hasFixedDuration = !!i1491[5]
  i1490.interruptionSource = i1491[6]
  i1490.offset = i1491[7]
  i1490.orderedInterruption = !!i1491[8]
  i1490.destinationStateId = i1491[9]
  i1490.isExit = !!i1491[10]
  i1490.mute = !!i1491[11]
  i1490.solo = !!i1491[12]
  var i1493 = i1491[13]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1493[i + 0]) );
  }
  i1490.conditions = i1492
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1499 = data
  i1498.destinationStateId = i1499[0]
  i1498.isExit = !!i1499[1]
  i1498.mute = !!i1499[2]
  i1498.solo = !!i1499[3]
  var i1501 = i1499[4]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1501[i + 0]) );
  }
  i1498.conditions = i1500
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1505 = data
  i1504.mode = i1505[0]
  i1504.parameter = i1505[1]
  i1504.threshold = i1505[2]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1509 = data
  i1508.defaultBool = !!i1509[0]
  i1508.defaultFloat = i1509[1]
  i1508.defaultInt = i1509[2]
  i1508.name = i1509[3]
  i1508.nameHash = i1509[4]
  i1508.type = i1509[5]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1511 = data
  i1510.name = i1511[0]
  i1510.bytes64 = i1511[1]
  i1510.data = i1511[2]
  return i1510
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1512 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1513 = data
  i1512.hashCode = i1513[0]
  request.r(i1513[1], i1513[2], 0, i1512, 'material')
  i1512.materialHashCode = i1513[3]
  request.r(i1513[4], i1513[5], 0, i1512, 'atlas')
  i1512.normalStyle = i1513[6]
  i1512.normalSpacingOffset = i1513[7]
  i1512.boldStyle = i1513[8]
  i1512.boldSpacing = i1513[9]
  i1512.italicStyle = i1513[10]
  i1512.tabSize = i1513[11]
  i1512.m_Version = i1513[12]
  i1512.m_SourceFontFileGUID = i1513[13]
  request.r(i1513[14], i1513[15], 0, i1512, 'm_SourceFontFile_EditorRef')
  request.r(i1513[16], i1513[17], 0, i1512, 'm_SourceFontFile')
  i1512.m_AtlasPopulationMode = i1513[18]
  i1512.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1513[19], i1512.m_FaceInfo)
  var i1515 = i1513[20]
  var i1514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.add(request.d('UnityEngine.TextCore.Glyph', i1515[i + 0]));
  }
  i1512.m_GlyphTable = i1514
  var i1517 = i1513[21]
  var i1516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.add(request.d('TMPro.TMP_Character', i1517[i + 0]));
  }
  i1512.m_CharacterTable = i1516
  var i1519 = i1513[22]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 2) {
  request.r(i1519[i + 0], i1519[i + 1], 2, i1518, '')
  }
  i1512.m_AtlasTextures = i1518
  i1512.m_AtlasTextureIndex = i1513[23]
  i1512.m_IsMultiAtlasTexturesEnabled = !!i1513[24]
  i1512.m_ClearDynamicDataOnBuild = !!i1513[25]
  var i1521 = i1513[26]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.add(request.d('UnityEngine.TextCore.GlyphRect', i1521[i + 0]));
  }
  i1512.m_UsedGlyphRects = i1520
  var i1523 = i1513[27]
  var i1522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.add(request.d('UnityEngine.TextCore.GlyphRect', i1523[i + 0]));
  }
  i1512.m_FreeGlyphRects = i1522
  i1512.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1513[28], i1512.m_fontInfo)
  i1512.m_AtlasWidth = i1513[29]
  i1512.m_AtlasHeight = i1513[30]
  i1512.m_AtlasPadding = i1513[31]
  i1512.m_AtlasRenderMode = i1513[32]
  var i1525 = i1513[33]
  var i1524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.add(request.d('TMPro.TMP_Glyph', i1525[i + 0]));
  }
  i1512.m_glyphInfoList = i1524
  i1512.m_KerningTable = request.d('TMPro.KerningTable', i1513[34], i1512.m_KerningTable)
  i1512.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1513[35], i1512.m_FontFeatureTable)
  var i1527 = i1513[36]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 1, i1526, '')
  }
  i1512.fallbackFontAssets = i1526
  var i1529 = i1513[37]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 1, i1528, '')
  }
  i1512.m_FallbackFontAssetTable = i1528
  i1512.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1513[38], i1512.m_CreationSettings)
  var i1531 = i1513[39]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('TMPro.TMP_FontWeightPair', i1531[i + 0]) );
  }
  i1512.m_FontWeightTable = i1530
  var i1533 = i1513[40]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('TMPro.TMP_FontWeightPair', i1533[i + 0]) );
  }
  i1512.fontWeights = i1532
  return i1512
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1535 = data
  i1534.m_FaceIndex = i1535[0]
  i1534.m_FamilyName = i1535[1]
  i1534.m_StyleName = i1535[2]
  i1534.m_PointSize = i1535[3]
  i1534.m_Scale = i1535[4]
  i1534.m_UnitsPerEM = i1535[5]
  i1534.m_LineHeight = i1535[6]
  i1534.m_AscentLine = i1535[7]
  i1534.m_CapLine = i1535[8]
  i1534.m_MeanLine = i1535[9]
  i1534.m_Baseline = i1535[10]
  i1534.m_DescentLine = i1535[11]
  i1534.m_SuperscriptOffset = i1535[12]
  i1534.m_SuperscriptSize = i1535[13]
  i1534.m_SubscriptOffset = i1535[14]
  i1534.m_SubscriptSize = i1535[15]
  i1534.m_UnderlineOffset = i1535[16]
  i1534.m_UnderlineThickness = i1535[17]
  i1534.m_StrikethroughOffset = i1535[18]
  i1534.m_StrikethroughThickness = i1535[19]
  i1534.m_TabWidth = i1535[20]
  return i1534
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1539 = data
  i1538.m_Index = i1539[0]
  i1538.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1539[1], i1538.m_Metrics)
  i1538.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1539[2], i1538.m_GlyphRect)
  i1538.m_Scale = i1539[3]
  i1538.m_AtlasIndex = i1539[4]
  i1538.m_ClassDefinitionType = i1539[5]
  return i1538
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1541 = data
  i1540.m_Width = i1541[0]
  i1540.m_Height = i1541[1]
  i1540.m_HorizontalBearingX = i1541[2]
  i1540.m_HorizontalBearingY = i1541[3]
  i1540.m_HorizontalAdvance = i1541[4]
  return i1540
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1543 = data
  i1542.m_X = i1543[0]
  i1542.m_Y = i1543[1]
  i1542.m_Width = i1543[2]
  i1542.m_Height = i1543[3]
  return i1542
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1546 = root || request.c( 'TMPro.TMP_Character' )
  var i1547 = data
  i1546.m_ElementType = i1547[0]
  i1546.m_Unicode = i1547[1]
  i1546.m_GlyphIndex = i1547[2]
  i1546.m_Scale = i1547[3]
  return i1546
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1552 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1553 = data
  i1552.Name = i1553[0]
  i1552.PointSize = i1553[1]
  i1552.Scale = i1553[2]
  i1552.CharacterCount = i1553[3]
  i1552.LineHeight = i1553[4]
  i1552.Baseline = i1553[5]
  i1552.Ascender = i1553[6]
  i1552.CapHeight = i1553[7]
  i1552.Descender = i1553[8]
  i1552.CenterLine = i1553[9]
  i1552.SuperscriptOffset = i1553[10]
  i1552.SubscriptOffset = i1553[11]
  i1552.SubSize = i1553[12]
  i1552.Underline = i1553[13]
  i1552.UnderlineThickness = i1553[14]
  i1552.strikethrough = i1553[15]
  i1552.strikethroughThickness = i1553[16]
  i1552.TabWidth = i1553[17]
  i1552.Padding = i1553[18]
  i1552.AtlasWidth = i1553[19]
  i1552.AtlasHeight = i1553[20]
  return i1552
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1556 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1557 = data
  i1556.id = i1557[0]
  i1556.x = i1557[1]
  i1556.y = i1557[2]
  i1556.width = i1557[3]
  i1556.height = i1557[4]
  i1556.xOffset = i1557[5]
  i1556.yOffset = i1557[6]
  i1556.xAdvance = i1557[7]
  i1556.scale = i1557[8]
  return i1556
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1558 = root || request.c( 'TMPro.KerningTable' )
  var i1559 = data
  var i1561 = i1559[0]
  var i1560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.add(request.d('TMPro.KerningPair', i1561[i + 0]));
  }
  i1558.kerningPairs = i1560
  return i1558
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1564 = root || request.c( 'TMPro.KerningPair' )
  var i1565 = data
  i1564.xOffset = i1565[0]
  i1564.m_FirstGlyph = i1565[1]
  i1564.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1565[2], i1564.m_FirstGlyphAdjustments)
  i1564.m_SecondGlyph = i1565[3]
  i1564.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1565[4], i1564.m_SecondGlyphAdjustments)
  i1564.m_IgnoreSpacingAdjustments = !!i1565[5]
  return i1564
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1566 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1567 = data
  var i1569 = i1567[0]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1569[i + 0]));
  }
  i1566.m_GlyphPairAdjustmentRecords = i1568
  return i1566
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1572 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1573 = data
  i1572.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1573[0], i1572.m_FirstAdjustmentRecord)
  i1572.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1573[1], i1572.m_SecondAdjustmentRecord)
  i1572.m_FeatureLookupFlags = i1573[2]
  return i1572
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1576 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1577 = data
  i1576.sourceFontFileName = i1577[0]
  i1576.sourceFontFileGUID = i1577[1]
  i1576.pointSizeSamplingMode = i1577[2]
  i1576.pointSize = i1577[3]
  i1576.padding = i1577[4]
  i1576.packingMode = i1577[5]
  i1576.atlasWidth = i1577[6]
  i1576.atlasHeight = i1577[7]
  i1576.characterSetSelectionMode = i1577[8]
  i1576.characterSequence = i1577[9]
  i1576.referencedFontAssetGUID = i1577[10]
  i1576.referencedTextAssetGUID = i1577[11]
  i1576.fontStyle = i1577[12]
  i1576.fontStyleModifier = i1577[13]
  i1576.renderMode = i1577[14]
  i1576.includeFontFeatures = !!i1577[15]
  return i1576
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1580 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1581 = data
  request.r(i1581[0], i1581[1], 0, i1580, 'regularTypeface')
  request.r(i1581[2], i1581[3], 0, i1580, 'italicTypeface')
  return i1580
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1582 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1583 = data
  var i1585 = i1583[0]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 2) {
  request.r(i1585[i + 0], i1585[i + 1], 2, i1584, '')
  }
  i1582.atlasAssets = i1584
  i1582.scale = i1583[1]
  request.r(i1583[2], i1583[3], 0, i1582, 'skeletonJSON')
  i1582.isUpgradingBlendModeMaterials = !!i1583[4]
  i1582.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1583[5], i1582.blendModeMaterials)
  var i1587 = i1583[6]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1587.length; i += 2) {
  request.r(i1587[i + 0], i1587[i + 1], 1, i1586, '')
  }
  i1582.skeletonDataModifiers = i1586
  var i1589 = i1583[7]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( i1589[i + 0] );
  }
  i1582.fromAnimation = i1588
  var i1591 = i1583[8]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( i1591[i + 0] );
  }
  i1582.toAnimation = i1590
  i1582.duration = i1583[9]
  i1582.defaultMix = i1583[10]
  request.r(i1583[11], i1583[12], 0, i1582, 'controller')
  return i1582
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1594 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1595 = data
  i1594.applyAdditiveMaterial = !!i1595[0]
  var i1597 = i1595[1]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1597[i + 0]));
  }
  i1594.additiveMaterials = i1596
  var i1599 = i1595[2]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1599[i + 0]));
  }
  i1594.multiplyMaterials = i1598
  var i1601 = i1595[3]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1601[i + 0]));
  }
  i1594.screenMaterials = i1600
  i1594.requiresBlendModeMaterials = !!i1595[4]
  return i1594
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1604 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1605 = data
  i1604.pageName = i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'material')
  return i1604
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1608 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'atlasFile')
  var i1611 = i1609[2]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 2) {
  request.r(i1611[i + 0], i1611[i + 1], 2, i1610, '')
  }
  i1608.materials = i1610
  i1608.textureLoadingMode = i1609[3]
  request.r(i1609[4], i1609[5], 0, i1608, 'onDemandTextureLoader')
  return i1608
}

Deserializers["AudioClipTable"] = function (request, data, root) {
  var i1612 = root || request.c( 'AudioClipTable' )
  var i1613 = data
  var i1615 = i1613[0]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('AudioClipTable+AudioClipWithKey', i1615[i + 0]) );
  }
  i1612.data = i1614
  return i1612
}

Deserializers["AudioClipTable+AudioClipWithKey"] = function (request, data, root) {
  var i1618 = root || request.c( 'AudioClipTable+AudioClipWithKey' )
  var i1619 = data
  i1618.key = i1619[0]
  request.r(i1619[1], i1619[2], 0, i1618, 'clip')
  return i1618
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1620 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1621 = data
  i1620.useSafeMode = !!i1621[0]
  i1620.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1621[1], i1620.safeModeOptions)
  i1620.timeScale = i1621[2]
  i1620.unscaledTimeScale = i1621[3]
  i1620.useSmoothDeltaTime = !!i1621[4]
  i1620.maxSmoothUnscaledTime = i1621[5]
  i1620.rewindCallbackMode = i1621[6]
  i1620.showUnityEditorReport = !!i1621[7]
  i1620.logBehaviour = i1621[8]
  i1620.drawGizmos = !!i1621[9]
  i1620.defaultRecyclable = !!i1621[10]
  i1620.defaultAutoPlay = i1621[11]
  i1620.defaultUpdateType = i1621[12]
  i1620.defaultTimeScaleIndependent = !!i1621[13]
  i1620.defaultEaseType = i1621[14]
  i1620.defaultEaseOvershootOrAmplitude = i1621[15]
  i1620.defaultEasePeriod = i1621[16]
  i1620.defaultAutoKill = !!i1621[17]
  i1620.defaultLoopType = i1621[18]
  i1620.debugMode = !!i1621[19]
  i1620.debugStoreTargetId = !!i1621[20]
  i1620.showPreviewPanel = !!i1621[21]
  i1620.storeSettingsLocation = i1621[22]
  i1620.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1621[23], i1620.modules)
  i1620.createASMDEF = !!i1621[24]
  i1620.showPlayingTweens = !!i1621[25]
  i1620.showPausedTweens = !!i1621[26]
  return i1620
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1622 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1623 = data
  i1622.logBehaviour = i1623[0]
  i1622.nestedTweenFailureBehaviour = i1623[1]
  return i1622
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1624 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1625 = data
  i1624.showPanel = !!i1625[0]
  i1624.audioEnabled = !!i1625[1]
  i1624.physicsEnabled = !!i1625[2]
  i1624.physics2DEnabled = !!i1625[3]
  i1624.spriteEnabled = !!i1625[4]
  i1624.uiEnabled = !!i1625[5]
  i1624.textMeshProEnabled = !!i1625[6]
  i1624.tk2DEnabled = !!i1625[7]
  i1624.deAudioEnabled = !!i1625[8]
  i1624.deUnityExtendedEnabled = !!i1625[9]
  i1624.epoOutlineEnabled = !!i1625[10]
  return i1624
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1626 = root || request.c( 'TMPro.TMP_Settings' )
  var i1627 = data
  i1626.m_enableWordWrapping = !!i1627[0]
  i1626.m_enableKerning = !!i1627[1]
  i1626.m_enableExtraPadding = !!i1627[2]
  i1626.m_enableTintAllSprites = !!i1627[3]
  i1626.m_enableParseEscapeCharacters = !!i1627[4]
  i1626.m_EnableRaycastTarget = !!i1627[5]
  i1626.m_GetFontFeaturesAtRuntime = !!i1627[6]
  i1626.m_missingGlyphCharacter = i1627[7]
  i1626.m_warningsDisabled = !!i1627[8]
  request.r(i1627[9], i1627[10], 0, i1626, 'm_defaultFontAsset')
  i1626.m_defaultFontAssetPath = i1627[11]
  i1626.m_defaultFontSize = i1627[12]
  i1626.m_defaultAutoSizeMinRatio = i1627[13]
  i1626.m_defaultAutoSizeMaxRatio = i1627[14]
  i1626.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1627[15], i1627[16] )
  i1626.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1627[17], i1627[18] )
  i1626.m_autoSizeTextContainer = !!i1627[19]
  i1626.m_IsTextObjectScaleStatic = !!i1627[20]
  var i1629 = i1627[21]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 1, i1628, '')
  }
  i1626.m_fallbackFontAssets = i1628
  i1626.m_matchMaterialPreset = !!i1627[22]
  request.r(i1627[23], i1627[24], 0, i1626, 'm_defaultSpriteAsset')
  i1626.m_defaultSpriteAssetPath = i1627[25]
  i1626.m_enableEmojiSupport = !!i1627[26]
  i1626.m_MissingCharacterSpriteUnicode = i1627[27]
  i1626.m_defaultColorGradientPresetsPath = i1627[28]
  request.r(i1627[29], i1627[30], 0, i1626, 'm_defaultStyleSheet')
  i1626.m_StyleSheetsResourcePath = i1627[31]
  request.r(i1627[32], i1627[33], 0, i1626, 'm_leadingCharacters')
  request.r(i1627[34], i1627[35], 0, i1626, 'm_followingCharacters')
  i1626.m_UseModernHangulLineBreakingRules = !!i1627[36]
  return i1626
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1630 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1631 = data
  i1630.hashCode = i1631[0]
  request.r(i1631[1], i1631[2], 0, i1630, 'material')
  i1630.materialHashCode = i1631[3]
  request.r(i1631[4], i1631[5], 0, i1630, 'spriteSheet')
  var i1633 = i1631[6]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.add(request.d('TMPro.TMP_Sprite', i1633[i + 0]));
  }
  i1630.spriteInfoList = i1632
  var i1635 = i1631[7]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 1, i1634, '')
  }
  i1630.fallbackSpriteAssets = i1634
  i1630.m_Version = i1631[8]
  i1630.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1631[9], i1630.m_FaceInfo)
  var i1637 = i1631[10]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('TMPro.TMP_SpriteCharacter', i1637[i + 0]));
  }
  i1630.m_SpriteCharacterTable = i1636
  var i1639 = i1631[11]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.add(request.d('TMPro.TMP_SpriteGlyph', i1639[i + 0]));
  }
  i1630.m_SpriteGlyphTable = i1638
  return i1630
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.hashCode = i1643[1]
  i1642.unicode = i1643[2]
  i1642.pivot = new pc.Vec2( i1643[3], i1643[4] )
  request.r(i1643[5], i1643[6], 0, i1642, 'sprite')
  i1642.id = i1643[7]
  i1642.x = i1643[8]
  i1642.y = i1643[9]
  i1642.width = i1643[10]
  i1642.height = i1643[11]
  i1642.xOffset = i1643[12]
  i1642.yOffset = i1643[13]
  i1642.xAdvance = i1643[14]
  i1642.scale = i1643[15]
  return i1642
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1648 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1649 = data
  i1648.m_Name = i1649[0]
  i1648.m_HashCode = i1649[1]
  i1648.m_ElementType = i1649[2]
  i1648.m_Unicode = i1649[3]
  i1648.m_GlyphIndex = i1649[4]
  i1648.m_Scale = i1649[5]
  return i1648
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1652 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'sprite')
  i1652.m_Index = i1653[2]
  i1652.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1653[3], i1652.m_Metrics)
  i1652.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1653[4], i1652.m_GlyphRect)
  i1652.m_Scale = i1653[5]
  i1652.m_AtlasIndex = i1653[6]
  i1652.m_ClassDefinitionType = i1653[7]
  return i1652
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1655 = data
  var i1657 = i1655[0]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.add(request.d('TMPro.TMP_Style', i1657[i + 0]));
  }
  i1654.m_StyleList = i1656
  return i1654
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1660 = root || request.c( 'TMPro.TMP_Style' )
  var i1661 = data
  i1660.m_Name = i1661[0]
  i1660.m_HashCode = i1661[1]
  i1660.m_OpeningDefinition = i1661[2]
  i1660.m_ClosingDefinition = i1661[3]
  i1660.m_OpeningTagArray = i1661[4]
  i1660.m_ClosingTagArray = i1661[5]
  i1660.m_OpeningTagUnicodeArray = i1661[6]
  i1660.m_ClosingTagUnicodeArray = i1661[7]
  return i1660
}

Deserializers["DailyLogInSO"] = function (request, data, root) {
  var i1662 = root || request.c( 'DailyLogInSO' )
  var i1663 = data
  var i1665 = i1663[0]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('DayReward')))
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.add(request.d('DayReward', i1665[i + 0]));
  }
  i1662.DayRewards = i1664
  return i1662
}

Deserializers["DayReward"] = function (request, data, root) {
  var i1668 = root || request.c( 'DayReward' )
  var i1669 = data
  i1668.day = i1669[0]
  var i1671 = i1669[1]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('SingleReward')))
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.add(request.d('SingleReward', i1671[i + 0]));
  }
  i1668.SingleRewards = i1670
  return i1668
}

Deserializers["SingleReward"] = function (request, data, root) {
  var i1674 = root || request.c( 'SingleReward' )
  var i1675 = data
  i1674.rewardType = i1675[0]
  request.r(i1675[1], i1675[2], 0, i1674, 'imgReward')
  i1674.amount = i1675[3]
  i1674.textAmountPos = new pc.Vec2( i1675[4], i1675[5] )
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1677 = data
  var i1679 = i1677[0]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1679[i + 0]) );
  }
  i1676.files = i1678
  i1676.componentToPrefabIds = i1677[1]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1683 = data
  i1682.path = i1683[0]
  request.r(i1683[1], i1683[2], 0, i1682, 'unityObject')
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1685 = data
  var i1687 = i1685[0]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1687[i + 0]) );
  }
  i1684.scriptsExecutionOrder = i1686
  var i1689 = i1685[1]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1689[i + 0]) );
  }
  i1684.sortingLayers = i1688
  var i1691 = i1685[2]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1691[i + 0]) );
  }
  i1684.cullingLayers = i1690
  i1684.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1685[3], i1684.timeSettings)
  i1684.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1685[4], i1684.physicsSettings)
  i1684.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1685[5], i1684.physics2DSettings)
  i1684.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1685[6], i1684.qualitySettings)
  i1684.enableRealtimeShadows = !!i1685[7]
  i1684.enableAutoInstancing = !!i1685[8]
  i1684.enableDynamicBatching = !!i1685[9]
  i1684.lightmapEncodingQuality = i1685[10]
  i1684.desiredColorSpace = i1685[11]
  var i1693 = i1685[12]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( i1693[i + 0] );
  }
  i1684.allTags = i1692
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1697 = data
  i1696.name = i1697[0]
  i1696.value = i1697[1]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1701 = data
  i1700.id = i1701[0]
  i1700.name = i1701[1]
  i1700.value = i1701[2]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1705 = data
  i1704.id = i1705[0]
  i1704.name = i1705[1]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1707 = data
  i1706.fixedDeltaTime = i1707[0]
  i1706.maximumDeltaTime = i1707[1]
  i1706.timeScale = i1707[2]
  i1706.maximumParticleTimestep = i1707[3]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1709 = data
  i1708.gravity = new pc.Vec3( i1709[0], i1709[1], i1709[2] )
  i1708.defaultSolverIterations = i1709[3]
  i1708.bounceThreshold = i1709[4]
  i1708.autoSyncTransforms = !!i1709[5]
  i1708.autoSimulation = !!i1709[6]
  var i1711 = i1709[7]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1711[i + 0]) );
  }
  i1708.collisionMatrix = i1710
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1715 = data
  i1714.enabled = !!i1715[0]
  i1714.layerId = i1715[1]
  i1714.otherLayerId = i1715[2]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'material')
  i1716.gravity = new pc.Vec2( i1717[2], i1717[3] )
  i1716.positionIterations = i1717[4]
  i1716.velocityIterations = i1717[5]
  i1716.velocityThreshold = i1717[6]
  i1716.maxLinearCorrection = i1717[7]
  i1716.maxAngularCorrection = i1717[8]
  i1716.maxTranslationSpeed = i1717[9]
  i1716.maxRotationSpeed = i1717[10]
  i1716.baumgarteScale = i1717[11]
  i1716.baumgarteTOIScale = i1717[12]
  i1716.timeToSleep = i1717[13]
  i1716.linearSleepTolerance = i1717[14]
  i1716.angularSleepTolerance = i1717[15]
  i1716.defaultContactOffset = i1717[16]
  i1716.autoSimulation = !!i1717[17]
  i1716.queriesHitTriggers = !!i1717[18]
  i1716.queriesStartInColliders = !!i1717[19]
  i1716.callbacksOnDisable = !!i1717[20]
  i1716.reuseCollisionCallbacks = !!i1717[21]
  i1716.autoSyncTransforms = !!i1717[22]
  var i1719 = i1717[23]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1719[i + 0]) );
  }
  i1716.collisionMatrix = i1718
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1723 = data
  i1722.enabled = !!i1723[0]
  i1722.layerId = i1723[1]
  i1722.otherLayerId = i1723[2]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1725 = data
  var i1727 = i1725[0]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1727[i + 0]) );
  }
  i1724.qualityLevels = i1726
  var i1729 = i1725[1]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( i1729[i + 0] );
  }
  i1724.names = i1728
  i1724.shadows = i1725[2]
  i1724.anisotropicFiltering = i1725[3]
  i1724.antiAliasing = i1725[4]
  i1724.lodBias = i1725[5]
  i1724.shadowCascades = i1725[6]
  i1724.shadowDistance = i1725[7]
  i1724.shadowmaskMode = i1725[8]
  i1724.shadowProjection = i1725[9]
  i1724.shadowResolution = i1725[10]
  i1724.softParticles = !!i1725[11]
  i1724.softVegetation = !!i1725[12]
  i1724.activeColorSpace = i1725[13]
  i1724.desiredColorSpace = i1725[14]
  i1724.masterTextureLimit = i1725[15]
  i1724.maxQueuedFrames = i1725[16]
  i1724.particleRaycastBudget = i1725[17]
  i1724.pixelLightCount = i1725[18]
  i1724.realtimeReflectionProbes = !!i1725[19]
  i1724.shadowCascade2Split = i1725[20]
  i1724.shadowCascade4Split = new pc.Vec3( i1725[21], i1725[22], i1725[23] )
  i1724.streamingMipmapsActive = !!i1725[24]
  i1724.vSyncCount = i1725[25]
  i1724.asyncUploadBufferSize = i1725[26]
  i1724.asyncUploadTimeSlice = i1725[27]
  i1724.billboardsFaceCameraPosition = !!i1725[28]
  i1724.shadowNearPlaneOffset = i1725[29]
  i1724.streamingMipmapsMemoryBudget = i1725[30]
  i1724.maximumLODLevel = i1725[31]
  i1724.streamingMipmapsAddAllCameras = !!i1725[32]
  i1724.streamingMipmapsMaxLevelReduction = i1725[33]
  i1724.streamingMipmapsRenderersPerFrame = i1725[34]
  i1724.resolutionScalingFixedDPIFactor = i1725[35]
  i1724.streamingMipmapsMaxFileIORequests = i1725[36]
  i1724.currentQualityLevel = i1725[37]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1735 = data
  i1734.weight = i1735[0]
  i1734.vertices = i1735[1]
  i1734.normals = i1735[2]
  i1734.tangents = i1735[3]
  return i1734
}

Deserializers["System.DateTime"] = function (request, data, root) {
  var i1736 = root || request.c( 'System.DateTime' )
  var i1737 = data
  return i1736
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1738 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1739 = data
  i1738.xPlacement = i1739[0]
  i1738.yPlacement = i1739[1]
  i1738.xAdvance = i1739[2]
  i1738.yAdvance = i1739[3]
  return i1738
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1740 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1741 = data
  i1740.m_GlyphIndex = i1741[0]
  i1740.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1741[1], i1740.m_GlyphValueRecord)
  return i1740
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1742 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1743 = data
  i1742.m_XPlacement = i1743[0]
  i1742.m_YPlacement = i1743[1]
  i1742.m_XAdvance = i1743[2]
  i1742.m_YAdvance = i1743[3]
  return i1742
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[46],"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[95],"102":[31],"103":[31],"104":[31],"105":[31],"106":[31],"107":[31],"108":[31],"109":[31],"110":[31],"111":[31],"112":[31],"113":[31],"114":[31],"115":[46],"116":[70],"117":[118],"119":[118],"18":[7],"19":[12],"120":[12],"121":[12],"122":[12],"123":[12],"124":[12],"125":[12],"126":[12],"127":[12],"128":[12],"129":[12,128],"130":[12],"131":[12],"132":[46],"133":[7],"134":[135],"136":[137],"138":[46],"139":[140],"141":[7],"142":[14,7],"71":[70],"143":[14,7],"144":[27,70],"145":[70],"146":[70,69],"147":[95],"148":[31],"149":[140],"150":[151],"152":[7,14],"153":[7],"154":[70,7],"39":[7,14],"155":[7],"156":[14,7],"157":[70],"158":[14,7],"159":[7],"160":[161],"162":[145],"163":[70,69],"164":[143],"165":[145],"166":[167],"168":[145],"169":[145],"170":[151],"171":[151],"172":[145],"173":[135],"174":[20],"175":[7],"176":[7],"37":[18],"15":[14,7],"177":[7],"50":[18],"178":[7],"179":[7],"35":[7],"180":[7],"181":[7],"182":[7],"183":[7],"184":[7],"185":[7],"49":[14,7],"186":[7],"187":[7],"188":[7],"9":[7],"12":[14,7],"189":[7],"190":[61],"191":[61],"62":[61],"192":[61],"193":[46],"194":[46],"195":[135]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","UnityEngine.MonoBehaviour","ComboVfx","UnityEngine.UI.Text","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.Canvas","BetterOutline","UnityEngine.SpriteRenderer","Grill","Plate","Skewer","LockOfGrillOB","SmokeGrill","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","GrillMouseEvent","UnityEngine.Rigidbody2D","SkewerMouseEvent","Shipper","ItemOrder","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","UnityEngine.UI.GraphicRaycaster","PlateCompleted","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.AudioSource","UnityEngine.AudioClip","EpicToonFX.ETFXLightFade","UnityEngine.Light","Popup.PopupSystem","UnityEngine.Camera","PopupDarkEffect","Popup.BlockingImage","UnityEngine.UI.RawImage","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","PopupLiteMessage","UnityEngine.UI.Shadow","PopupBlurEffect","PopupSample1","PopupSample2","RestUI","AudioManager","AudioClipTable","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayerDataPreview","UIManager","PlayScreen","PopUp","SafeArea","LevelCtr","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Tutorial","CoinManager","LevelDataCtrl","GameManager","Spine.Unity.SkeletonDataAsset","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","DailyLogInSO","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bevel","CharacterSpacing","CurveEffect","DepthEffect","InnerBevel","InnerOutline","OverlayTexture","GradientColor","LimitVisibleCharacters","Typewriter","SkewEffect","SoftShadow","CameraEffectApplier","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Coffee.UIExtensions.UIParticle","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "Skewer Shuffle";

Deserializers.lunaInitializationTime = "08/15/2025 03:14:52";

Deserializers.lunaDaysRunning = "5.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "250820_LamDX_BBQGrill_8a25";

Deserializers.lunaAppID = "31635";

Deserializers.projectId = "9fd9c6f453db0854f930de01c72b834f";

Deserializers.packagesInfo = "com.unity.shadergraph: 16.0.5\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.6\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1928";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5893";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "BBOLD GAMES";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.com.unity.template.mobile2D";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "6dbad523-16be-45e1-825d-08b75c0fbb4a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"],["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

