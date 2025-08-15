var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.JointSpring' )
  var i897 = data
  i896.spring = i897[0]
  i896.damper = i897[1]
  i896.targetPosition = i897[2]
  return i896
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.JointMotor' )
  var i899 = data
  i898.m_TargetVelocity = i899[0]
  i898.m_Force = i899[1]
  i898.m_FreeSpin = i899[2]
  return i898
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.JointLimits' )
  var i901 = data
  i900.m_Min = i901[0]
  i900.m_Max = i901[1]
  i900.m_Bounciness = i901[2]
  i900.m_BounceMinVelocity = i901[3]
  i900.m_ContactDistance = i901[4]
  i900.minBounce = i901[5]
  i900.maxBounce = i901[6]
  return i900
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.JointDrive' )
  var i903 = data
  i902.m_PositionSpring = i903[0]
  i902.m_PositionDamper = i903[1]
  i902.m_MaximumForce = i903[2]
  i902.m_UseAcceleration = i903[3]
  return i902
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i905 = data
  i904.m_Spring = i905[0]
  i904.m_Damper = i905[1]
  return i904
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i907 = data
  i906.m_Limit = i907[0]
  i906.m_Bounciness = i907[1]
  i906.m_ContactDistance = i907[2]
  return i906
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i909 = data
  i908.m_ExtremumSlip = i909[0]
  i908.m_ExtremumValue = i909[1]
  i908.m_AsymptoteSlip = i909[2]
  i908.m_AsymptoteValue = i909[3]
  i908.m_Stiffness = i909[4]
  return i908
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i911 = data
  i910.m_LowerAngle = i911[0]
  i910.m_UpperAngle = i911[1]
  return i910
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i913 = data
  i912.m_MotorSpeed = i913[0]
  i912.m_MaximumMotorTorque = i913[1]
  return i912
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i915 = data
  i914.m_DampingRatio = i915[0]
  i914.m_Frequency = i915[1]
  i914.m_Angle = i915[2]
  return i914
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i917 = data
  i916.m_LowerTranslation = i917[0]
  i916.m_UpperTranslation = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i919 = data
  i918.position = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.scale = new pc.Vec3( i919[3], i919[4], i919[5] )
  i918.rotation = new pc.Quat(i919[6], i919[7], i919[8], i919[9])
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i921 = data
  i920.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i921[0], i920.main)
  i920.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i921[1], i920.colorBySpeed)
  i920.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i921[2], i920.colorOverLifetime)
  i920.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i921[3], i920.emission)
  i920.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i921[4], i920.rotationBySpeed)
  i920.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i921[5], i920.rotationOverLifetime)
  i920.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i921[6], i920.shape)
  i920.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i921[7], i920.sizeBySpeed)
  i920.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i921[8], i920.sizeOverLifetime)
  i920.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i921[9], i920.textureSheetAnimation)
  i920.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i921[10], i920.velocityOverLifetime)
  i920.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i921[11], i920.noise)
  i920.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i921[12], i920.inheritVelocity)
  i920.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i921[13], i920.forceOverLifetime)
  i920.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i921[14], i920.limitVelocityOverLifetime)
  i920.useAutoRandomSeed = !!i921[15]
  i920.randomSeed = i921[16]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemMain()
  var i923 = data
  i922.duration = i923[0]
  i922.loop = !!i923[1]
  i922.prewarm = !!i923[2]
  i922.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.startDelay)
  i922.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[4], i922.startLifetime)
  i922.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[5], i922.startSpeed)
  i922.startSize3D = !!i923[6]
  i922.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[7], i922.startSizeX)
  i922.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[8], i922.startSizeY)
  i922.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[9], i922.startSizeZ)
  i922.startRotation3D = !!i923[10]
  i922.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[11], i922.startRotationX)
  i922.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[12], i922.startRotationY)
  i922.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[13], i922.startRotationZ)
  i922.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i923[14], i922.startColor)
  i922.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[15], i922.gravityModifier)
  i922.simulationSpace = i923[16]
  request.r(i923[17], i923[18], 0, i922, 'customSimulationSpace')
  i922.simulationSpeed = i923[19]
  i922.useUnscaledTime = !!i923[20]
  i922.scalingMode = i923[21]
  i922.playOnAwake = !!i923[22]
  i922.maxParticles = i923[23]
  i922.emitterVelocityMode = i923[24]
  i922.stopAction = i923[25]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i924 = root || new pc.MinMaxCurve()
  var i925 = data
  i924.mode = i925[0]
  i924.curveMin = new pc.AnimationCurve( { keys_flow: i925[1] } )
  i924.curveMax = new pc.AnimationCurve( { keys_flow: i925[2] } )
  i924.curveMultiplier = i925[3]
  i924.constantMin = i925[4]
  i924.constantMax = i925[5]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i926 = root || new pc.MinMaxGradient()
  var i927 = data
  i926.mode = i927[0]
  i926.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i927[1], i926.gradientMin)
  i926.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i927[2], i926.gradientMax)
  i926.colorMin = new pc.Color(i927[3], i927[4], i927[5], i927[6])
  i926.colorMax = new pc.Color(i927[7], i927[8], i927[9], i927[10])
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i929 = data
  i928.mode = i929[0]
  var i931 = i929[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i931[i + 0]) );
  }
  i928.colorKeys = i930
  var i933 = i929[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i933[i + 0]) );
  }
  i928.alphaKeys = i932
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i934 = root || new pc.ParticleSystemColorBySpeed()
  var i935 = data
  i934.enabled = !!i935[0]
  i934.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i935[1], i934.color)
  i934.range = new pc.Vec2( i935[2], i935[3] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i939 = data
  i938.color = new pc.Color(i939[0], i939[1], i939[2], i939[3])
  i938.time = i939[4]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i943 = data
  i942.alpha = i943[0]
  i942.time = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemColorOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i945[1], i944.color)
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i946 = root || new pc.ParticleSystemEmitter()
  var i947 = data
  i946.enabled = !!i947[0]
  i946.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[1], i946.rateOverTime)
  i946.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i947[2], i946.rateOverDistance)
  var i949 = i947[3]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i949[i + 0]) );
  }
  i946.bursts = i948
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemBurst()
  var i953 = data
  i952.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[0], i952.count)
  i952.cycleCount = i953[1]
  i952.minCount = i953[2]
  i952.maxCount = i953[3]
  i952.repeatInterval = i953[4]
  i952.time = i953[5]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemRotationBySpeed()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[1], i954.x)
  i954.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[2], i954.y)
  i954.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[3], i954.z)
  i954.separateAxes = !!i955[4]
  i954.range = new pc.Vec2( i955[5], i955[6] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemRotationOverLifetime()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[1], i956.x)
  i956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[2], i956.y)
  i956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.z)
  i956.separateAxes = !!i957[4]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemShape()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.shapeType = i959[1]
  i958.randomDirectionAmount = i959[2]
  i958.sphericalDirectionAmount = i959[3]
  i958.randomPositionAmount = i959[4]
  i958.alignToDirection = !!i959[5]
  i958.radius = i959[6]
  i958.radiusMode = i959[7]
  i958.radiusSpread = i959[8]
  i958.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[9], i958.radiusSpeed)
  i958.radiusThickness = i959[10]
  i958.angle = i959[11]
  i958.length = i959[12]
  i958.boxThickness = new pc.Vec3( i959[13], i959[14], i959[15] )
  i958.meshShapeType = i959[16]
  request.r(i959[17], i959[18], 0, i958, 'mesh')
  request.r(i959[19], i959[20], 0, i958, 'meshRenderer')
  request.r(i959[21], i959[22], 0, i958, 'skinnedMeshRenderer')
  i958.useMeshMaterialIndex = !!i959[23]
  i958.meshMaterialIndex = i959[24]
  i958.useMeshColors = !!i959[25]
  i958.normalOffset = i959[26]
  i958.arc = i959[27]
  i958.arcMode = i959[28]
  i958.arcSpread = i959[29]
  i958.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[30], i958.arcSpeed)
  i958.donutRadius = i959[31]
  i958.position = new pc.Vec3( i959[32], i959[33], i959[34] )
  i958.rotation = new pc.Vec3( i959[35], i959[36], i959[37] )
  i958.scale = new pc.Vec3( i959[38], i959[39], i959[40] )
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemSizeBySpeed()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[1], i960.x)
  i960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[2], i960.y)
  i960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[3], i960.z)
  i960.separateAxes = !!i961[4]
  i960.range = new pc.Vec2( i961[5], i961[6] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i962 = root || new pc.ParticleSystemSizeOverLifetime()
  var i963 = data
  i962.enabled = !!i963[0]
  i962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[1], i962.x)
  i962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[2], i962.y)
  i962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i963[3], i962.z)
  i962.separateAxes = !!i963[4]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i964 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i965 = data
  i964.enabled = !!i965[0]
  i964.mode = i965[1]
  i964.animation = i965[2]
  i964.numTilesX = i965[3]
  i964.numTilesY = i965[4]
  i964.useRandomRow = !!i965[5]
  i964.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[6], i964.frameOverTime)
  i964.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i965[7], i964.startFrame)
  i964.cycleCount = i965[8]
  i964.rowIndex = i965[9]
  i964.flipU = i965[10]
  i964.flipV = i965[11]
  i964.spriteCount = i965[12]
  var i967 = i965[13]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.sprites = i966
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[1], i970.x)
  i970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[2], i970.y)
  i970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[3], i970.z)
  i970.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[4], i970.radial)
  i970.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[5], i970.speedModifier)
  i970.space = i971[6]
  i970.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[7], i970.orbitalX)
  i970.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[8], i970.orbitalY)
  i970.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[9], i970.orbitalZ)
  i970.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[10], i970.orbitalOffsetX)
  i970.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[11], i970.orbitalOffsetY)
  i970.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[12], i970.orbitalOffsetZ)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemNoise()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.separateAxes = !!i973[1]
  i972.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.strengthX)
  i972.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.strengthY)
  i972.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[4], i972.strengthZ)
  i972.frequency = i973[5]
  i972.damping = !!i973[6]
  i972.octaveCount = i973[7]
  i972.octaveMultiplier = i973[8]
  i972.octaveScale = i973[9]
  i972.quality = i973[10]
  i972.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[11], i972.scrollSpeed)
  i972.scrollSpeedMultiplier = i973[12]
  i972.remapEnabled = !!i973[13]
  i972.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[14], i972.remapX)
  i972.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[15], i972.remapY)
  i972.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[16], i972.remapZ)
  i972.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[17], i972.positionAmount)
  i972.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[18], i972.rotationAmount)
  i972.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[19], i972.sizeAmount)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemInheritVelocity()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.mode = i975[1]
  i974.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.curve)
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i976 = root || new pc.ParticleSystemForceOverLifetime()
  var i977 = data
  i976.enabled = !!i977[0]
  i976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[1], i976.x)
  i976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[2], i976.y)
  i976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i977[3], i976.z)
  i976.space = i977[4]
  i976.randomized = !!i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[1], i978.limit)
  i978.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[2], i978.limitX)
  i978.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[3], i978.limitY)
  i978.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[4], i978.limitZ)
  i978.dampen = i979[5]
  i978.separateAxes = !!i979[6]
  i978.space = i979[7]
  i978.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i979[8], i978.drag)
  i978.multiplyDragByParticleSize = !!i979[9]
  i978.multiplyDragByParticleVelocity = !!i979[10]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i981 = data
  i980.enabled = !!i981[0]
  request.r(i981[1], i981[2], 0, i980, 'sharedMaterial')
  var i983 = i981[3]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.sharedMaterials = i982
  i980.receiveShadows = !!i981[4]
  i980.shadowCastingMode = i981[5]
  i980.sortingLayerID = i981[6]
  i980.sortingOrder = i981[7]
  i980.lightmapIndex = i981[8]
  i980.lightmapSceneIndex = i981[9]
  i980.lightmapScaleOffset = new pc.Vec4( i981[10], i981[11], i981[12], i981[13] )
  i980.lightProbeUsage = i981[14]
  i980.reflectionProbeUsage = i981[15]
  request.r(i981[16], i981[17], 0, i980, 'mesh')
  i980.meshCount = i981[18]
  i980.activeVertexStreamsCount = i981[19]
  i980.alignment = i981[20]
  i980.renderMode = i981[21]
  i980.sortMode = i981[22]
  i980.lengthScale = i981[23]
  i980.velocityScale = i981[24]
  i980.cameraVelocityScale = i981[25]
  i980.normalDirection = i981[26]
  i980.sortingFudge = i981[27]
  i980.minParticleSize = i981[28]
  i980.maxParticleSize = i981[29]
  i980.pivot = new pc.Vec3( i981[30], i981[31], i981[32] )
  request.r(i981[33], i981[34], 0, i980, 'trailMaterial')
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i987 = data
  i986.name = i987[0]
  i986.tagId = i987[1]
  i986.enabled = !!i987[2]
  i986.isStatic = !!i987[3]
  i986.layer = i987[4]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i988 = root || new pc.UnityMaterial()
  var i989 = data
  i988.name = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'shader')
  i988.renderQueue = i989[3]
  i988.enableInstancing = !!i989[4]
  var i991 = i989[5]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i991[i + 0]) );
  }
  i988.floatParameters = i990
  var i993 = i989[6]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i993[i + 0]) );
  }
  i988.colorParameters = i992
  var i995 = i989[7]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i995[i + 0]) );
  }
  i988.vectorParameters = i994
  var i997 = i989[8]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i997[i + 0]) );
  }
  i988.textureParameters = i996
  var i999 = i989[9]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i999[i + 0]) );
  }
  i988.materialFlags = i998
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.value = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = new pc.Color(i1007[1], i1007[2], i1007[3], i1007[4])
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.value = new pc.Vec4( i1011[1], i1011[2], i1011[3], i1011[4] )
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1015 = data
  i1014.name = i1015[0]
  request.r(i1015[1], i1015[2], 0, i1014, 'value')
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.enabled = !!i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1021 = data
  i1020.name = i1021[0]
  i1020.width = i1021[1]
  i1020.height = i1021[2]
  i1020.mipmapCount = i1021[3]
  i1020.anisoLevel = i1021[4]
  i1020.filterMode = i1021[5]
  i1020.hdr = !!i1021[6]
  i1020.format = i1021[7]
  i1020.wrapMode = i1021[8]
  i1020.alphaIsTransparency = !!i1021[9]
  i1020.alphaSource = i1021[10]
  i1020.graphicsFormat = i1021[11]
  i1020.sRGBTexture = !!i1021[12]
  i1020.desiredColorSpace = i1021[13]
  i1020.wrapU = i1021[14]
  i1020.wrapV = i1021[15]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.halfPrecision = !!i1023[1]
  i1022.useUInt32IndexFormat = !!i1023[2]
  i1022.vertexCount = i1023[3]
  i1022.aabb = i1023[4]
  var i1025 = i1023[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( !!i1025[i + 0] );
  }
  i1022.streams = i1024
  i1022.vertices = i1023[6]
  var i1027 = i1023[7]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1027[i + 0]) );
  }
  i1022.subMeshes = i1026
  var i1029 = i1023[8]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 16) {
    i1028.push( new pc.Mat4().setData(i1029[i + 0], i1029[i + 1], i1029[i + 2], i1029[i + 3],  i1029[i + 4], i1029[i + 5], i1029[i + 6], i1029[i + 7],  i1029[i + 8], i1029[i + 9], i1029[i + 10], i1029[i + 11],  i1029[i + 12], i1029[i + 13], i1029[i + 14], i1029[i + 15]) );
  }
  i1022.bindposes = i1028
  var i1031 = i1023[9]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1031[i + 0]) );
  }
  i1022.blendShapes = i1030
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1037 = data
  i1036.triangles = i1037[0]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1043 = data
  i1042.name = i1043[0]
  var i1045 = i1043[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1045[i + 0]) );
  }
  i1042.frames = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1047 = data
  i1046.pivot = new pc.Vec2( i1047[0], i1047[1] )
  i1046.anchorMin = new pc.Vec2( i1047[2], i1047[3] )
  i1046.anchorMax = new pc.Vec2( i1047[4], i1047[5] )
  i1046.sizeDelta = new pc.Vec2( i1047[6], i1047[7] )
  i1046.anchoredPosition3D = new pc.Vec3( i1047[8], i1047[9], i1047[10] )
  i1046.rotation = new pc.Quat(i1047[11], i1047[12], i1047[13], i1047[14])
  i1046.scale = new pc.Vec3( i1047[15], i1047[16], i1047[17] )
  return i1046
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'm_FillRect')
  request.r(i1049[2], i1049[3], 0, i1048, 'm_HandleRect')
  i1048.m_Direction = i1049[4]
  i1048.m_MinValue = i1049[5]
  i1048.m_MaxValue = i1049[6]
  i1048.m_WholeNumbers = !!i1049[7]
  i1048.m_Value = i1049[8]
  i1048.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1049[9], i1048.m_OnValueChanged)
  i1048.m_Navigation = request.d('UnityEngine.UI.Navigation', i1049[10], i1048.m_Navigation)
  i1048.m_Transition = i1049[11]
  i1048.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1049[12], i1048.m_Colors)
  i1048.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1049[13], i1048.m_SpriteState)
  i1048.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1049[14], i1048.m_AnimationTriggers)
  i1048.m_Interactable = !!i1049[15]
  request.r(i1049[16], i1049[17], 0, i1048, 'm_TargetGraphic')
  return i1048
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1051 = data
  i1050.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1051[0], i1050.m_PersistentCalls)
  return i1050
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('UnityEngine.Events.PersistentCall', i1055[i + 0]));
  }
  i1052.m_Calls = i1054
  return i1052
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'm_Target')
  i1058.m_TargetAssemblyTypeName = i1059[2]
  i1058.m_MethodName = i1059[3]
  i1058.m_Mode = i1059[4]
  i1058.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1059[5], i1058.m_Arguments)
  i1058.m_CallState = i1059[6]
  return i1058
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1061 = data
  i1060.m_Mode = i1061[0]
  i1060.m_WrapAround = !!i1061[1]
  request.r(i1061[2], i1061[3], 0, i1060, 'm_SelectOnUp')
  request.r(i1061[4], i1061[5], 0, i1060, 'm_SelectOnDown')
  request.r(i1061[6], i1061[7], 0, i1060, 'm_SelectOnLeft')
  request.r(i1061[8], i1061[9], 0, i1060, 'm_SelectOnRight')
  return i1060
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1063 = data
  i1062.m_NormalColor = new pc.Color(i1063[0], i1063[1], i1063[2], i1063[3])
  i1062.m_HighlightedColor = new pc.Color(i1063[4], i1063[5], i1063[6], i1063[7])
  i1062.m_PressedColor = new pc.Color(i1063[8], i1063[9], i1063[10], i1063[11])
  i1062.m_SelectedColor = new pc.Color(i1063[12], i1063[13], i1063[14], i1063[15])
  i1062.m_DisabledColor = new pc.Color(i1063[16], i1063[17], i1063[18], i1063[19])
  i1062.m_ColorMultiplier = i1063[20]
  i1062.m_FadeDuration = i1063[21]
  return i1062
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_HighlightedSprite')
  request.r(i1065[2], i1065[3], 0, i1064, 'm_PressedSprite')
  request.r(i1065[4], i1065[5], 0, i1064, 'm_SelectedSprite')
  request.r(i1065[6], i1065[7], 0, i1064, 'm_DisabledSprite')
  return i1064
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1067 = data
  i1066.m_NormalTrigger = i1067[0]
  i1066.m_HighlightedTrigger = i1067[1]
  i1066.m_PressedTrigger = i1067[2]
  i1066.m_SelectedTrigger = i1067[3]
  i1066.m_DisabledTrigger = i1067[4]
  return i1066
}

Deserializers["ComboVfx"] = function (request, data, root) {
  var i1068 = root || request.c( 'ComboVfx' )
  var i1069 = data
  i1068.comboCount = i1069[0]
  request.r(i1069[1], i1069[2], 0, i1068, 'comboText')
  request.r(i1069[3], i1069[4], 0, i1068, 'comboSlider')
  request.r(i1069[5], i1069[6], 0, i1068, 'fillSlider')
  request.r(i1069[7], i1069[8], 0, i1068, 'flameRed')
  request.r(i1069[9], i1069[10], 0, i1068, 'flameViolet')
  request.r(i1069[11], i1069[12], 0, i1068, 'flameBlue')
  var i1071 = i1069[13]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1068.prefabTextVfxs = i1070
  request.r(i1069[14], i1069[15], 0, i1068, 'parentSpawnVfx')
  i1068.offsetSpawnTextVfx = new pc.Vec3( i1069[16], i1069[17], i1069[18] )
  request.r(i1069[19], i1069[20], 0, i1068, 'lvCtr')
  request.r(i1069[21], i1069[22], 0, i1068, 'noticeNewMaxComboVfx')
  request.r(i1069[23], i1069[24], 0, i1068, 'posSpawnNotice')
  i1068.timeCount = i1069[25]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1075 = data
  i1074.cullTransparentMesh = !!i1075[0]
  return i1074
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.Image' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_Sprite')
  i1076.m_Type = i1077[2]
  i1076.m_PreserveAspect = !!i1077[3]
  i1076.m_FillCenter = !!i1077[4]
  i1076.m_FillMethod = i1077[5]
  i1076.m_FillAmount = i1077[6]
  i1076.m_FillClockwise = !!i1077[7]
  i1076.m_FillOrigin = i1077[8]
  i1076.m_UseSpriteMesh = !!i1077[9]
  i1076.m_PixelsPerUnitMultiplier = i1077[10]
  request.r(i1077[11], i1077[12], 0, i1076, 'm_Material')
  i1076.m_Maskable = !!i1077[13]
  i1076.m_Color = new pc.Color(i1077[14], i1077[15], i1077[16], i1077[17])
  i1076.m_RaycastTarget = !!i1077[18]
  i1076.m_RaycastPadding = new pc.Vec4( i1077[19], i1077[20], i1077[21], i1077[22] )
  return i1076
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.Text' )
  var i1079 = data
  i1078.m_FontData = request.d('UnityEngine.UI.FontData', i1079[0], i1078.m_FontData)
  i1078.m_Text = i1079[1]
  request.r(i1079[2], i1079[3], 0, i1078, 'm_Material')
  i1078.m_Maskable = !!i1079[4]
  i1078.m_Color = new pc.Color(i1079[5], i1079[6], i1079[7], i1079[8])
  i1078.m_RaycastTarget = !!i1079[9]
  i1078.m_RaycastPadding = new pc.Vec4( i1079[10], i1079[11], i1079[12], i1079[13] )
  return i1078
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'm_Font')
  i1080.m_FontSize = i1081[2]
  i1080.m_FontStyle = i1081[3]
  i1080.m_BestFit = !!i1081[4]
  i1080.m_MinSize = i1081[5]
  i1080.m_MaxSize = i1081[6]
  i1080.m_Alignment = i1081[7]
  i1080.m_AlignByGeometry = !!i1081[8]
  i1080.m_RichText = !!i1081[9]
  i1080.m_HorizontalOverflow = i1081[10]
  i1080.m_VerticalOverflow = i1081[11]
  i1080.m_LineSpacing = i1081[12]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.planeDistance = i1083[1]
  i1082.referencePixelsPerUnit = i1083[2]
  i1082.isFallbackOverlay = !!i1083[3]
  i1082.renderMode = i1083[4]
  i1082.renderOrder = i1083[5]
  i1082.sortingLayerName = i1083[6]
  i1082.sortingOrder = i1083[7]
  i1082.scaleFactor = i1083[8]
  request.r(i1083[9], i1083[10], 0, i1082, 'worldCamera')
  i1082.overrideSorting = !!i1083[11]
  i1082.pixelPerfect = !!i1083[12]
  i1082.targetDisplay = i1083[13]
  i1082.overridePixelPerfect = !!i1083[14]
  return i1082
}

Deserializers["BetterOutline"] = function (request, data, root) {
  var i1084 = root || request.c( 'BetterOutline' )
  var i1085 = data
  i1084.m_EffectColor = new pc.Color(i1085[0], i1085[1], i1085[2], i1085[3])
  i1084.m_EffectDistance = new pc.Vec2( i1085[4], i1085[5] )
  i1084.m_UseGraphicAlpha = !!i1085[6]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1087 = data
  i1086.enabled = !!i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'sharedMaterial')
  var i1089 = i1087[3]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1086.sharedMaterials = i1088
  i1086.receiveShadows = !!i1087[4]
  i1086.shadowCastingMode = i1087[5]
  i1086.sortingLayerID = i1087[6]
  i1086.sortingOrder = i1087[7]
  i1086.lightmapIndex = i1087[8]
  i1086.lightmapSceneIndex = i1087[9]
  i1086.lightmapScaleOffset = new pc.Vec4( i1087[10], i1087[11], i1087[12], i1087[13] )
  i1086.lightProbeUsage = i1087[14]
  i1086.reflectionProbeUsage = i1087[15]
  i1086.color = new pc.Color(i1087[16], i1087[17], i1087[18], i1087[19])
  request.r(i1087[20], i1087[21], 0, i1086, 'sprite')
  i1086.flipX = !!i1087[22]
  i1086.flipY = !!i1087[23]
  i1086.drawMode = i1087[24]
  i1086.size = new pc.Vec2( i1087[25], i1087[26] )
  i1086.tileMode = i1087[27]
  i1086.adaptiveModeThreshold = i1087[28]
  i1086.maskInteraction = i1087[29]
  i1086.spriteSortPoint = i1087[30]
  return i1086
}

Deserializers["Grill"] = function (request, data, root) {
  var i1090 = root || request.c( 'Grill' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 1, i1092, '')
  }
  i1090.liSprRend = i1092
  var i1095 = i1091[1]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(i1095[i + 0]);
  }
  i1090.liSprRendDefaultLayer = i1094
  request.r(i1091[2], i1091[3], 0, i1090, 'platePrefab')
  request.r(i1091[4], i1091[5], 0, i1090, 'skewerPrefab')
  request.r(i1091[6], i1091[7], 0, i1090, 'sprRendGrill')
  request.r(i1091[8], i1091[9], 0, i1090, 'lockGrillOB')
  request.r(i1091[10], i1091[11], 0, i1090, 'animSmoke')
  request.r(i1091[12], i1091[13], 0, i1090, 'sprOnePlace')
  request.r(i1091[14], i1091[15], 0, i1090, 'sprThreePlaces')
  request.r(i1091[16], i1091[17], 0, i1090, 'sprSale')
  request.r(i1091[18], i1091[19], 0, i1090, 'sprNotMatch3')
  request.r(i1091[20], i1091[21], 0, i1090, 'posSpawnPlate')
  i1090.offsetYPlate = i1091[22]
  i1090.grillUnlockType = i1091[23]
  i1090.grillType = i1091[24]
  i1090.numberSkewerUnlock = i1091[25]
  i1090.skewerTypeUnlock = i1091[26]
  i1090.numOfPosPlaceSkewers = i1091[27]
  i1090.isSaleGrill = !!i1091[28]
  i1090.maxPlace = i1091[29]
  var i1097 = i1091[30]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('PosPlaceAtGrill')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('PosPlaceAtGrill', i1097[i + 0]));
  }
  i1090.posPlaceSkewers = i1096
  var i1099 = i1091[31]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('Plate')))
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 1, i1098, '')
  }
  i1090.plates = i1098
  request.r(i1091[32], i1091[33], 0, i1090, 'levelCtr')
  i1090.grillData = request.d('GrillData', i1091[34], i1090.grillData)
  i1090.sortingLayerPress = i1091[35]
  i1090._offSetDrag = new pc.Vec2( i1091[36], i1091[37] )
  var i1101 = i1091[38]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(i1101[i + 0]);
  }
  i1090.liSprRendDefaultOrderLayer = i1100
  return i1090
}

Deserializers["PosPlaceAtGrill"] = function (request, data, root) {
  var i1108 = root || request.c( 'PosPlaceAtGrill' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'grill')
  request.r(i1109[2], i1109[3], 0, i1108, 'pos')
  request.r(i1109[4], i1109[5], 0, i1108, 'skewerAtPos')
  return i1108
}

Deserializers["GrillData"] = function (request, data, root) {
  var i1112 = root || request.c( 'GrillData' )
  var i1113 = data
  i1112.grillType = i1113[0]
  i1112.typeUnlock = i1113[1]
  i1112.isSaleGrill = !!i1113[2]
  i1112.skewerTypeUnLocked = i1113[3]
  i1112.numOfPosSkewer = i1113[4]
  i1112.numberSkewerUnlock = i1113[5]
  i1112.rowIndex = i1113[6]
  i1112.colIndex = i1113[7]
  var i1115 = i1113[8]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('PlateData')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('PlateData', i1115[i + 0]));
  }
  i1112.plateDatas = i1114
  var i1117 = i1113[9]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('SkewerData', i1117[i + 0]));
  }
  i1112.skewerDatasOnGrill = i1116
  return i1112
}

Deserializers["PlateData"] = function (request, data, root) {
  var i1120 = root || request.c( 'PlateData' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('SkewerData', i1123[i + 0]));
  }
  i1120.skewers = i1122
  return i1120
}

Deserializers["SkewerData"] = function (request, data, root) {
  var i1126 = root || request.c( 'SkewerData' )
  var i1127 = data
  i1126.skewerType = i1127[0]
  i1126.typeAppear = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1131 = data
  i1130.usedByComposite = !!i1131[0]
  i1130.autoTiling = !!i1131[1]
  i1130.size = new pc.Vec2( i1131[2], i1131[3] )
  i1130.edgeRadius = i1131[4]
  i1130.enabled = !!i1131[5]
  i1130.isTrigger = !!i1131[6]
  i1130.usedByEffector = !!i1131[7]
  i1130.density = i1131[8]
  i1130.offset = new pc.Vec2( i1131[9], i1131[10] )
  request.r(i1131[11], i1131[12], 0, i1130, 'material')
  return i1130
}

Deserializers["SmokeGrill"] = function (request, data, root) {
  var i1132 = root || request.c( 'SmokeGrill' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'anim')
  i1132.nameAnim = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'animatorController')
  request.r(i1135[2], i1135[3], 0, i1134, 'avatar')
  i1134.updateMode = i1135[4]
  i1134.hasTransformHierarchy = !!i1135[5]
  i1134.applyRootMotion = !!i1135[6]
  var i1137 = i1135[7]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.humanBones = i1136
  i1134.enabled = !!i1135[8]
  return i1134
}

Deserializers["LockOfGrillOB"] = function (request, data, root) {
  var i1140 = root || request.c( 'LockOfGrillOB' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 1, i1142, '')
  }
  i1140.liSprRend = i1142
  var i1145 = i1141[1]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.add(i1145[i + 0]);
  }
  i1140.liSprRendDefaultLayer = i1144
  request.r(i1141[2], i1141[3], 0, i1140, 'grill')
  request.r(i1141[4], i1141[5], 0, i1140, 'sprRendGrillLocked')
  request.r(i1141[6], i1141[7], 0, i1140, 'sprRendAdsUnlock')
  request.r(i1141[8], i1141[9], 0, i1140, 'sprRendSkewerUnlock')
  request.r(i1141[10], i1141[11], 0, i1140, 'sprLockedByNumber')
  request.r(i1141[12], i1141[13], 0, i1140, 'textLocked')
  request.r(i1141[14], i1141[15], 0, i1140, 'textNumberSkewer')
  request.r(i1141[16], i1141[17], 0, i1140, 'col')
  i1140.sortingLayerPress = i1141[18]
  i1140._offSetDrag = new pc.Vec2( i1141[19], i1141[20] )
  var i1147 = i1141[21]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(i1147[i + 0]);
  }
  i1140.liSprRendDefaultOrderLayer = i1146
  return i1140
}

Deserializers["Plate"] = function (request, data, root) {
  var i1148 = root || request.c( 'Plate' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('posAtPlate')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('posAtPlate', i1151[i + 0]));
  }
  i1148.posPlaceSkewers = i1150
  request.r(i1149[1], i1149[2], 0, i1148, 'skewerPrefab')
  request.r(i1149[3], i1149[4], 0, i1148, 'grill')
  return i1148
}

Deserializers["posAtPlate"] = function (request, data, root) {
  var i1154 = root || request.c( 'posAtPlate' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'plate')
  request.r(i1155[2], i1155[3], 0, i1154, 'pos')
  request.r(i1155[4], i1155[5], 0, i1154, 'skewerAtPos')
  return i1154
}

Deserializers["Skewer"] = function (request, data, root) {
  var i1156 = root || request.c( 'Skewer' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 1, i1158, '')
  }
  i1156.liSprRend = i1158
  var i1161 = i1157[1]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(i1161[i + 0]);
  }
  i1156.liSprRendDefaultLayer = i1160
  i1156.skewerType = i1157[2]
  i1156.skewerTypeAppear = i1157[3]
  request.r(i1157[4], i1157[5], 0, i1156, 'sprRend')
  request.r(i1157[6], i1157[7], 0, i1156, 'sprRendSkin')
  request.r(i1157[8], i1157[9], 0, i1156, 'sprSecret')
  var i1163 = i1157[10]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 1, i1162, '')
  }
  i1156.sprIces = i1162
  request.r(i1157[11], i1157[12], 0, i1156, 'sprOutLine')
  request.r(i1157[13], i1157[14], 0, i1156, 'animBreakSecretSkin')
  request.r(i1157[15], i1157[16], 0, i1156, 'vfxBreakIce')
  request.r(i1157[17], i1157[18], 0, i1156, 'vfxSmoke')
  var i1165 = i1157[19]
  var i1164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 1, i1164, '')
  }
  i1156.posIces = i1164
  request.r(i1157[20], i1157[21], 0, i1156, 'rb')
  request.r(i1157[22], i1157[23], 0, i1156, 'col')
  request.r(i1157[24], i1157[25], 0, i1156, 'levelCtrl')
  i1156.curPosIn = request.d('PosPlaceAtGrill', i1157[26], i1156.curPosIn)
  i1156.lastPosIn = request.d('PosPlaceAtGrill', i1157[27], i1156.lastPosIn)
  i1156.posAtPlate = request.d('posAtPlate', i1157[28], i1156.posAtPlate)
  var i1167 = i1157[29]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1156.colGrills = i1166
  i1156.defaultScale = new pc.Vec3( i1157[30], i1157[31], i1157[32] )
  i1156.pressScale = new pc.Vec3( i1157[33], i1157[34], i1157[35] )
  i1156.pressRo = new pc.Vec3( i1157[36], i1157[37], i1157[38] )
  i1156.putInToSound = i1157[39]
  i1156.pickUpSound = i1157[40]
  i1156.putDownSound = i1157[41]
  request.r(i1157[42], i1157[43], 0, i1156, 'parent')
  i1156.limitDistance = i1157[44]
  i1156._isPressing = !!i1157[45]
  i1156._isMoveByDragg = !!i1157[46]
  i1156.sortingLayerPress = i1157[47]
  i1156._offSetDrag = new pc.Vec2( i1157[48], i1157[49] )
  var i1169 = i1157[50]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(i1169[i + 0]);
  }
  i1156.liSprRendDefaultOrderLayer = i1168
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1177 = data
  i1176.bodyType = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'material')
  i1176.simulated = !!i1177[3]
  i1176.useAutoMass = !!i1177[4]
  i1176.mass = i1177[5]
  i1176.drag = i1177[6]
  i1176.angularDrag = i1177[7]
  i1176.gravityScale = i1177[8]
  i1176.collisionDetectionMode = i1177[9]
  i1176.sleepMode = i1177[10]
  i1176.constraints = i1177[11]
  return i1176
}

Deserializers["TestMouse"] = function (request, data, root) {
  var i1178 = root || request.c( 'TestMouse' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'skewer')
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1181 = data
  i1180.center = new pc.Vec3( i1181[0], i1181[1], i1181[2] )
  i1180.size = new pc.Vec3( i1181[3], i1181[4], i1181[5] )
  i1180.enabled = !!i1181[6]
  i1180.isTrigger = !!i1181[7]
  request.r(i1181[8], i1181[9], 0, i1180, 'material')
  return i1180
}

Deserializers["Shipper"] = function (request, data, root) {
  var i1182 = root || request.c( 'Shipper' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'animOrderAppear')
  request.r(i1183[2], i1183[3], 0, i1182, 'animShipperSmall')
  request.r(i1183[4], i1183[5], 0, i1182, 'parentSpawnItem')
  request.r(i1183[6], i1183[7], 0, i1182, 'cover')
  request.r(i1183[8], i1183[9], 0, i1182, 'itemOrderPrefab')
  request.r(i1183[10], i1183[11], 0, i1182, 'sliderTimer')
  request.r(i1183[12], i1183[13], 0, i1182, 'textTimer')
  request.r(i1183[14], i1183[15], 0, i1182, 'posAppear')
  request.r(i1183[16], i1183[17], 0, i1182, 'posDriveTo')
  request.r(i1183[18], i1183[19], 0, i1182, 'posDriveAway')
  request.r(i1183[20], i1183[21], 0, i1182, 'emotionHappy')
  request.r(i1183[22], i1183[23], 0, i1182, 'emotionAngry')
  var i1185 = i1183[24]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('ItemOrder')))
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 1, i1184, '')
  }
  i1182.itemOrders = i1184
  request.r(i1183[25], i1183[26], 0, i1182, 'levelCtr')
  i1182.isCompletedOrder = !!i1183[27]
  return i1182
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1189 = data
  i1188.m_Spacing = i1189[0]
  i1188.m_ChildForceExpandWidth = !!i1189[1]
  i1188.m_ChildForceExpandHeight = !!i1189[2]
  i1188.m_ChildControlWidth = !!i1189[3]
  i1188.m_ChildControlHeight = !!i1189[4]
  i1188.m_ChildScaleWidth = !!i1189[5]
  i1188.m_ChildScaleHeight = !!i1189[6]
  i1188.m_ReverseArrangement = !!i1189[7]
  i1188.m_Padding = UnityEngine.RectOffset.FromPaddings(i1189[8], i1189[9], i1189[10], i1189[11])
  i1188.m_ChildAlignment = i1189[12]
  return i1188
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1190 = root || request.c( 'UnityEngine.UI.Button' )
  var i1191 = data
  i1190.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1191[0], i1190.m_OnClick)
  i1190.m_Navigation = request.d('UnityEngine.UI.Navigation', i1191[1], i1190.m_Navigation)
  i1190.m_Transition = i1191[2]
  i1190.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1191[3], i1190.m_Colors)
  i1190.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1191[4], i1190.m_SpriteState)
  i1190.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1191[5], i1190.m_AnimationTriggers)
  i1190.m_Interactable = !!i1191[6]
  request.r(i1191[7], i1191[8], 0, i1190, 'm_TargetGraphic')
  return i1190
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1193 = data
  i1192.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1193[0], i1192.m_PersistentCalls)
  return i1192
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'm_ObjectArgument')
  i1194.m_ObjectArgumentAssemblyTypeName = i1195[2]
  i1194.m_IntArgument = i1195[3]
  i1194.m_FloatArgument = i1195[4]
  i1194.m_StringArgument = i1195[5]
  i1194.m_BoolArgument = !!i1195[6]
  return i1194
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1197 = data
  i1196.m_IgnoreReversedGraphics = !!i1197[0]
  i1196.m_BlockingObjects = i1197[1]
  i1196.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1197[2] )
  return i1196
}

Deserializers["ItemOrder"] = function (request, data, root) {
  var i1198 = root || request.c( 'ItemOrder' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'bg')
  request.r(i1199[2], i1199[3], 0, i1198, 'normalBg')
  request.r(i1199[4], i1199[5], 0, i1198, 'saleBg')
  request.r(i1199[6], i1199[7], 0, i1198, 'iconSkewer')
  request.r(i1199[8], i1199[9], 0, i1198, 'iconCompleted')
  request.r(i1199[10], i1199[11], 0, i1198, 'shipper')
  i1198.idSkewer = i1199[12]
  request.r(i1199[13], i1199[14], 0, i1198, 'level')
  i1198.isDone = !!i1199[15]
  i1198.isSaleItem = !!i1199[16]
  return i1198
}

Deserializers["PlateCompleted"] = function (request, data, root) {
  var i1200 = root || request.c( 'PlateCompleted' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'sprPlate')
  var i1203 = i1201[2]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1200.posMoveInCompletedSkewers = i1202
  request.r(i1201[3], i1201[4], 0, i1200, 'vfxStar')
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'clip')
  request.r(i1205[2], i1205[3], 0, i1204, 'outputAudioMixerGroup')
  i1204.playOnAwake = !!i1205[4]
  i1204.loop = !!i1205[5]
  i1204.time = i1205[6]
  i1204.volume = i1205[7]
  i1204.pitch = i1205[8]
  i1204.enabled = !!i1205[9]
  return i1204
}

Deserializers["EpicToonFX.ETFXLightFade"] = function (request, data, root) {
  var i1206 = root || request.c( 'EpicToonFX.ETFXLightFade' )
  var i1207 = data
  i1206.life = i1207[0]
  i1206.killAfterLife = !!i1207[1]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1209 = data
  i1208.enabled = !!i1209[0]
  i1208.type = i1209[1]
  i1208.color = new pc.Color(i1209[2], i1209[3], i1209[4], i1209[5])
  i1208.cullingMask = i1209[6]
  i1208.intensity = i1209[7]
  i1208.range = i1209[8]
  i1208.spotAngle = i1209[9]
  i1208.shadows = i1209[10]
  i1208.shadowNormalBias = i1209[11]
  i1208.shadowBias = i1209[12]
  i1208.shadowStrength = i1209[13]
  i1208.shadowResolution = i1209[14]
  i1208.lightmapBakeType = i1209[15]
  i1208.renderMode = i1209[16]
  request.r(i1209[17], i1209[18], 0, i1208, 'cookie')
  i1208.cookieSize = i1209[19]
  return i1208
}

Deserializers["Popup.PopupSystem"] = function (request, data, root) {
  var i1210 = root || request.c( 'Popup.PopupSystem' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'popupCamera')
  request.r(i1211[2], i1211[3], 0, i1210, 'bgEffect')
  request.r(i1211[4], i1211[5], 0, i1210, 'backBlocker')
  request.r(i1211[6], i1211[7], 0, i1210, 'rootTransform')
  request.r(i1211[8], i1211[9], 0, i1210, 'addOnTransform')
  var i1213 = i1211[10]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('Popup.PopupSystem+PopupTypePrefabPair')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('Popup.PopupSystem+PopupTypePrefabPair', i1213[i + 0]));
  }
  i1210.popupList = i1212
  i1210.testPopup = i1211[11]
  return i1210
}

Deserializers["Popup.PopupSystem+PopupTypePrefabPair"] = function (request, data, root) {
  var i1216 = root || request.c( 'Popup.PopupSystem+PopupTypePrefabPair' )
  var i1217 = data
  i1216.type = i1217[0]
  request.r(i1217[1], i1217[2], 0, i1216, 'prefab')
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1219 = data
  i1218.enabled = !!i1219[0]
  i1218.aspect = i1219[1]
  i1218.orthographic = !!i1219[2]
  i1218.orthographicSize = i1219[3]
  i1218.backgroundColor = new pc.Color(i1219[4], i1219[5], i1219[6], i1219[7])
  i1218.nearClipPlane = i1219[8]
  i1218.farClipPlane = i1219[9]
  i1218.fieldOfView = i1219[10]
  i1218.depth = i1219[11]
  i1218.clearFlags = i1219[12]
  i1218.cullingMask = i1219[13]
  i1218.rect = i1219[14]
  request.r(i1219[15], i1219[16], 0, i1218, 'targetTexture')
  i1218.usePhysicalProperties = !!i1219[17]
  i1218.focalLength = i1219[18]
  i1218.sensorSize = new pc.Vec2( i1219[19], i1219[20] )
  i1218.lensShift = new pc.Vec2( i1219[21], i1219[22] )
  i1218.gateFit = i1219[23]
  i1218.commandBufferCount = i1219[24]
  i1218.cameraType = i1219[25]
  return i1218
}

Deserializers["PopupDarkEffect"] = function (request, data, root) {
  var i1220 = root || request.c( 'PopupDarkEffect' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'image')
  i1220.enabledColor = new pc.Color(i1221[2], i1221[3], i1221[4], i1221[5])
  i1220.disabledColor = new pc.Color(i1221[6], i1221[7], i1221[8], i1221[9])
  i1220.enabledDuration = i1221[10]
  i1220.disabledDuration = i1221[11]
  return i1220
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1223 = data
  i1222.m_UiScaleMode = i1223[0]
  i1222.m_ReferencePixelsPerUnit = i1223[1]
  i1222.m_ScaleFactor = i1223[2]
  i1222.m_ReferenceResolution = new pc.Vec2( i1223[3], i1223[4] )
  i1222.m_ScreenMatchMode = i1223[5]
  i1222.m_MatchWidthOrHeight = i1223[6]
  i1222.m_PhysicalUnit = i1223[7]
  i1222.m_FallbackScreenDPI = i1223[8]
  i1222.m_DefaultSpriteDPI = i1223[9]
  i1222.m_DynamicPixelsPerUnit = i1223[10]
  i1222.m_PresetInfoIsWorld = !!i1223[11]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1225 = data
  i1224.m_Alpha = i1225[0]
  i1224.m_Interactable = !!i1225[1]
  i1224.m_BlocksRaycasts = !!i1225[2]
  i1224.m_IgnoreParentGroups = !!i1225[3]
  i1224.enabled = !!i1225[4]
  return i1224
}

Deserializers["PopupLiteMessage"] = function (request, data, root) {
  var i1226 = root || request.c( 'PopupLiteMessage' )
  var i1227 = data
  request.r(i1227[0], i1227[1], 0, i1226, 'messageText')
  i1226.showDuration = i1227[2]
  i1226.fadeOutDuration = i1227[3]
  i1226.info = request.d('CurrencyInfo', i1227[4], i1226.info)
  i1226.cancelable = !!i1227[5]
  return i1226
}

Deserializers["CurrencyInfo"] = function (request, data, root) {
  var i1228 = root || request.c( 'CurrencyInfo' )
  var i1229 = data
  i1228.showCurrency = !!i1229[0]
  i1228.showSetting = !!i1229[1]
  i1228.showMoreGem = !!i1229[2]
  i1228.showMoreCoin = !!i1229[3]
  return i1228
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1231 = data
  i1230.m_EffectColor = new pc.Color(i1231[0], i1231[1], i1231[2], i1231[3])
  i1230.m_EffectDistance = new pc.Vec2( i1231[4], i1231[5] )
  i1230.m_UseGraphicAlpha = !!i1231[6]
  return i1230
}

Deserializers["PopupBlurEffect"] = function (request, data, root) {
  var i1232 = root || request.c( 'PopupBlurEffect' )
  var i1233 = data
  request.r(i1233[0], i1233[1], 0, i1232, 'image')
  request.r(i1233[2], i1233[3], 0, i1232, 'material')
  i1232.enabledDuration = i1233[4]
  i1232.disabledDuration = i1233[5]
  return i1232
}

Deserializers["Popup.BlockingImage"] = function (request, data, root) {
  var i1234 = root || request.c( 'Popup.BlockingImage' )
  var i1235 = data
  return i1234
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'm_Texture')
  i1236.m_UVRect = UnityEngine.Rect.MinMaxRect(i1237[2], i1237[3], i1237[4], i1237[5])
  request.r(i1237[6], i1237[7], 0, i1236, 'm_Material')
  i1236.m_Maskable = !!i1237[8]
  i1236.m_Color = new pc.Color(i1237[9], i1237[10], i1237[11], i1237[12])
  i1236.m_RaycastTarget = !!i1237[13]
  i1236.m_RaycastPadding = new pc.Vec4( i1237[14], i1237[15], i1237[16], i1237[17] )
  return i1236
}

Deserializers["PopupSample1"] = function (request, data, root) {
  var i1238 = root || request.c( 'PopupSample1' )
  var i1239 = data
  i1238.info = request.d('CurrencyInfo', i1239[0], i1238.info)
  i1238.cancelable = !!i1239[1]
  return i1238
}

Deserializers["PopupSample2"] = function (request, data, root) {
  var i1240 = root || request.c( 'PopupSample2' )
  var i1241 = data
  i1240.info = request.d('CurrencyInfo', i1241[0], i1240.info)
  i1240.cancelable = !!i1241[1]
  return i1240
}

Deserializers["RestUI"] = function (request, data, root) {
  var i1242 = root || request.c( 'RestUI' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'canvas')
  return i1242
}

Deserializers["PopupGameWin"] = function (request, data, root) {
  var i1244 = root || request.c( 'PopupGameWin' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'comboCoinText')
  i1244.comboCoinBonus = i1245[2]
  request.r(i1245[3], i1245[4], 0, i1244, 'animIcon')
  i1244.info = request.d('CurrencyInfo', i1245[5], i1244.info)
  i1244.cancelable = !!i1245[6]
  request.r(i1245[7], i1245[8], 0, i1244, 'ribonWin')
  request.r(i1245[9], i1245[10], 0, i1244, 'comboWrap')
  request.r(i1245[11], i1245[12], 0, i1244, 'coinBounusNormalText')
  request.r(i1245[13], i1245[14], 0, i1244, 'coinBonusAdsText')
  i1244.coinBonusNormal = i1245[15]
  i1244.coinBonusAds = i1245[16]
  request.r(i1245[17], i1245[18], 0, i1244, 'btnNext')
  request.r(i1245[19], i1245[20], 0, i1244, 'btnAddCoinAds')
  request.r(i1245[21], i1245[22], 0, i1244, 'btnHome')
  request.r(i1245[23], i1245[24], 0, i1244, 'btnAddHeart')
  request.r(i1245[25], i1245[26], 0, i1244, 'btnAddCoin')
  request.r(i1245[27], i1245[28], 0, i1244, 'anim')
  request.r(i1245[29], i1245[30], 0, i1244, 'particalMoney')
  request.r(i1245[31], i1245[32], 0, i1244, 'textHeart')
  request.r(i1245[33], i1245[34], 0, i1244, 'textTimer')
  request.r(i1245[35], i1245[36], 0, i1244, 'textCoin')
  request.r(i1245[37], i1245[38], 0, i1244, 'iconHeartInf')
  return i1244
}

Deserializers["CoinControl"] = function (request, data, root) {
  var i1246 = root || request.c( 'CoinControl' )
  var i1247 = data
  i1246.coinNo = i1247[0]
  request.r(i1247[1], i1247[2], 0, i1246, 'coinText')
  var i1249 = i1247[3]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 2, i1248, '')
  }
  i1246.individualCoins = i1248
  request.r(i1247[4], i1247[5], 0, i1246, 'iconCoin')
  request.r(i1247[6], i1247[7], 0, i1246, 'lightAcross')
  i1246.temp = new pc.Vec3( i1247[8], i1247[9], i1247[10] )
  return i1246
}

Deserializers["SafeArea"] = function (request, data, root) {
  var i1250 = root || request.c( 'SafeArea' )
  var i1251 = data
  return i1250
}

Deserializers["Coffee.UIExtensions.UIParticle"] = function (request, data, root) {
  var i1252 = root || request.c( 'Coffee.UIExtensions.UIParticle' )
  var i1253 = data
  i1252.m_IsTrail = !!i1253[0]
  i1252.m_IgnoreCanvasScaler = !!i1253[1]
  i1252.m_AbsoluteMode = !!i1253[2]
  i1252.m_Scale3D = new pc.Vec3( i1253[3], i1253[4], i1253[5] )
  var i1255 = i1253[6]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Coffee.UIExtensions.AnimatableProperty', i1255[i + 0]) );
  }
  i1252.m_AnimatableProperties = i1254
  var i1257 = i1253[7]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 1, i1256, '')
  }
  i1252.m_Particles = i1256
  i1252.m_MeshSharing = i1253[8]
  i1252.m_GroupId = i1253[9]
  i1252.m_GroupMaxId = i1253[10]
  i1252.m_PositionMode = i1253[11]
  i1252.m_AutoScaling = !!i1253[12]
  i1252.m_AutoScalingMode = i1253[13]
  i1252.m_UseCustomView = !!i1253[14]
  i1252.m_CustomViewSize = i1253[15]
  i1252.m_TimeScaleMultiplier = i1253[16]
  request.r(i1253[17], i1253[18], 0, i1252, 'm_Material')
  i1252.m_Maskable = !!i1253[19]
  i1252.m_Color = new pc.Color(i1253[20], i1253[21], i1253[22], i1253[23])
  i1252.m_RaycastTarget = !!i1253[24]
  i1252.m_RaycastPadding = new pc.Vec4( i1253[25], i1253[26], i1253[27], i1253[28] )
  return i1252
}

Deserializers["Coffee.UIExtensions.AnimatableProperty"] = function (request, data, root) {
  var i1260 = root || request.c( 'Coffee.UIExtensions.AnimatableProperty' )
  var i1261 = data
  i1260.m_Name = i1261[0]
  i1260.m_Type = i1261[1]
  return i1260
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i1264 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'skeletonDataAsset')
  request.r(i1265[2], i1265[3], 0, i1264, 'additiveMaterial')
  request.r(i1265[4], i1265[5], 0, i1264, 'multiplyMaterial')
  request.r(i1265[6], i1265[7], 0, i1264, 'screenMaterial')
  i1264.initialSkinName = i1265[8]
  i1264.initialFlipX = !!i1265[9]
  i1264.initialFlipY = !!i1265[10]
  i1264.startingAnimation = i1265[11]
  i1264.startingLoop = !!i1265[12]
  i1264.timeScale = i1265[13]
  i1264.freeze = !!i1265[14]
  i1264.layoutScaleMode = i1265[15]
  i1264.updateWhenInvisible = i1265[16]
  i1264.allowMultipleCanvasRenderers = !!i1265[17]
  var i1267 = i1265[18]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i1267.length; i += 2) {
  request.r(i1267[i + 0], i1267[i + 1], 1, i1266, '')
  }
  i1264.canvasRenderers = i1266
  i1264.enableSeparatorSlots = !!i1265[19]
  i1264.updateSeparatorPartLocation = !!i1265[20]
  i1264.updateSeparatorPartScale = !!i1265[21]
  i1264.disableMeshAssignmentOnOverride = !!i1265[22]
  i1264.m_SkeletonColor = new pc.Color(i1265[23], i1265[24], i1265[25], i1265[26])
  i1264.referenceSize = new pc.Vec2( i1265[27], i1265[28] )
  i1264.pivotOffset = new pc.Vec2( i1265[29], i1265[30] )
  i1264.referenceScale = i1265[31]
  i1264.layoutScale = i1265[32]
  i1264.rectTransformSize = new pc.Vec2( i1265[33], i1265[34] )
  i1264.editReferenceRect = !!i1265[35]
  var i1269 = i1265[36]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( i1269[i + 0] );
  }
  i1264.separatorSlotNames = i1268
  var i1271 = i1265[37]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1264.separatorParts = i1270
  i1264.physicsPositionInheritanceFactor = new pc.Vec2( i1265[38], i1265[39] )
  i1264.physicsRotationInheritanceFactor = i1265[40]
  request.r(i1265[41], i1265[42], 0, i1264, 'physicsMovementRelativeTo')
  i1264.meshGenerator = request.d('Spine.Unity.MeshGenerator', i1265[43], i1264.meshGenerator)
  i1264.updateTiming = i1265[44]
  i1264.unscaledTime = !!i1265[45]
  request.r(i1265[46], i1265[47], 0, i1264, 'm_Material')
  i1264.m_Maskable = !!i1265[48]
  i1264.m_Color = new pc.Color(i1265[49], i1265[50], i1265[51], i1265[52])
  i1264.m_RaycastTarget = !!i1265[53]
  i1264.m_RaycastPadding = new pc.Vec4( i1265[54], i1265[55], i1265[56], i1265[57] )
  return i1264
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i1276 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i1277 = data
  i1276.settings = request.d('Spine.Unity.MeshGenerator+Settings', i1277[0], i1276.settings)
  return i1276
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1279 = data
  i1278.useClipping = !!i1279[0]
  i1278.zSpacing = i1279[1]
  i1278.tintBlack = !!i1279[2]
  i1278.canvasGroupCompatible = !!i1279[3]
  i1278.pmaVertexColors = !!i1279[4]
  i1278.addNormals = !!i1279[5]
  i1278.calculateTangents = !!i1279[6]
  i1278.immutableTriangles = !!i1279[7]
  return i1278
}

Deserializers["PopupGameLose"] = function (request, data, root) {
  var i1280 = root || request.c( 'PopupGameLose' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'animIcon')
  i1280.info = request.d('CurrencyInfo', i1281[2], i1280.info)
  i1280.cancelable = !!i1281[3]
  request.r(i1281[4], i1281[5], 0, i1280, 'ribonLose')
  request.r(i1281[6], i1281[7], 0, i1280, 'btnContinue')
  request.r(i1281[8], i1281[9], 0, i1280, 'anim')
  request.r(i1281[10], i1281[11], 0, i1280, 'textHeart')
  request.r(i1281[12], i1281[13], 0, i1280, 'textTimer')
  request.r(i1281[14], i1281[15], 0, i1280, 'textCoin')
  request.r(i1281[16], i1281[17], 0, i1280, 'iconHeartInf')
  return i1280
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1283 = data
  i1282.m_EffectColor = new pc.Color(i1283[0], i1283[1], i1283[2], i1283[3])
  i1282.m_EffectDistance = new pc.Vec2( i1283[4], i1283[5] )
  i1282.m_UseGraphicAlpha = !!i1283[6]
  return i1282
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1284 = root || request.c( 'AudioManager' )
  var i1285 = data
  request.r(i1285[0], i1285[1], 0, i1284, 'audioClipTable')
  request.r(i1285[2], i1285[3], 0, i1284, 'effectsSource')
  request.r(i1285[4], i1285[5], 0, i1284, 'musicSource')
  request.r(i1285[6], i1285[7], 0, i1284, 'effectsSource2')
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.index = i1287[1]
  i1286.startup = !!i1287[2]
  return i1286
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'm_FirstSelected')
  i1288.m_sendNavigationEvents = !!i1289[2]
  i1288.m_DragThreshold = i1289[3]
  return i1288
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1291 = data
  i1290.m_HorizontalAxis = i1291[0]
  i1290.m_VerticalAxis = i1291[1]
  i1290.m_SubmitButton = i1291[2]
  i1290.m_CancelButton = i1291[3]
  i1290.m_InputActionsPerSecond = i1291[4]
  i1290.m_RepeatDelay = i1291[5]
  i1290.m_ForceModuleActive = !!i1291[6]
  i1290.m_SendPointerHoverToParent = !!i1291[7]
  return i1290
}

Deserializers["PlayerDataPreview"] = function (request, data, root) {
  var i1292 = root || request.c( 'PlayerDataPreview' )
  var i1293 = data
  i1292.playerData = request.d('PlayerData', i1293[0], i1292.playerData)
  i1292.level = i1293[1]
  return i1292
}

Deserializers["PlayerData"] = function (request, data, root) {
  var i1294 = root || request.c( 'PlayerData' )
  var i1295 = data
  i1294.languageType = i1295[0]
  i1294.localFirstActiveTime = i1295[1]
  i1294.localLastActiveTime = i1295[2]
  i1294.lastHeartRecoveryTime = i1295[3]
  i1294.lastClickGetCoinDailyShop = i1295[4]
  i1294.lastClickGetCoinDailyReward = i1295[5]
  i1294.timeToNextHeart = i1295[6]
  i1294.enterGameTimeCount = i1295[7]
  i1294.coinCount = i1295[8]
  i1294.gemCount = i1295[9]
  i1294.curHeart = i1295[10]
  i1294.maxHeart = i1295[11]
  i1294.numOfRemoveMatch3Bts = i1295[12]
  i1294.numOfSwapBts = i1295[13]
  i1294.numOfFreezeTimeBts = i1295[14]
  i1294.numOfBreakIceBts = i1295[15]
  i1294.timeToAddHeart = i1295[16]
  i1294.noAds = !!i1295[17]
  i1294.vip = !!i1295[18]
  i1294.removeAds1dExpiredTime = i1295[19]
  i1294.namePlayer = i1295[20]
  i1294.avatarPLayer = i1295[21]
  i1294.level = i1295[22]
  i1294.fakeIndexLevel = i1295[23]
  i1294.hasInfiniteHearts = !!i1295[24]
  i1294.infiniteHeartsExpireTime = i1295[25]
  i1294.numSkipAds = i1295[26]
  i1294.curPiggyBankCoin = i1295[27]
  i1294.maxPiggyBankCoin = i1295[28]
  i1294.coinTier1PiggyBank = i1295[29]
  i1294.lastClaimedRewardId = i1295[30]
  i1294.checkGetFreeCoin = !!i1295[31]
  i1294.currentDailyBonusDay = i1295[32]
  i1294.lastReceiveDailyBonusTime = i1295[33]
  var i1297 = i1295[34]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(i1297[i + 0]);
  }
  i1294.coinShop = i1296
  var i1299 = i1295[35]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('DailyRewardPlayerState')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('DailyRewardPlayerState', i1299[i + 0]));
  }
  i1294.dailyRewardStates = i1298
  i1294.gameData = request.d('GameData', i1295[36], i1294.gameData)
  i1294.tempData = request.d('TempData', i1295[37], i1294.tempData)
  return i1294
}

Deserializers["DailyRewardPlayerState"] = function (request, data, root) {
  var i1302 = root || request.c( 'DailyRewardPlayerState' )
  var i1303 = data
  i1302.rewardId = i1303[0]
  i1302.state = i1303[1]
  i1302.claimDate = request.d('System.DateTime', i1303[2], i1302.claimDate)
  return i1302
}

Deserializers["GameData"] = function (request, data, root) {
  var i1304 = root || request.c( 'GameData' )
  var i1305 = data
  i1304.musicState = !!i1305[0]
  i1304.soundState = !!i1305[1]
  i1304.vibrateState = !!i1305[2]
  return i1304
}

Deserializers["TempData"] = function (request, data, root) {
  var i1306 = root || request.c( 'TempData' )
  var i1307 = data
  i1306.rewardedVideoCount = i1307[0]
  i1306.lastTimeBBButonShowAd = i1307[1]
  i1306.winLevelCount = i1307[2]
  i1306.loseLevelCount = i1307[3]
  i1306.earnedGemCount = i1307[4]
  i1306.push_earnedGemCount_event = !!i1307[5]
  i1306.spentIAP = i1307[6]
  i1306.push_spentIAP_event = !!i1307[7]
  i1306.push_retention_day7 = !!i1307[8]
  i1306.push_retention_day5 = !!i1307[9]
  i1306.push_retention_day3 = !!i1307[10]
  i1306.push_firstIAP_event = !!i1307[11]
  return i1306
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1308 = root || request.c( 'UIManager' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 2, i1310, '')
  }
  i1308.screens = i1310
  request.r(i1309[1], i1309[2], 0, i1308, 'canvas')
  request.r(i1309[3], i1309[4], 0, i1308, 'camUI')
  request.r(i1309[5], i1309[6], 0, i1308, 'transition')
  return i1308
}

Deserializers["PlayScreen"] = function (request, data, root) {
  var i1314 = root || request.c( 'PlayScreen' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'curLevelCtrl')
  request.r(i1315[2], i1315[3], 0, i1314, 'processSlide')
  request.r(i1315[4], i1315[5], 0, i1314, 'processSliderBooster')
  request.r(i1315[6], i1315[7], 0, i1314, 'timerText')
  request.r(i1315[8], i1315[9], 0, i1314, 'levelText')
  request.r(i1315[10], i1315[11], 0, i1314, 'titleFreeBlock')
  request.r(i1315[12], i1315[13], 0, i1314, 'titleFillBlock')
  request.r(i1315[14], i1315[15], 0, i1314, 'textLv')
  request.r(i1315[16], i1315[17], 0, i1314, 'timerTextTMP')
  request.r(i1315[18], i1315[19], 0, i1314, 'settingBtn')
  request.r(i1315[20], i1315[21], 0, i1314, 'panelDark')
  request.r(i1315[22], i1315[23], 0, i1314, 'vfxFreezeScreen')
  request.r(i1315[24], i1315[25], 0, i1314, 'vfxLimitedTimeWarning')
  request.r(i1315[26], i1315[27], 0, i1314, 'animSuggest')
  i1314.revive = i1315[28]
  i1314.timeLimitLv = i1315[29]
  i1314.isCompletedBooster = !!i1315[30]
  i1314.isFreezeTime = !!i1315[31]
  i1314.hackBooster = !!i1315[32]
  i1314.isShowing = !!i1315[33]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'sharedMesh')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'additionalVertexStreams')
  i1318.enabled = !!i1319[2]
  request.r(i1319[3], i1319[4], 0, i1318, 'sharedMaterial')
  var i1321 = i1319[5]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 2, i1320, '')
  }
  i1318.sharedMaterials = i1320
  i1318.receiveShadows = !!i1319[6]
  i1318.shadowCastingMode = i1319[7]
  i1318.sortingLayerID = i1319[8]
  i1318.sortingOrder = i1319[9]
  i1318.lightmapIndex = i1319[10]
  i1318.lightmapSceneIndex = i1319[11]
  i1318.lightmapScaleOffset = new pc.Vec4( i1319[12], i1319[13], i1319[14], i1319[15] )
  i1318.lightProbeUsage = i1319[16]
  i1318.reflectionProbeUsage = i1319[17]
  return i1318
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1322 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1323 = data
  i1322.loop = !!i1323[0]
  i1322.timeScale = i1323[1]
  request.r(i1323[2], i1323[3], 0, i1322, 'skeletonDataAsset')
  i1322.initialSkinName = i1323[4]
  i1322.fixPrefabOverrideViaMeshFilter = i1323[5]
  i1322.initialFlipX = !!i1323[6]
  i1322.initialFlipY = !!i1323[7]
  i1322.updateWhenInvisible = i1323[8]
  i1322.zSpacing = i1323[9]
  i1322.useClipping = !!i1323[10]
  i1322.immutableTriangles = !!i1323[11]
  i1322.pmaVertexColors = !!i1323[12]
  i1322.clearStateOnDisable = !!i1323[13]
  i1322.tintBlack = !!i1323[14]
  i1322.singleSubmesh = !!i1323[15]
  i1322.fixDrawOrder = !!i1323[16]
  i1322.addNormals = !!i1323[17]
  i1322.calculateTangents = !!i1323[18]
  i1322.maskInteraction = i1323[19]
  i1322.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1323[20], i1322.maskMaterials)
  i1322.disableRenderingOnOverride = !!i1323[21]
  i1322.updateTiming = i1323[22]
  i1322.unscaledTime = !!i1323[23]
  i1322._animationName = i1323[24]
  var i1325 = i1323[25]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( i1325[i + 0] );
  }
  i1322.separatorSlotNames = i1324
  i1322.physicsPositionInheritanceFactor = new pc.Vec2( i1323[26], i1323[27] )
  i1322.physicsRotationInheritanceFactor = i1323[28]
  request.r(i1323[29], i1323[30], 0, i1322, 'physicsMovementRelativeTo')
  return i1322
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1326 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 2, i1328, '')
  }
  i1326.materialsMaskDisabled = i1328
  var i1331 = i1327[1]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 2, i1330, '')
  }
  i1326.materialsInsideMask = i1330
  var i1333 = i1327[2]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 2, i1332, '')
  }
  i1326.materialsOutsideMask = i1332
  return i1326
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1335 = data
  i1334.m_hasFontAssetChanged = !!i1335[0]
  request.r(i1335[1], i1335[2], 0, i1334, 'm_baseMaterial')
  i1334.m_maskOffset = new pc.Vec4( i1335[3], i1335[4], i1335[5], i1335[6] )
  i1334.m_text = i1335[7]
  i1334.m_isRightToLeft = !!i1335[8]
  request.r(i1335[9], i1335[10], 0, i1334, 'm_fontAsset')
  request.r(i1335[11], i1335[12], 0, i1334, 'm_sharedMaterial')
  var i1337 = i1335[13]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 2, i1336, '')
  }
  i1334.m_fontSharedMaterials = i1336
  request.r(i1335[14], i1335[15], 0, i1334, 'm_fontMaterial')
  var i1339 = i1335[16]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 2, i1338, '')
  }
  i1334.m_fontMaterials = i1338
  i1334.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1335[17], i1335[18], i1335[19], i1335[20])
  i1334.m_fontColor = new pc.Color(i1335[21], i1335[22], i1335[23], i1335[24])
  i1334.m_enableVertexGradient = !!i1335[25]
  i1334.m_colorMode = i1335[26]
  i1334.m_fontColorGradient = request.d('TMPro.VertexGradient', i1335[27], i1334.m_fontColorGradient)
  request.r(i1335[28], i1335[29], 0, i1334, 'm_fontColorGradientPreset')
  request.r(i1335[30], i1335[31], 0, i1334, 'm_spriteAsset')
  i1334.m_tintAllSprites = !!i1335[32]
  request.r(i1335[33], i1335[34], 0, i1334, 'm_StyleSheet')
  i1334.m_TextStyleHashCode = i1335[35]
  i1334.m_overrideHtmlColors = !!i1335[36]
  i1334.m_faceColor = UnityEngine.Color32.ConstructColor(i1335[37], i1335[38], i1335[39], i1335[40])
  i1334.m_fontSize = i1335[41]
  i1334.m_fontSizeBase = i1335[42]
  i1334.m_fontWeight = i1335[43]
  i1334.m_enableAutoSizing = !!i1335[44]
  i1334.m_fontSizeMin = i1335[45]
  i1334.m_fontSizeMax = i1335[46]
  i1334.m_fontStyle = i1335[47]
  i1334.m_HorizontalAlignment = i1335[48]
  i1334.m_VerticalAlignment = i1335[49]
  i1334.m_textAlignment = i1335[50]
  i1334.m_characterSpacing = i1335[51]
  i1334.m_wordSpacing = i1335[52]
  i1334.m_lineSpacing = i1335[53]
  i1334.m_lineSpacingMax = i1335[54]
  i1334.m_paragraphSpacing = i1335[55]
  i1334.m_charWidthMaxAdj = i1335[56]
  i1334.m_enableWordWrapping = !!i1335[57]
  i1334.m_wordWrappingRatios = i1335[58]
  i1334.m_overflowMode = i1335[59]
  request.r(i1335[60], i1335[61], 0, i1334, 'm_linkedTextComponent')
  request.r(i1335[62], i1335[63], 0, i1334, 'parentLinkedComponent')
  i1334.m_enableKerning = !!i1335[64]
  i1334.m_enableExtraPadding = !!i1335[65]
  i1334.checkPaddingRequired = !!i1335[66]
  i1334.m_isRichText = !!i1335[67]
  i1334.m_parseCtrlCharacters = !!i1335[68]
  i1334.m_isOrthographic = !!i1335[69]
  i1334.m_isCullingEnabled = !!i1335[70]
  i1334.m_horizontalMapping = i1335[71]
  i1334.m_verticalMapping = i1335[72]
  i1334.m_uvLineOffset = i1335[73]
  i1334.m_geometrySortingOrder = i1335[74]
  i1334.m_IsTextObjectScaleStatic = !!i1335[75]
  i1334.m_VertexBufferAutoSizeReduction = !!i1335[76]
  i1334.m_useMaxVisibleDescender = !!i1335[77]
  i1334.m_pageToDisplay = i1335[78]
  i1334.m_margin = new pc.Vec4( i1335[79], i1335[80], i1335[81], i1335[82] )
  i1334.m_isUsingLegacyAnimationComponent = !!i1335[83]
  i1334.m_isVolumetricText = !!i1335[84]
  request.r(i1335[85], i1335[86], 0, i1334, 'm_Material')
  i1334.m_Maskable = !!i1335[87]
  i1334.m_Color = new pc.Color(i1335[88], i1335[89], i1335[90], i1335[91])
  i1334.m_RaycastTarget = !!i1335[92]
  i1334.m_RaycastPadding = new pc.Vec4( i1335[93], i1335[94], i1335[95], i1335[96] )
  return i1334
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.VertexGradient' )
  var i1341 = data
  i1340.topLeft = new pc.Color(i1341[0], i1341[1], i1341[2], i1341[3])
  i1340.topRight = new pc.Color(i1341[4], i1341[5], i1341[6], i1341[7])
  i1340.bottomLeft = new pc.Color(i1341[8], i1341[9], i1341[10], i1341[11])
  i1340.bottomRight = new pc.Color(i1341[12], i1341[13], i1341[14], i1341[15])
  return i1340
}

Deserializers["LevelCtr"] = function (request, data, root) {
  var i1342 = root || request.c( 'LevelCtr' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'grillPrefab')
  request.r(i1343[2], i1343[3], 0, i1342, 'grillPrefab1')
  request.r(i1343[4], i1343[5], 0, i1342, 'shipperPrefab')
  request.r(i1343[6], i1343[7], 0, i1342, 'curShipper')
  request.r(i1343[8], i1343[9], 0, i1342, 'posSpawnShipper')
  request.r(i1343[10], i1343[11], 0, i1342, 'posAppear')
  request.r(i1343[12], i1343[13], 0, i1342, 'posDriveTo')
  request.r(i1343[14], i1343[15], 0, i1342, 'posDriveAway')
  var i1345 = i1343[16]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('PosGrillAtLv')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('PosGrillAtLv', i1345[i + 0]));
  }
  i1342.posGrills = i1344
  var i1347 = i1343[17]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1342.grills = i1346
  var i1349 = i1343[18]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 1, i1348, '')
  }
  i1342.totalActiveSkewer = i1348
  var i1351 = i1343[19]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1342.onGrillSkewers = i1350
  var i1353 = i1343[20]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1342.onPlateSkewers = i1352
  var i1355 = i1343[21]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1355.length; i += 2) {
  request.r(i1355[i + 0], i1355[i + 1], 1, i1354, '')
  }
  i1342.onFistPlatesSkewers = i1354
  request.r(i1343[22], i1343[23], 0, i1342, 'plateCompletedPrefab')
  request.r(i1343[24], i1343[25], 0, i1342, 'posPlateWinAppear')
  request.r(i1343[26], i1343[27], 0, i1342, 'posPlateWinOut')
  i1342.easeCompletedSkewerMove = new pc.AnimationCurve( { keys_flow: i1343[28] } )
  i1342.numOfSkewer = i1343[29]
  i1342.numOfCompletedSkewer = i1343[30]
  i1342.isFinishInit = !!i1343[31]
  i1342.isHandlingBooster = !!i1343[32]
  i1342.isFinishLv = !!i1343[33]
  i1342.levelDatas = request.d('LevelData', i1343[34], i1342.levelDatas)
  i1342.orderShipper = i1343[35]
  i1342.doneOrders = i1343[36]
  i1342.stepShipper = i1343[37]
  i1342.isSuggestting = !!i1343[38]
  var i1357 = i1343[39]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 1, i1356, '')
  }
  i1342.suggestSkewers = i1356
  request.r(i1343[40], i1343[41], 0, i1342, 'darkPanel')
  request.r(i1343[42], i1343[43], 0, i1342, 'animRemoveIce')
  request.r(i1343[44], i1343[45], 0, i1342, 'boosterCtr')
  var i1359 = i1343[46]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i1359.length; i += 2) {
  request.r(i1359[i + 0], i1359[i + 1], 1, i1358, '')
  }
  i1342.hightLightSkewers = i1358
  request.r(i1343[47], i1343[48], 0, i1342, 'choosenSkewer')
  request.r(i1343[49], i1343[50], 0, i1342, 'animHand')
  request.r(i1343[51], i1343[52], 0, i1342, 'parentGrill')
  request.r(i1343[53], i1343[54], 0, i1342, 'curSkewerSwapMoving')
  i1342.isChoosingSkewerMoving = !!i1343[55]
  request.r(i1343[56], i1343[57], 0, i1342, 'comboVfx')
  i1342.maxCombo = i1343[58]
  i1342.typeSkewerCompleted = i1343[59]
  request.r(i1343[60], i1343[61], 0, i1342, 'animSwap1')
  request.r(i1343[62], i1343[63], 0, i1342, 'animSwap2')
  request.r(i1343[64], i1343[65], 0, i1342, 'prefaVfxSwap')
  request.r(i1343[66], i1343[67], 0, i1342, 'holderVfx')
  request.r(i1343[68], i1343[69], 0, i1342, 'effectShockWave')
  return i1342
}

Deserializers["PosGrillAtLv"] = function (request, data, root) {
  var i1362 = root || request.c( 'PosGrillAtLv' )
  var i1363 = data
  i1362.rowIndex = i1363[0]
  i1362.colIndex = i1363[1]
  request.r(i1363[2], i1363[3], 0, i1362, 'pos')
  return i1362
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1366 = root || request.c( 'LevelData' )
  var i1367 = data
  i1366.levelID = i1367[0]
  i1366.diff = i1367[1]
  i1366.time = i1367[2]
  i1366.order = i1367[3]
  i1366.width = i1367[4]
  i1366.height = i1367[5]
  var i1369 = i1367[6]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(i1369[i + 0]);
  }
  i1366.skewerDataType = i1368
  var i1371 = i1367[7]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('GrillData')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(request.d('GrillData', i1371[i + 0]));
  }
  i1366.grills = i1370
  return i1366
}

Deserializers["LevelDataCtrl"] = function (request, data, root) {
  var i1374 = root || request.c( 'LevelDataCtrl' )
  var i1375 = data
  i1374.levelDatas = request.d('LevelDatas', i1375[0], i1374.levelDatas)
  i1374.curLevel = request.d('LevelData', i1375[1], i1374.curLevel)
  i1374._currentLevelIDToLoad = i1375[2]
  return i1374
}

Deserializers["LevelDatas"] = function (request, data, root) {
  var i1376 = root || request.c( 'LevelDatas' )
  var i1377 = data
  var i1379 = i1377[0]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('LevelData')))
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.add(request.d('LevelData', i1379[i + 0]));
  }
  i1376.levelDatas = i1378
  return i1376
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1382 = root || request.c( 'GameManager' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'uiManager')
  i1382.level = i1383[2]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1385 = data
  i1384.ambientIntensity = i1385[0]
  i1384.reflectionIntensity = i1385[1]
  i1384.ambientMode = i1385[2]
  i1384.ambientLight = new pc.Color(i1385[3], i1385[4], i1385[5], i1385[6])
  i1384.ambientSkyColor = new pc.Color(i1385[7], i1385[8], i1385[9], i1385[10])
  i1384.ambientGroundColor = new pc.Color(i1385[11], i1385[12], i1385[13], i1385[14])
  i1384.ambientEquatorColor = new pc.Color(i1385[15], i1385[16], i1385[17], i1385[18])
  i1384.fogColor = new pc.Color(i1385[19], i1385[20], i1385[21], i1385[22])
  i1384.fogEndDistance = i1385[23]
  i1384.fogStartDistance = i1385[24]
  i1384.fogDensity = i1385[25]
  i1384.fog = !!i1385[26]
  request.r(i1385[27], i1385[28], 0, i1384, 'skybox')
  i1384.fogMode = i1385[29]
  var i1387 = i1385[30]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1387[i + 0]) );
  }
  i1384.lightmaps = i1386
  i1384.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1385[31], i1384.lightProbes)
  i1384.lightmapsMode = i1385[32]
  i1384.mixedBakeMode = i1385[33]
  i1384.environmentLightingMode = i1385[34]
  i1384.ambientProbe = new pc.SphericalHarmonicsL2(i1385[35])
  i1384.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1385[36])
  i1384.useReferenceAmbientProbe = !!i1385[37]
  request.r(i1385[38], i1385[39], 0, i1384, 'customReflection')
  request.r(i1385[40], i1385[41], 0, i1384, 'defaultReflection')
  i1384.defaultReflectionMode = i1385[42]
  i1384.defaultReflectionResolution = i1385[43]
  i1384.sunLightObjectId = i1385[44]
  i1384.pixelLightCount = i1385[45]
  i1384.defaultReflectionHDR = !!i1385[46]
  i1384.hasLightDataAsset = !!i1385[47]
  i1384.hasManualGenerate = !!i1385[48]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'lightmapColor')
  request.r(i1391[2], i1391[3], 0, i1390, 'lightmapDirection')
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1392 = root || new UnityEngine.LightProbes()
  var i1393 = data
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1403[i + 0]));
  }
  i1400.ShaderCompilationErrors = i1402
  i1400.name = i1401[1]
  i1400.guid = i1401[2]
  var i1405 = i1401[3]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( i1405[i + 0] );
  }
  i1400.shaderDefinedKeywords = i1404
  var i1407 = i1401[4]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1407[i + 0]) );
  }
  i1400.passes = i1406
  var i1409 = i1401[5]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1409[i + 0]) );
  }
  i1400.usePasses = i1408
  var i1411 = i1401[6]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1411[i + 0]) );
  }
  i1400.defaultParameterValues = i1410
  request.r(i1401[7], i1401[8], 0, i1400, 'unityFallbackShader')
  i1400.readDepth = !!i1401[9]
  i1400.isCreatedByShaderGraph = !!i1401[10]
  i1400.compiled = !!i1401[11]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1415 = data
  i1414.shaderName = i1415[0]
  i1414.errorMessage = i1415[1]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1418 = root || new pc.UnityShaderPass()
  var i1419 = data
  i1418.id = i1419[0]
  i1418.subShaderIndex = i1419[1]
  i1418.name = i1419[2]
  i1418.passType = i1419[3]
  i1418.grabPassTextureName = i1419[4]
  i1418.usePass = !!i1419[5]
  i1418.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[6], i1418.zTest)
  i1418.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[7], i1418.zWrite)
  i1418.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[8], i1418.culling)
  i1418.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1419[9], i1418.blending)
  i1418.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1419[10], i1418.alphaBlending)
  i1418.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[11], i1418.colorWriteMask)
  i1418.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[12], i1418.offsetUnits)
  i1418.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[13], i1418.offsetFactor)
  i1418.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[14], i1418.stencilRef)
  i1418.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[15], i1418.stencilReadMask)
  i1418.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[16], i1418.stencilWriteMask)
  i1418.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1419[17], i1418.stencilOp)
  i1418.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1419[18], i1418.stencilOpFront)
  i1418.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1419[19], i1418.stencilOpBack)
  var i1421 = i1419[20]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1421[i + 0]) );
  }
  i1418.tags = i1420
  var i1423 = i1419[21]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( i1423[i + 0] );
  }
  i1418.passDefinedKeywords = i1422
  var i1425 = i1419[22]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1425[i + 0]) );
  }
  i1418.passDefinedKeywordGroups = i1424
  var i1427 = i1419[23]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1427[i + 0]) );
  }
  i1418.variants = i1426
  var i1429 = i1419[24]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1429[i + 0]) );
  }
  i1418.excludedVariants = i1428
  i1418.hasDepthReader = !!i1419[25]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1431 = data
  i1430.val = i1431[0]
  i1430.name = i1431[1]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1433 = data
  i1432.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1433[0], i1432.src)
  i1432.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1433[1], i1432.dst)
  i1432.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1433[2], i1432.op)
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1435 = data
  i1434.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[0], i1434.pass)
  i1434.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[1], i1434.fail)
  i1434.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[2], i1434.zFail)
  i1434.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1435[3], i1434.comp)
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.value = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1443 = data
  var i1445 = i1443[0]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1442.keywords = i1444
  i1442.hasDiscard = !!i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1449 = data
  i1448.passId = i1449[0]
  i1448.subShaderIndex = i1449[1]
  var i1451 = i1449[2]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1448.keywords = i1450
  i1448.vertexProgram = i1449[3]
  i1448.fragmentProgram = i1449[4]
  i1448.exportedForWebGl2 = !!i1449[5]
  i1448.readDepth = !!i1449[6]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1455 = data
  request.r(i1455[0], i1455[1], 0, i1454, 'shader')
  i1454.pass = i1455[2]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.type = i1459[1]
  i1458.value = new pc.Vec4( i1459[2], i1459[3], i1459[4], i1459[5] )
  i1458.textureValue = i1459[6]
  i1458.shaderPropertyFlag = i1459[7]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1461 = data
  i1460.name = i1461[0]
  request.r(i1461[1], i1461[2], 0, i1460, 'texture')
  i1460.aabb = i1461[3]
  i1460.vertices = i1461[4]
  i1460.triangles = i1461[5]
  i1460.textureRect = UnityEngine.Rect.MinMaxRect(i1461[6], i1461[7], i1461[8], i1461[9])
  i1460.packedRect = UnityEngine.Rect.MinMaxRect(i1461[10], i1461[11], i1461[12], i1461[13])
  i1460.border = new pc.Vec4( i1461[14], i1461[15], i1461[16], i1461[17] )
  i1460.transparency = i1461[18]
  i1460.bounds = i1461[19]
  i1460.pixelsPerUnit = i1461[20]
  i1460.textureWidth = i1461[21]
  i1460.textureHeight = i1461[22]
  i1460.nativeSize = new pc.Vec2( i1461[23], i1461[24] )
  i1460.pivot = new pc.Vec2( i1461[25], i1461[26] )
  i1460.textureRectOffset = new pc.Vec2( i1461[27], i1461[28] )
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1463 = data
  i1462.name = i1463[0]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1465 = data
  i1464.name = i1465[0]
  i1464.wrapMode = i1465[1]
  i1464.isLooping = !!i1465[2]
  i1464.length = i1465[3]
  var i1467 = i1465[4]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1467[i + 0]) );
  }
  i1464.curves = i1466
  var i1469 = i1465[5]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1469[i + 0]) );
  }
  i1464.events = i1468
  i1464.halfPrecision = !!i1465[6]
  i1464._frameRate = i1465[7]
  i1464.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1465[8], i1464.localBounds)
  i1464.hasMuscleCurves = !!i1465[9]
  var i1471 = i1465[10]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( i1471[i + 0] );
  }
  i1464.clipMuscleConstant = i1470
  i1464.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1465[11], i1464.clipBindingConstant)
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1475 = data
  i1474.path = i1475[0]
  i1474.hash = i1475[1]
  i1474.componentType = i1475[2]
  i1474.property = i1475[3]
  i1474.keys = i1475[4]
  var i1477 = i1475[5]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1477[i + 0]) );
  }
  i1474.objectReferenceKeys = i1476
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1481 = data
  i1480.time = i1481[0]
  request.r(i1481[1], i1481[2], 0, i1480, 'value')
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1485 = data
  i1484.functionName = i1485[0]
  i1484.floatParameter = i1485[1]
  i1484.intParameter = i1485[2]
  i1484.stringParameter = i1485[3]
  request.r(i1485[4], i1485[5], 0, i1484, 'objectReferenceParameter')
  i1484.time = i1485[6]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1487 = data
  i1486.center = new pc.Vec3( i1487[0], i1487[1], i1487[2] )
  i1486.extends = new pc.Vec3( i1487[3], i1487[4], i1487[5] )
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1491 = data
  var i1493 = i1491[0]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1490.genericBindings = i1492
  var i1495 = i1491[1]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( i1495[i + 0] );
  }
  i1490.pptrCurveMapping = i1494
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.ascent = i1497[1]
  i1496.originalLineHeight = i1497[2]
  i1496.fontSize = i1497[3]
  var i1499 = i1497[4]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1499[i + 0]) );
  }
  i1496.characterInfo = i1498
  request.r(i1497[5], i1497[6], 0, i1496, 'texture')
  i1496.originalFontSize = i1497[7]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1503 = data
  i1502.index = i1503[0]
  i1502.advance = i1503[1]
  i1502.bearing = i1503[2]
  i1502.glyphWidth = i1503[3]
  i1502.glyphHeight = i1503[4]
  i1502.minX = i1503[5]
  i1502.maxX = i1503[6]
  i1502.minY = i1503[7]
  i1502.maxY = i1503[8]
  i1502.uvBottomLeftX = i1503[9]
  i1502.uvBottomLeftY = i1503[10]
  i1502.uvBottomRightX = i1503[11]
  i1502.uvBottomRightY = i1503[12]
  i1502.uvTopLeftX = i1503[13]
  i1502.uvTopLeftY = i1503[14]
  i1502.uvTopRightX = i1503[15]
  i1502.uvTopRightY = i1503[16]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1505 = data
  i1504.name = i1505[0]
  var i1507 = i1505[1]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1507[i + 0]) );
  }
  i1504.layers = i1506
  var i1509 = i1505[2]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1509[i + 0]) );
  }
  i1504.parameters = i1508
  i1504.animationClips = i1505[3]
  i1504.avatarUnsupported = i1505[4]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.defaultWeight = i1513[1]
  i1512.blendingMode = i1513[2]
  i1512.avatarMask = i1513[3]
  i1512.syncedLayerIndex = i1513[4]
  i1512.syncedLayerAffectsTiming = !!i1513[5]
  i1512.syncedLayers = i1513[6]
  i1512.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1513[7], i1512.stateMachine)
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1515 = data
  i1514.id = i1515[0]
  i1514.name = i1515[1]
  i1514.path = i1515[2]
  var i1517 = i1515[3]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1517[i + 0]) );
  }
  i1514.states = i1516
  var i1519 = i1515[4]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1519[i + 0]) );
  }
  i1514.machines = i1518
  var i1521 = i1515[5]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1521[i + 0]) );
  }
  i1514.entryStateTransitions = i1520
  var i1523 = i1515[6]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1523[i + 0]) );
  }
  i1514.exitStateTransitions = i1522
  var i1525 = i1515[7]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1525[i + 0]) );
  }
  i1514.anyStateTransitions = i1524
  i1514.defaultStateId = i1515[8]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1529 = data
  i1528.id = i1529[0]
  i1528.name = i1529[1]
  i1528.cycleOffset = i1529[2]
  i1528.cycleOffsetParameter = i1529[3]
  i1528.cycleOffsetParameterActive = !!i1529[4]
  i1528.mirror = !!i1529[5]
  i1528.mirrorParameter = i1529[6]
  i1528.mirrorParameterActive = !!i1529[7]
  i1528.motionId = i1529[8]
  i1528.nameHash = i1529[9]
  i1528.fullPathHash = i1529[10]
  i1528.speed = i1529[11]
  i1528.speedParameter = i1529[12]
  i1528.speedParameterActive = !!i1529[13]
  i1528.tag = i1529[14]
  i1528.tagHash = i1529[15]
  i1528.writeDefaultValues = !!i1529[16]
  var i1531 = i1529[17]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 2, i1530, '')
  }
  i1528.behaviours = i1530
  var i1533 = i1529[18]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1533[i + 0]) );
  }
  i1528.transitions = i1532
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1539 = data
  i1538.fullPath = i1539[0]
  i1538.canTransitionToSelf = !!i1539[1]
  i1538.duration = i1539[2]
  i1538.exitTime = i1539[3]
  i1538.hasExitTime = !!i1539[4]
  i1538.hasFixedDuration = !!i1539[5]
  i1538.interruptionSource = i1539[6]
  i1538.offset = i1539[7]
  i1538.orderedInterruption = !!i1539[8]
  i1538.destinationStateId = i1539[9]
  i1538.isExit = !!i1539[10]
  i1538.mute = !!i1539[11]
  i1538.solo = !!i1539[12]
  var i1541 = i1539[13]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1541[i + 0]) );
  }
  i1538.conditions = i1540
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1547 = data
  i1546.destinationStateId = i1547[0]
  i1546.isExit = !!i1547[1]
  i1546.mute = !!i1547[2]
  i1546.solo = !!i1547[3]
  var i1549 = i1547[4]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1549[i + 0]) );
  }
  i1546.conditions = i1548
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1553 = data
  i1552.mode = i1553[0]
  i1552.parameter = i1553[1]
  i1552.threshold = i1553[2]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1557 = data
  i1556.defaultBool = !!i1557[0]
  i1556.defaultFloat = i1557[1]
  i1556.defaultInt = i1557[2]
  i1556.name = i1557[3]
  i1556.nameHash = i1557[4]
  i1556.type = i1557[5]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1559 = data
  i1558.name = i1559[0]
  i1558.bytes64 = i1559[1]
  i1558.data = i1559[2]
  return i1558
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1560 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1561 = data
  i1560.hashCode = i1561[0]
  request.r(i1561[1], i1561[2], 0, i1560, 'material')
  i1560.materialHashCode = i1561[3]
  request.r(i1561[4], i1561[5], 0, i1560, 'atlas')
  i1560.normalStyle = i1561[6]
  i1560.normalSpacingOffset = i1561[7]
  i1560.boldStyle = i1561[8]
  i1560.boldSpacing = i1561[9]
  i1560.italicStyle = i1561[10]
  i1560.tabSize = i1561[11]
  i1560.m_Version = i1561[12]
  i1560.m_SourceFontFileGUID = i1561[13]
  request.r(i1561[14], i1561[15], 0, i1560, 'm_SourceFontFile_EditorRef')
  request.r(i1561[16], i1561[17], 0, i1560, 'm_SourceFontFile')
  i1560.m_AtlasPopulationMode = i1561[18]
  i1560.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1561[19], i1560.m_FaceInfo)
  var i1563 = i1561[20]
  var i1562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.add(request.d('UnityEngine.TextCore.Glyph', i1563[i + 0]));
  }
  i1560.m_GlyphTable = i1562
  var i1565 = i1561[21]
  var i1564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.add(request.d('TMPro.TMP_Character', i1565[i + 0]));
  }
  i1560.m_CharacterTable = i1564
  var i1567 = i1561[22]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 2) {
  request.r(i1567[i + 0], i1567[i + 1], 2, i1566, '')
  }
  i1560.m_AtlasTextures = i1566
  i1560.m_AtlasTextureIndex = i1561[23]
  i1560.m_IsMultiAtlasTexturesEnabled = !!i1561[24]
  i1560.m_ClearDynamicDataOnBuild = !!i1561[25]
  var i1569 = i1561[26]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.add(request.d('UnityEngine.TextCore.GlyphRect', i1569[i + 0]));
  }
  i1560.m_UsedGlyphRects = i1568
  var i1571 = i1561[27]
  var i1570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.add(request.d('UnityEngine.TextCore.GlyphRect', i1571[i + 0]));
  }
  i1560.m_FreeGlyphRects = i1570
  i1560.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1561[28], i1560.m_fontInfo)
  i1560.m_AtlasWidth = i1561[29]
  i1560.m_AtlasHeight = i1561[30]
  i1560.m_AtlasPadding = i1561[31]
  i1560.m_AtlasRenderMode = i1561[32]
  var i1573 = i1561[33]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.add(request.d('TMPro.TMP_Glyph', i1573[i + 0]));
  }
  i1560.m_glyphInfoList = i1572
  i1560.m_KerningTable = request.d('TMPro.KerningTable', i1561[34], i1560.m_KerningTable)
  i1560.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1561[35], i1560.m_FontFeatureTable)
  var i1575 = i1561[36]
  var i1574 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1575.length; i += 2) {
  request.r(i1575[i + 0], i1575[i + 1], 1, i1574, '')
  }
  i1560.fallbackFontAssets = i1574
  var i1577 = i1561[37]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1577.length; i += 2) {
  request.r(i1577[i + 0], i1577[i + 1], 1, i1576, '')
  }
  i1560.m_FallbackFontAssetTable = i1576
  i1560.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1561[38], i1560.m_CreationSettings)
  var i1579 = i1561[39]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('TMPro.TMP_FontWeightPair', i1579[i + 0]) );
  }
  i1560.m_FontWeightTable = i1578
  var i1581 = i1561[40]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('TMPro.TMP_FontWeightPair', i1581[i + 0]) );
  }
  i1560.fontWeights = i1580
  return i1560
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1583 = data
  i1582.m_FaceIndex = i1583[0]
  i1582.m_FamilyName = i1583[1]
  i1582.m_StyleName = i1583[2]
  i1582.m_PointSize = i1583[3]
  i1582.m_Scale = i1583[4]
  i1582.m_UnitsPerEM = i1583[5]
  i1582.m_LineHeight = i1583[6]
  i1582.m_AscentLine = i1583[7]
  i1582.m_CapLine = i1583[8]
  i1582.m_MeanLine = i1583[9]
  i1582.m_Baseline = i1583[10]
  i1582.m_DescentLine = i1583[11]
  i1582.m_SuperscriptOffset = i1583[12]
  i1582.m_SuperscriptSize = i1583[13]
  i1582.m_SubscriptOffset = i1583[14]
  i1582.m_SubscriptSize = i1583[15]
  i1582.m_UnderlineOffset = i1583[16]
  i1582.m_UnderlineThickness = i1583[17]
  i1582.m_StrikethroughOffset = i1583[18]
  i1582.m_StrikethroughThickness = i1583[19]
  i1582.m_TabWidth = i1583[20]
  return i1582
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1587 = data
  i1586.m_Index = i1587[0]
  i1586.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1587[1], i1586.m_Metrics)
  i1586.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1587[2], i1586.m_GlyphRect)
  i1586.m_Scale = i1587[3]
  i1586.m_AtlasIndex = i1587[4]
  i1586.m_ClassDefinitionType = i1587[5]
  return i1586
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1589 = data
  i1588.m_Width = i1589[0]
  i1588.m_Height = i1589[1]
  i1588.m_HorizontalBearingX = i1589[2]
  i1588.m_HorizontalBearingY = i1589[3]
  i1588.m_HorizontalAdvance = i1589[4]
  return i1588
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1591 = data
  i1590.m_X = i1591[0]
  i1590.m_Y = i1591[1]
  i1590.m_Width = i1591[2]
  i1590.m_Height = i1591[3]
  return i1590
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.TMP_Character' )
  var i1595 = data
  i1594.m_ElementType = i1595[0]
  i1594.m_Unicode = i1595[1]
  i1594.m_GlyphIndex = i1595[2]
  i1594.m_Scale = i1595[3]
  return i1594
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1601 = data
  i1600.Name = i1601[0]
  i1600.PointSize = i1601[1]
  i1600.Scale = i1601[2]
  i1600.CharacterCount = i1601[3]
  i1600.LineHeight = i1601[4]
  i1600.Baseline = i1601[5]
  i1600.Ascender = i1601[6]
  i1600.CapHeight = i1601[7]
  i1600.Descender = i1601[8]
  i1600.CenterLine = i1601[9]
  i1600.SuperscriptOffset = i1601[10]
  i1600.SubscriptOffset = i1601[11]
  i1600.SubSize = i1601[12]
  i1600.Underline = i1601[13]
  i1600.UnderlineThickness = i1601[14]
  i1600.strikethrough = i1601[15]
  i1600.strikethroughThickness = i1601[16]
  i1600.TabWidth = i1601[17]
  i1600.Padding = i1601[18]
  i1600.AtlasWidth = i1601[19]
  i1600.AtlasHeight = i1601[20]
  return i1600
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1605 = data
  i1604.id = i1605[0]
  i1604.x = i1605[1]
  i1604.y = i1605[2]
  i1604.width = i1605[3]
  i1604.height = i1605[4]
  i1604.xOffset = i1605[5]
  i1604.yOffset = i1605[6]
  i1604.xAdvance = i1605[7]
  i1604.scale = i1605[8]
  return i1604
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1606 = root || request.c( 'TMPro.KerningTable' )
  var i1607 = data
  var i1609 = i1607[0]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.add(request.d('TMPro.KerningPair', i1609[i + 0]));
  }
  i1606.kerningPairs = i1608
  return i1606
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1612 = root || request.c( 'TMPro.KerningPair' )
  var i1613 = data
  i1612.xOffset = i1613[0]
  i1612.m_FirstGlyph = i1613[1]
  i1612.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1613[2], i1612.m_FirstGlyphAdjustments)
  i1612.m_SecondGlyph = i1613[3]
  i1612.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1613[4], i1612.m_SecondGlyphAdjustments)
  i1612.m_IgnoreSpacingAdjustments = !!i1613[5]
  return i1612
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1614 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1615 = data
  var i1617 = i1615[0]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1617[i + 0]));
  }
  i1614.m_GlyphPairAdjustmentRecords = i1616
  return i1614
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1620 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1621 = data
  i1620.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1621[0], i1620.m_FirstAdjustmentRecord)
  i1620.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1621[1], i1620.m_SecondAdjustmentRecord)
  i1620.m_FeatureLookupFlags = i1621[2]
  return i1620
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1624 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1625 = data
  i1624.sourceFontFileName = i1625[0]
  i1624.sourceFontFileGUID = i1625[1]
  i1624.pointSizeSamplingMode = i1625[2]
  i1624.pointSize = i1625[3]
  i1624.padding = i1625[4]
  i1624.packingMode = i1625[5]
  i1624.atlasWidth = i1625[6]
  i1624.atlasHeight = i1625[7]
  i1624.characterSetSelectionMode = i1625[8]
  i1624.characterSequence = i1625[9]
  i1624.referencedFontAssetGUID = i1625[10]
  i1624.referencedTextAssetGUID = i1625[11]
  i1624.fontStyle = i1625[12]
  i1624.fontStyleModifier = i1625[13]
  i1624.renderMode = i1625[14]
  i1624.includeFontFeatures = !!i1625[15]
  return i1624
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'regularTypeface')
  request.r(i1629[2], i1629[3], 0, i1628, 'italicTypeface')
  return i1628
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1630 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1631 = data
  var i1633 = i1631[0]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 2, i1632, '')
  }
  i1630.atlasAssets = i1632
  i1630.scale = i1631[1]
  request.r(i1631[2], i1631[3], 0, i1630, 'skeletonJSON')
  i1630.isUpgradingBlendModeMaterials = !!i1631[4]
  i1630.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1631[5], i1630.blendModeMaterials)
  var i1635 = i1631[6]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1635.length; i += 2) {
  request.r(i1635[i + 0], i1635[i + 1], 1, i1634, '')
  }
  i1630.skeletonDataModifiers = i1634
  var i1637 = i1631[7]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( i1637[i + 0] );
  }
  i1630.fromAnimation = i1636
  var i1639 = i1631[8]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( i1639[i + 0] );
  }
  i1630.toAnimation = i1638
  i1630.duration = i1631[9]
  i1630.defaultMix = i1631[10]
  request.r(i1631[11], i1631[12], 0, i1630, 'controller')
  return i1630
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1642 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1643 = data
  i1642.applyAdditiveMaterial = !!i1643[0]
  var i1645 = i1643[1]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1645[i + 0]));
  }
  i1642.additiveMaterials = i1644
  var i1647 = i1643[2]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1647[i + 0]));
  }
  i1642.multiplyMaterials = i1646
  var i1649 = i1643[3]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1649[i + 0]));
  }
  i1642.screenMaterials = i1648
  i1642.requiresBlendModeMaterials = !!i1643[4]
  return i1642
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1652 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1653 = data
  i1652.pageName = i1653[0]
  request.r(i1653[1], i1653[2], 0, i1652, 'material')
  return i1652
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1656 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'atlasFile')
  var i1659 = i1657[2]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 2, i1658, '')
  }
  i1656.materials = i1658
  i1656.textureLoadingMode = i1657[3]
  request.r(i1657[4], i1657[5], 0, i1656, 'onDemandTextureLoader')
  return i1656
}

Deserializers["AudioClipTable"] = function (request, data, root) {
  var i1660 = root || request.c( 'AudioClipTable' )
  var i1661 = data
  var i1663 = i1661[0]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('AudioClipTable+AudioClipWithKey', i1663[i + 0]) );
  }
  i1660.data = i1662
  return i1660
}

Deserializers["AudioClipTable+AudioClipWithKey"] = function (request, data, root) {
  var i1666 = root || request.c( 'AudioClipTable+AudioClipWithKey' )
  var i1667 = data
  i1666.key = i1667[0]
  request.r(i1667[1], i1667[2], 0, i1666, 'clip')
  return i1666
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1668 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1669 = data
  i1668.useSafeMode = !!i1669[0]
  i1668.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1669[1], i1668.safeModeOptions)
  i1668.timeScale = i1669[2]
  i1668.unscaledTimeScale = i1669[3]
  i1668.useSmoothDeltaTime = !!i1669[4]
  i1668.maxSmoothUnscaledTime = i1669[5]
  i1668.rewindCallbackMode = i1669[6]
  i1668.showUnityEditorReport = !!i1669[7]
  i1668.logBehaviour = i1669[8]
  i1668.drawGizmos = !!i1669[9]
  i1668.defaultRecyclable = !!i1669[10]
  i1668.defaultAutoPlay = i1669[11]
  i1668.defaultUpdateType = i1669[12]
  i1668.defaultTimeScaleIndependent = !!i1669[13]
  i1668.defaultEaseType = i1669[14]
  i1668.defaultEaseOvershootOrAmplitude = i1669[15]
  i1668.defaultEasePeriod = i1669[16]
  i1668.defaultAutoKill = !!i1669[17]
  i1668.defaultLoopType = i1669[18]
  i1668.debugMode = !!i1669[19]
  i1668.debugStoreTargetId = !!i1669[20]
  i1668.showPreviewPanel = !!i1669[21]
  i1668.storeSettingsLocation = i1669[22]
  i1668.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1669[23], i1668.modules)
  i1668.createASMDEF = !!i1669[24]
  i1668.showPlayingTweens = !!i1669[25]
  i1668.showPausedTweens = !!i1669[26]
  return i1668
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1670 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1671 = data
  i1670.logBehaviour = i1671[0]
  i1670.nestedTweenFailureBehaviour = i1671[1]
  return i1670
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1672 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1673 = data
  i1672.showPanel = !!i1673[0]
  i1672.audioEnabled = !!i1673[1]
  i1672.physicsEnabled = !!i1673[2]
  i1672.physics2DEnabled = !!i1673[3]
  i1672.spriteEnabled = !!i1673[4]
  i1672.uiEnabled = !!i1673[5]
  i1672.textMeshProEnabled = !!i1673[6]
  i1672.tk2DEnabled = !!i1673[7]
  i1672.deAudioEnabled = !!i1673[8]
  i1672.deUnityExtendedEnabled = !!i1673[9]
  i1672.epoOutlineEnabled = !!i1673[10]
  return i1672
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1674 = root || request.c( 'TMPro.TMP_Settings' )
  var i1675 = data
  i1674.m_enableWordWrapping = !!i1675[0]
  i1674.m_enableKerning = !!i1675[1]
  i1674.m_enableExtraPadding = !!i1675[2]
  i1674.m_enableTintAllSprites = !!i1675[3]
  i1674.m_enableParseEscapeCharacters = !!i1675[4]
  i1674.m_EnableRaycastTarget = !!i1675[5]
  i1674.m_GetFontFeaturesAtRuntime = !!i1675[6]
  i1674.m_missingGlyphCharacter = i1675[7]
  i1674.m_warningsDisabled = !!i1675[8]
  request.r(i1675[9], i1675[10], 0, i1674, 'm_defaultFontAsset')
  i1674.m_defaultFontAssetPath = i1675[11]
  i1674.m_defaultFontSize = i1675[12]
  i1674.m_defaultAutoSizeMinRatio = i1675[13]
  i1674.m_defaultAutoSizeMaxRatio = i1675[14]
  i1674.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1675[15], i1675[16] )
  i1674.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1675[17], i1675[18] )
  i1674.m_autoSizeTextContainer = !!i1675[19]
  i1674.m_IsTextObjectScaleStatic = !!i1675[20]
  var i1677 = i1675[21]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 1, i1676, '')
  }
  i1674.m_fallbackFontAssets = i1676
  i1674.m_matchMaterialPreset = !!i1675[22]
  request.r(i1675[23], i1675[24], 0, i1674, 'm_defaultSpriteAsset')
  i1674.m_defaultSpriteAssetPath = i1675[25]
  i1674.m_enableEmojiSupport = !!i1675[26]
  i1674.m_MissingCharacterSpriteUnicode = i1675[27]
  i1674.m_defaultColorGradientPresetsPath = i1675[28]
  request.r(i1675[29], i1675[30], 0, i1674, 'm_defaultStyleSheet')
  i1674.m_StyleSheetsResourcePath = i1675[31]
  request.r(i1675[32], i1675[33], 0, i1674, 'm_leadingCharacters')
  request.r(i1675[34], i1675[35], 0, i1674, 'm_followingCharacters')
  i1674.m_UseModernHangulLineBreakingRules = !!i1675[36]
  return i1674
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1678 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1679 = data
  i1678.m_GlyphIndex = i1679[0]
  i1678.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1679[1], i1678.m_GlyphValueRecord)
  return i1678
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1680 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1681 = data
  i1680.m_XPlacement = i1681[0]
  i1680.m_YPlacement = i1681[1]
  i1680.m_XAdvance = i1681[2]
  i1680.m_YAdvance = i1681[3]
  return i1680
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1683 = data
  i1682.hashCode = i1683[0]
  request.r(i1683[1], i1683[2], 0, i1682, 'material')
  i1682.materialHashCode = i1683[3]
  request.r(i1683[4], i1683[5], 0, i1682, 'spriteSheet')
  var i1685 = i1683[6]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.add(request.d('TMPro.TMP_Sprite', i1685[i + 0]));
  }
  i1682.spriteInfoList = i1684
  var i1687 = i1683[7]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 1, i1686, '')
  }
  i1682.fallbackSpriteAssets = i1686
  i1682.m_Version = i1683[8]
  i1682.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1683[9], i1682.m_FaceInfo)
  var i1689 = i1683[10]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.add(request.d('TMPro.TMP_SpriteCharacter', i1689[i + 0]));
  }
  i1682.m_SpriteCharacterTable = i1688
  var i1691 = i1683[11]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.add(request.d('TMPro.TMP_SpriteGlyph', i1691[i + 0]));
  }
  i1682.m_SpriteGlyphTable = i1690
  return i1682
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1694 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.hashCode = i1695[1]
  i1694.unicode = i1695[2]
  i1694.pivot = new pc.Vec2( i1695[3], i1695[4] )
  request.r(i1695[5], i1695[6], 0, i1694, 'sprite')
  i1694.id = i1695[7]
  i1694.x = i1695[8]
  i1694.y = i1695[9]
  i1694.width = i1695[10]
  i1694.height = i1695[11]
  i1694.xOffset = i1695[12]
  i1694.yOffset = i1695[13]
  i1694.xAdvance = i1695[14]
  i1694.scale = i1695[15]
  return i1694
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1700 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1701 = data
  i1700.m_Name = i1701[0]
  i1700.m_HashCode = i1701[1]
  i1700.m_ElementType = i1701[2]
  i1700.m_Unicode = i1701[3]
  i1700.m_GlyphIndex = i1701[4]
  i1700.m_Scale = i1701[5]
  return i1700
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1704 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'sprite')
  i1704.m_Index = i1705[2]
  i1704.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1705[3], i1704.m_Metrics)
  i1704.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1705[4], i1704.m_GlyphRect)
  i1704.m_Scale = i1705[5]
  i1704.m_AtlasIndex = i1705[6]
  i1704.m_ClassDefinitionType = i1705[7]
  return i1704
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1706 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1707 = data
  var i1709 = i1707[0]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.add(request.d('TMPro.TMP_Style', i1709[i + 0]));
  }
  i1706.m_StyleList = i1708
  return i1706
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1712 = root || request.c( 'TMPro.TMP_Style' )
  var i1713 = data
  i1712.m_Name = i1713[0]
  i1712.m_HashCode = i1713[1]
  i1712.m_OpeningDefinition = i1713[2]
  i1712.m_ClosingDefinition = i1713[3]
  i1712.m_OpeningTagArray = i1713[4]
  i1712.m_ClosingTagArray = i1713[5]
  i1712.m_OpeningTagUnicodeArray = i1713[6]
  i1712.m_ClosingTagUnicodeArray = i1713[7]
  return i1712
}

Deserializers["DailyLogInSO"] = function (request, data, root) {
  var i1714 = root || request.c( 'DailyLogInSO' )
  var i1715 = data
  var i1717 = i1715[0]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('DayReward')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('DayReward', i1717[i + 0]));
  }
  i1714.DayRewards = i1716
  return i1714
}

Deserializers["DayReward"] = function (request, data, root) {
  var i1720 = root || request.c( 'DayReward' )
  var i1721 = data
  i1720.day = i1721[0]
  var i1723 = i1721[1]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('SingleReward')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('SingleReward', i1723[i + 0]));
  }
  i1720.SingleRewards = i1722
  return i1720
}

Deserializers["SingleReward"] = function (request, data, root) {
  var i1726 = root || request.c( 'SingleReward' )
  var i1727 = data
  i1726.rewardType = i1727[0]
  request.r(i1727[1], i1727[2], 0, i1726, 'imgReward')
  i1726.amount = i1727[3]
  i1726.textAmountPos = new pc.Vec2( i1727[4], i1727[5] )
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1729 = data
  var i1731 = i1729[0]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1731[i + 0]) );
  }
  i1728.files = i1730
  i1728.componentToPrefabIds = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1735 = data
  i1734.path = i1735[0]
  request.r(i1735[1], i1735[2], 0, i1734, 'unityObject')
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1739[i + 0]) );
  }
  i1736.scriptsExecutionOrder = i1738
  var i1741 = i1737[1]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1741[i + 0]) );
  }
  i1736.sortingLayers = i1740
  var i1743 = i1737[2]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1743[i + 0]) );
  }
  i1736.cullingLayers = i1742
  i1736.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1737[3], i1736.timeSettings)
  i1736.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1737[4], i1736.physicsSettings)
  i1736.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1737[5], i1736.physics2DSettings)
  i1736.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1737[6], i1736.qualitySettings)
  i1736.enableRealtimeShadows = !!i1737[7]
  i1736.enableAutoInstancing = !!i1737[8]
  i1736.enableDynamicBatching = !!i1737[9]
  i1736.lightmapEncodingQuality = i1737[10]
  i1736.desiredColorSpace = i1737[11]
  var i1745 = i1737[12]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( i1745[i + 0] );
  }
  i1736.allTags = i1744
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1749 = data
  i1748.name = i1749[0]
  i1748.value = i1749[1]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1753 = data
  i1752.id = i1753[0]
  i1752.name = i1753[1]
  i1752.value = i1753[2]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1757 = data
  i1756.id = i1757[0]
  i1756.name = i1757[1]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1759 = data
  i1758.fixedDeltaTime = i1759[0]
  i1758.maximumDeltaTime = i1759[1]
  i1758.timeScale = i1759[2]
  i1758.maximumParticleTimestep = i1759[3]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1761 = data
  i1760.gravity = new pc.Vec3( i1761[0], i1761[1], i1761[2] )
  i1760.defaultSolverIterations = i1761[3]
  i1760.bounceThreshold = i1761[4]
  i1760.autoSyncTransforms = !!i1761[5]
  i1760.autoSimulation = !!i1761[6]
  var i1763 = i1761[7]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1763[i + 0]) );
  }
  i1760.collisionMatrix = i1762
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1767 = data
  i1766.enabled = !!i1767[0]
  i1766.layerId = i1767[1]
  i1766.otherLayerId = i1767[2]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1769 = data
  request.r(i1769[0], i1769[1], 0, i1768, 'material')
  i1768.gravity = new pc.Vec2( i1769[2], i1769[3] )
  i1768.positionIterations = i1769[4]
  i1768.velocityIterations = i1769[5]
  i1768.velocityThreshold = i1769[6]
  i1768.maxLinearCorrection = i1769[7]
  i1768.maxAngularCorrection = i1769[8]
  i1768.maxTranslationSpeed = i1769[9]
  i1768.maxRotationSpeed = i1769[10]
  i1768.baumgarteScale = i1769[11]
  i1768.baumgarteTOIScale = i1769[12]
  i1768.timeToSleep = i1769[13]
  i1768.linearSleepTolerance = i1769[14]
  i1768.angularSleepTolerance = i1769[15]
  i1768.defaultContactOffset = i1769[16]
  i1768.autoSimulation = !!i1769[17]
  i1768.queriesHitTriggers = !!i1769[18]
  i1768.queriesStartInColliders = !!i1769[19]
  i1768.callbacksOnDisable = !!i1769[20]
  i1768.reuseCollisionCallbacks = !!i1769[21]
  i1768.autoSyncTransforms = !!i1769[22]
  var i1771 = i1769[23]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1771[i + 0]) );
  }
  i1768.collisionMatrix = i1770
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.layerId = i1775[1]
  i1774.otherLayerId = i1775[2]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1777 = data
  var i1779 = i1777[0]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1779[i + 0]) );
  }
  i1776.qualityLevels = i1778
  var i1781 = i1777[1]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( i1781[i + 0] );
  }
  i1776.names = i1780
  i1776.shadows = i1777[2]
  i1776.anisotropicFiltering = i1777[3]
  i1776.antiAliasing = i1777[4]
  i1776.lodBias = i1777[5]
  i1776.shadowCascades = i1777[6]
  i1776.shadowDistance = i1777[7]
  i1776.shadowmaskMode = i1777[8]
  i1776.shadowProjection = i1777[9]
  i1776.shadowResolution = i1777[10]
  i1776.softParticles = !!i1777[11]
  i1776.softVegetation = !!i1777[12]
  i1776.activeColorSpace = i1777[13]
  i1776.desiredColorSpace = i1777[14]
  i1776.masterTextureLimit = i1777[15]
  i1776.maxQueuedFrames = i1777[16]
  i1776.particleRaycastBudget = i1777[17]
  i1776.pixelLightCount = i1777[18]
  i1776.realtimeReflectionProbes = !!i1777[19]
  i1776.shadowCascade2Split = i1777[20]
  i1776.shadowCascade4Split = new pc.Vec3( i1777[21], i1777[22], i1777[23] )
  i1776.streamingMipmapsActive = !!i1777[24]
  i1776.vSyncCount = i1777[25]
  i1776.asyncUploadBufferSize = i1777[26]
  i1776.asyncUploadTimeSlice = i1777[27]
  i1776.billboardsFaceCameraPosition = !!i1777[28]
  i1776.shadowNearPlaneOffset = i1777[29]
  i1776.streamingMipmapsMemoryBudget = i1777[30]
  i1776.maximumLODLevel = i1777[31]
  i1776.streamingMipmapsAddAllCameras = !!i1777[32]
  i1776.streamingMipmapsMaxLevelReduction = i1777[33]
  i1776.streamingMipmapsRenderersPerFrame = i1777[34]
  i1776.resolutionScalingFixedDPIFactor = i1777[35]
  i1776.streamingMipmapsMaxFileIORequests = i1777[36]
  i1776.currentQualityLevel = i1777[37]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1787 = data
  i1786.weight = i1787[0]
  i1786.vertices = i1787[1]
  i1786.normals = i1787[2]
  i1786.tangents = i1787[3]
  return i1786
}

Deserializers["System.DateTime"] = function (request, data, root) {
  var i1788 = root || request.c( 'System.DateTime' )
  var i1789 = data
  return i1788
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1791 = data
  i1790.xPlacement = i1791[0]
  i1790.yPlacement = i1791[1]
  i1790.xAdvance = i1791[2]
  i1790.yAdvance = i1791[3]
  return i1790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[43],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[29],"105":[29],"106":[29],"107":[29],"108":[29],"109":[29],"110":[29],"111":[29],"112":[29],"113":[29],"114":[29],"115":[29],"116":[29],"117":[43],"118":[74],"119":[120],"121":[120],"18":[7],"19":[12],"122":[12],"123":[12],"124":[12],"125":[12],"126":[12],"127":[12],"128":[12],"129":[12],"130":[12],"131":[12,130],"132":[12],"133":[12],"134":[43],"135":[7],"136":[137],"138":[139],"140":[43],"141":[142],"143":[7],"144":[14,7],"75":[74],"56":[14,7],"145":[27,74],"146":[74],"147":[74,73],"148":[97],"149":[29],"150":[142],"151":[152],"59":[7,14],"153":[7],"154":[74,7],"72":[7,14],"155":[7],"156":[14,7],"157":[74],"158":[14,7],"159":[7],"160":[161],"162":[146],"163":[74,73],"164":[56],"165":[146],"166":[167],"168":[146],"169":[146],"170":[152],"171":[152],"172":[146],"173":[137],"174":[20],"175":[7],"176":[7],"36":[18],"15":[14,7],"177":[7],"47":[18],"178":[7],"179":[7],"34":[7],"180":[7],"181":[7],"182":[7],"183":[7],"184":[7],"185":[7],"46":[14,7],"186":[7],"187":[7],"188":[7],"9":[7],"12":[14,7],"189":[7],"190":[66],"191":[66],"67":[66],"192":[66],"193":[43],"194":[43],"195":[137]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","UnityEngine.MonoBehaviour","ComboVfx","UnityEngine.UI.Text","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.Canvas","BetterOutline","UnityEngine.SpriteRenderer","Grill","Plate","Skewer","LockOfGrillOB","SmokeGrill","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","TestMouse","UnityEngine.BoxCollider","Shipper","ItemOrder","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","UnityEngine.UI.GraphicRaycaster","PlateCompleted","UnityEngine.AudioSource","UnityEngine.AudioClip","EpicToonFX.ETFXLightFade","UnityEngine.Light","Popup.PopupSystem","UnityEngine.Camera","PopupDarkEffect","Popup.BlockingImage","UnityEngine.UI.RawImage","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","PopupLiteMessage","UnityEngine.UI.Shadow","PopupBlurEffect","PopupSample1","PopupSample2","RestUI","PopupGameWin","Spine.Unity.SkeletonGraphic","CoinControl","SafeArea","Coffee.UIExtensions.UIParticle","Spine.Unity.SkeletonDataAsset","PopupGameLose","UnityEngine.UI.Outline","AudioManager","AudioClipTable","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayerDataPreview","UIManager","PlayScreen","LevelCtr","TMPro.TextMeshProUGUI","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","TMPro.TMP_FontAsset","LevelDataCtrl","GameManager","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","DailyLogInSO","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bevel","CharacterSpacing","CurveEffect","DepthEffect","InnerBevel","InnerOutline","OverlayTexture","GradientColor","LimitVisibleCharacters","Typewriter","SkewEffect","SoftShadow","CameraEffectApplier","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "Skewer Shuffle";

Deserializers.lunaInitializationTime = "08/15/2025 03:14:52";

Deserializers.lunaDaysRunning = "0.2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1979";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5977";

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

Deserializers.buildID = "8012ef32-bce8-4f5d-b675-e5a2c275251e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"],["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

