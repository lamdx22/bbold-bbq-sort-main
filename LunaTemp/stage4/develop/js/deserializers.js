var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.JointSpring' )
  var i899 = data
  i898.spring = i899[0]
  i898.damper = i899[1]
  i898.targetPosition = i899[2]
  return i898
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.JointMotor' )
  var i901 = data
  i900.m_TargetVelocity = i901[0]
  i900.m_Force = i901[1]
  i900.m_FreeSpin = i901[2]
  return i900
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.JointLimits' )
  var i903 = data
  i902.m_Min = i903[0]
  i902.m_Max = i903[1]
  i902.m_Bounciness = i903[2]
  i902.m_BounceMinVelocity = i903[3]
  i902.m_ContactDistance = i903[4]
  i902.minBounce = i903[5]
  i902.maxBounce = i903[6]
  return i902
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.JointDrive' )
  var i905 = data
  i904.m_PositionSpring = i905[0]
  i904.m_PositionDamper = i905[1]
  i904.m_MaximumForce = i905[2]
  i904.m_UseAcceleration = i905[3]
  return i904
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i907 = data
  i906.m_Spring = i907[0]
  i906.m_Damper = i907[1]
  return i906
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i909 = data
  i908.m_Limit = i909[0]
  i908.m_Bounciness = i909[1]
  i908.m_ContactDistance = i909[2]
  return i908
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i911 = data
  i910.m_ExtremumSlip = i911[0]
  i910.m_ExtremumValue = i911[1]
  i910.m_AsymptoteSlip = i911[2]
  i910.m_AsymptoteValue = i911[3]
  i910.m_Stiffness = i911[4]
  return i910
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i913 = data
  i912.m_LowerAngle = i913[0]
  i912.m_UpperAngle = i913[1]
  return i912
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i915 = data
  i914.m_MotorSpeed = i915[0]
  i914.m_MaximumMotorTorque = i915[1]
  return i914
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i917 = data
  i916.m_DampingRatio = i917[0]
  i916.m_Frequency = i917[1]
  i916.m_Angle = i917[2]
  return i916
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i919 = data
  i918.m_LowerTranslation = i919[0]
  i918.m_UpperTranslation = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i921 = data
  i920.position = new pc.Vec3( i921[0], i921[1], i921[2] )
  i920.scale = new pc.Vec3( i921[3], i921[4], i921[5] )
  i920.rotation = new pc.Quat(i921[6], i921[7], i921[8], i921[9])
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i923 = data
  i922.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i923[0], i922.main)
  i922.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i923[1], i922.colorBySpeed)
  i922.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i923[2], i922.colorOverLifetime)
  i922.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i923[3], i922.emission)
  i922.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i923[4], i922.rotationBySpeed)
  i922.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i923[5], i922.rotationOverLifetime)
  i922.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i923[6], i922.shape)
  i922.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i923[7], i922.sizeBySpeed)
  i922.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i923[8], i922.sizeOverLifetime)
  i922.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i923[9], i922.textureSheetAnimation)
  i922.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i923[10], i922.velocityOverLifetime)
  i922.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i923[11], i922.noise)
  i922.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i923[12], i922.inheritVelocity)
  i922.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i923[13], i922.forceOverLifetime)
  i922.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i923[14], i922.limitVelocityOverLifetime)
  i922.useAutoRandomSeed = !!i923[15]
  i922.randomSeed = i923[16]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemMain()
  var i925 = data
  i924.duration = i925[0]
  i924.loop = !!i925[1]
  i924.prewarm = !!i925[2]
  i924.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.startDelay)
  i924.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[4], i924.startLifetime)
  i924.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[5], i924.startSpeed)
  i924.startSize3D = !!i925[6]
  i924.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[7], i924.startSizeX)
  i924.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[8], i924.startSizeY)
  i924.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[9], i924.startSizeZ)
  i924.startRotation3D = !!i925[10]
  i924.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[11], i924.startRotationX)
  i924.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[12], i924.startRotationY)
  i924.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[13], i924.startRotationZ)
  i924.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i925[14], i924.startColor)
  i924.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[15], i924.gravityModifier)
  i924.simulationSpace = i925[16]
  request.r(i925[17], i925[18], 0, i924, 'customSimulationSpace')
  i924.simulationSpeed = i925[19]
  i924.useUnscaledTime = !!i925[20]
  i924.scalingMode = i925[21]
  i924.playOnAwake = !!i925[22]
  i924.maxParticles = i925[23]
  i924.emitterVelocityMode = i925[24]
  i924.stopAction = i925[25]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i926 = root || new pc.MinMaxCurve()
  var i927 = data
  i926.mode = i927[0]
  i926.curveMin = new pc.AnimationCurve( { keys_flow: i927[1] } )
  i926.curveMax = new pc.AnimationCurve( { keys_flow: i927[2] } )
  i926.curveMultiplier = i927[3]
  i926.constantMin = i927[4]
  i926.constantMax = i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i928 = root || new pc.MinMaxGradient()
  var i929 = data
  i928.mode = i929[0]
  i928.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i929[1], i928.gradientMin)
  i928.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i929[2], i928.gradientMax)
  i928.colorMin = new pc.Color(i929[3], i929[4], i929[5], i929[6])
  i928.colorMax = new pc.Color(i929[7], i929[8], i929[9], i929[10])
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i931 = data
  i930.mode = i931[0]
  var i933 = i931[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i933[i + 0]) );
  }
  i930.colorKeys = i932
  var i935 = i931[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i935[i + 0]) );
  }
  i930.alphaKeys = i934
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemColorBySpeed()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i937[1], i936.color)
  i936.range = new pc.Vec2( i937[2], i937[3] )
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i941 = data
  i940.color = new pc.Color(i941[0], i941[1], i941[2], i941[3])
  i940.time = i941[4]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i945 = data
  i944.alpha = i945[0]
  i944.time = i945[1]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemColorOverLifetime()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i947[1], i946.color)
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemEmitter()
  var i949 = data
  i948.enabled = !!i949[0]
  i948.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[1], i948.rateOverTime)
  i948.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[2], i948.rateOverDistance)
  var i951 = i949[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i951[i + 0]) );
  }
  i948.bursts = i950
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemBurst()
  var i955 = data
  i954.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[0], i954.count)
  i954.cycleCount = i955[1]
  i954.minCount = i955[2]
  i954.maxCount = i955[3]
  i954.repeatInterval = i955[4]
  i954.time = i955[5]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemRotationBySpeed()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[1], i956.x)
  i956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[2], i956.y)
  i956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.z)
  i956.separateAxes = !!i957[4]
  i956.range = new pc.Vec2( i957[5], i957[6] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemRotationOverLifetime()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.x)
  i958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.y)
  i958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.z)
  i958.separateAxes = !!i959[4]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemShape()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.shapeType = i961[1]
  i960.randomDirectionAmount = i961[2]
  i960.sphericalDirectionAmount = i961[3]
  i960.randomPositionAmount = i961[4]
  i960.alignToDirection = !!i961[5]
  i960.radius = i961[6]
  i960.radiusMode = i961[7]
  i960.radiusSpread = i961[8]
  i960.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[9], i960.radiusSpeed)
  i960.radiusThickness = i961[10]
  i960.angle = i961[11]
  i960.length = i961[12]
  i960.boxThickness = new pc.Vec3( i961[13], i961[14], i961[15] )
  i960.meshShapeType = i961[16]
  request.r(i961[17], i961[18], 0, i960, 'mesh')
  request.r(i961[19], i961[20], 0, i960, 'meshRenderer')
  request.r(i961[21], i961[22], 0, i960, 'skinnedMeshRenderer')
  i960.useMeshMaterialIndex = !!i961[23]
  i960.meshMaterialIndex = i961[24]
  i960.useMeshColors = !!i961[25]
  i960.normalOffset = i961[26]
  i960.arc = i961[27]
  i960.arcMode = i961[28]
  i960.arcSpread = i961[29]
  i960.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[30], i960.arcSpeed)
  i960.donutRadius = i961[31]
  i960.position = new pc.Vec3( i961[32], i961[33], i961[34] )
  i960.rotation = new pc.Vec3( i961[35], i961[36], i961[37] )
  i960.scale = new pc.Vec3( i961[38], i961[39], i961[40] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemSizeBySpeed()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.x)
  i962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.y)
  i962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.z)
  i962.separateAxes = !!i963[4]
  i962.range = new pc.Vec2( i963[5], i963[6] )
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemSizeOverLifetime()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[1], i964.x)
  i964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[2], i964.y)
  i964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[3], i964.z)
  i964.separateAxes = !!i965[4]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.mode = i967[1]
  i966.animation = i967[2]
  i966.numTilesX = i967[3]
  i966.numTilesY = i967[4]
  i966.useRandomRow = !!i967[5]
  i966.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[6], i966.frameOverTime)
  i966.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[7], i966.startFrame)
  i966.cycleCount = i967[8]
  i966.rowIndex = i967[9]
  i966.flipU = i967[10]
  i966.flipV = i967[11]
  i966.spriteCount = i967[12]
  var i969 = i967[13]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.sprites = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[1], i972.x)
  i972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.y)
  i972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.z)
  i972.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[4], i972.radial)
  i972.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[5], i972.speedModifier)
  i972.space = i973[6]
  i972.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[7], i972.orbitalX)
  i972.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[8], i972.orbitalY)
  i972.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[9], i972.orbitalZ)
  i972.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[10], i972.orbitalOffsetX)
  i972.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[11], i972.orbitalOffsetY)
  i972.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[12], i972.orbitalOffsetZ)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemNoise()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.separateAxes = !!i975[1]
  i974.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.strengthX)
  i974.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.strengthY)
  i974.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[4], i974.strengthZ)
  i974.frequency = i975[5]
  i974.damping = !!i975[6]
  i974.octaveCount = i975[7]
  i974.octaveMultiplier = i975[8]
  i974.octaveScale = i975[9]
  i974.quality = i975[10]
  i974.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[11], i974.scrollSpeed)
  i974.scrollSpeedMultiplier = i975[12]
  i974.remapEnabled = !!i975[13]
  i974.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[14], i974.remapX)
  i974.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[15], i974.remapY)
  i974.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[16], i974.remapZ)
  i974.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[17], i974.positionAmount)
  i974.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[18], i974.rotationAmount)
  i974.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[19], i974.sizeAmount)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemInheritVelocity()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.mode = i977[1]
  i976.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.curve)
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemForceOverLifetime()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[1], i978.x)
  i978.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.y)
  i978.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[3], i978.z)
  i978.space = i979[4]
  i978.randomized = !!i979[5]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i980 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i981 = data
  i980.enabled = !!i981[0]
  i980.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[1], i980.limit)
  i980.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[2], i980.limitX)
  i980.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[3], i980.limitY)
  i980.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[4], i980.limitZ)
  i980.dampen = i981[5]
  i980.separateAxes = !!i981[6]
  i980.space = i981[7]
  i980.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i981[8], i980.drag)
  i980.multiplyDragByParticleSize = !!i981[9]
  i980.multiplyDragByParticleVelocity = !!i981[10]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i983 = data
  i982.enabled = !!i983[0]
  request.r(i983[1], i983[2], 0, i982, 'sharedMaterial')
  var i985 = i983[3]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.sharedMaterials = i984
  i982.receiveShadows = !!i983[4]
  i982.shadowCastingMode = i983[5]
  i982.sortingLayerID = i983[6]
  i982.sortingOrder = i983[7]
  i982.lightmapIndex = i983[8]
  i982.lightmapSceneIndex = i983[9]
  i982.lightmapScaleOffset = new pc.Vec4( i983[10], i983[11], i983[12], i983[13] )
  i982.lightProbeUsage = i983[14]
  i982.reflectionProbeUsage = i983[15]
  request.r(i983[16], i983[17], 0, i982, 'mesh')
  i982.meshCount = i983[18]
  i982.activeVertexStreamsCount = i983[19]
  i982.alignment = i983[20]
  i982.renderMode = i983[21]
  i982.sortMode = i983[22]
  i982.lengthScale = i983[23]
  i982.velocityScale = i983[24]
  i982.cameraVelocityScale = i983[25]
  i982.normalDirection = i983[26]
  i982.sortingFudge = i983[27]
  i982.minParticleSize = i983[28]
  i982.maxParticleSize = i983[29]
  i982.pivot = new pc.Vec3( i983[30], i983[31], i983[32] )
  request.r(i983[33], i983[34], 0, i982, 'trailMaterial')
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i989 = data
  i988.name = i989[0]
  i988.tagId = i989[1]
  i988.enabled = !!i989[2]
  i988.isStatic = !!i989[3]
  i988.layer = i989[4]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i990 = root || new pc.UnityMaterial()
  var i991 = data
  i990.name = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'shader')
  i990.renderQueue = i991[3]
  i990.enableInstancing = !!i991[4]
  var i993 = i991[5]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i993[i + 0]) );
  }
  i990.floatParameters = i992
  var i995 = i991[6]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i995[i + 0]) );
  }
  i990.colorParameters = i994
  var i997 = i991[7]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i997[i + 0]) );
  }
  i990.vectorParameters = i996
  var i999 = i991[8]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i999[i + 0]) );
  }
  i990.textureParameters = i998
  var i1001 = i991[9]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1001[i + 0]) );
  }
  i990.materialFlags = i1000
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.value = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.value = new pc.Color(i1009[1], i1009[2], i1009[3], i1009[4])
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.value = new pc.Vec4( i1013[1], i1013[2], i1013[3], i1013[4] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1017 = data
  i1016.name = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'value')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.enabled = !!i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.width = i1023[1]
  i1022.height = i1023[2]
  i1022.mipmapCount = i1023[3]
  i1022.anisoLevel = i1023[4]
  i1022.filterMode = i1023[5]
  i1022.hdr = !!i1023[6]
  i1022.format = i1023[7]
  i1022.wrapMode = i1023[8]
  i1022.alphaIsTransparency = !!i1023[9]
  i1022.alphaSource = i1023[10]
  i1022.graphicsFormat = i1023[11]
  i1022.sRGBTexture = !!i1023[12]
  i1022.desiredColorSpace = i1023[13]
  i1022.wrapU = i1023[14]
  i1022.wrapV = i1023[15]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.halfPrecision = !!i1025[1]
  i1024.useUInt32IndexFormat = !!i1025[2]
  i1024.vertexCount = i1025[3]
  i1024.aabb = i1025[4]
  var i1027 = i1025[5]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( !!i1027[i + 0] );
  }
  i1024.streams = i1026
  i1024.vertices = i1025[6]
  var i1029 = i1025[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1029[i + 0]) );
  }
  i1024.subMeshes = i1028
  var i1031 = i1025[8]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 16) {
    i1030.push( new pc.Mat4().setData(i1031[i + 0], i1031[i + 1], i1031[i + 2], i1031[i + 3],  i1031[i + 4], i1031[i + 5], i1031[i + 6], i1031[i + 7],  i1031[i + 8], i1031[i + 9], i1031[i + 10], i1031[i + 11],  i1031[i + 12], i1031[i + 13], i1031[i + 14], i1031[i + 15]) );
  }
  i1024.bindposes = i1030
  var i1033 = i1025[9]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1033[i + 0]) );
  }
  i1024.blendShapes = i1032
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1039 = data
  i1038.triangles = i1039[0]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1045 = data
  i1044.name = i1045[0]
  var i1047 = i1045[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1047[i + 0]) );
  }
  i1044.frames = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1049 = data
  i1048.pivot = new pc.Vec2( i1049[0], i1049[1] )
  i1048.anchorMin = new pc.Vec2( i1049[2], i1049[3] )
  i1048.anchorMax = new pc.Vec2( i1049[4], i1049[5] )
  i1048.sizeDelta = new pc.Vec2( i1049[6], i1049[7] )
  i1048.anchoredPosition3D = new pc.Vec3( i1049[8], i1049[9], i1049[10] )
  i1048.rotation = new pc.Quat(i1049[11], i1049[12], i1049[13], i1049[14])
  i1048.scale = new pc.Vec3( i1049[15], i1049[16], i1049[17] )
  return i1048
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'm_FillRect')
  request.r(i1051[2], i1051[3], 0, i1050, 'm_HandleRect')
  i1050.m_Direction = i1051[4]
  i1050.m_MinValue = i1051[5]
  i1050.m_MaxValue = i1051[6]
  i1050.m_WholeNumbers = !!i1051[7]
  i1050.m_Value = i1051[8]
  i1050.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1051[9], i1050.m_OnValueChanged)
  i1050.m_Navigation = request.d('UnityEngine.UI.Navigation', i1051[10], i1050.m_Navigation)
  i1050.m_Transition = i1051[11]
  i1050.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1051[12], i1050.m_Colors)
  i1050.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1051[13], i1050.m_SpriteState)
  i1050.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1051[14], i1050.m_AnimationTriggers)
  i1050.m_Interactable = !!i1051[15]
  request.r(i1051[16], i1051[17], 0, i1050, 'm_TargetGraphic')
  return i1050
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1053 = data
  i1052.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1053[0], i1052.m_PersistentCalls)
  return i1052
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('UnityEngine.Events.PersistentCall', i1057[i + 0]));
  }
  i1054.m_Calls = i1056
  return i1054
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'm_Target')
  i1060.m_TargetAssemblyTypeName = i1061[2]
  i1060.m_MethodName = i1061[3]
  i1060.m_Mode = i1061[4]
  i1060.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1061[5], i1060.m_Arguments)
  i1060.m_CallState = i1061[6]
  return i1060
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1063 = data
  i1062.m_Mode = i1063[0]
  i1062.m_WrapAround = !!i1063[1]
  request.r(i1063[2], i1063[3], 0, i1062, 'm_SelectOnUp')
  request.r(i1063[4], i1063[5], 0, i1062, 'm_SelectOnDown')
  request.r(i1063[6], i1063[7], 0, i1062, 'm_SelectOnLeft')
  request.r(i1063[8], i1063[9], 0, i1062, 'm_SelectOnRight')
  return i1062
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1065 = data
  i1064.m_NormalColor = new pc.Color(i1065[0], i1065[1], i1065[2], i1065[3])
  i1064.m_HighlightedColor = new pc.Color(i1065[4], i1065[5], i1065[6], i1065[7])
  i1064.m_PressedColor = new pc.Color(i1065[8], i1065[9], i1065[10], i1065[11])
  i1064.m_SelectedColor = new pc.Color(i1065[12], i1065[13], i1065[14], i1065[15])
  i1064.m_DisabledColor = new pc.Color(i1065[16], i1065[17], i1065[18], i1065[19])
  i1064.m_ColorMultiplier = i1065[20]
  i1064.m_FadeDuration = i1065[21]
  return i1064
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'm_HighlightedSprite')
  request.r(i1067[2], i1067[3], 0, i1066, 'm_PressedSprite')
  request.r(i1067[4], i1067[5], 0, i1066, 'm_SelectedSprite')
  request.r(i1067[6], i1067[7], 0, i1066, 'm_DisabledSprite')
  return i1066
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1069 = data
  i1068.m_NormalTrigger = i1069[0]
  i1068.m_HighlightedTrigger = i1069[1]
  i1068.m_PressedTrigger = i1069[2]
  i1068.m_SelectedTrigger = i1069[3]
  i1068.m_DisabledTrigger = i1069[4]
  return i1068
}

Deserializers["ComboVfx"] = function (request, data, root) {
  var i1070 = root || request.c( 'ComboVfx' )
  var i1071 = data
  i1070.comboCount = i1071[0]
  request.r(i1071[1], i1071[2], 0, i1070, 'comboText')
  request.r(i1071[3], i1071[4], 0, i1070, 'comboSlider')
  request.r(i1071[5], i1071[6], 0, i1070, 'fillSlider')
  request.r(i1071[7], i1071[8], 0, i1070, 'flameRed')
  request.r(i1071[9], i1071[10], 0, i1070, 'flameViolet')
  request.r(i1071[11], i1071[12], 0, i1070, 'flameBlue')
  var i1073 = i1071[13]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 1, i1072, '')
  }
  i1070.prefabTextVfxs = i1072
  request.r(i1071[14], i1071[15], 0, i1070, 'parentSpawnVfx')
  i1070.offsetSpawnTextVfx = new pc.Vec3( i1071[16], i1071[17], i1071[18] )
  request.r(i1071[19], i1071[20], 0, i1070, 'lvCtr')
  request.r(i1071[21], i1071[22], 0, i1070, 'noticeNewMaxComboVfx')
  request.r(i1071[23], i1071[24], 0, i1070, 'posSpawnNotice')
  i1070.timeCount = i1071[25]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1077 = data
  i1076.cullTransparentMesh = !!i1077[0]
  return i1076
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.Image' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'm_Sprite')
  i1078.m_Type = i1079[2]
  i1078.m_PreserveAspect = !!i1079[3]
  i1078.m_FillCenter = !!i1079[4]
  i1078.m_FillMethod = i1079[5]
  i1078.m_FillAmount = i1079[6]
  i1078.m_FillClockwise = !!i1079[7]
  i1078.m_FillOrigin = i1079[8]
  i1078.m_UseSpriteMesh = !!i1079[9]
  i1078.m_PixelsPerUnitMultiplier = i1079[10]
  request.r(i1079[11], i1079[12], 0, i1078, 'm_Material')
  i1078.m_Maskable = !!i1079[13]
  i1078.m_Color = new pc.Color(i1079[14], i1079[15], i1079[16], i1079[17])
  i1078.m_RaycastTarget = !!i1079[18]
  i1078.m_RaycastPadding = new pc.Vec4( i1079[19], i1079[20], i1079[21], i1079[22] )
  return i1078
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.Text' )
  var i1081 = data
  i1080.m_FontData = request.d('UnityEngine.UI.FontData', i1081[0], i1080.m_FontData)
  i1080.m_Text = i1081[1]
  request.r(i1081[2], i1081[3], 0, i1080, 'm_Material')
  i1080.m_Maskable = !!i1081[4]
  i1080.m_Color = new pc.Color(i1081[5], i1081[6], i1081[7], i1081[8])
  i1080.m_RaycastTarget = !!i1081[9]
  i1080.m_RaycastPadding = new pc.Vec4( i1081[10], i1081[11], i1081[12], i1081[13] )
  return i1080
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'm_Font')
  i1082.m_FontSize = i1083[2]
  i1082.m_FontStyle = i1083[3]
  i1082.m_BestFit = !!i1083[4]
  i1082.m_MinSize = i1083[5]
  i1082.m_MaxSize = i1083[6]
  i1082.m_Alignment = i1083[7]
  i1082.m_AlignByGeometry = !!i1083[8]
  i1082.m_RichText = !!i1083[9]
  i1082.m_HorizontalOverflow = i1083[10]
  i1082.m_VerticalOverflow = i1083[11]
  i1082.m_LineSpacing = i1083[12]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1085 = data
  i1084.enabled = !!i1085[0]
  i1084.planeDistance = i1085[1]
  i1084.referencePixelsPerUnit = i1085[2]
  i1084.isFallbackOverlay = !!i1085[3]
  i1084.renderMode = i1085[4]
  i1084.renderOrder = i1085[5]
  i1084.sortingLayerName = i1085[6]
  i1084.sortingOrder = i1085[7]
  i1084.scaleFactor = i1085[8]
  request.r(i1085[9], i1085[10], 0, i1084, 'worldCamera')
  i1084.overrideSorting = !!i1085[11]
  i1084.pixelPerfect = !!i1085[12]
  i1084.targetDisplay = i1085[13]
  i1084.overridePixelPerfect = !!i1085[14]
  return i1084
}

Deserializers["BetterOutline"] = function (request, data, root) {
  var i1086 = root || request.c( 'BetterOutline' )
  var i1087 = data
  i1086.m_EffectColor = new pc.Color(i1087[0], i1087[1], i1087[2], i1087[3])
  i1086.m_EffectDistance = new pc.Vec2( i1087[4], i1087[5] )
  i1086.m_UseGraphicAlpha = !!i1087[6]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1089 = data
  i1088.enabled = !!i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'sharedMaterial')
  var i1091 = i1089[3]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.sharedMaterials = i1090
  i1088.receiveShadows = !!i1089[4]
  i1088.shadowCastingMode = i1089[5]
  i1088.sortingLayerID = i1089[6]
  i1088.sortingOrder = i1089[7]
  i1088.lightmapIndex = i1089[8]
  i1088.lightmapSceneIndex = i1089[9]
  i1088.lightmapScaleOffset = new pc.Vec4( i1089[10], i1089[11], i1089[12], i1089[13] )
  i1088.lightProbeUsage = i1089[14]
  i1088.reflectionProbeUsage = i1089[15]
  i1088.color = new pc.Color(i1089[16], i1089[17], i1089[18], i1089[19])
  request.r(i1089[20], i1089[21], 0, i1088, 'sprite')
  i1088.flipX = !!i1089[22]
  i1088.flipY = !!i1089[23]
  i1088.drawMode = i1089[24]
  i1088.size = new pc.Vec2( i1089[25], i1089[26] )
  i1088.tileMode = i1089[27]
  i1088.adaptiveModeThreshold = i1089[28]
  i1088.maskInteraction = i1089[29]
  i1088.spriteSortPoint = i1089[30]
  return i1088
}

Deserializers["Grill"] = function (request, data, root) {
  var i1092 = root || request.c( 'Grill' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 1, i1094, '')
  }
  i1092.liSprRend = i1094
  var i1097 = i1093[1]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(i1097[i + 0]);
  }
  i1092.liSprRendDefaultLayer = i1096
  request.r(i1093[2], i1093[3], 0, i1092, 'platePrefab')
  request.r(i1093[4], i1093[5], 0, i1092, 'skewerPrefab')
  request.r(i1093[6], i1093[7], 0, i1092, 'sprRendGrill')
  request.r(i1093[8], i1093[9], 0, i1092, 'lockGrillOB')
  request.r(i1093[10], i1093[11], 0, i1092, 'animSmoke')
  request.r(i1093[12], i1093[13], 0, i1092, 'sprOnePlace')
  request.r(i1093[14], i1093[15], 0, i1092, 'sprThreePlaces')
  request.r(i1093[16], i1093[17], 0, i1092, 'sprSale')
  request.r(i1093[18], i1093[19], 0, i1092, 'sprNotMatch3')
  request.r(i1093[20], i1093[21], 0, i1092, 'posSpawnPlate')
  i1092.offsetYPlate = i1093[22]
  i1092.grillUnlockType = i1093[23]
  i1092.grillType = i1093[24]
  i1092.numberSkewerUnlock = i1093[25]
  i1092.skewerTypeUnlock = i1093[26]
  i1092.numOfPosPlaceSkewers = i1093[27]
  i1092.isSaleGrill = !!i1093[28]
  i1092.maxPlace = i1093[29]
  var i1099 = i1093[30]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('PosPlaceAtGrill')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('PosPlaceAtGrill', i1099[i + 0]));
  }
  i1092.posPlaceSkewers = i1098
  var i1101 = i1093[31]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('Plate')))
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 1, i1100, '')
  }
  i1092.plates = i1100
  request.r(i1093[32], i1093[33], 0, i1092, 'levelCtr')
  i1092.grillData = request.d('GrillData', i1093[34], i1092.grillData)
  i1092.sortingLayerPress = i1093[35]
  i1092._offSetDrag = new pc.Vec2( i1093[36], i1093[37] )
  var i1103 = i1093[38]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(i1103[i + 0]);
  }
  i1092.liSprRendDefaultOrderLayer = i1102
  return i1092
}

Deserializers["PosPlaceAtGrill"] = function (request, data, root) {
  var i1110 = root || request.c( 'PosPlaceAtGrill' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'grill')
  request.r(i1111[2], i1111[3], 0, i1110, 'pos')
  request.r(i1111[4], i1111[5], 0, i1110, 'skewerAtPos')
  return i1110
}

Deserializers["GrillData"] = function (request, data, root) {
  var i1114 = root || request.c( 'GrillData' )
  var i1115 = data
  i1114.grillType = i1115[0]
  i1114.typeUnlock = i1115[1]
  i1114.isSaleGrill = !!i1115[2]
  i1114.skewerTypeUnLocked = i1115[3]
  i1114.numOfPosSkewer = i1115[4]
  i1114.numberSkewerUnlock = i1115[5]
  i1114.rowIndex = i1115[6]
  i1114.colIndex = i1115[7]
  var i1117 = i1115[8]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('PlateData')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('PlateData', i1117[i + 0]));
  }
  i1114.plateDatas = i1116
  var i1119 = i1115[9]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('SkewerData', i1119[i + 0]));
  }
  i1114.skewerDatasOnGrill = i1118
  return i1114
}

Deserializers["PlateData"] = function (request, data, root) {
  var i1122 = root || request.c( 'PlateData' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('SkewerData', i1125[i + 0]));
  }
  i1122.skewers = i1124
  return i1122
}

Deserializers["SkewerData"] = function (request, data, root) {
  var i1128 = root || request.c( 'SkewerData' )
  var i1129 = data
  i1128.skewerType = i1129[0]
  i1128.typeAppear = i1129[1]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1133 = data
  i1132.usedByComposite = !!i1133[0]
  i1132.autoTiling = !!i1133[1]
  i1132.size = new pc.Vec2( i1133[2], i1133[3] )
  i1132.edgeRadius = i1133[4]
  i1132.enabled = !!i1133[5]
  i1132.isTrigger = !!i1133[6]
  i1132.usedByEffector = !!i1133[7]
  i1132.density = i1133[8]
  i1132.offset = new pc.Vec2( i1133[9], i1133[10] )
  request.r(i1133[11], i1133[12], 0, i1132, 'material')
  return i1132
}

Deserializers["SmokeGrill"] = function (request, data, root) {
  var i1134 = root || request.c( 'SmokeGrill' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'anim')
  i1134.nameAnim = i1135[2]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'animatorController')
  request.r(i1137[2], i1137[3], 0, i1136, 'avatar')
  i1136.updateMode = i1137[4]
  i1136.hasTransformHierarchy = !!i1137[5]
  i1136.applyRootMotion = !!i1137[6]
  var i1139 = i1137[7]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 2) {
  request.r(i1139[i + 0], i1139[i + 1], 2, i1138, '')
  }
  i1136.humanBones = i1138
  i1136.enabled = !!i1137[8]
  return i1136
}

Deserializers["LockOfGrillOB"] = function (request, data, root) {
  var i1142 = root || request.c( 'LockOfGrillOB' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 1, i1144, '')
  }
  i1142.liSprRend = i1144
  var i1147 = i1143[1]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(i1147[i + 0]);
  }
  i1142.liSprRendDefaultLayer = i1146
  request.r(i1143[2], i1143[3], 0, i1142, 'grill')
  request.r(i1143[4], i1143[5], 0, i1142, 'sprRendGrillLocked')
  request.r(i1143[6], i1143[7], 0, i1142, 'sprRendAdsUnlock')
  request.r(i1143[8], i1143[9], 0, i1142, 'sprRendSkewerUnlock')
  request.r(i1143[10], i1143[11], 0, i1142, 'sprLockedByNumber')
  request.r(i1143[12], i1143[13], 0, i1142, 'textLocked')
  request.r(i1143[14], i1143[15], 0, i1142, 'textNumberSkewer')
  request.r(i1143[16], i1143[17], 0, i1142, 'col')
  i1142.sortingLayerPress = i1143[18]
  i1142._offSetDrag = new pc.Vec2( i1143[19], i1143[20] )
  var i1149 = i1143[21]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.add(i1149[i + 0]);
  }
  i1142.liSprRendDefaultOrderLayer = i1148
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1151 = data
  i1150.center = new pc.Vec3( i1151[0], i1151[1], i1151[2] )
  i1150.size = new pc.Vec3( i1151[3], i1151[4], i1151[5] )
  i1150.enabled = !!i1151[6]
  i1150.isTrigger = !!i1151[7]
  request.r(i1151[8], i1151[9], 0, i1150, 'material')
  return i1150
}

Deserializers["GrillMouseEvent"] = function (request, data, root) {
  var i1152 = root || request.c( 'GrillMouseEvent' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'grill')
  return i1152
}

Deserializers["Plate"] = function (request, data, root) {
  var i1154 = root || request.c( 'Plate' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('posAtPlate')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('posAtPlate', i1157[i + 0]));
  }
  i1154.posPlaceSkewers = i1156
  request.r(i1155[1], i1155[2], 0, i1154, 'skewerPrefab')
  request.r(i1155[3], i1155[4], 0, i1154, 'grill')
  return i1154
}

Deserializers["posAtPlate"] = function (request, data, root) {
  var i1160 = root || request.c( 'posAtPlate' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'plate')
  request.r(i1161[2], i1161[3], 0, i1160, 'pos')
  request.r(i1161[4], i1161[5], 0, i1160, 'skewerAtPos')
  return i1160
}

Deserializers["Skewer"] = function (request, data, root) {
  var i1162 = root || request.c( 'Skewer' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 1, i1164, '')
  }
  i1162.liSprRend = i1164
  var i1167 = i1163[1]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.add(i1167[i + 0]);
  }
  i1162.liSprRendDefaultLayer = i1166
  i1162.skewerType = i1163[2]
  i1162.skewerTypeAppear = i1163[3]
  request.r(i1163[4], i1163[5], 0, i1162, 'sprRend')
  request.r(i1163[6], i1163[7], 0, i1162, 'sprRendSkin')
  request.r(i1163[8], i1163[9], 0, i1162, 'sprSecret')
  var i1169 = i1163[10]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1169.length; i += 2) {
  request.r(i1169[i + 0], i1169[i + 1], 1, i1168, '')
  }
  i1162.sprIces = i1168
  request.r(i1163[11], i1163[12], 0, i1162, 'sprOutLine')
  request.r(i1163[13], i1163[14], 0, i1162, 'animBreakSecretSkin')
  request.r(i1163[15], i1163[16], 0, i1162, 'vfxBreakIce')
  request.r(i1163[17], i1163[18], 0, i1162, 'vfxSmoke')
  var i1171 = i1163[19]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 1, i1170, '')
  }
  i1162.posIces = i1170
  request.r(i1163[20], i1163[21], 0, i1162, 'rb')
  request.r(i1163[22], i1163[23], 0, i1162, 'col')
  request.r(i1163[24], i1163[25], 0, i1162, 'pickBox')
  request.r(i1163[26], i1163[27], 0, i1162, 'levelCtrl')
  i1162.curPosIn = request.d('PosPlaceAtGrill', i1163[28], i1162.curPosIn)
  i1162.lastPosIn = request.d('PosPlaceAtGrill', i1163[29], i1162.lastPosIn)
  i1162.posAtPlate = request.d('posAtPlate', i1163[30], i1162.posAtPlate)
  var i1173 = i1163[31]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 1, i1172, '')
  }
  i1162.colGrills = i1172
  i1162.defaultScale = new pc.Vec3( i1163[32], i1163[33], i1163[34] )
  i1162.pressScale = new pc.Vec3( i1163[35], i1163[36], i1163[37] )
  i1162.pressRo = new pc.Vec3( i1163[38], i1163[39], i1163[40] )
  i1162.putInToSound = i1163[41]
  i1162.pickUpSound = i1163[42]
  i1162.putDownSound = i1163[43]
  request.r(i1163[44], i1163[45], 0, i1162, 'parent')
  i1162.limitDistance = i1163[46]
  i1162._isPressing = !!i1163[47]
  i1162._isMoveByDragg = !!i1163[48]
  i1162.sortingLayerPress = i1163[49]
  i1162._offSetDrag = new pc.Vec2( i1163[50], i1163[51] )
  var i1175 = i1163[52]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(i1175[i + 0]);
  }
  i1162.liSprRendDefaultOrderLayer = i1174
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1183 = data
  i1182.bodyType = i1183[0]
  request.r(i1183[1], i1183[2], 0, i1182, 'material')
  i1182.simulated = !!i1183[3]
  i1182.useAutoMass = !!i1183[4]
  i1182.mass = i1183[5]
  i1182.drag = i1183[6]
  i1182.angularDrag = i1183[7]
  i1182.gravityScale = i1183[8]
  i1182.collisionDetectionMode = i1183[9]
  i1182.sleepMode = i1183[10]
  i1182.constraints = i1183[11]
  return i1182
}

Deserializers["SkewerMouseEvent"] = function (request, data, root) {
  var i1184 = root || request.c( 'SkewerMouseEvent' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'skewer')
  return i1184
}

Deserializers["Shipper"] = function (request, data, root) {
  var i1186 = root || request.c( 'Shipper' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'animOrderAppear')
  request.r(i1187[2], i1187[3], 0, i1186, 'animShipperSmall')
  request.r(i1187[4], i1187[5], 0, i1186, 'parentSpawnItem')
  request.r(i1187[6], i1187[7], 0, i1186, 'cover')
  request.r(i1187[8], i1187[9], 0, i1186, 'itemOrderPrefab')
  request.r(i1187[10], i1187[11], 0, i1186, 'sliderTimer')
  request.r(i1187[12], i1187[13], 0, i1186, 'textTimer')
  request.r(i1187[14], i1187[15], 0, i1186, 'posAppear')
  request.r(i1187[16], i1187[17], 0, i1186, 'posDriveTo')
  request.r(i1187[18], i1187[19], 0, i1186, 'posDriveAway')
  request.r(i1187[20], i1187[21], 0, i1186, 'emotionHappy')
  request.r(i1187[22], i1187[23], 0, i1186, 'emotionAngry')
  var i1189 = i1187[24]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('ItemOrder')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1186.itemOrders = i1188
  request.r(i1187[25], i1187[26], 0, i1186, 'levelCtr')
  i1186.isCompletedOrder = !!i1187[27]
  return i1186
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1193 = data
  i1192.m_Spacing = i1193[0]
  i1192.m_ChildForceExpandWidth = !!i1193[1]
  i1192.m_ChildForceExpandHeight = !!i1193[2]
  i1192.m_ChildControlWidth = !!i1193[3]
  i1192.m_ChildControlHeight = !!i1193[4]
  i1192.m_ChildScaleWidth = !!i1193[5]
  i1192.m_ChildScaleHeight = !!i1193[6]
  i1192.m_ReverseArrangement = !!i1193[7]
  i1192.m_Padding = UnityEngine.RectOffset.FromPaddings(i1193[8], i1193[9], i1193[10], i1193[11])
  i1192.m_ChildAlignment = i1193[12]
  return i1192
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.UI.Button' )
  var i1195 = data
  i1194.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1195[0], i1194.m_OnClick)
  i1194.m_Navigation = request.d('UnityEngine.UI.Navigation', i1195[1], i1194.m_Navigation)
  i1194.m_Transition = i1195[2]
  i1194.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1195[3], i1194.m_Colors)
  i1194.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1195[4], i1194.m_SpriteState)
  i1194.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1195[5], i1194.m_AnimationTriggers)
  i1194.m_Interactable = !!i1195[6]
  request.r(i1195[7], i1195[8], 0, i1194, 'm_TargetGraphic')
  return i1194
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1197 = data
  i1196.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1197[0], i1196.m_PersistentCalls)
  return i1196
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'm_ObjectArgument')
  i1198.m_ObjectArgumentAssemblyTypeName = i1199[2]
  i1198.m_IntArgument = i1199[3]
  i1198.m_FloatArgument = i1199[4]
  i1198.m_StringArgument = i1199[5]
  i1198.m_BoolArgument = !!i1199[6]
  return i1198
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1201 = data
  i1200.m_IgnoreReversedGraphics = !!i1201[0]
  i1200.m_BlockingObjects = i1201[1]
  i1200.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1201[2] )
  return i1200
}

Deserializers["ItemOrder"] = function (request, data, root) {
  var i1202 = root || request.c( 'ItemOrder' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'bg')
  request.r(i1203[2], i1203[3], 0, i1202, 'normalBg')
  request.r(i1203[4], i1203[5], 0, i1202, 'saleBg')
  request.r(i1203[6], i1203[7], 0, i1202, 'iconSkewer')
  request.r(i1203[8], i1203[9], 0, i1202, 'iconCompleted')
  request.r(i1203[10], i1203[11], 0, i1202, 'shipper')
  i1202.idSkewer = i1203[12]
  request.r(i1203[13], i1203[14], 0, i1202, 'level')
  i1202.isDone = !!i1203[15]
  i1202.isSaleItem = !!i1203[16]
  return i1202
}

Deserializers["PlateCompleted"] = function (request, data, root) {
  var i1204 = root || request.c( 'PlateCompleted' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'sprPlate')
  var i1207 = i1205[2]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 1, i1206, '')
  }
  i1204.posMoveInCompletedSkewers = i1206
  request.r(i1205[3], i1205[4], 0, i1204, 'vfxStar')
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'clip')
  request.r(i1209[2], i1209[3], 0, i1208, 'outputAudioMixerGroup')
  i1208.playOnAwake = !!i1209[4]
  i1208.loop = !!i1209[5]
  i1208.time = i1209[6]
  i1208.volume = i1209[7]
  i1208.pitch = i1209[8]
  i1208.enabled = !!i1209[9]
  return i1208
}

Deserializers["EpicToonFX.ETFXLightFade"] = function (request, data, root) {
  var i1210 = root || request.c( 'EpicToonFX.ETFXLightFade' )
  var i1211 = data
  i1210.life = i1211[0]
  i1210.killAfterLife = !!i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1213 = data
  i1212.enabled = !!i1213[0]
  i1212.type = i1213[1]
  i1212.color = new pc.Color(i1213[2], i1213[3], i1213[4], i1213[5])
  i1212.cullingMask = i1213[6]
  i1212.intensity = i1213[7]
  i1212.range = i1213[8]
  i1212.spotAngle = i1213[9]
  i1212.shadows = i1213[10]
  i1212.shadowNormalBias = i1213[11]
  i1212.shadowBias = i1213[12]
  i1212.shadowStrength = i1213[13]
  i1212.shadowResolution = i1213[14]
  i1212.lightmapBakeType = i1213[15]
  i1212.renderMode = i1213[16]
  request.r(i1213[17], i1213[18], 0, i1212, 'cookie')
  i1212.cookieSize = i1213[19]
  return i1212
}

Deserializers["Popup.PopupSystem"] = function (request, data, root) {
  var i1214 = root || request.c( 'Popup.PopupSystem' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'popupCamera')
  request.r(i1215[2], i1215[3], 0, i1214, 'bgEffect')
  request.r(i1215[4], i1215[5], 0, i1214, 'backBlocker')
  request.r(i1215[6], i1215[7], 0, i1214, 'rootTransform')
  request.r(i1215[8], i1215[9], 0, i1214, 'addOnTransform')
  var i1217 = i1215[10]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('Popup.PopupSystem+PopupTypePrefabPair')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('Popup.PopupSystem+PopupTypePrefabPair', i1217[i + 0]));
  }
  i1214.popupList = i1216
  i1214.testPopup = i1215[11]
  return i1214
}

Deserializers["Popup.PopupSystem+PopupTypePrefabPair"] = function (request, data, root) {
  var i1220 = root || request.c( 'Popup.PopupSystem+PopupTypePrefabPair' )
  var i1221 = data
  i1220.type = i1221[0]
  request.r(i1221[1], i1221[2], 0, i1220, 'prefab')
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1223 = data
  i1222.enabled = !!i1223[0]
  i1222.aspect = i1223[1]
  i1222.orthographic = !!i1223[2]
  i1222.orthographicSize = i1223[3]
  i1222.backgroundColor = new pc.Color(i1223[4], i1223[5], i1223[6], i1223[7])
  i1222.nearClipPlane = i1223[8]
  i1222.farClipPlane = i1223[9]
  i1222.fieldOfView = i1223[10]
  i1222.depth = i1223[11]
  i1222.clearFlags = i1223[12]
  i1222.cullingMask = i1223[13]
  i1222.rect = i1223[14]
  request.r(i1223[15], i1223[16], 0, i1222, 'targetTexture')
  i1222.usePhysicalProperties = !!i1223[17]
  i1222.focalLength = i1223[18]
  i1222.sensorSize = new pc.Vec2( i1223[19], i1223[20] )
  i1222.lensShift = new pc.Vec2( i1223[21], i1223[22] )
  i1222.gateFit = i1223[23]
  i1222.commandBufferCount = i1223[24]
  i1222.cameraType = i1223[25]
  return i1222
}

Deserializers["PopupDarkEffect"] = function (request, data, root) {
  var i1224 = root || request.c( 'PopupDarkEffect' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'image')
  i1224.enabledColor = new pc.Color(i1225[2], i1225[3], i1225[4], i1225[5])
  i1224.disabledColor = new pc.Color(i1225[6], i1225[7], i1225[8], i1225[9])
  i1224.enabledDuration = i1225[10]
  i1224.disabledDuration = i1225[11]
  return i1224
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1227 = data
  i1226.m_UiScaleMode = i1227[0]
  i1226.m_ReferencePixelsPerUnit = i1227[1]
  i1226.m_ScaleFactor = i1227[2]
  i1226.m_ReferenceResolution = new pc.Vec2( i1227[3], i1227[4] )
  i1226.m_ScreenMatchMode = i1227[5]
  i1226.m_MatchWidthOrHeight = i1227[6]
  i1226.m_PhysicalUnit = i1227[7]
  i1226.m_FallbackScreenDPI = i1227[8]
  i1226.m_DefaultSpriteDPI = i1227[9]
  i1226.m_DynamicPixelsPerUnit = i1227[10]
  i1226.m_PresetInfoIsWorld = !!i1227[11]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1229 = data
  i1228.m_Alpha = i1229[0]
  i1228.m_Interactable = !!i1229[1]
  i1228.m_BlocksRaycasts = !!i1229[2]
  i1228.m_IgnoreParentGroups = !!i1229[3]
  i1228.enabled = !!i1229[4]
  return i1228
}

Deserializers["PopupLiteMessage"] = function (request, data, root) {
  var i1230 = root || request.c( 'PopupLiteMessage' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'messageText')
  i1230.showDuration = i1231[2]
  i1230.fadeOutDuration = i1231[3]
  i1230.info = request.d('CurrencyInfo', i1231[4], i1230.info)
  i1230.cancelable = !!i1231[5]
  return i1230
}

Deserializers["CurrencyInfo"] = function (request, data, root) {
  var i1232 = root || request.c( 'CurrencyInfo' )
  var i1233 = data
  i1232.showCurrency = !!i1233[0]
  i1232.showSetting = !!i1233[1]
  i1232.showMoreGem = !!i1233[2]
  i1232.showMoreCoin = !!i1233[3]
  return i1232
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1235 = data
  i1234.m_EffectColor = new pc.Color(i1235[0], i1235[1], i1235[2], i1235[3])
  i1234.m_EffectDistance = new pc.Vec2( i1235[4], i1235[5] )
  i1234.m_UseGraphicAlpha = !!i1235[6]
  return i1234
}

Deserializers["PopupBlurEffect"] = function (request, data, root) {
  var i1236 = root || request.c( 'PopupBlurEffect' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'image')
  request.r(i1237[2], i1237[3], 0, i1236, 'material')
  i1236.enabledDuration = i1237[4]
  i1236.disabledDuration = i1237[5]
  return i1236
}

Deserializers["Popup.BlockingImage"] = function (request, data, root) {
  var i1238 = root || request.c( 'Popup.BlockingImage' )
  var i1239 = data
  return i1238
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1241 = data
  request.r(i1241[0], i1241[1], 0, i1240, 'm_Texture')
  i1240.m_UVRect = UnityEngine.Rect.MinMaxRect(i1241[2], i1241[3], i1241[4], i1241[5])
  request.r(i1241[6], i1241[7], 0, i1240, 'm_Material')
  i1240.m_Maskable = !!i1241[8]
  i1240.m_Color = new pc.Color(i1241[9], i1241[10], i1241[11], i1241[12])
  i1240.m_RaycastTarget = !!i1241[13]
  i1240.m_RaycastPadding = new pc.Vec4( i1241[14], i1241[15], i1241[16], i1241[17] )
  return i1240
}

Deserializers["PopupSample1"] = function (request, data, root) {
  var i1242 = root || request.c( 'PopupSample1' )
  var i1243 = data
  i1242.info = request.d('CurrencyInfo', i1243[0], i1242.info)
  i1242.cancelable = !!i1243[1]
  return i1242
}

Deserializers["PopupSample2"] = function (request, data, root) {
  var i1244 = root || request.c( 'PopupSample2' )
  var i1245 = data
  i1244.info = request.d('CurrencyInfo', i1245[0], i1244.info)
  i1244.cancelable = !!i1245[1]
  return i1244
}

Deserializers["RestUI"] = function (request, data, root) {
  var i1246 = root || request.c( 'RestUI' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'canvas')
  return i1246
}

Deserializers["PopupGameWin"] = function (request, data, root) {
  var i1248 = root || request.c( 'PopupGameWin' )
  var i1249 = data
  request.r(i1249[0], i1249[1], 0, i1248, 'comboCoinText')
  i1248.comboCoinBonus = i1249[2]
  request.r(i1249[3], i1249[4], 0, i1248, 'animIcon')
  i1248.info = request.d('CurrencyInfo', i1249[5], i1248.info)
  i1248.cancelable = !!i1249[6]
  request.r(i1249[7], i1249[8], 0, i1248, 'ribonWin')
  request.r(i1249[9], i1249[10], 0, i1248, 'comboWrap')
  request.r(i1249[11], i1249[12], 0, i1248, 'coinBounusNormalText')
  request.r(i1249[13], i1249[14], 0, i1248, 'coinBonusAdsText')
  i1248.coinBonusNormal = i1249[15]
  i1248.coinBonusAds = i1249[16]
  request.r(i1249[17], i1249[18], 0, i1248, 'btnNext')
  request.r(i1249[19], i1249[20], 0, i1248, 'btnAddCoinAds')
  request.r(i1249[21], i1249[22], 0, i1248, 'btnHome')
  request.r(i1249[23], i1249[24], 0, i1248, 'btnAddHeart')
  request.r(i1249[25], i1249[26], 0, i1248, 'btnAddCoin')
  request.r(i1249[27], i1249[28], 0, i1248, 'anim')
  request.r(i1249[29], i1249[30], 0, i1248, 'particalMoney')
  request.r(i1249[31], i1249[32], 0, i1248, 'textHeart')
  request.r(i1249[33], i1249[34], 0, i1248, 'textTimer')
  request.r(i1249[35], i1249[36], 0, i1248, 'textCoin')
  request.r(i1249[37], i1249[38], 0, i1248, 'iconHeartInf')
  return i1248
}

Deserializers["CoinControl"] = function (request, data, root) {
  var i1250 = root || request.c( 'CoinControl' )
  var i1251 = data
  i1250.coinNo = i1251[0]
  request.r(i1251[1], i1251[2], 0, i1250, 'coinText')
  var i1253 = i1251[3]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 2, i1252, '')
  }
  i1250.individualCoins = i1252
  request.r(i1251[4], i1251[5], 0, i1250, 'iconCoin')
  request.r(i1251[6], i1251[7], 0, i1250, 'lightAcross')
  i1250.temp = new pc.Vec3( i1251[8], i1251[9], i1251[10] )
  return i1250
}

Deserializers["SafeArea"] = function (request, data, root) {
  var i1254 = root || request.c( 'SafeArea' )
  var i1255 = data
  return i1254
}

Deserializers["Coffee.UIExtensions.UIParticle"] = function (request, data, root) {
  var i1256 = root || request.c( 'Coffee.UIExtensions.UIParticle' )
  var i1257 = data
  i1256.m_IsTrail = !!i1257[0]
  i1256.m_IgnoreCanvasScaler = !!i1257[1]
  i1256.m_AbsoluteMode = !!i1257[2]
  i1256.m_Scale3D = new pc.Vec3( i1257[3], i1257[4], i1257[5] )
  var i1259 = i1257[6]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Coffee.UIExtensions.AnimatableProperty', i1259[i + 0]) );
  }
  i1256.m_AnimatableProperties = i1258
  var i1261 = i1257[7]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 1, i1260, '')
  }
  i1256.m_Particles = i1260
  i1256.m_MeshSharing = i1257[8]
  i1256.m_GroupId = i1257[9]
  i1256.m_GroupMaxId = i1257[10]
  i1256.m_PositionMode = i1257[11]
  i1256.m_AutoScaling = !!i1257[12]
  i1256.m_AutoScalingMode = i1257[13]
  i1256.m_UseCustomView = !!i1257[14]
  i1256.m_CustomViewSize = i1257[15]
  i1256.m_TimeScaleMultiplier = i1257[16]
  request.r(i1257[17], i1257[18], 0, i1256, 'm_Material')
  i1256.m_Maskable = !!i1257[19]
  i1256.m_Color = new pc.Color(i1257[20], i1257[21], i1257[22], i1257[23])
  i1256.m_RaycastTarget = !!i1257[24]
  i1256.m_RaycastPadding = new pc.Vec4( i1257[25], i1257[26], i1257[27], i1257[28] )
  return i1256
}

Deserializers["Coffee.UIExtensions.AnimatableProperty"] = function (request, data, root) {
  var i1264 = root || request.c( 'Coffee.UIExtensions.AnimatableProperty' )
  var i1265 = data
  i1264.m_Name = i1265[0]
  i1264.m_Type = i1265[1]
  return i1264
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1268 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'skeletonDataAsset')
  request.r(i1269[2], i1269[3], 0, i1268, 'additiveMaterial')
  request.r(i1269[4], i1269[5], 0, i1268, 'multiplyMaterial')
  request.r(i1269[6], i1269[7], 0, i1268, 'screenMaterial')
  i1268.initialSkinName = i1269[8]
  i1268.initialFlipX = !!i1269[9]
  i1268.initialFlipY = !!i1269[10]
  i1268.startingAnimation = i1269[11]
  i1268.startingLoop = !!i1269[12]
  i1268.timeScale = i1269[13]
  i1268.freeze = !!i1269[14]
  i1268.layoutScaleMode = i1269[15]
  i1268.updateWhenInvisible = i1269[16]
  i1268.allowMultipleCanvasRenderers = !!i1269[17]
  var i1271 = i1269[18]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1268.canvasRenderers = i1270
  i1268.enableSeparatorSlots = !!i1269[19]
  i1268.updateSeparatorPartLocation = !!i1269[20]
  i1268.updateSeparatorPartScale = !!i1269[21]
  i1268.disableMeshAssignmentOnOverride = !!i1269[22]
  i1268.m_SkeletonColor = new pc.Color(i1269[23], i1269[24], i1269[25], i1269[26])
  i1268.referenceSize = new pc.Vec2( i1269[27], i1269[28] )
  i1268.pivotOffset = new pc.Vec2( i1269[29], i1269[30] )
  i1268.referenceScale = i1269[31]
  i1268.layoutScale = i1269[32]
  i1268.rectTransformSize = new pc.Vec2( i1269[33], i1269[34] )
  i1268.editReferenceRect = !!i1269[35]
  var i1273 = i1269[36]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1268.separatorSlotNames = i1272
  var i1275 = i1269[37]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 1, i1274, '')
  }
  i1268.separatorParts = i1274
  i1268.physicsPositionInheritanceFactor = new pc.Vec2( i1269[38], i1269[39] )
  i1268.physicsRotationInheritanceFactor = i1269[40]
  request.r(i1269[41], i1269[42], 0, i1268, 'physicsMovementRelativeTo')
  i1268.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1269[43], i1268.meshGenerator)
  i1268.updateTiming = i1269[44]
  i1268.unscaledTime = !!i1269[45]
  request.r(i1269[46], i1269[47], 0, i1268, 'm_Material')
  i1268.m_Maskable = !!i1269[48]
  i1268.m_Color = new pc.Color(i1269[49], i1269[50], i1269[51], i1269[52])
  i1268.m_RaycastTarget = !!i1269[53]
  i1268.m_RaycastPadding = new pc.Vec4( i1269[54], i1269[55], i1269[56], i1269[57] )
  return i1268
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1280 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1281 = data
  i1280.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1281[0], i1280.settings)
  return i1280
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1282 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1283 = data
  i1282.useClipping = !!i1283[0]
  i1282.zSpacing = i1283[1]
  i1282.tintBlack = !!i1283[2]
  i1282.canvasGroupCompatible = !!i1283[3]
  i1282.pmaVertexColors = !!i1283[4]
  i1282.addNormals = !!i1283[5]
  i1282.calculateTangents = !!i1283[6]
  i1282.immutableTriangles = !!i1283[7]
  return i1282
}

Deserializers["PopupGameLose"] = function (request, data, root) {
  var i1284 = root || request.c( 'PopupGameLose' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'animIcon')
  i1284.info = request.d('CurrencyInfo', i1285[2], i1284.info)
  i1284.cancelable = !!i1285[3]
  request.r(i1285[4], i1285[5], 0, i1284, 'ribonLose')
  request.r(i1285[6], i1285[7], 0, i1284, 'btnContinue')
  request.r(i1285[8], i1285[9], 0, i1284, 'anim')
  request.r(i1285[10], i1285[11], 0, i1284, 'textHeart')
  request.r(i1285[12], i1285[13], 0, i1284, 'textTimer')
  request.r(i1285[14], i1285[15], 0, i1284, 'textCoin')
  request.r(i1285[16], i1285[17], 0, i1284, 'iconHeartInf')
  return i1284
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1287 = data
  i1286.m_EffectColor = new pc.Color(i1287[0], i1287[1], i1287[2], i1287[3])
  i1286.m_EffectDistance = new pc.Vec2( i1287[4], i1287[5] )
  i1286.m_UseGraphicAlpha = !!i1287[6]
  return i1286
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1288 = root || request.c( 'AudioManager' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'audioClipTable')
  request.r(i1289[2], i1289[3], 0, i1288, 'effectsSource')
  request.r(i1289[4], i1289[5], 0, i1288, 'musicSource')
  request.r(i1289[6], i1289[7], 0, i1288, 'effectsSource2')
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.index = i1291[1]
  i1290.startup = !!i1291[2]
  return i1290
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1293 = data
  request.r(i1293[0], i1293[1], 0, i1292, 'm_FirstSelected')
  i1292.m_sendNavigationEvents = !!i1293[2]
  i1292.m_DragThreshold = i1293[3]
  return i1292
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1295 = data
  i1294.m_HorizontalAxis = i1295[0]
  i1294.m_VerticalAxis = i1295[1]
  i1294.m_SubmitButton = i1295[2]
  i1294.m_CancelButton = i1295[3]
  i1294.m_InputActionsPerSecond = i1295[4]
  i1294.m_RepeatDelay = i1295[5]
  i1294.m_ForceModuleActive = !!i1295[6]
  i1294.m_SendPointerHoverToParent = !!i1295[7]
  return i1294
}

Deserializers["PlayerDataPreview"] = function (request, data, root) {
  var i1296 = root || request.c( 'PlayerDataPreview' )
  var i1297 = data
  i1296.playerData = request.d('PlayerData', i1297[0], i1296.playerData)
  i1296.level = i1297[1]
  return i1296
}

Deserializers["PlayerData"] = function (request, data, root) {
  var i1298 = root || request.c( 'PlayerData' )
  var i1299 = data
  i1298.languageType = i1299[0]
  i1298.localFirstActiveTime = i1299[1]
  i1298.localLastActiveTime = i1299[2]
  i1298.lastHeartRecoveryTime = i1299[3]
  i1298.lastClickGetCoinDailyShop = i1299[4]
  i1298.lastClickGetCoinDailyReward = i1299[5]
  i1298.timeToNextHeart = i1299[6]
  i1298.enterGameTimeCount = i1299[7]
  i1298.coinCount = i1299[8]
  i1298.gemCount = i1299[9]
  i1298.curHeart = i1299[10]
  i1298.maxHeart = i1299[11]
  i1298.numOfRemoveMatch3Bts = i1299[12]
  i1298.numOfSwapBts = i1299[13]
  i1298.numOfFreezeTimeBts = i1299[14]
  i1298.numOfBreakIceBts = i1299[15]
  i1298.timeToAddHeart = i1299[16]
  i1298.noAds = !!i1299[17]
  i1298.vip = !!i1299[18]
  i1298.removeAds1dExpiredTime = i1299[19]
  i1298.namePlayer = i1299[20]
  i1298.avatarPLayer = i1299[21]
  i1298.level = i1299[22]
  i1298.fakeIndexLevel = i1299[23]
  i1298.hasInfiniteHearts = !!i1299[24]
  i1298.infiniteHeartsExpireTime = i1299[25]
  i1298.numSkipAds = i1299[26]
  i1298.curPiggyBankCoin = i1299[27]
  i1298.maxPiggyBankCoin = i1299[28]
  i1298.coinTier1PiggyBank = i1299[29]
  i1298.lastClaimedRewardId = i1299[30]
  i1298.checkGetFreeCoin = !!i1299[31]
  i1298.currentDailyBonusDay = i1299[32]
  i1298.lastReceiveDailyBonusTime = i1299[33]
  var i1301 = i1299[34]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(i1301[i + 0]);
  }
  i1298.coinShop = i1300
  var i1303 = i1299[35]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('DailyRewardPlayerState')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('DailyRewardPlayerState', i1303[i + 0]));
  }
  i1298.dailyRewardStates = i1302
  i1298.gameData = request.d('GameData', i1299[36], i1298.gameData)
  i1298.tempData = request.d('TempData', i1299[37], i1298.tempData)
  return i1298
}

Deserializers["DailyRewardPlayerState"] = function (request, data, root) {
  var i1306 = root || request.c( 'DailyRewardPlayerState' )
  var i1307 = data
  i1306.rewardId = i1307[0]
  i1306.state = i1307[1]
  i1306.claimDate = request.d('System.DateTime', i1307[2], i1306.claimDate)
  return i1306
}

Deserializers["GameData"] = function (request, data, root) {
  var i1308 = root || request.c( 'GameData' )
  var i1309 = data
  i1308.musicState = !!i1309[0]
  i1308.soundState = !!i1309[1]
  i1308.vibrateState = !!i1309[2]
  return i1308
}

Deserializers["TempData"] = function (request, data, root) {
  var i1310 = root || request.c( 'TempData' )
  var i1311 = data
  i1310.rewardedVideoCount = i1311[0]
  i1310.lastTimeBBButonShowAd = i1311[1]
  i1310.winLevelCount = i1311[2]
  i1310.loseLevelCount = i1311[3]
  i1310.earnedGemCount = i1311[4]
  i1310.push_earnedGemCount_event = !!i1311[5]
  i1310.spentIAP = i1311[6]
  i1310.push_spentIAP_event = !!i1311[7]
  i1310.push_retention_day7 = !!i1311[8]
  i1310.push_retention_day5 = !!i1311[9]
  i1310.push_retention_day3 = !!i1311[10]
  i1310.push_firstIAP_event = !!i1311[11]
  return i1310
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1312 = root || request.c( 'UIManager' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 2, i1314, '')
  }
  i1312.screens = i1314
  request.r(i1313[1], i1313[2], 0, i1312, 'canvas')
  request.r(i1313[3], i1313[4], 0, i1312, 'camUI')
  request.r(i1313[5], i1313[6], 0, i1312, 'transition')
  return i1312
}

Deserializers["PlayScreen"] = function (request, data, root) {
  var i1318 = root || request.c( 'PlayScreen' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'curLevelCtrl')
  request.r(i1319[2], i1319[3], 0, i1318, 'processSlide')
  request.r(i1319[4], i1319[5], 0, i1318, 'processSliderBooster')
  request.r(i1319[6], i1319[7], 0, i1318, 'timerText')
  request.r(i1319[8], i1319[9], 0, i1318, 'levelText')
  request.r(i1319[10], i1319[11], 0, i1318, 'titleFreeBlock')
  request.r(i1319[12], i1319[13], 0, i1318, 'titleFillBlock')
  request.r(i1319[14], i1319[15], 0, i1318, 'textLv')
  request.r(i1319[16], i1319[17], 0, i1318, 'timerTextTMP')
  request.r(i1319[18], i1319[19], 0, i1318, 'settingBtn')
  request.r(i1319[20], i1319[21], 0, i1318, 'panelDark')
  request.r(i1319[22], i1319[23], 0, i1318, 'vfxFreezeScreen')
  request.r(i1319[24], i1319[25], 0, i1318, 'vfxLimitedTimeWarning')
  request.r(i1319[26], i1319[27], 0, i1318, 'animSuggest')
  i1318.revive = i1319[28]
  i1318.timeLimitLv = i1319[29]
  i1318.isCompletedBooster = !!i1319[30]
  i1318.isFreezeTime = !!i1319[31]
  i1318.hackBooster = !!i1319[32]
  i1318.isShowing = !!i1319[33]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'sharedMesh')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'additionalVertexStreams')
  i1322.enabled = !!i1323[2]
  request.r(i1323[3], i1323[4], 0, i1322, 'sharedMaterial')
  var i1325 = i1323[5]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 2, i1324, '')
  }
  i1322.sharedMaterials = i1324
  i1322.receiveShadows = !!i1323[6]
  i1322.shadowCastingMode = i1323[7]
  i1322.sortingLayerID = i1323[8]
  i1322.sortingOrder = i1323[9]
  i1322.lightmapIndex = i1323[10]
  i1322.lightmapSceneIndex = i1323[11]
  i1322.lightmapScaleOffset = new pc.Vec4( i1323[12], i1323[13], i1323[14], i1323[15] )
  i1322.lightProbeUsage = i1323[16]
  i1322.reflectionProbeUsage = i1323[17]
  return i1322
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1326 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1327 = data
  i1326.loop = !!i1327[0]
  i1326.timeScale = i1327[1]
  request.r(i1327[2], i1327[3], 0, i1326, 'skeletonDataAsset')
  i1326.initialSkinName = i1327[4]
  i1326.fixPrefabOverrideViaMeshFilter = i1327[5]
  i1326.initialFlipX = !!i1327[6]
  i1326.initialFlipY = !!i1327[7]
  i1326.updateWhenInvisible = i1327[8]
  i1326.zSpacing = i1327[9]
  i1326.useClipping = !!i1327[10]
  i1326.immutableTriangles = !!i1327[11]
  i1326.pmaVertexColors = !!i1327[12]
  i1326.clearStateOnDisable = !!i1327[13]
  i1326.tintBlack = !!i1327[14]
  i1326.singleSubmesh = !!i1327[15]
  i1326.fixDrawOrder = !!i1327[16]
  i1326.addNormals = !!i1327[17]
  i1326.calculateTangents = !!i1327[18]
  i1326.maskInteraction = i1327[19]
  i1326.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1327[20], i1326.maskMaterials)
  i1326.disableRenderingOnOverride = !!i1327[21]
  i1326.updateTiming = i1327[22]
  i1326.unscaledTime = !!i1327[23]
  i1326._animationName = i1327[24]
  var i1329 = i1327[25]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1326.separatorSlotNames = i1328
  i1326.physicsPositionInheritanceFactor = new pc.Vec2( i1327[26], i1327[27] )
  i1326.physicsRotationInheritanceFactor = i1327[28]
  request.r(i1327[29], i1327[30], 0, i1326, 'physicsMovementRelativeTo')
  return i1326
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1330 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 2, i1332, '')
  }
  i1330.materialsMaskDisabled = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 2, i1334, '')
  }
  i1330.materialsInsideMask = i1334
  var i1337 = i1331[2]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 2, i1336, '')
  }
  i1330.materialsOutsideMask = i1336
  return i1330
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1339 = data
  i1338.m_hasFontAssetChanged = !!i1339[0]
  request.r(i1339[1], i1339[2], 0, i1338, 'm_baseMaterial')
  i1338.m_maskOffset = new pc.Vec4( i1339[3], i1339[4], i1339[5], i1339[6] )
  i1338.m_text = i1339[7]
  i1338.m_isRightToLeft = !!i1339[8]
  request.r(i1339[9], i1339[10], 0, i1338, 'm_fontAsset')
  request.r(i1339[11], i1339[12], 0, i1338, 'm_sharedMaterial')
  var i1341 = i1339[13]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 2, i1340, '')
  }
  i1338.m_fontSharedMaterials = i1340
  request.r(i1339[14], i1339[15], 0, i1338, 'm_fontMaterial')
  var i1343 = i1339[16]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 2, i1342, '')
  }
  i1338.m_fontMaterials = i1342
  i1338.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1339[17], i1339[18], i1339[19], i1339[20])
  i1338.m_fontColor = new pc.Color(i1339[21], i1339[22], i1339[23], i1339[24])
  i1338.m_enableVertexGradient = !!i1339[25]
  i1338.m_colorMode = i1339[26]
  i1338.m_fontColorGradient = request.d('TMPro.VertexGradient', i1339[27], i1338.m_fontColorGradient)
  request.r(i1339[28], i1339[29], 0, i1338, 'm_fontColorGradientPreset')
  request.r(i1339[30], i1339[31], 0, i1338, 'm_spriteAsset')
  i1338.m_tintAllSprites = !!i1339[32]
  request.r(i1339[33], i1339[34], 0, i1338, 'm_StyleSheet')
  i1338.m_TextStyleHashCode = i1339[35]
  i1338.m_overrideHtmlColors = !!i1339[36]
  i1338.m_faceColor = UnityEngine.Color32.ConstructColor(i1339[37], i1339[38], i1339[39], i1339[40])
  i1338.m_fontSize = i1339[41]
  i1338.m_fontSizeBase = i1339[42]
  i1338.m_fontWeight = i1339[43]
  i1338.m_enableAutoSizing = !!i1339[44]
  i1338.m_fontSizeMin = i1339[45]
  i1338.m_fontSizeMax = i1339[46]
  i1338.m_fontStyle = i1339[47]
  i1338.m_HorizontalAlignment = i1339[48]
  i1338.m_VerticalAlignment = i1339[49]
  i1338.m_textAlignment = i1339[50]
  i1338.m_characterSpacing = i1339[51]
  i1338.m_wordSpacing = i1339[52]
  i1338.m_lineSpacing = i1339[53]
  i1338.m_lineSpacingMax = i1339[54]
  i1338.m_paragraphSpacing = i1339[55]
  i1338.m_charWidthMaxAdj = i1339[56]
  i1338.m_enableWordWrapping = !!i1339[57]
  i1338.m_wordWrappingRatios = i1339[58]
  i1338.m_overflowMode = i1339[59]
  request.r(i1339[60], i1339[61], 0, i1338, 'm_linkedTextComponent')
  request.r(i1339[62], i1339[63], 0, i1338, 'parentLinkedComponent')
  i1338.m_enableKerning = !!i1339[64]
  i1338.m_enableExtraPadding = !!i1339[65]
  i1338.checkPaddingRequired = !!i1339[66]
  i1338.m_isRichText = !!i1339[67]
  i1338.m_parseCtrlCharacters = !!i1339[68]
  i1338.m_isOrthographic = !!i1339[69]
  i1338.m_isCullingEnabled = !!i1339[70]
  i1338.m_horizontalMapping = i1339[71]
  i1338.m_verticalMapping = i1339[72]
  i1338.m_uvLineOffset = i1339[73]
  i1338.m_geometrySortingOrder = i1339[74]
  i1338.m_IsTextObjectScaleStatic = !!i1339[75]
  i1338.m_VertexBufferAutoSizeReduction = !!i1339[76]
  i1338.m_useMaxVisibleDescender = !!i1339[77]
  i1338.m_pageToDisplay = i1339[78]
  i1338.m_margin = new pc.Vec4( i1339[79], i1339[80], i1339[81], i1339[82] )
  i1338.m_isUsingLegacyAnimationComponent = !!i1339[83]
  i1338.m_isVolumetricText = !!i1339[84]
  request.r(i1339[85], i1339[86], 0, i1338, 'm_Material')
  i1338.m_Maskable = !!i1339[87]
  i1338.m_Color = new pc.Color(i1339[88], i1339[89], i1339[90], i1339[91])
  i1338.m_RaycastTarget = !!i1339[92]
  i1338.m_RaycastPadding = new pc.Vec4( i1339[93], i1339[94], i1339[95], i1339[96] )
  return i1338
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.VertexGradient' )
  var i1345 = data
  i1344.topLeft = new pc.Color(i1345[0], i1345[1], i1345[2], i1345[3])
  i1344.topRight = new pc.Color(i1345[4], i1345[5], i1345[6], i1345[7])
  i1344.bottomLeft = new pc.Color(i1345[8], i1345[9], i1345[10], i1345[11])
  i1344.bottomRight = new pc.Color(i1345[12], i1345[13], i1345[14], i1345[15])
  return i1344
}

Deserializers["LevelCtr"] = function (request, data, root) {
  var i1346 = root || request.c( 'LevelCtr' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'grillPrefab')
  request.r(i1347[2], i1347[3], 0, i1346, 'grillPrefab1')
  request.r(i1347[4], i1347[5], 0, i1346, 'shipperPrefab')
  request.r(i1347[6], i1347[7], 0, i1346, 'curShipper')
  request.r(i1347[8], i1347[9], 0, i1346, 'posSpawnShipper')
  request.r(i1347[10], i1347[11], 0, i1346, 'posAppear')
  request.r(i1347[12], i1347[13], 0, i1346, 'posDriveTo')
  request.r(i1347[14], i1347[15], 0, i1346, 'posDriveAway')
  var i1349 = i1347[16]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('PosGrillAtLv')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('PosGrillAtLv', i1349[i + 0]));
  }
  i1346.posGrills = i1348
  var i1351 = i1347[17]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1346.grills = i1350
  var i1353 = i1347[18]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1346.totalActiveSkewer = i1352
  var i1355 = i1347[19]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1346.onGrillSkewers = i1354
  var i1357 = i1347[20]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 1, i1356, '')
  }
  i1346.onPlateSkewers = i1356
  var i1359 = i1347[21]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1359.length; i += 2) {
  request.r(i1359[i + 0], i1359[i + 1], 1, i1358, '')
  }
  i1346.onFistPlatesSkewers = i1358
  request.r(i1347[22], i1347[23], 0, i1346, 'plateCompletedPrefab')
  request.r(i1347[24], i1347[25], 0, i1346, 'posPlateWinAppear')
  request.r(i1347[26], i1347[27], 0, i1346, 'posPlateWinOut')
  i1346.easeCompletedSkewerMove = new pc.AnimationCurve( { keys_flow: i1347[28] } )
  i1346.numOfSkewer = i1347[29]
  i1346.numOfCompletedSkewer = i1347[30]
  i1346.isFinishInit = !!i1347[31]
  i1346.isHandlingBooster = !!i1347[32]
  i1346.isFinishLv = !!i1347[33]
  i1346.levelDatas = request.d('LevelData', i1347[34], i1346.levelDatas)
  i1346.orderShipper = i1347[35]
  i1346.doneOrders = i1347[36]
  i1346.stepShipper = i1347[37]
  i1346.isSuggestting = !!i1347[38]
  var i1361 = i1347[39]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1361.length; i += 2) {
  request.r(i1361[i + 0], i1361[i + 1], 1, i1360, '')
  }
  i1346.suggestSkewers = i1360
  request.r(i1347[40], i1347[41], 0, i1346, 'darkPanel')
  request.r(i1347[42], i1347[43], 0, i1346, 'animRemoveIce')
  request.r(i1347[44], i1347[45], 0, i1346, 'boosterCtr')
  var i1363 = i1347[46]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 1, i1362, '')
  }
  i1346.hightLightSkewers = i1362
  request.r(i1347[47], i1347[48], 0, i1346, 'choosenSkewer')
  request.r(i1347[49], i1347[50], 0, i1346, 'animHand')
  request.r(i1347[51], i1347[52], 0, i1346, 'parentGrill')
  request.r(i1347[53], i1347[54], 0, i1346, 'curSkewerSwapMoving')
  i1346.isChoosingSkewerMoving = !!i1347[55]
  request.r(i1347[56], i1347[57], 0, i1346, 'comboVfx')
  i1346.maxCombo = i1347[58]
  i1346.typeSkewerCompleted = i1347[59]
  request.r(i1347[60], i1347[61], 0, i1346, 'animSwap1')
  request.r(i1347[62], i1347[63], 0, i1346, 'animSwap2')
  request.r(i1347[64], i1347[65], 0, i1346, 'prefaVfxSwap')
  request.r(i1347[66], i1347[67], 0, i1346, 'holderVfx')
  request.r(i1347[68], i1347[69], 0, i1346, 'effectShockWave')
  return i1346
}

Deserializers["PosGrillAtLv"] = function (request, data, root) {
  var i1366 = root || request.c( 'PosGrillAtLv' )
  var i1367 = data
  i1366.rowIndex = i1367[0]
  i1366.colIndex = i1367[1]
  request.r(i1367[2], i1367[3], 0, i1366, 'pos')
  return i1366
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1370 = root || request.c( 'LevelData' )
  var i1371 = data
  i1370.levelID = i1371[0]
  i1370.diff = i1371[1]
  i1370.time = i1371[2]
  i1370.order = i1371[3]
  i1370.width = i1371[4]
  i1370.height = i1371[5]
  var i1373 = i1371[6]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.add(i1373[i + 0]);
  }
  i1370.skewerDataType = i1372
  var i1375 = i1371[7]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('GrillData')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('GrillData', i1375[i + 0]));
  }
  i1370.grills = i1374
  return i1370
}

Deserializers["LevelDataCtrl"] = function (request, data, root) {
  var i1378 = root || request.c( 'LevelDataCtrl' )
  var i1379 = data
  i1378.levelDatas = request.d('LevelDatas', i1379[0], i1378.levelDatas)
  i1378.curLevel = request.d('LevelData', i1379[1], i1378.curLevel)
  i1378._currentLevelIDToLoad = i1379[2]
  return i1378
}

Deserializers["LevelDatas"] = function (request, data, root) {
  var i1380 = root || request.c( 'LevelDatas' )
  var i1381 = data
  var i1383 = i1381[0]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('LevelData')))
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.add(request.d('LevelData', i1383[i + 0]));
  }
  i1380.levelDatas = i1382
  return i1380
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1386 = root || request.c( 'GameManager' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'uiManager')
  i1386.level = i1387[2]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1389 = data
  i1388.ambientIntensity = i1389[0]
  i1388.reflectionIntensity = i1389[1]
  i1388.ambientMode = i1389[2]
  i1388.ambientLight = new pc.Color(i1389[3], i1389[4], i1389[5], i1389[6])
  i1388.ambientSkyColor = new pc.Color(i1389[7], i1389[8], i1389[9], i1389[10])
  i1388.ambientGroundColor = new pc.Color(i1389[11], i1389[12], i1389[13], i1389[14])
  i1388.ambientEquatorColor = new pc.Color(i1389[15], i1389[16], i1389[17], i1389[18])
  i1388.fogColor = new pc.Color(i1389[19], i1389[20], i1389[21], i1389[22])
  i1388.fogEndDistance = i1389[23]
  i1388.fogStartDistance = i1389[24]
  i1388.fogDensity = i1389[25]
  i1388.fog = !!i1389[26]
  request.r(i1389[27], i1389[28], 0, i1388, 'skybox')
  i1388.fogMode = i1389[29]
  var i1391 = i1389[30]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1391[i + 0]) );
  }
  i1388.lightmaps = i1390
  i1388.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1389[31], i1388.lightProbes)
  i1388.lightmapsMode = i1389[32]
  i1388.mixedBakeMode = i1389[33]
  i1388.environmentLightingMode = i1389[34]
  i1388.ambientProbe = new pc.SphericalHarmonicsL2(i1389[35])
  i1388.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1389[36])
  i1388.useReferenceAmbientProbe = !!i1389[37]
  request.r(i1389[38], i1389[39], 0, i1388, 'customReflection')
  request.r(i1389[40], i1389[41], 0, i1388, 'defaultReflection')
  i1388.defaultReflectionMode = i1389[42]
  i1388.defaultReflectionResolution = i1389[43]
  i1388.sunLightObjectId = i1389[44]
  i1388.pixelLightCount = i1389[45]
  i1388.defaultReflectionHDR = !!i1389[46]
  i1388.hasLightDataAsset = !!i1389[47]
  i1388.hasManualGenerate = !!i1389[48]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'lightmapColor')
  request.r(i1395[2], i1395[3], 0, i1394, 'lightmapDirection')
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1396 = root || new UnityEngine.LightProbes()
  var i1397 = data
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1405 = data
  var i1407 = i1405[0]
  var i1406 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1407[i + 0]));
  }
  i1404.ShaderCompilationErrors = i1406
  i1404.name = i1405[1]
  i1404.guid = i1405[2]
  var i1409 = i1405[3]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( i1409[i + 0] );
  }
  i1404.shaderDefinedKeywords = i1408
  var i1411 = i1405[4]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1411[i + 0]) );
  }
  i1404.passes = i1410
  var i1413 = i1405[5]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1413[i + 0]) );
  }
  i1404.usePasses = i1412
  var i1415 = i1405[6]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1415[i + 0]) );
  }
  i1404.defaultParameterValues = i1414
  request.r(i1405[7], i1405[8], 0, i1404, 'unityFallbackShader')
  i1404.readDepth = !!i1405[9]
  i1404.isCreatedByShaderGraph = !!i1405[10]
  i1404.compiled = !!i1405[11]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1419 = data
  i1418.shaderName = i1419[0]
  i1418.errorMessage = i1419[1]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1422 = root || new pc.UnityShaderPass()
  var i1423 = data
  i1422.id = i1423[0]
  i1422.subShaderIndex = i1423[1]
  i1422.name = i1423[2]
  i1422.passType = i1423[3]
  i1422.grabPassTextureName = i1423[4]
  i1422.usePass = !!i1423[5]
  i1422.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[6], i1422.zTest)
  i1422.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[7], i1422.zWrite)
  i1422.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[8], i1422.culling)
  i1422.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1423[9], i1422.blending)
  i1422.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1423[10], i1422.alphaBlending)
  i1422.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[11], i1422.colorWriteMask)
  i1422.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[12], i1422.offsetUnits)
  i1422.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[13], i1422.offsetFactor)
  i1422.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[14], i1422.stencilRef)
  i1422.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[15], i1422.stencilReadMask)
  i1422.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1423[16], i1422.stencilWriteMask)
  i1422.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1423[17], i1422.stencilOp)
  i1422.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1423[18], i1422.stencilOpFront)
  i1422.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1423[19], i1422.stencilOpBack)
  var i1425 = i1423[20]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1425[i + 0]) );
  }
  i1422.tags = i1424
  var i1427 = i1423[21]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( i1427[i + 0] );
  }
  i1422.passDefinedKeywords = i1426
  var i1429 = i1423[22]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1429[i + 0]) );
  }
  i1422.passDefinedKeywordGroups = i1428
  var i1431 = i1423[23]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1431[i + 0]) );
  }
  i1422.variants = i1430
  var i1433 = i1423[24]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1433[i + 0]) );
  }
  i1422.excludedVariants = i1432
  i1422.hasDepthReader = !!i1423[25]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1435 = data
  i1434.val = i1435[0]
  i1434.name = i1435[1]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1437 = data
  i1436.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[0], i1436.src)
  i1436.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[1], i1436.dst)
  i1436.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1437[2], i1436.op)
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1439 = data
  i1438.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[0], i1438.pass)
  i1438.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[1], i1438.fail)
  i1438.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[2], i1438.zFail)
  i1438.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1439[3], i1438.comp)
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1443 = data
  i1442.name = i1443[0]
  i1442.value = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( i1449[i + 0] );
  }
  i1446.keywords = i1448
  i1446.hasDiscard = !!i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1453 = data
  i1452.passId = i1453[0]
  i1452.subShaderIndex = i1453[1]
  var i1455 = i1453[2]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( i1455[i + 0] );
  }
  i1452.keywords = i1454
  i1452.vertexProgram = i1453[3]
  i1452.fragmentProgram = i1453[4]
  i1452.exportedForWebGl2 = !!i1453[5]
  i1452.readDepth = !!i1453[6]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1459 = data
  request.r(i1459[0], i1459[1], 0, i1458, 'shader')
  i1458.pass = i1459[2]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1463 = data
  i1462.name = i1463[0]
  i1462.type = i1463[1]
  i1462.value = new pc.Vec4( i1463[2], i1463[3], i1463[4], i1463[5] )
  i1462.textureValue = i1463[6]
  i1462.shaderPropertyFlag = i1463[7]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1465 = data
  i1464.name = i1465[0]
  request.r(i1465[1], i1465[2], 0, i1464, 'texture')
  i1464.aabb = i1465[3]
  i1464.vertices = i1465[4]
  i1464.triangles = i1465[5]
  i1464.textureRect = UnityEngine.Rect.MinMaxRect(i1465[6], i1465[7], i1465[8], i1465[9])
  i1464.packedRect = UnityEngine.Rect.MinMaxRect(i1465[10], i1465[11], i1465[12], i1465[13])
  i1464.border = new pc.Vec4( i1465[14], i1465[15], i1465[16], i1465[17] )
  i1464.transparency = i1465[18]
  i1464.bounds = i1465[19]
  i1464.pixelsPerUnit = i1465[20]
  i1464.textureWidth = i1465[21]
  i1464.textureHeight = i1465[22]
  i1464.nativeSize = new pc.Vec2( i1465[23], i1465[24] )
  i1464.pivot = new pc.Vec2( i1465[25], i1465[26] )
  i1464.textureRectOffset = new pc.Vec2( i1465[27], i1465[28] )
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1467 = data
  i1466.name = i1467[0]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.wrapMode = i1469[1]
  i1468.isLooping = !!i1469[2]
  i1468.length = i1469[3]
  var i1471 = i1469[4]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1471[i + 0]) );
  }
  i1468.curves = i1470
  var i1473 = i1469[5]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1473[i + 0]) );
  }
  i1468.events = i1472
  i1468.halfPrecision = !!i1469[6]
  i1468._frameRate = i1469[7]
  i1468.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1469[8], i1468.localBounds)
  i1468.hasMuscleCurves = !!i1469[9]
  var i1475 = i1469[10]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( i1475[i + 0] );
  }
  i1468.clipMuscleConstant = i1474
  i1468.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1469[11], i1468.clipBindingConstant)
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1479 = data
  i1478.path = i1479[0]
  i1478.hash = i1479[1]
  i1478.componentType = i1479[2]
  i1478.property = i1479[3]
  i1478.keys = i1479[4]
  var i1481 = i1479[5]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1481[i + 0]) );
  }
  i1478.objectReferenceKeys = i1480
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1485 = data
  i1484.time = i1485[0]
  request.r(i1485[1], i1485[2], 0, i1484, 'value')
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1489 = data
  i1488.functionName = i1489[0]
  i1488.floatParameter = i1489[1]
  i1488.intParameter = i1489[2]
  i1488.stringParameter = i1489[3]
  request.r(i1489[4], i1489[5], 0, i1488, 'objectReferenceParameter')
  i1488.time = i1489[6]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1491 = data
  i1490.center = new pc.Vec3( i1491[0], i1491[1], i1491[2] )
  i1490.extends = new pc.Vec3( i1491[3], i1491[4], i1491[5] )
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( i1497[i + 0] );
  }
  i1494.genericBindings = i1496
  var i1499 = i1495[1]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( i1499[i + 0] );
  }
  i1494.pptrCurveMapping = i1498
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1501 = data
  i1500.name = i1501[0]
  i1500.ascent = i1501[1]
  i1500.originalLineHeight = i1501[2]
  i1500.fontSize = i1501[3]
  var i1503 = i1501[4]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1503[i + 0]) );
  }
  i1500.characterInfo = i1502
  request.r(i1501[5], i1501[6], 0, i1500, 'texture')
  i1500.originalFontSize = i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1507 = data
  i1506.index = i1507[0]
  i1506.advance = i1507[1]
  i1506.bearing = i1507[2]
  i1506.glyphWidth = i1507[3]
  i1506.glyphHeight = i1507[4]
  i1506.minX = i1507[5]
  i1506.maxX = i1507[6]
  i1506.minY = i1507[7]
  i1506.maxY = i1507[8]
  i1506.uvBottomLeftX = i1507[9]
  i1506.uvBottomLeftY = i1507[10]
  i1506.uvBottomRightX = i1507[11]
  i1506.uvBottomRightY = i1507[12]
  i1506.uvTopLeftX = i1507[13]
  i1506.uvTopLeftY = i1507[14]
  i1506.uvTopRightX = i1507[15]
  i1506.uvTopRightY = i1507[16]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1509 = data
  i1508.name = i1509[0]
  var i1511 = i1509[1]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1511[i + 0]) );
  }
  i1508.layers = i1510
  var i1513 = i1509[2]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1513[i + 0]) );
  }
  i1508.parameters = i1512
  i1508.animationClips = i1509[3]
  i1508.avatarUnsupported = i1509[4]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1517 = data
  i1516.name = i1517[0]
  i1516.defaultWeight = i1517[1]
  i1516.blendingMode = i1517[2]
  i1516.avatarMask = i1517[3]
  i1516.syncedLayerIndex = i1517[4]
  i1516.syncedLayerAffectsTiming = !!i1517[5]
  i1516.syncedLayers = i1517[6]
  i1516.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1517[7], i1516.stateMachine)
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1519 = data
  i1518.id = i1519[0]
  i1518.name = i1519[1]
  i1518.path = i1519[2]
  var i1521 = i1519[3]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1521[i + 0]) );
  }
  i1518.states = i1520
  var i1523 = i1519[4]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1523[i + 0]) );
  }
  i1518.machines = i1522
  var i1525 = i1519[5]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1525[i + 0]) );
  }
  i1518.entryStateTransitions = i1524
  var i1527 = i1519[6]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1527[i + 0]) );
  }
  i1518.exitStateTransitions = i1526
  var i1529 = i1519[7]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1529[i + 0]) );
  }
  i1518.anyStateTransitions = i1528
  i1518.defaultStateId = i1519[8]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1533 = data
  i1532.id = i1533[0]
  i1532.name = i1533[1]
  i1532.cycleOffset = i1533[2]
  i1532.cycleOffsetParameter = i1533[3]
  i1532.cycleOffsetParameterActive = !!i1533[4]
  i1532.mirror = !!i1533[5]
  i1532.mirrorParameter = i1533[6]
  i1532.mirrorParameterActive = !!i1533[7]
  i1532.motionId = i1533[8]
  i1532.nameHash = i1533[9]
  i1532.fullPathHash = i1533[10]
  i1532.speed = i1533[11]
  i1532.speedParameter = i1533[12]
  i1532.speedParameterActive = !!i1533[13]
  i1532.tag = i1533[14]
  i1532.tagHash = i1533[15]
  i1532.writeDefaultValues = !!i1533[16]
  var i1535 = i1533[17]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 2) {
  request.r(i1535[i + 0], i1535[i + 1], 2, i1534, '')
  }
  i1532.behaviours = i1534
  var i1537 = i1533[18]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1537[i + 0]) );
  }
  i1532.transitions = i1536
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1543 = data
  i1542.fullPath = i1543[0]
  i1542.canTransitionToSelf = !!i1543[1]
  i1542.duration = i1543[2]
  i1542.exitTime = i1543[3]
  i1542.hasExitTime = !!i1543[4]
  i1542.hasFixedDuration = !!i1543[5]
  i1542.interruptionSource = i1543[6]
  i1542.offset = i1543[7]
  i1542.orderedInterruption = !!i1543[8]
  i1542.destinationStateId = i1543[9]
  i1542.isExit = !!i1543[10]
  i1542.mute = !!i1543[11]
  i1542.solo = !!i1543[12]
  var i1545 = i1543[13]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1545[i + 0]) );
  }
  i1542.conditions = i1544
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1551 = data
  i1550.destinationStateId = i1551[0]
  i1550.isExit = !!i1551[1]
  i1550.mute = !!i1551[2]
  i1550.solo = !!i1551[3]
  var i1553 = i1551[4]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1553[i + 0]) );
  }
  i1550.conditions = i1552
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1557 = data
  i1556.mode = i1557[0]
  i1556.parameter = i1557[1]
  i1556.threshold = i1557[2]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1561 = data
  i1560.defaultBool = !!i1561[0]
  i1560.defaultFloat = i1561[1]
  i1560.defaultInt = i1561[2]
  i1560.name = i1561[3]
  i1560.nameHash = i1561[4]
  i1560.type = i1561[5]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1563 = data
  i1562.name = i1563[0]
  i1562.bytes64 = i1563[1]
  i1562.data = i1563[2]
  return i1562
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1564 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1565 = data
  i1564.hashCode = i1565[0]
  request.r(i1565[1], i1565[2], 0, i1564, 'material')
  i1564.materialHashCode = i1565[3]
  request.r(i1565[4], i1565[5], 0, i1564, 'atlas')
  i1564.normalStyle = i1565[6]
  i1564.normalSpacingOffset = i1565[7]
  i1564.boldStyle = i1565[8]
  i1564.boldSpacing = i1565[9]
  i1564.italicStyle = i1565[10]
  i1564.tabSize = i1565[11]
  i1564.m_Version = i1565[12]
  i1564.m_SourceFontFileGUID = i1565[13]
  request.r(i1565[14], i1565[15], 0, i1564, 'm_SourceFontFile_EditorRef')
  request.r(i1565[16], i1565[17], 0, i1564, 'm_SourceFontFile')
  i1564.m_AtlasPopulationMode = i1565[18]
  i1564.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1565[19], i1564.m_FaceInfo)
  var i1567 = i1565[20]
  var i1566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.add(request.d('UnityEngine.TextCore.Glyph', i1567[i + 0]));
  }
  i1564.m_GlyphTable = i1566
  var i1569 = i1565[21]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.add(request.d('TMPro.TMP_Character', i1569[i + 0]));
  }
  i1564.m_CharacterTable = i1568
  var i1571 = i1565[22]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 2) {
  request.r(i1571[i + 0], i1571[i + 1], 2, i1570, '')
  }
  i1564.m_AtlasTextures = i1570
  i1564.m_AtlasTextureIndex = i1565[23]
  i1564.m_IsMultiAtlasTexturesEnabled = !!i1565[24]
  i1564.m_ClearDynamicDataOnBuild = !!i1565[25]
  var i1573 = i1565[26]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.add(request.d('UnityEngine.TextCore.GlyphRect', i1573[i + 0]));
  }
  i1564.m_UsedGlyphRects = i1572
  var i1575 = i1565[27]
  var i1574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.add(request.d('UnityEngine.TextCore.GlyphRect', i1575[i + 0]));
  }
  i1564.m_FreeGlyphRects = i1574
  i1564.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1565[28], i1564.m_fontInfo)
  i1564.m_AtlasWidth = i1565[29]
  i1564.m_AtlasHeight = i1565[30]
  i1564.m_AtlasPadding = i1565[31]
  i1564.m_AtlasRenderMode = i1565[32]
  var i1577 = i1565[33]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(request.d('TMPro.TMP_Glyph', i1577[i + 0]));
  }
  i1564.m_glyphInfoList = i1576
  i1564.m_KerningTable = request.d('TMPro.KerningTable', i1565[34], i1564.m_KerningTable)
  i1564.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1565[35], i1564.m_FontFeatureTable)
  var i1579 = i1565[36]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1579.length; i += 2) {
  request.r(i1579[i + 0], i1579[i + 1], 1, i1578, '')
  }
  i1564.fallbackFontAssets = i1578
  var i1581 = i1565[37]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 1, i1580, '')
  }
  i1564.m_FallbackFontAssetTable = i1580
  i1564.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1565[38], i1564.m_CreationSettings)
  var i1583 = i1565[39]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('TMPro.TMP_FontWeightPair', i1583[i + 0]) );
  }
  i1564.m_FontWeightTable = i1582
  var i1585 = i1565[40]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('TMPro.TMP_FontWeightPair', i1585[i + 0]) );
  }
  i1564.fontWeights = i1584
  return i1564
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1587 = data
  i1586.m_FaceIndex = i1587[0]
  i1586.m_FamilyName = i1587[1]
  i1586.m_StyleName = i1587[2]
  i1586.m_PointSize = i1587[3]
  i1586.m_Scale = i1587[4]
  i1586.m_UnitsPerEM = i1587[5]
  i1586.m_LineHeight = i1587[6]
  i1586.m_AscentLine = i1587[7]
  i1586.m_CapLine = i1587[8]
  i1586.m_MeanLine = i1587[9]
  i1586.m_Baseline = i1587[10]
  i1586.m_DescentLine = i1587[11]
  i1586.m_SuperscriptOffset = i1587[12]
  i1586.m_SuperscriptSize = i1587[13]
  i1586.m_SubscriptOffset = i1587[14]
  i1586.m_SubscriptSize = i1587[15]
  i1586.m_UnderlineOffset = i1587[16]
  i1586.m_UnderlineThickness = i1587[17]
  i1586.m_StrikethroughOffset = i1587[18]
  i1586.m_StrikethroughThickness = i1587[19]
  i1586.m_TabWidth = i1587[20]
  return i1586
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1591 = data
  i1590.m_Index = i1591[0]
  i1590.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1591[1], i1590.m_Metrics)
  i1590.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1591[2], i1590.m_GlyphRect)
  i1590.m_Scale = i1591[3]
  i1590.m_AtlasIndex = i1591[4]
  i1590.m_ClassDefinitionType = i1591[5]
  return i1590
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1593 = data
  i1592.m_Width = i1593[0]
  i1592.m_Height = i1593[1]
  i1592.m_HorizontalBearingX = i1593[2]
  i1592.m_HorizontalBearingY = i1593[3]
  i1592.m_HorizontalAdvance = i1593[4]
  return i1592
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1595 = data
  i1594.m_X = i1595[0]
  i1594.m_Y = i1595[1]
  i1594.m_Width = i1595[2]
  i1594.m_Height = i1595[3]
  return i1594
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1598 = root || request.c( 'TMPro.TMP_Character' )
  var i1599 = data
  i1598.m_ElementType = i1599[0]
  i1598.m_Unicode = i1599[1]
  i1598.m_GlyphIndex = i1599[2]
  i1598.m_Scale = i1599[3]
  return i1598
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1605 = data
  i1604.Name = i1605[0]
  i1604.PointSize = i1605[1]
  i1604.Scale = i1605[2]
  i1604.CharacterCount = i1605[3]
  i1604.LineHeight = i1605[4]
  i1604.Baseline = i1605[5]
  i1604.Ascender = i1605[6]
  i1604.CapHeight = i1605[7]
  i1604.Descender = i1605[8]
  i1604.CenterLine = i1605[9]
  i1604.SuperscriptOffset = i1605[10]
  i1604.SubscriptOffset = i1605[11]
  i1604.SubSize = i1605[12]
  i1604.Underline = i1605[13]
  i1604.UnderlineThickness = i1605[14]
  i1604.strikethrough = i1605[15]
  i1604.strikethroughThickness = i1605[16]
  i1604.TabWidth = i1605[17]
  i1604.Padding = i1605[18]
  i1604.AtlasWidth = i1605[19]
  i1604.AtlasHeight = i1605[20]
  return i1604
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1609 = data
  i1608.id = i1609[0]
  i1608.x = i1609[1]
  i1608.y = i1609[2]
  i1608.width = i1609[3]
  i1608.height = i1609[4]
  i1608.xOffset = i1609[5]
  i1608.yOffset = i1609[6]
  i1608.xAdvance = i1609[7]
  i1608.scale = i1609[8]
  return i1608
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1610 = root || request.c( 'TMPro.KerningTable' )
  var i1611 = data
  var i1613 = i1611[0]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(request.d('TMPro.KerningPair', i1613[i + 0]));
  }
  i1610.kerningPairs = i1612
  return i1610
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1616 = root || request.c( 'TMPro.KerningPair' )
  var i1617 = data
  i1616.xOffset = i1617[0]
  i1616.m_FirstGlyph = i1617[1]
  i1616.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1617[2], i1616.m_FirstGlyphAdjustments)
  i1616.m_SecondGlyph = i1617[3]
  i1616.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1617[4], i1616.m_SecondGlyphAdjustments)
  i1616.m_IgnoreSpacingAdjustments = !!i1617[5]
  return i1616
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1618 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1619 = data
  var i1621 = i1619[0]
  var i1620 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1621[i + 0]));
  }
  i1618.m_GlyphPairAdjustmentRecords = i1620
  return i1618
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1624 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1625 = data
  i1624.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1625[0], i1624.m_FirstAdjustmentRecord)
  i1624.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1625[1], i1624.m_SecondAdjustmentRecord)
  i1624.m_FeatureLookupFlags = i1625[2]
  return i1624
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1629 = data
  i1628.sourceFontFileName = i1629[0]
  i1628.sourceFontFileGUID = i1629[1]
  i1628.pointSizeSamplingMode = i1629[2]
  i1628.pointSize = i1629[3]
  i1628.padding = i1629[4]
  i1628.packingMode = i1629[5]
  i1628.atlasWidth = i1629[6]
  i1628.atlasHeight = i1629[7]
  i1628.characterSetSelectionMode = i1629[8]
  i1628.characterSequence = i1629[9]
  i1628.referencedFontAssetGUID = i1629[10]
  i1628.referencedTextAssetGUID = i1629[11]
  i1628.fontStyle = i1629[12]
  i1628.fontStyleModifier = i1629[13]
  i1628.renderMode = i1629[14]
  i1628.includeFontFeatures = !!i1629[15]
  return i1628
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1632 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'regularTypeface')
  request.r(i1633[2], i1633[3], 0, i1632, 'italicTypeface')
  return i1632
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1634 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1635 = data
  var i1637 = i1635[0]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 2) {
  request.r(i1637[i + 0], i1637[i + 1], 2, i1636, '')
  }
  i1634.atlasAssets = i1636
  i1634.scale = i1635[1]
  request.r(i1635[2], i1635[3], 0, i1634, 'skeletonJSON')
  i1634.isUpgradingBlendModeMaterials = !!i1635[4]
  i1634.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1635[5], i1634.blendModeMaterials)
  var i1639 = i1635[6]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 1, i1638, '')
  }
  i1634.skeletonDataModifiers = i1638
  var i1641 = i1635[7]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.push( i1641[i + 0] );
  }
  i1634.fromAnimation = i1640
  var i1643 = i1635[8]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( i1643[i + 0] );
  }
  i1634.toAnimation = i1642
  i1634.duration = i1635[9]
  i1634.defaultMix = i1635[10]
  request.r(i1635[11], i1635[12], 0, i1634, 'controller')
  return i1634
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1646 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1647 = data
  i1646.applyAdditiveMaterial = !!i1647[0]
  var i1649 = i1647[1]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1649[i + 0]));
  }
  i1646.additiveMaterials = i1648
  var i1651 = i1647[2]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1651[i + 0]));
  }
  i1646.multiplyMaterials = i1650
  var i1653 = i1647[3]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1653[i + 0]));
  }
  i1646.screenMaterials = i1652
  i1646.requiresBlendModeMaterials = !!i1647[4]
  return i1646
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1656 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1657 = data
  i1656.pageName = i1657[0]
  request.r(i1657[1], i1657[2], 0, i1656, 'material')
  return i1656
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1660 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'atlasFile')
  var i1663 = i1661[2]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 2) {
  request.r(i1663[i + 0], i1663[i + 1], 2, i1662, '')
  }
  i1660.materials = i1662
  i1660.textureLoadingMode = i1661[3]
  request.r(i1661[4], i1661[5], 0, i1660, 'onDemandTextureLoader')
  return i1660
}

Deserializers["AudioClipTable"] = function (request, data, root) {
  var i1664 = root || request.c( 'AudioClipTable' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('AudioClipTable+AudioClipWithKey', i1667[i + 0]) );
  }
  i1664.data = i1666
  return i1664
}

Deserializers["AudioClipTable+AudioClipWithKey"] = function (request, data, root) {
  var i1670 = root || request.c( 'AudioClipTable+AudioClipWithKey' )
  var i1671 = data
  i1670.key = i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'clip')
  return i1670
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1672 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1673 = data
  i1672.useSafeMode = !!i1673[0]
  i1672.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1673[1], i1672.safeModeOptions)
  i1672.timeScale = i1673[2]
  i1672.unscaledTimeScale = i1673[3]
  i1672.useSmoothDeltaTime = !!i1673[4]
  i1672.maxSmoothUnscaledTime = i1673[5]
  i1672.rewindCallbackMode = i1673[6]
  i1672.showUnityEditorReport = !!i1673[7]
  i1672.logBehaviour = i1673[8]
  i1672.drawGizmos = !!i1673[9]
  i1672.defaultRecyclable = !!i1673[10]
  i1672.defaultAutoPlay = i1673[11]
  i1672.defaultUpdateType = i1673[12]
  i1672.defaultTimeScaleIndependent = !!i1673[13]
  i1672.defaultEaseType = i1673[14]
  i1672.defaultEaseOvershootOrAmplitude = i1673[15]
  i1672.defaultEasePeriod = i1673[16]
  i1672.defaultAutoKill = !!i1673[17]
  i1672.defaultLoopType = i1673[18]
  i1672.debugMode = !!i1673[19]
  i1672.debugStoreTargetId = !!i1673[20]
  i1672.showPreviewPanel = !!i1673[21]
  i1672.storeSettingsLocation = i1673[22]
  i1672.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1673[23], i1672.modules)
  i1672.createASMDEF = !!i1673[24]
  i1672.showPlayingTweens = !!i1673[25]
  i1672.showPausedTweens = !!i1673[26]
  return i1672
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1674 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1675 = data
  i1674.logBehaviour = i1675[0]
  i1674.nestedTweenFailureBehaviour = i1675[1]
  return i1674
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1676 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1677 = data
  i1676.showPanel = !!i1677[0]
  i1676.audioEnabled = !!i1677[1]
  i1676.physicsEnabled = !!i1677[2]
  i1676.physics2DEnabled = !!i1677[3]
  i1676.spriteEnabled = !!i1677[4]
  i1676.uiEnabled = !!i1677[5]
  i1676.textMeshProEnabled = !!i1677[6]
  i1676.tk2DEnabled = !!i1677[7]
  i1676.deAudioEnabled = !!i1677[8]
  i1676.deUnityExtendedEnabled = !!i1677[9]
  i1676.epoOutlineEnabled = !!i1677[10]
  return i1676
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1678 = root || request.c( 'TMPro.TMP_Settings' )
  var i1679 = data
  i1678.m_enableWordWrapping = !!i1679[0]
  i1678.m_enableKerning = !!i1679[1]
  i1678.m_enableExtraPadding = !!i1679[2]
  i1678.m_enableTintAllSprites = !!i1679[3]
  i1678.m_enableParseEscapeCharacters = !!i1679[4]
  i1678.m_EnableRaycastTarget = !!i1679[5]
  i1678.m_GetFontFeaturesAtRuntime = !!i1679[6]
  i1678.m_missingGlyphCharacter = i1679[7]
  i1678.m_warningsDisabled = !!i1679[8]
  request.r(i1679[9], i1679[10], 0, i1678, 'm_defaultFontAsset')
  i1678.m_defaultFontAssetPath = i1679[11]
  i1678.m_defaultFontSize = i1679[12]
  i1678.m_defaultAutoSizeMinRatio = i1679[13]
  i1678.m_defaultAutoSizeMaxRatio = i1679[14]
  i1678.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1679[15], i1679[16] )
  i1678.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1679[17], i1679[18] )
  i1678.m_autoSizeTextContainer = !!i1679[19]
  i1678.m_IsTextObjectScaleStatic = !!i1679[20]
  var i1681 = i1679[21]
  var i1680 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 1, i1680, '')
  }
  i1678.m_fallbackFontAssets = i1680
  i1678.m_matchMaterialPreset = !!i1679[22]
  request.r(i1679[23], i1679[24], 0, i1678, 'm_defaultSpriteAsset')
  i1678.m_defaultSpriteAssetPath = i1679[25]
  i1678.m_enableEmojiSupport = !!i1679[26]
  i1678.m_MissingCharacterSpriteUnicode = i1679[27]
  i1678.m_defaultColorGradientPresetsPath = i1679[28]
  request.r(i1679[29], i1679[30], 0, i1678, 'm_defaultStyleSheet')
  i1678.m_StyleSheetsResourcePath = i1679[31]
  request.r(i1679[32], i1679[33], 0, i1678, 'm_leadingCharacters')
  request.r(i1679[34], i1679[35], 0, i1678, 'm_followingCharacters')
  i1678.m_UseModernHangulLineBreakingRules = !!i1679[36]
  return i1678
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1683 = data
  i1682.m_GlyphIndex = i1683[0]
  i1682.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1683[1], i1682.m_GlyphValueRecord)
  return i1682
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1684 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1685 = data
  i1684.m_XPlacement = i1685[0]
  i1684.m_YPlacement = i1685[1]
  i1684.m_XAdvance = i1685[2]
  i1684.m_YAdvance = i1685[3]
  return i1684
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1686 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1687 = data
  i1686.hashCode = i1687[0]
  request.r(i1687[1], i1687[2], 0, i1686, 'material')
  i1686.materialHashCode = i1687[3]
  request.r(i1687[4], i1687[5], 0, i1686, 'spriteSheet')
  var i1689 = i1687[6]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.add(request.d('TMPro.TMP_Sprite', i1689[i + 0]));
  }
  i1686.spriteInfoList = i1688
  var i1691 = i1687[7]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1691.length; i += 2) {
  request.r(i1691[i + 0], i1691[i + 1], 1, i1690, '')
  }
  i1686.fallbackSpriteAssets = i1690
  i1686.m_Version = i1687[8]
  i1686.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1687[9], i1686.m_FaceInfo)
  var i1693 = i1687[10]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('TMPro.TMP_SpriteCharacter', i1693[i + 0]));
  }
  i1686.m_SpriteCharacterTable = i1692
  var i1695 = i1687[11]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.add(request.d('TMPro.TMP_SpriteGlyph', i1695[i + 0]));
  }
  i1686.m_SpriteGlyphTable = i1694
  return i1686
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1698 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.hashCode = i1699[1]
  i1698.unicode = i1699[2]
  i1698.pivot = new pc.Vec2( i1699[3], i1699[4] )
  request.r(i1699[5], i1699[6], 0, i1698, 'sprite')
  i1698.id = i1699[7]
  i1698.x = i1699[8]
  i1698.y = i1699[9]
  i1698.width = i1699[10]
  i1698.height = i1699[11]
  i1698.xOffset = i1699[12]
  i1698.yOffset = i1699[13]
  i1698.xAdvance = i1699[14]
  i1698.scale = i1699[15]
  return i1698
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1704 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1705 = data
  i1704.m_Name = i1705[0]
  i1704.m_HashCode = i1705[1]
  i1704.m_ElementType = i1705[2]
  i1704.m_Unicode = i1705[3]
  i1704.m_GlyphIndex = i1705[4]
  i1704.m_Scale = i1705[5]
  return i1704
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'sprite')
  i1708.m_Index = i1709[2]
  i1708.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1709[3], i1708.m_Metrics)
  i1708.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1709[4], i1708.m_GlyphRect)
  i1708.m_Scale = i1709[5]
  i1708.m_AtlasIndex = i1709[6]
  i1708.m_ClassDefinitionType = i1709[7]
  return i1708
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1710 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1711 = data
  var i1713 = i1711[0]
  var i1712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.add(request.d('TMPro.TMP_Style', i1713[i + 0]));
  }
  i1710.m_StyleList = i1712
  return i1710
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1716 = root || request.c( 'TMPro.TMP_Style' )
  var i1717 = data
  i1716.m_Name = i1717[0]
  i1716.m_HashCode = i1717[1]
  i1716.m_OpeningDefinition = i1717[2]
  i1716.m_ClosingDefinition = i1717[3]
  i1716.m_OpeningTagArray = i1717[4]
  i1716.m_ClosingTagArray = i1717[5]
  i1716.m_OpeningTagUnicodeArray = i1717[6]
  i1716.m_ClosingTagUnicodeArray = i1717[7]
  return i1716
}

Deserializers["DailyLogInSO"] = function (request, data, root) {
  var i1718 = root || request.c( 'DailyLogInSO' )
  var i1719 = data
  var i1721 = i1719[0]
  var i1720 = new (System.Collections.Generic.List$1(Bridge.ns('DayReward')))
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.add(request.d('DayReward', i1721[i + 0]));
  }
  i1718.DayRewards = i1720
  return i1718
}

Deserializers["DayReward"] = function (request, data, root) {
  var i1724 = root || request.c( 'DayReward' )
  var i1725 = data
  i1724.day = i1725[0]
  var i1727 = i1725[1]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('SingleReward')))
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.add(request.d('SingleReward', i1727[i + 0]));
  }
  i1724.SingleRewards = i1726
  return i1724
}

Deserializers["SingleReward"] = function (request, data, root) {
  var i1730 = root || request.c( 'SingleReward' )
  var i1731 = data
  i1730.rewardType = i1731[0]
  request.r(i1731[1], i1731[2], 0, i1730, 'imgReward')
  i1730.amount = i1731[3]
  i1730.textAmountPos = new pc.Vec2( i1731[4], i1731[5] )
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1733 = data
  var i1735 = i1733[0]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1735[i + 0]) );
  }
  i1732.files = i1734
  i1732.componentToPrefabIds = i1733[1]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1739 = data
  i1738.path = i1739[0]
  request.r(i1739[1], i1739[2], 0, i1738, 'unityObject')
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1743[i + 0]) );
  }
  i1740.scriptsExecutionOrder = i1742
  var i1745 = i1741[1]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1745[i + 0]) );
  }
  i1740.sortingLayers = i1744
  var i1747 = i1741[2]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1747[i + 0]) );
  }
  i1740.cullingLayers = i1746
  i1740.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1741[3], i1740.timeSettings)
  i1740.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1741[4], i1740.physicsSettings)
  i1740.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1741[5], i1740.physics2DSettings)
  i1740.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1741[6], i1740.qualitySettings)
  i1740.enableRealtimeShadows = !!i1741[7]
  i1740.enableAutoInstancing = !!i1741[8]
  i1740.enableDynamicBatching = !!i1741[9]
  i1740.lightmapEncodingQuality = i1741[10]
  i1740.desiredColorSpace = i1741[11]
  var i1749 = i1741[12]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1740.allTags = i1748
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1753 = data
  i1752.name = i1753[0]
  i1752.value = i1753[1]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1757 = data
  i1756.id = i1757[0]
  i1756.name = i1757[1]
  i1756.value = i1757[2]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1761 = data
  i1760.id = i1761[0]
  i1760.name = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1763 = data
  i1762.fixedDeltaTime = i1763[0]
  i1762.maximumDeltaTime = i1763[1]
  i1762.timeScale = i1763[2]
  i1762.maximumParticleTimestep = i1763[3]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1765 = data
  i1764.gravity = new pc.Vec3( i1765[0], i1765[1], i1765[2] )
  i1764.defaultSolverIterations = i1765[3]
  i1764.bounceThreshold = i1765[4]
  i1764.autoSyncTransforms = !!i1765[5]
  i1764.autoSimulation = !!i1765[6]
  var i1767 = i1765[7]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1767[i + 0]) );
  }
  i1764.collisionMatrix = i1766
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.layerId = i1771[1]
  i1770.otherLayerId = i1771[2]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'material')
  i1772.gravity = new pc.Vec2( i1773[2], i1773[3] )
  i1772.positionIterations = i1773[4]
  i1772.velocityIterations = i1773[5]
  i1772.velocityThreshold = i1773[6]
  i1772.maxLinearCorrection = i1773[7]
  i1772.maxAngularCorrection = i1773[8]
  i1772.maxTranslationSpeed = i1773[9]
  i1772.maxRotationSpeed = i1773[10]
  i1772.baumgarteScale = i1773[11]
  i1772.baumgarteTOIScale = i1773[12]
  i1772.timeToSleep = i1773[13]
  i1772.linearSleepTolerance = i1773[14]
  i1772.angularSleepTolerance = i1773[15]
  i1772.defaultContactOffset = i1773[16]
  i1772.autoSimulation = !!i1773[17]
  i1772.queriesHitTriggers = !!i1773[18]
  i1772.queriesStartInColliders = !!i1773[19]
  i1772.callbacksOnDisable = !!i1773[20]
  i1772.reuseCollisionCallbacks = !!i1773[21]
  i1772.autoSyncTransforms = !!i1773[22]
  var i1775 = i1773[23]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1775[i + 0]) );
  }
  i1772.collisionMatrix = i1774
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1779 = data
  i1778.enabled = !!i1779[0]
  i1778.layerId = i1779[1]
  i1778.otherLayerId = i1779[2]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1783[i + 0]) );
  }
  i1780.qualityLevels = i1782
  var i1785 = i1781[1]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( i1785[i + 0] );
  }
  i1780.names = i1784
  i1780.shadows = i1781[2]
  i1780.anisotropicFiltering = i1781[3]
  i1780.antiAliasing = i1781[4]
  i1780.lodBias = i1781[5]
  i1780.shadowCascades = i1781[6]
  i1780.shadowDistance = i1781[7]
  i1780.shadowmaskMode = i1781[8]
  i1780.shadowProjection = i1781[9]
  i1780.shadowResolution = i1781[10]
  i1780.softParticles = !!i1781[11]
  i1780.softVegetation = !!i1781[12]
  i1780.activeColorSpace = i1781[13]
  i1780.desiredColorSpace = i1781[14]
  i1780.masterTextureLimit = i1781[15]
  i1780.maxQueuedFrames = i1781[16]
  i1780.particleRaycastBudget = i1781[17]
  i1780.pixelLightCount = i1781[18]
  i1780.realtimeReflectionProbes = !!i1781[19]
  i1780.shadowCascade2Split = i1781[20]
  i1780.shadowCascade4Split = new pc.Vec3( i1781[21], i1781[22], i1781[23] )
  i1780.streamingMipmapsActive = !!i1781[24]
  i1780.vSyncCount = i1781[25]
  i1780.asyncUploadBufferSize = i1781[26]
  i1780.asyncUploadTimeSlice = i1781[27]
  i1780.billboardsFaceCameraPosition = !!i1781[28]
  i1780.shadowNearPlaneOffset = i1781[29]
  i1780.streamingMipmapsMemoryBudget = i1781[30]
  i1780.maximumLODLevel = i1781[31]
  i1780.streamingMipmapsAddAllCameras = !!i1781[32]
  i1780.streamingMipmapsMaxLevelReduction = i1781[33]
  i1780.streamingMipmapsRenderersPerFrame = i1781[34]
  i1780.resolutionScalingFixedDPIFactor = i1781[35]
  i1780.streamingMipmapsMaxFileIORequests = i1781[36]
  i1780.currentQualityLevel = i1781[37]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1791 = data
  i1790.weight = i1791[0]
  i1790.vertices = i1791[1]
  i1790.normals = i1791[2]
  i1790.tangents = i1791[3]
  return i1790
}

Deserializers["System.DateTime"] = function (request, data, root) {
  var i1792 = root || request.c( 'System.DateTime' )
  var i1793 = data
  return i1792
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1794 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1795 = data
  i1794.xPlacement = i1795[0]
  i1794.yPlacement = i1795[1]
  i1794.xAdvance = i1795[2]
  i1794.yAdvance = i1795[3]
  return i1794
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[95],"96":[44],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[31],"106":[31],"107":[31],"108":[31],"109":[31],"110":[31],"111":[31],"112":[31],"113":[31],"114":[31],"115":[31],"116":[31],"117":[31],"118":[44],"119":[75],"120":[121],"122":[121],"18":[7],"19":[12],"123":[12],"124":[12],"125":[12],"126":[12],"127":[12],"128":[12],"129":[12],"130":[12],"131":[12],"132":[12,131],"133":[12],"134":[12],"135":[44],"136":[7],"137":[138],"139":[140],"141":[44],"142":[143],"144":[7],"145":[14,7],"76":[75],"57":[14,7],"146":[27,75],"147":[75],"148":[75,74],"149":[98],"150":[31],"151":[143],"152":[153],"60":[7,14],"154":[7],"155":[75,7],"73":[7,14],"156":[7],"157":[14,7],"158":[75],"159":[14,7],"160":[7],"161":[162],"163":[147],"164":[75,74],"165":[57],"166":[147],"167":[168],"169":[147],"170":[147],"171":[153],"172":[153],"173":[147],"174":[138],"175":[20],"176":[7],"177":[7],"37":[18],"15":[14,7],"178":[7],"48":[18],"179":[7],"180":[7],"35":[7],"181":[7],"182":[7],"183":[7],"184":[7],"185":[7],"186":[7],"47":[14,7],"187":[7],"188":[7],"189":[7],"9":[7],"12":[14,7],"190":[7],"191":[67],"192":[67],"68":[67],"193":[67],"194":[44],"195":[44],"196":[138]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","UnityEngine.MonoBehaviour","ComboVfx","UnityEngine.UI.Text","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.Canvas","BetterOutline","UnityEngine.SpriteRenderer","Grill","Plate","Skewer","LockOfGrillOB","SmokeGrill","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","GrillMouseEvent","UnityEngine.Rigidbody2D","SkewerMouseEvent","Shipper","ItemOrder","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","UnityEngine.UI.GraphicRaycaster","PlateCompleted","UnityEngine.AudioSource","UnityEngine.AudioClip","EpicToonFX.ETFXLightFade","UnityEngine.Light","Popup.PopupSystem","UnityEngine.Camera","PopupDarkEffect","Popup.BlockingImage","UnityEngine.UI.RawImage","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","PopupLiteMessage","UnityEngine.UI.Shadow","PopupBlurEffect","PopupSample1","PopupSample2","RestUI","PopupGameWin","Spine.Unity.SkeletonGraphic","CoinControl","SafeArea","Coffee.UIExtensions.UIParticle","Spine.Unity.SkeletonDataAsset","PopupGameLose","UnityEngine.UI.Outline","AudioManager","AudioClipTable","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayerDataPreview","UIManager","PlayScreen","LevelCtr","TMPro.TextMeshProUGUI","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","TMPro.TMP_FontAsset","LevelDataCtrl","GameManager","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","DailyLogInSO","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bevel","CharacterSpacing","CurveEffect","DepthEffect","InnerBevel","InnerOutline","OverlayTexture","GradientColor","LimitVisibleCharacters","Typewriter","SkewEffect","SoftShadow","CameraEffectApplier","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "Skewer Shuffle";

Deserializers.lunaInitializationTime = "08/16/2025 05:09:40";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "8523";

Deserializers.projectId = "9fd9c6f453db0854f930de01c72b834f";

Deserializers.packagesInfo = "com.unity.shadergraph: 16.0.5\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.8.6\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1958";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5990";

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

Deserializers.buildID = "a3136cbf-a120-4e9f-ba4a-1851d1c2d33f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"],["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

