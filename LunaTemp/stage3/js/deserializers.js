var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7848 = root || request.c( 'UnityEngine.JointSpring' )
  var i7849 = data
  i7848.spring = i7849[0]
  i7848.damper = i7849[1]
  i7848.targetPosition = i7849[2]
  return i7848
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7850 = root || request.c( 'UnityEngine.JointMotor' )
  var i7851 = data
  i7850.m_TargetVelocity = i7851[0]
  i7850.m_Force = i7851[1]
  i7850.m_FreeSpin = i7851[2]
  return i7850
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7852 = root || request.c( 'UnityEngine.JointLimits' )
  var i7853 = data
  i7852.m_Min = i7853[0]
  i7852.m_Max = i7853[1]
  i7852.m_Bounciness = i7853[2]
  i7852.m_BounceMinVelocity = i7853[3]
  i7852.m_ContactDistance = i7853[4]
  i7852.minBounce = i7853[5]
  i7852.maxBounce = i7853[6]
  return i7852
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7854 = root || request.c( 'UnityEngine.JointDrive' )
  var i7855 = data
  i7854.m_PositionSpring = i7855[0]
  i7854.m_PositionDamper = i7855[1]
  i7854.m_MaximumForce = i7855[2]
  i7854.m_UseAcceleration = i7855[3]
  return i7854
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7856 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7857 = data
  i7856.m_Spring = i7857[0]
  i7856.m_Damper = i7857[1]
  return i7856
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7858 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7859 = data
  i7858.m_Limit = i7859[0]
  i7858.m_Bounciness = i7859[1]
  i7858.m_ContactDistance = i7859[2]
  return i7858
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7860 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7861 = data
  i7860.m_ExtremumSlip = i7861[0]
  i7860.m_ExtremumValue = i7861[1]
  i7860.m_AsymptoteSlip = i7861[2]
  i7860.m_AsymptoteValue = i7861[3]
  i7860.m_Stiffness = i7861[4]
  return i7860
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7862 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7863 = data
  i7862.m_LowerAngle = i7863[0]
  i7862.m_UpperAngle = i7863[1]
  return i7862
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7864 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7865 = data
  i7864.m_MotorSpeed = i7865[0]
  i7864.m_MaximumMotorTorque = i7865[1]
  return i7864
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7866 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7867 = data
  i7866.m_DampingRatio = i7867[0]
  i7866.m_Frequency = i7867[1]
  i7866.m_Angle = i7867[2]
  return i7866
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7868 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7869 = data
  i7868.m_LowerTranslation = i7869[0]
  i7868.m_UpperTranslation = i7869[1]
  return i7868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7871 = data
  i7870.position = new pc.Vec3( i7871[0], i7871[1], i7871[2] )
  i7870.scale = new pc.Vec3( i7871[3], i7871[4], i7871[5] )
  i7870.rotation = new pc.Quat(i7871[6], i7871[7], i7871[8], i7871[9])
  return i7870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7873 = data
  i7872.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7873[0], i7872.main)
  i7872.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7873[1], i7872.colorBySpeed)
  i7872.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7873[2], i7872.colorOverLifetime)
  i7872.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7873[3], i7872.emission)
  i7872.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7873[4], i7872.rotationBySpeed)
  i7872.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7873[5], i7872.rotationOverLifetime)
  i7872.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7873[6], i7872.shape)
  i7872.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7873[7], i7872.sizeBySpeed)
  i7872.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7873[8], i7872.sizeOverLifetime)
  i7872.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7873[9], i7872.textureSheetAnimation)
  i7872.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7873[10], i7872.velocityOverLifetime)
  i7872.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7873[11], i7872.noise)
  i7872.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7873[12], i7872.inheritVelocity)
  i7872.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7873[13], i7872.forceOverLifetime)
  i7872.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7873[14], i7872.limitVelocityOverLifetime)
  i7872.useAutoRandomSeed = !!i7873[15]
  i7872.randomSeed = i7873[16]
  return i7872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7874 = root || new pc.ParticleSystemMain()
  var i7875 = data
  i7874.duration = i7875[0]
  i7874.loop = !!i7875[1]
  i7874.prewarm = !!i7875[2]
  i7874.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[3], i7874.startDelay)
  i7874.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[4], i7874.startLifetime)
  i7874.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[5], i7874.startSpeed)
  i7874.startSize3D = !!i7875[6]
  i7874.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[7], i7874.startSizeX)
  i7874.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[8], i7874.startSizeY)
  i7874.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[9], i7874.startSizeZ)
  i7874.startRotation3D = !!i7875[10]
  i7874.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[11], i7874.startRotationX)
  i7874.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[12], i7874.startRotationY)
  i7874.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[13], i7874.startRotationZ)
  i7874.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7875[14], i7874.startColor)
  i7874.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7875[15], i7874.gravityModifier)
  i7874.simulationSpace = i7875[16]
  request.r(i7875[17], i7875[18], 0, i7874, 'customSimulationSpace')
  i7874.simulationSpeed = i7875[19]
  i7874.useUnscaledTime = !!i7875[20]
  i7874.scalingMode = i7875[21]
  i7874.playOnAwake = !!i7875[22]
  i7874.maxParticles = i7875[23]
  i7874.emitterVelocityMode = i7875[24]
  i7874.stopAction = i7875[25]
  return i7874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7876 = root || new pc.MinMaxCurve()
  var i7877 = data
  i7876.mode = i7877[0]
  i7876.curveMin = new pc.AnimationCurve( { keys_flow: i7877[1] } )
  i7876.curveMax = new pc.AnimationCurve( { keys_flow: i7877[2] } )
  i7876.curveMultiplier = i7877[3]
  i7876.constantMin = i7877[4]
  i7876.constantMax = i7877[5]
  return i7876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7878 = root || new pc.MinMaxGradient()
  var i7879 = data
  i7878.mode = i7879[0]
  i7878.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7879[1], i7878.gradientMin)
  i7878.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7879[2], i7878.gradientMax)
  i7878.colorMin = new pc.Color(i7879[3], i7879[4], i7879[5], i7879[6])
  i7878.colorMax = new pc.Color(i7879[7], i7879[8], i7879[9], i7879[10])
  return i7878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7881 = data
  i7880.mode = i7881[0]
  var i7883 = i7881[1]
  var i7882 = []
  for(var i = 0; i < i7883.length; i += 1) {
    i7882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7883[i + 0]) );
  }
  i7880.colorKeys = i7882
  var i7885 = i7881[2]
  var i7884 = []
  for(var i = 0; i < i7885.length; i += 1) {
    i7884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7885[i + 0]) );
  }
  i7880.alphaKeys = i7884
  return i7880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7886 = root || new pc.ParticleSystemColorBySpeed()
  var i7887 = data
  i7886.enabled = !!i7887[0]
  i7886.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7887[1], i7886.color)
  i7886.range = new pc.Vec2( i7887[2], i7887[3] )
  return i7886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7891 = data
  i7890.color = new pc.Color(i7891[0], i7891[1], i7891[2], i7891[3])
  i7890.time = i7891[4]
  return i7890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7895 = data
  i7894.alpha = i7895[0]
  i7894.time = i7895[1]
  return i7894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7896 = root || new pc.ParticleSystemColorOverLifetime()
  var i7897 = data
  i7896.enabled = !!i7897[0]
  i7896.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7897[1], i7896.color)
  return i7896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7898 = root || new pc.ParticleSystemEmitter()
  var i7899 = data
  i7898.enabled = !!i7899[0]
  i7898.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7899[1], i7898.rateOverTime)
  i7898.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7899[2], i7898.rateOverDistance)
  var i7901 = i7899[3]
  var i7900 = []
  for(var i = 0; i < i7901.length; i += 1) {
    i7900.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7901[i + 0]) );
  }
  i7898.bursts = i7900
  return i7898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7904 = root || new pc.ParticleSystemBurst()
  var i7905 = data
  i7904.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7905[0], i7904.count)
  i7904.cycleCount = i7905[1]
  i7904.minCount = i7905[2]
  i7904.maxCount = i7905[3]
  i7904.repeatInterval = i7905[4]
  i7904.time = i7905[5]
  return i7904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7906 = root || new pc.ParticleSystemRotationBySpeed()
  var i7907 = data
  i7906.enabled = !!i7907[0]
  i7906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7907[1], i7906.x)
  i7906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7907[2], i7906.y)
  i7906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7907[3], i7906.z)
  i7906.separateAxes = !!i7907[4]
  i7906.range = new pc.Vec2( i7907[5], i7907[6] )
  return i7906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7908 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7909 = data
  i7908.enabled = !!i7909[0]
  i7908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7909[1], i7908.x)
  i7908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7909[2], i7908.y)
  i7908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7909[3], i7908.z)
  i7908.separateAxes = !!i7909[4]
  return i7908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7910 = root || new pc.ParticleSystemShape()
  var i7911 = data
  i7910.enabled = !!i7911[0]
  i7910.shapeType = i7911[1]
  i7910.randomDirectionAmount = i7911[2]
  i7910.sphericalDirectionAmount = i7911[3]
  i7910.randomPositionAmount = i7911[4]
  i7910.alignToDirection = !!i7911[5]
  i7910.radius = i7911[6]
  i7910.radiusMode = i7911[7]
  i7910.radiusSpread = i7911[8]
  i7910.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7911[9], i7910.radiusSpeed)
  i7910.radiusThickness = i7911[10]
  i7910.angle = i7911[11]
  i7910.length = i7911[12]
  i7910.boxThickness = new pc.Vec3( i7911[13], i7911[14], i7911[15] )
  i7910.meshShapeType = i7911[16]
  request.r(i7911[17], i7911[18], 0, i7910, 'mesh')
  request.r(i7911[19], i7911[20], 0, i7910, 'meshRenderer')
  request.r(i7911[21], i7911[22], 0, i7910, 'skinnedMeshRenderer')
  i7910.useMeshMaterialIndex = !!i7911[23]
  i7910.meshMaterialIndex = i7911[24]
  i7910.useMeshColors = !!i7911[25]
  i7910.normalOffset = i7911[26]
  i7910.arc = i7911[27]
  i7910.arcMode = i7911[28]
  i7910.arcSpread = i7911[29]
  i7910.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7911[30], i7910.arcSpeed)
  i7910.donutRadius = i7911[31]
  i7910.position = new pc.Vec3( i7911[32], i7911[33], i7911[34] )
  i7910.rotation = new pc.Vec3( i7911[35], i7911[36], i7911[37] )
  i7910.scale = new pc.Vec3( i7911[38], i7911[39], i7911[40] )
  return i7910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7912 = root || new pc.ParticleSystemSizeBySpeed()
  var i7913 = data
  i7912.enabled = !!i7913[0]
  i7912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7913[1], i7912.x)
  i7912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7913[2], i7912.y)
  i7912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7913[3], i7912.z)
  i7912.separateAxes = !!i7913[4]
  i7912.range = new pc.Vec2( i7913[5], i7913[6] )
  return i7912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7914 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7915 = data
  i7914.enabled = !!i7915[0]
  i7914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7915[1], i7914.x)
  i7914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7915[2], i7914.y)
  i7914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7915[3], i7914.z)
  i7914.separateAxes = !!i7915[4]
  return i7914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7916 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7917 = data
  i7916.enabled = !!i7917[0]
  i7916.mode = i7917[1]
  i7916.animation = i7917[2]
  i7916.numTilesX = i7917[3]
  i7916.numTilesY = i7917[4]
  i7916.useRandomRow = !!i7917[5]
  i7916.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7917[6], i7916.frameOverTime)
  i7916.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7917[7], i7916.startFrame)
  i7916.cycleCount = i7917[8]
  i7916.rowIndex = i7917[9]
  i7916.flipU = i7917[10]
  i7916.flipV = i7917[11]
  i7916.spriteCount = i7917[12]
  var i7919 = i7917[13]
  var i7918 = []
  for(var i = 0; i < i7919.length; i += 2) {
  request.r(i7919[i + 0], i7919[i + 1], 2, i7918, '')
  }
  i7916.sprites = i7918
  return i7916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7922 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7923 = data
  i7922.enabled = !!i7923[0]
  i7922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[1], i7922.x)
  i7922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[2], i7922.y)
  i7922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[3], i7922.z)
  i7922.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[4], i7922.radial)
  i7922.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[5], i7922.speedModifier)
  i7922.space = i7923[6]
  i7922.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[7], i7922.orbitalX)
  i7922.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[8], i7922.orbitalY)
  i7922.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[9], i7922.orbitalZ)
  i7922.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[10], i7922.orbitalOffsetX)
  i7922.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[11], i7922.orbitalOffsetY)
  i7922.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7923[12], i7922.orbitalOffsetZ)
  return i7922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7924 = root || new pc.ParticleSystemNoise()
  var i7925 = data
  i7924.enabled = !!i7925[0]
  i7924.separateAxes = !!i7925[1]
  i7924.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[2], i7924.strengthX)
  i7924.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[3], i7924.strengthY)
  i7924.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[4], i7924.strengthZ)
  i7924.frequency = i7925[5]
  i7924.damping = !!i7925[6]
  i7924.octaveCount = i7925[7]
  i7924.octaveMultiplier = i7925[8]
  i7924.octaveScale = i7925[9]
  i7924.quality = i7925[10]
  i7924.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[11], i7924.scrollSpeed)
  i7924.scrollSpeedMultiplier = i7925[12]
  i7924.remapEnabled = !!i7925[13]
  i7924.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[14], i7924.remapX)
  i7924.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[15], i7924.remapY)
  i7924.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[16], i7924.remapZ)
  i7924.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[17], i7924.positionAmount)
  i7924.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[18], i7924.rotationAmount)
  i7924.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7925[19], i7924.sizeAmount)
  return i7924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7926 = root || new pc.ParticleSystemInheritVelocity()
  var i7927 = data
  i7926.enabled = !!i7927[0]
  i7926.mode = i7927[1]
  i7926.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7927[2], i7926.curve)
  return i7926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7928 = root || new pc.ParticleSystemForceOverLifetime()
  var i7929 = data
  i7928.enabled = !!i7929[0]
  i7928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7929[1], i7928.x)
  i7928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7929[2], i7928.y)
  i7928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7929[3], i7928.z)
  i7928.space = i7929[4]
  i7928.randomized = !!i7929[5]
  return i7928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7930 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7931 = data
  i7930.enabled = !!i7931[0]
  i7930.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7931[1], i7930.limit)
  i7930.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7931[2], i7930.limitX)
  i7930.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7931[3], i7930.limitY)
  i7930.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7931[4], i7930.limitZ)
  i7930.dampen = i7931[5]
  i7930.separateAxes = !!i7931[6]
  i7930.space = i7931[7]
  i7930.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7931[8], i7930.drag)
  i7930.multiplyDragByParticleSize = !!i7931[9]
  i7930.multiplyDragByParticleVelocity = !!i7931[10]
  return i7930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7933 = data
  i7932.enabled = !!i7933[0]
  request.r(i7933[1], i7933[2], 0, i7932, 'sharedMaterial')
  var i7935 = i7933[3]
  var i7934 = []
  for(var i = 0; i < i7935.length; i += 2) {
  request.r(i7935[i + 0], i7935[i + 1], 2, i7934, '')
  }
  i7932.sharedMaterials = i7934
  i7932.receiveShadows = !!i7933[4]
  i7932.shadowCastingMode = i7933[5]
  i7932.sortingLayerID = i7933[6]
  i7932.sortingOrder = i7933[7]
  i7932.lightmapIndex = i7933[8]
  i7932.lightmapSceneIndex = i7933[9]
  i7932.lightmapScaleOffset = new pc.Vec4( i7933[10], i7933[11], i7933[12], i7933[13] )
  i7932.lightProbeUsage = i7933[14]
  i7932.reflectionProbeUsage = i7933[15]
  request.r(i7933[16], i7933[17], 0, i7932, 'mesh')
  i7932.meshCount = i7933[18]
  i7932.activeVertexStreamsCount = i7933[19]
  i7932.alignment = i7933[20]
  i7932.renderMode = i7933[21]
  i7932.sortMode = i7933[22]
  i7932.lengthScale = i7933[23]
  i7932.velocityScale = i7933[24]
  i7932.cameraVelocityScale = i7933[25]
  i7932.normalDirection = i7933[26]
  i7932.sortingFudge = i7933[27]
  i7932.minParticleSize = i7933[28]
  i7932.maxParticleSize = i7933[29]
  i7932.pivot = new pc.Vec3( i7933[30], i7933[31], i7933[32] )
  request.r(i7933[33], i7933[34], 0, i7932, 'trailMaterial')
  return i7932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7939 = data
  i7938.name = i7939[0]
  i7938.tagId = i7939[1]
  i7938.enabled = !!i7939[2]
  i7938.isStatic = !!i7939[3]
  i7938.layer = i7939[4]
  return i7938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7940 = root || new pc.UnityMaterial()
  var i7941 = data
  i7940.name = i7941[0]
  request.r(i7941[1], i7941[2], 0, i7940, 'shader')
  i7940.renderQueue = i7941[3]
  i7940.enableInstancing = !!i7941[4]
  var i7943 = i7941[5]
  var i7942 = []
  for(var i = 0; i < i7943.length; i += 1) {
    i7942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7943[i + 0]) );
  }
  i7940.floatParameters = i7942
  var i7945 = i7941[6]
  var i7944 = []
  for(var i = 0; i < i7945.length; i += 1) {
    i7944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7945[i + 0]) );
  }
  i7940.colorParameters = i7944
  var i7947 = i7941[7]
  var i7946 = []
  for(var i = 0; i < i7947.length; i += 1) {
    i7946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7947[i + 0]) );
  }
  i7940.vectorParameters = i7946
  var i7949 = i7941[8]
  var i7948 = []
  for(var i = 0; i < i7949.length; i += 1) {
    i7948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7949[i + 0]) );
  }
  i7940.textureParameters = i7948
  var i7951 = i7941[9]
  var i7950 = []
  for(var i = 0; i < i7951.length; i += 1) {
    i7950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7951[i + 0]) );
  }
  i7940.materialFlags = i7950
  return i7940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7955 = data
  i7954.name = i7955[0]
  i7954.value = i7955[1]
  return i7954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7959 = data
  i7958.name = i7959[0]
  i7958.value = new pc.Color(i7959[1], i7959[2], i7959[3], i7959[4])
  return i7958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7963 = data
  i7962.name = i7963[0]
  i7962.value = new pc.Vec4( i7963[1], i7963[2], i7963[3], i7963[4] )
  return i7962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7967 = data
  i7966.name = i7967[0]
  request.r(i7967[1], i7967[2], 0, i7966, 'value')
  return i7966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7971 = data
  i7970.name = i7971[0]
  i7970.enabled = !!i7971[1]
  return i7970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7973 = data
  i7972.name = i7973[0]
  i7972.width = i7973[1]
  i7972.height = i7973[2]
  i7972.mipmapCount = i7973[3]
  i7972.anisoLevel = i7973[4]
  i7972.filterMode = i7973[5]
  i7972.hdr = !!i7973[6]
  i7972.format = i7973[7]
  i7972.wrapMode = i7973[8]
  i7972.alphaIsTransparency = !!i7973[9]
  i7972.alphaSource = i7973[10]
  i7972.graphicsFormat = i7973[11]
  i7972.sRGBTexture = !!i7973[12]
  i7972.desiredColorSpace = i7973[13]
  i7972.wrapU = i7973[14]
  i7972.wrapV = i7973[15]
  return i7972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7975 = data
  i7974.name = i7975[0]
  i7974.halfPrecision = !!i7975[1]
  i7974.useUInt32IndexFormat = !!i7975[2]
  i7974.vertexCount = i7975[3]
  i7974.aabb = i7975[4]
  var i7977 = i7975[5]
  var i7976 = []
  for(var i = 0; i < i7977.length; i += 1) {
    i7976.push( !!i7977[i + 0] );
  }
  i7974.streams = i7976
  i7974.vertices = i7975[6]
  var i7979 = i7975[7]
  var i7978 = []
  for(var i = 0; i < i7979.length; i += 1) {
    i7978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7979[i + 0]) );
  }
  i7974.subMeshes = i7978
  var i7981 = i7975[8]
  var i7980 = []
  for(var i = 0; i < i7981.length; i += 16) {
    i7980.push( new pc.Mat4().setData(i7981[i + 0], i7981[i + 1], i7981[i + 2], i7981[i + 3],  i7981[i + 4], i7981[i + 5], i7981[i + 6], i7981[i + 7],  i7981[i + 8], i7981[i + 9], i7981[i + 10], i7981[i + 11],  i7981[i + 12], i7981[i + 13], i7981[i + 14], i7981[i + 15]) );
  }
  i7974.bindposes = i7980
  var i7983 = i7975[9]
  var i7982 = []
  for(var i = 0; i < i7983.length; i += 1) {
    i7982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7983[i + 0]) );
  }
  i7974.blendShapes = i7982
  return i7974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7989 = data
  i7988.triangles = i7989[0]
  return i7988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7995 = data
  i7994.name = i7995[0]
  var i7997 = i7995[1]
  var i7996 = []
  for(var i = 0; i < i7997.length; i += 1) {
    i7996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7997[i + 0]) );
  }
  i7994.frames = i7996
  return i7994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7999 = data
  i7998.pivot = new pc.Vec2( i7999[0], i7999[1] )
  i7998.anchorMin = new pc.Vec2( i7999[2], i7999[3] )
  i7998.anchorMax = new pc.Vec2( i7999[4], i7999[5] )
  i7998.sizeDelta = new pc.Vec2( i7999[6], i7999[7] )
  i7998.anchoredPosition3D = new pc.Vec3( i7999[8], i7999[9], i7999[10] )
  i7998.rotation = new pc.Quat(i7999[11], i7999[12], i7999[13], i7999[14])
  i7998.scale = new pc.Vec3( i7999[15], i7999[16], i7999[17] )
  return i7998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8001 = data
  i8000.enabled = !!i8001[0]
  request.r(i8001[1], i8001[2], 0, i8000, 'sharedMaterial')
  var i8003 = i8001[3]
  var i8002 = []
  for(var i = 0; i < i8003.length; i += 2) {
  request.r(i8003[i + 0], i8003[i + 1], 2, i8002, '')
  }
  i8000.sharedMaterials = i8002
  i8000.receiveShadows = !!i8001[4]
  i8000.shadowCastingMode = i8001[5]
  i8000.sortingLayerID = i8001[6]
  i8000.sortingOrder = i8001[7]
  i8000.lightmapIndex = i8001[8]
  i8000.lightmapSceneIndex = i8001[9]
  i8000.lightmapScaleOffset = new pc.Vec4( i8001[10], i8001[11], i8001[12], i8001[13] )
  i8000.lightProbeUsage = i8001[14]
  i8000.reflectionProbeUsage = i8001[15]
  i8000.color = new pc.Color(i8001[16], i8001[17], i8001[18], i8001[19])
  request.r(i8001[20], i8001[21], 0, i8000, 'sprite')
  i8000.flipX = !!i8001[22]
  i8000.flipY = !!i8001[23]
  i8000.drawMode = i8001[24]
  i8000.size = new pc.Vec2( i8001[25], i8001[26] )
  i8000.tileMode = i8001[27]
  i8000.adaptiveModeThreshold = i8001[28]
  i8000.maskInteraction = i8001[29]
  i8000.spriteSortPoint = i8001[30]
  return i8000
}

Deserializers["Grill"] = function (request, data, root) {
  var i8004 = root || request.c( 'Grill' )
  var i8005 = data
  var i8007 = i8005[0]
  var i8006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i8007.length; i += 2) {
  request.r(i8007[i + 0], i8007[i + 1], 1, i8006, '')
  }
  i8004.liSprRend = i8006
  var i8009 = i8005[1]
  var i8008 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i8009.length; i += 1) {
    i8008.add(i8009[i + 0]);
  }
  i8004.liSprRendDefaultLayer = i8008
  request.r(i8005[2], i8005[3], 0, i8004, 'platePrefab')
  request.r(i8005[4], i8005[5], 0, i8004, 'skewerPrefab')
  request.r(i8005[6], i8005[7], 0, i8004, 'sprRendGrill')
  request.r(i8005[8], i8005[9], 0, i8004, 'lockGrillOB')
  request.r(i8005[10], i8005[11], 0, i8004, 'animSmoke')
  request.r(i8005[12], i8005[13], 0, i8004, 'sprOnePlace')
  request.r(i8005[14], i8005[15], 0, i8004, 'sprThreePlaces')
  request.r(i8005[16], i8005[17], 0, i8004, 'sprSale')
  request.r(i8005[18], i8005[19], 0, i8004, 'sprNotMatch3')
  request.r(i8005[20], i8005[21], 0, i8004, 'posSpawnPlate')
  i8004.offsetYPlate = i8005[22]
  i8004.grillUnlockType = i8005[23]
  i8004.grillType = i8005[24]
  i8004.numberSkewerUnlock = i8005[25]
  i8004.skewerTypeUnlock = i8005[26]
  i8004.numOfPosPlaceSkewers = i8005[27]
  i8004.isSaleGrill = !!i8005[28]
  i8004.maxPlace = i8005[29]
  var i8011 = i8005[30]
  var i8010 = new (System.Collections.Generic.List$1(Bridge.ns('PosPlaceAtGrill')))
  for(var i = 0; i < i8011.length; i += 1) {
    i8010.add(request.d('PosPlaceAtGrill', i8011[i + 0]));
  }
  i8004.posPlaceSkewers = i8010
  var i8013 = i8005[31]
  var i8012 = new (System.Collections.Generic.List$1(Bridge.ns('Plate')))
  for(var i = 0; i < i8013.length; i += 2) {
  request.r(i8013[i + 0], i8013[i + 1], 1, i8012, '')
  }
  i8004.plates = i8012
  request.r(i8005[32], i8005[33], 0, i8004, 'levelCtr')
  i8004.grillData = request.d('GrillData', i8005[34], i8004.grillData)
  i8004.sortingLayerPress = i8005[35]
  i8004._offSetDrag = new pc.Vec2( i8005[36], i8005[37] )
  var i8015 = i8005[38]
  var i8014 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8015.length; i += 1) {
    i8014.add(i8015[i + 0]);
  }
  i8004.liSprRendDefaultOrderLayer = i8014
  return i8004
}

Deserializers["PosPlaceAtGrill"] = function (request, data, root) {
  var i8022 = root || request.c( 'PosPlaceAtGrill' )
  var i8023 = data
  request.r(i8023[0], i8023[1], 0, i8022, 'grill')
  request.r(i8023[2], i8023[3], 0, i8022, 'pos')
  request.r(i8023[4], i8023[5], 0, i8022, 'skewerAtPos')
  return i8022
}

Deserializers["GrillData"] = function (request, data, root) {
  var i8026 = root || request.c( 'GrillData' )
  var i8027 = data
  i8026.grillType = i8027[0]
  i8026.typeUnlock = i8027[1]
  i8026.isSaleGrill = !!i8027[2]
  i8026.skewerTypeUnLocked = i8027[3]
  i8026.numOfPosSkewer = i8027[4]
  i8026.numberSkewerUnlock = i8027[5]
  i8026.rowIndex = i8027[6]
  i8026.colIndex = i8027[7]
  var i8029 = i8027[8]
  var i8028 = new (System.Collections.Generic.List$1(Bridge.ns('PlateData')))
  for(var i = 0; i < i8029.length; i += 1) {
    i8028.add(request.d('PlateData', i8029[i + 0]));
  }
  i8026.plateDatas = i8028
  var i8031 = i8027[9]
  var i8030 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i8031.length; i += 1) {
    i8030.add(request.d('SkewerData', i8031[i + 0]));
  }
  i8026.skewerDatasOnGrill = i8030
  return i8026
}

Deserializers["PlateData"] = function (request, data, root) {
  var i8034 = root || request.c( 'PlateData' )
  var i8035 = data
  var i8037 = i8035[0]
  var i8036 = new (System.Collections.Generic.List$1(Bridge.ns('SkewerData')))
  for(var i = 0; i < i8037.length; i += 1) {
    i8036.add(request.d('SkewerData', i8037[i + 0]));
  }
  i8034.skewers = i8036
  return i8034
}

Deserializers["SkewerData"] = function (request, data, root) {
  var i8040 = root || request.c( 'SkewerData' )
  var i8041 = data
  i8040.skewerType = i8041[0]
  i8040.typeAppear = i8041[1]
  return i8040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i8044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i8045 = data
  i8044.usedByComposite = !!i8045[0]
  i8044.autoTiling = !!i8045[1]
  i8044.size = new pc.Vec2( i8045[2], i8045[3] )
  i8044.edgeRadius = i8045[4]
  i8044.enabled = !!i8045[5]
  i8044.isTrigger = !!i8045[6]
  i8044.usedByEffector = !!i8045[7]
  i8044.density = i8045[8]
  i8044.offset = new pc.Vec2( i8045[9], i8045[10] )
  request.r(i8045[11], i8045[12], 0, i8044, 'material')
  return i8044
}

Deserializers["SmokeGrill"] = function (request, data, root) {
  var i8046 = root || request.c( 'SmokeGrill' )
  var i8047 = data
  request.r(i8047[0], i8047[1], 0, i8046, 'anim')
  i8046.nameAnim = i8047[2]
  return i8046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8049 = data
  request.r(i8049[0], i8049[1], 0, i8048, 'animatorController')
  request.r(i8049[2], i8049[3], 0, i8048, 'avatar')
  i8048.updateMode = i8049[4]
  i8048.hasTransformHierarchy = !!i8049[5]
  i8048.applyRootMotion = !!i8049[6]
  var i8051 = i8049[7]
  var i8050 = []
  for(var i = 0; i < i8051.length; i += 2) {
  request.r(i8051[i + 0], i8051[i + 1], 2, i8050, '')
  }
  i8048.humanBones = i8050
  i8048.enabled = !!i8049[8]
  return i8048
}

Deserializers["LockOfGrillOB"] = function (request, data, root) {
  var i8054 = root || request.c( 'LockOfGrillOB' )
  var i8055 = data
  var i8057 = i8055[0]
  var i8056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i8057.length; i += 2) {
  request.r(i8057[i + 0], i8057[i + 1], 1, i8056, '')
  }
  i8054.liSprRend = i8056
  var i8059 = i8055[1]
  var i8058 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i8059.length; i += 1) {
    i8058.add(i8059[i + 0]);
  }
  i8054.liSprRendDefaultLayer = i8058
  request.r(i8055[2], i8055[3], 0, i8054, 'grill')
  request.r(i8055[4], i8055[5], 0, i8054, 'sprRendGrillLocked')
  request.r(i8055[6], i8055[7], 0, i8054, 'sprRendAdsUnlock')
  request.r(i8055[8], i8055[9], 0, i8054, 'sprRendSkewerUnlock')
  request.r(i8055[10], i8055[11], 0, i8054, 'sprLockedByNumber')
  request.r(i8055[12], i8055[13], 0, i8054, 'textLocked')
  request.r(i8055[14], i8055[15], 0, i8054, 'textNumberSkewer')
  request.r(i8055[16], i8055[17], 0, i8054, 'col')
  i8054.sortingLayerPress = i8055[18]
  i8054._offSetDrag = new pc.Vec2( i8055[19], i8055[20] )
  var i8061 = i8055[21]
  var i8060 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8061.length; i += 1) {
    i8060.add(i8061[i + 0]);
  }
  i8054.liSprRendDefaultOrderLayer = i8060
  return i8054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8063 = data
  i8062.cullTransparentMesh = !!i8063[0]
  return i8062
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8064 = root || request.c( 'UnityEngine.UI.Text' )
  var i8065 = data
  i8064.m_FontData = request.d('UnityEngine.UI.FontData', i8065[0], i8064.m_FontData)
  i8064.m_Text = i8065[1]
  request.r(i8065[2], i8065[3], 0, i8064, 'm_Material')
  i8064.m_Maskable = !!i8065[4]
  i8064.m_Color = new pc.Color(i8065[5], i8065[6], i8065[7], i8065[8])
  i8064.m_RaycastTarget = !!i8065[9]
  i8064.m_RaycastPadding = new pc.Vec4( i8065[10], i8065[11], i8065[12], i8065[13] )
  return i8064
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8066 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8067 = data
  request.r(i8067[0], i8067[1], 0, i8066, 'm_Font')
  i8066.m_FontSize = i8067[2]
  i8066.m_FontStyle = i8067[3]
  i8066.m_BestFit = !!i8067[4]
  i8066.m_MinSize = i8067[5]
  i8066.m_MaxSize = i8067[6]
  i8066.m_Alignment = i8067[7]
  i8066.m_AlignByGeometry = !!i8067[8]
  i8066.m_RichText = !!i8067[9]
  i8066.m_HorizontalOverflow = i8067[10]
  i8066.m_VerticalOverflow = i8067[11]
  i8066.m_LineSpacing = i8067[12]
  return i8066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8069 = data
  i8068.enabled = !!i8069[0]
  i8068.planeDistance = i8069[1]
  i8068.referencePixelsPerUnit = i8069[2]
  i8068.isFallbackOverlay = !!i8069[3]
  i8068.renderMode = i8069[4]
  i8068.renderOrder = i8069[5]
  i8068.sortingLayerName = i8069[6]
  i8068.sortingOrder = i8069[7]
  i8068.scaleFactor = i8069[8]
  request.r(i8069[9], i8069[10], 0, i8068, 'worldCamera')
  i8068.overrideSorting = !!i8069[11]
  i8068.pixelPerfect = !!i8069[12]
  i8068.targetDisplay = i8069[13]
  i8068.overridePixelPerfect = !!i8069[14]
  return i8068
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8070 = root || request.c( 'UnityEngine.UI.Image' )
  var i8071 = data
  request.r(i8071[0], i8071[1], 0, i8070, 'm_Sprite')
  i8070.m_Type = i8071[2]
  i8070.m_PreserveAspect = !!i8071[3]
  i8070.m_FillCenter = !!i8071[4]
  i8070.m_FillMethod = i8071[5]
  i8070.m_FillAmount = i8071[6]
  i8070.m_FillClockwise = !!i8071[7]
  i8070.m_FillOrigin = i8071[8]
  i8070.m_UseSpriteMesh = !!i8071[9]
  i8070.m_PixelsPerUnitMultiplier = i8071[10]
  request.r(i8071[11], i8071[12], 0, i8070, 'm_Material')
  i8070.m_Maskable = !!i8071[13]
  i8070.m_Color = new pc.Color(i8071[14], i8071[15], i8071[16], i8071[17])
  i8070.m_RaycastTarget = !!i8071[18]
  i8070.m_RaycastPadding = new pc.Vec4( i8071[19], i8071[20], i8071[21], i8071[22] )
  return i8070
}

Deserializers["BetterOutline"] = function (request, data, root) {
  var i8072 = root || request.c( 'BetterOutline' )
  var i8073 = data
  i8072.m_EffectColor = new pc.Color(i8073[0], i8073[1], i8073[2], i8073[3])
  i8072.m_EffectDistance = new pc.Vec2( i8073[4], i8073[5] )
  i8072.m_UseGraphicAlpha = !!i8073[6]
  return i8072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i8074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i8075 = data
  i8074.center = new pc.Vec3( i8075[0], i8075[1], i8075[2] )
  i8074.size = new pc.Vec3( i8075[3], i8075[4], i8075[5] )
  i8074.enabled = !!i8075[6]
  i8074.isTrigger = !!i8075[7]
  request.r(i8075[8], i8075[9], 0, i8074, 'material')
  return i8074
}

Deserializers["GrillMouseEvent"] = function (request, data, root) {
  var i8076 = root || request.c( 'GrillMouseEvent' )
  var i8077 = data
  request.r(i8077[0], i8077[1], 0, i8076, 'grill')
  return i8076
}

Deserializers["Plate"] = function (request, data, root) {
  var i8078 = root || request.c( 'Plate' )
  var i8079 = data
  var i8081 = i8079[0]
  var i8080 = new (System.Collections.Generic.List$1(Bridge.ns('posAtPlate')))
  for(var i = 0; i < i8081.length; i += 1) {
    i8080.add(request.d('posAtPlate', i8081[i + 0]));
  }
  i8078.posPlaceSkewers = i8080
  request.r(i8079[1], i8079[2], 0, i8078, 'skewerPrefab')
  request.r(i8079[3], i8079[4], 0, i8078, 'grill')
  return i8078
}

Deserializers["posAtPlate"] = function (request, data, root) {
  var i8084 = root || request.c( 'posAtPlate' )
  var i8085 = data
  request.r(i8085[0], i8085[1], 0, i8084, 'plate')
  request.r(i8085[2], i8085[3], 0, i8084, 'pos')
  request.r(i8085[4], i8085[5], 0, i8084, 'skewerAtPos')
  return i8084
}

Deserializers["Skewer"] = function (request, data, root) {
  var i8086 = root || request.c( 'Skewer' )
  var i8087 = data
  var i8089 = i8087[0]
  var i8088 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i8089.length; i += 2) {
  request.r(i8089[i + 0], i8089[i + 1], 1, i8088, '')
  }
  i8086.liSprRend = i8088
  var i8091 = i8087[1]
  var i8090 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i8091.length; i += 1) {
    i8090.add(i8091[i + 0]);
  }
  i8086.liSprRendDefaultLayer = i8090
  i8086.skewerType = i8087[2]
  i8086.skewerTypeAppear = i8087[3]
  request.r(i8087[4], i8087[5], 0, i8086, 'sprRend')
  request.r(i8087[6], i8087[7], 0, i8086, 'sprRendSkin')
  request.r(i8087[8], i8087[9], 0, i8086, 'sprSecret')
  var i8093 = i8087[10]
  var i8092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8093.length; i += 2) {
  request.r(i8093[i + 0], i8093[i + 1], 1, i8092, '')
  }
  i8086.sprIces = i8092
  request.r(i8087[11], i8087[12], 0, i8086, 'sprOutLine')
  request.r(i8087[13], i8087[14], 0, i8086, 'animBreakSecretSkin')
  request.r(i8087[15], i8087[16], 0, i8086, 'vfxBreakIce')
  request.r(i8087[17], i8087[18], 0, i8086, 'vfxSmoke')
  var i8095 = i8087[19]
  var i8094 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8095.length; i += 2) {
  request.r(i8095[i + 0], i8095[i + 1], 1, i8094, '')
  }
  i8086.posIces = i8094
  request.r(i8087[20], i8087[21], 0, i8086, 'rb')
  request.r(i8087[22], i8087[23], 0, i8086, 'col')
  request.r(i8087[24], i8087[25], 0, i8086, 'pickBox')
  request.r(i8087[26], i8087[27], 0, i8086, 'levelCtrl')
  i8086.curPosIn = request.d('PosPlaceAtGrill', i8087[28], i8086.curPosIn)
  i8086.lastPosIn = request.d('PosPlaceAtGrill', i8087[29], i8086.lastPosIn)
  i8086.posAtPlate = request.d('posAtPlate', i8087[30], i8086.posAtPlate)
  var i8097 = i8087[31]
  var i8096 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i8097.length; i += 2) {
  request.r(i8097[i + 0], i8097[i + 1], 1, i8096, '')
  }
  i8086.colGrills = i8096
  i8086.defaultScale = new pc.Vec3( i8087[32], i8087[33], i8087[34] )
  i8086.pressScale = new pc.Vec3( i8087[35], i8087[36], i8087[37] )
  i8086.pressRo = new pc.Vec3( i8087[38], i8087[39], i8087[40] )
  i8086.putInToSound = i8087[41]
  i8086.pickUpSound = i8087[42]
  i8086.putDownSound = i8087[43]
  request.r(i8087[44], i8087[45], 0, i8086, 'parent')
  i8086.limitDistance = i8087[46]
  i8086._isPressing = !!i8087[47]
  i8086._isMoveByDragg = !!i8087[48]
  i8086.sortingLayerPress = i8087[49]
  i8086._offSetDrag = new pc.Vec2( i8087[50], i8087[51] )
  var i8099 = i8087[52]
  var i8098 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8099.length; i += 1) {
    i8098.add(i8099[i + 0]);
  }
  i8086.liSprRendDefaultOrderLayer = i8098
  return i8086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i8106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i8107 = data
  i8106.bodyType = i8107[0]
  request.r(i8107[1], i8107[2], 0, i8106, 'material')
  i8106.simulated = !!i8107[3]
  i8106.useAutoMass = !!i8107[4]
  i8106.mass = i8107[5]
  i8106.drag = i8107[6]
  i8106.angularDrag = i8107[7]
  i8106.gravityScale = i8107[8]
  i8106.collisionDetectionMode = i8107[9]
  i8106.sleepMode = i8107[10]
  i8106.constraints = i8107[11]
  return i8106
}

Deserializers["SkewerMouseEvent"] = function (request, data, root) {
  var i8108 = root || request.c( 'SkewerMouseEvent' )
  var i8109 = data
  request.r(i8109[0], i8109[1], 0, i8108, 'skewer')
  return i8108
}

Deserializers["Shipper"] = function (request, data, root) {
  var i8110 = root || request.c( 'Shipper' )
  var i8111 = data
  request.r(i8111[0], i8111[1], 0, i8110, 'animOrderAppear')
  request.r(i8111[2], i8111[3], 0, i8110, 'animShipperSmall')
  request.r(i8111[4], i8111[5], 0, i8110, 'parentSpawnItem')
  request.r(i8111[6], i8111[7], 0, i8110, 'cover')
  request.r(i8111[8], i8111[9], 0, i8110, 'itemOrderPrefab')
  request.r(i8111[10], i8111[11], 0, i8110, 'sliderTimer')
  request.r(i8111[12], i8111[13], 0, i8110, 'textTimer')
  request.r(i8111[14], i8111[15], 0, i8110, 'posAppear')
  request.r(i8111[16], i8111[17], 0, i8110, 'posDriveTo')
  request.r(i8111[18], i8111[19], 0, i8110, 'posDriveAway')
  request.r(i8111[20], i8111[21], 0, i8110, 'emotionHappy')
  request.r(i8111[22], i8111[23], 0, i8110, 'emotionAngry')
  var i8113 = i8111[24]
  var i8112 = new (System.Collections.Generic.List$1(Bridge.ns('ItemOrder')))
  for(var i = 0; i < i8113.length; i += 2) {
  request.r(i8113[i + 0], i8113[i + 1], 1, i8112, '')
  }
  i8110.itemOrders = i8112
  request.r(i8111[25], i8111[26], 0, i8110, 'levelCtr')
  i8110.isCompletedOrder = !!i8111[27]
  return i8110
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i8116 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i8117 = data
  i8116.m_Spacing = i8117[0]
  i8116.m_ChildForceExpandWidth = !!i8117[1]
  i8116.m_ChildForceExpandHeight = !!i8117[2]
  i8116.m_ChildControlWidth = !!i8117[3]
  i8116.m_ChildControlHeight = !!i8117[4]
  i8116.m_ChildScaleWidth = !!i8117[5]
  i8116.m_ChildScaleHeight = !!i8117[6]
  i8116.m_ReverseArrangement = !!i8117[7]
  i8116.m_Padding = UnityEngine.RectOffset.FromPaddings(i8117[8], i8117[9], i8117[10], i8117[11])
  i8116.m_ChildAlignment = i8117[12]
  return i8116
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i8118 = root || request.c( 'UnityEngine.UI.Slider' )
  var i8119 = data
  request.r(i8119[0], i8119[1], 0, i8118, 'm_FillRect')
  request.r(i8119[2], i8119[3], 0, i8118, 'm_HandleRect')
  i8118.m_Direction = i8119[4]
  i8118.m_MinValue = i8119[5]
  i8118.m_MaxValue = i8119[6]
  i8118.m_WholeNumbers = !!i8119[7]
  i8118.m_Value = i8119[8]
  i8118.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i8119[9], i8118.m_OnValueChanged)
  i8118.m_Navigation = request.d('UnityEngine.UI.Navigation', i8119[10], i8118.m_Navigation)
  i8118.m_Transition = i8119[11]
  i8118.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8119[12], i8118.m_Colors)
  i8118.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8119[13], i8118.m_SpriteState)
  i8118.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8119[14], i8118.m_AnimationTriggers)
  i8118.m_Interactable = !!i8119[15]
  request.r(i8119[16], i8119[17], 0, i8118, 'm_TargetGraphic')
  return i8118
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i8120 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i8121 = data
  i8120.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8121[0], i8120.m_PersistentCalls)
  return i8120
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8122 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8123 = data
  var i8125 = i8123[0]
  var i8124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8125.length; i += 1) {
    i8124.add(request.d('UnityEngine.Events.PersistentCall', i8125[i + 0]));
  }
  i8122.m_Calls = i8124
  return i8122
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8128 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8129 = data
  request.r(i8129[0], i8129[1], 0, i8128, 'm_Target')
  i8128.m_TargetAssemblyTypeName = i8129[2]
  i8128.m_MethodName = i8129[3]
  i8128.m_Mode = i8129[4]
  i8128.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8129[5], i8128.m_Arguments)
  i8128.m_CallState = i8129[6]
  return i8128
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8130 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8131 = data
  i8130.m_Mode = i8131[0]
  i8130.m_WrapAround = !!i8131[1]
  request.r(i8131[2], i8131[3], 0, i8130, 'm_SelectOnUp')
  request.r(i8131[4], i8131[5], 0, i8130, 'm_SelectOnDown')
  request.r(i8131[6], i8131[7], 0, i8130, 'm_SelectOnLeft')
  request.r(i8131[8], i8131[9], 0, i8130, 'm_SelectOnRight')
  return i8130
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8132 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8133 = data
  i8132.m_NormalColor = new pc.Color(i8133[0], i8133[1], i8133[2], i8133[3])
  i8132.m_HighlightedColor = new pc.Color(i8133[4], i8133[5], i8133[6], i8133[7])
  i8132.m_PressedColor = new pc.Color(i8133[8], i8133[9], i8133[10], i8133[11])
  i8132.m_SelectedColor = new pc.Color(i8133[12], i8133[13], i8133[14], i8133[15])
  i8132.m_DisabledColor = new pc.Color(i8133[16], i8133[17], i8133[18], i8133[19])
  i8132.m_ColorMultiplier = i8133[20]
  i8132.m_FadeDuration = i8133[21]
  return i8132
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8134 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8135 = data
  request.r(i8135[0], i8135[1], 0, i8134, 'm_HighlightedSprite')
  request.r(i8135[2], i8135[3], 0, i8134, 'm_PressedSprite')
  request.r(i8135[4], i8135[5], 0, i8134, 'm_SelectedSprite')
  request.r(i8135[6], i8135[7], 0, i8134, 'm_DisabledSprite')
  return i8134
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8136 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8137 = data
  i8136.m_NormalTrigger = i8137[0]
  i8136.m_HighlightedTrigger = i8137[1]
  i8136.m_PressedTrigger = i8137[2]
  i8136.m_SelectedTrigger = i8137[3]
  i8136.m_DisabledTrigger = i8137[4]
  return i8136
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8138 = root || request.c( 'UnityEngine.UI.Button' )
  var i8139 = data
  i8138.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8139[0], i8138.m_OnClick)
  i8138.m_Navigation = request.d('UnityEngine.UI.Navigation', i8139[1], i8138.m_Navigation)
  i8138.m_Transition = i8139[2]
  i8138.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8139[3], i8138.m_Colors)
  i8138.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8139[4], i8138.m_SpriteState)
  i8138.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8139[5], i8138.m_AnimationTriggers)
  i8138.m_Interactable = !!i8139[6]
  request.r(i8139[7], i8139[8], 0, i8138, 'm_TargetGraphic')
  return i8138
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8140 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8141 = data
  i8140.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8141[0], i8140.m_PersistentCalls)
  return i8140
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8142 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8143 = data
  request.r(i8143[0], i8143[1], 0, i8142, 'm_ObjectArgument')
  i8142.m_ObjectArgumentAssemblyTypeName = i8143[2]
  i8142.m_IntArgument = i8143[3]
  i8142.m_FloatArgument = i8143[4]
  i8142.m_StringArgument = i8143[5]
  i8142.m_BoolArgument = !!i8143[6]
  return i8142
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8144 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8145 = data
  i8144.m_IgnoreReversedGraphics = !!i8145[0]
  i8144.m_BlockingObjects = i8145[1]
  i8144.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8145[2] )
  return i8144
}

Deserializers["ItemOrder"] = function (request, data, root) {
  var i8146 = root || request.c( 'ItemOrder' )
  var i8147 = data
  request.r(i8147[0], i8147[1], 0, i8146, 'bg')
  request.r(i8147[2], i8147[3], 0, i8146, 'normalBg')
  request.r(i8147[4], i8147[5], 0, i8146, 'saleBg')
  request.r(i8147[6], i8147[7], 0, i8146, 'iconSkewer')
  request.r(i8147[8], i8147[9], 0, i8146, 'iconCompleted')
  request.r(i8147[10], i8147[11], 0, i8146, 'shipper')
  i8146.idSkewer = i8147[12]
  request.r(i8147[13], i8147[14], 0, i8146, 'level')
  i8146.isDone = !!i8147[15]
  i8146.isSaleItem = !!i8147[16]
  return i8146
}

Deserializers["PlateCompleted"] = function (request, data, root) {
  var i8148 = root || request.c( 'PlateCompleted' )
  var i8149 = data
  request.r(i8149[0], i8149[1], 0, i8148, 'sprPlate')
  var i8151 = i8149[2]
  var i8150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8151.length; i += 2) {
  request.r(i8151[i + 0], i8151[i + 1], 1, i8150, '')
  }
  i8148.posMoveInCompletedSkewers = i8150
  request.r(i8149[3], i8149[4], 0, i8148, 'vfxStar')
  i8148.canChoose = !!i8149[5]
  i8148.originPos = new pc.Vec3( i8149[6], i8149[7], i8149[8] )
  return i8148
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8152 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8153 = data
  i8152.m_hasFontAssetChanged = !!i8153[0]
  request.r(i8153[1], i8153[2], 0, i8152, 'm_baseMaterial')
  i8152.m_maskOffset = new pc.Vec4( i8153[3], i8153[4], i8153[5], i8153[6] )
  i8152.m_text = i8153[7]
  i8152.m_isRightToLeft = !!i8153[8]
  request.r(i8153[9], i8153[10], 0, i8152, 'm_fontAsset')
  request.r(i8153[11], i8153[12], 0, i8152, 'm_sharedMaterial')
  var i8155 = i8153[13]
  var i8154 = []
  for(var i = 0; i < i8155.length; i += 2) {
  request.r(i8155[i + 0], i8155[i + 1], 2, i8154, '')
  }
  i8152.m_fontSharedMaterials = i8154
  request.r(i8153[14], i8153[15], 0, i8152, 'm_fontMaterial')
  var i8157 = i8153[16]
  var i8156 = []
  for(var i = 0; i < i8157.length; i += 2) {
  request.r(i8157[i + 0], i8157[i + 1], 2, i8156, '')
  }
  i8152.m_fontMaterials = i8156
  i8152.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8153[17], i8153[18], i8153[19], i8153[20])
  i8152.m_fontColor = new pc.Color(i8153[21], i8153[22], i8153[23], i8153[24])
  i8152.m_enableVertexGradient = !!i8153[25]
  i8152.m_colorMode = i8153[26]
  i8152.m_fontColorGradient = request.d('TMPro.VertexGradient', i8153[27], i8152.m_fontColorGradient)
  request.r(i8153[28], i8153[29], 0, i8152, 'm_fontColorGradientPreset')
  request.r(i8153[30], i8153[31], 0, i8152, 'm_spriteAsset')
  i8152.m_tintAllSprites = !!i8153[32]
  request.r(i8153[33], i8153[34], 0, i8152, 'm_StyleSheet')
  i8152.m_TextStyleHashCode = i8153[35]
  i8152.m_overrideHtmlColors = !!i8153[36]
  i8152.m_faceColor = UnityEngine.Color32.ConstructColor(i8153[37], i8153[38], i8153[39], i8153[40])
  i8152.m_fontSize = i8153[41]
  i8152.m_fontSizeBase = i8153[42]
  i8152.m_fontWeight = i8153[43]
  i8152.m_enableAutoSizing = !!i8153[44]
  i8152.m_fontSizeMin = i8153[45]
  i8152.m_fontSizeMax = i8153[46]
  i8152.m_fontStyle = i8153[47]
  i8152.m_HorizontalAlignment = i8153[48]
  i8152.m_VerticalAlignment = i8153[49]
  i8152.m_textAlignment = i8153[50]
  i8152.m_characterSpacing = i8153[51]
  i8152.m_wordSpacing = i8153[52]
  i8152.m_lineSpacing = i8153[53]
  i8152.m_lineSpacingMax = i8153[54]
  i8152.m_paragraphSpacing = i8153[55]
  i8152.m_charWidthMaxAdj = i8153[56]
  i8152.m_enableWordWrapping = !!i8153[57]
  i8152.m_wordWrappingRatios = i8153[58]
  i8152.m_overflowMode = i8153[59]
  request.r(i8153[60], i8153[61], 0, i8152, 'm_linkedTextComponent')
  request.r(i8153[62], i8153[63], 0, i8152, 'parentLinkedComponent')
  i8152.m_enableKerning = !!i8153[64]
  i8152.m_enableExtraPadding = !!i8153[65]
  i8152.checkPaddingRequired = !!i8153[66]
  i8152.m_isRichText = !!i8153[67]
  i8152.m_parseCtrlCharacters = !!i8153[68]
  i8152.m_isOrthographic = !!i8153[69]
  i8152.m_isCullingEnabled = !!i8153[70]
  i8152.m_horizontalMapping = i8153[71]
  i8152.m_verticalMapping = i8153[72]
  i8152.m_uvLineOffset = i8153[73]
  i8152.m_geometrySortingOrder = i8153[74]
  i8152.m_IsTextObjectScaleStatic = !!i8153[75]
  i8152.m_VertexBufferAutoSizeReduction = !!i8153[76]
  i8152.m_useMaxVisibleDescender = !!i8153[77]
  i8152.m_pageToDisplay = i8153[78]
  i8152.m_margin = new pc.Vec4( i8153[79], i8153[80], i8153[81], i8153[82] )
  i8152.m_isUsingLegacyAnimationComponent = !!i8153[83]
  i8152.m_isVolumetricText = !!i8153[84]
  request.r(i8153[85], i8153[86], 0, i8152, 'm_Material')
  i8152.m_Maskable = !!i8153[87]
  i8152.m_Color = new pc.Color(i8153[88], i8153[89], i8153[90], i8153[91])
  i8152.m_RaycastTarget = !!i8153[92]
  i8152.m_RaycastPadding = new pc.Vec4( i8153[93], i8153[94], i8153[95], i8153[96] )
  return i8152
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8158 = root || request.c( 'TMPro.VertexGradient' )
  var i8159 = data
  i8158.topLeft = new pc.Color(i8159[0], i8159[1], i8159[2], i8159[3])
  i8158.topRight = new pc.Color(i8159[4], i8159[5], i8159[6], i8159[7])
  i8158.bottomLeft = new pc.Color(i8159[8], i8159[9], i8159[10], i8159[11])
  i8158.bottomRight = new pc.Color(i8159[12], i8159[13], i8159[14], i8159[15])
  return i8158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8161 = data
  request.r(i8161[0], i8161[1], 0, i8160, 'clip')
  request.r(i8161[2], i8161[3], 0, i8160, 'outputAudioMixerGroup')
  i8160.playOnAwake = !!i8161[4]
  i8160.loop = !!i8161[5]
  i8160.time = i8161[6]
  i8160.volume = i8161[7]
  i8160.pitch = i8161[8]
  i8160.enabled = !!i8161[9]
  return i8160
}

Deserializers["EpicToonFX.ETFXLightFade"] = function (request, data, root) {
  var i8162 = root || request.c( 'EpicToonFX.ETFXLightFade' )
  var i8163 = data
  i8162.life = i8163[0]
  i8162.killAfterLife = !!i8163[1]
  return i8162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8165 = data
  i8164.enabled = !!i8165[0]
  i8164.type = i8165[1]
  i8164.color = new pc.Color(i8165[2], i8165[3], i8165[4], i8165[5])
  i8164.cullingMask = i8165[6]
  i8164.intensity = i8165[7]
  i8164.range = i8165[8]
  i8164.spotAngle = i8165[9]
  i8164.shadows = i8165[10]
  i8164.shadowNormalBias = i8165[11]
  i8164.shadowBias = i8165[12]
  i8164.shadowStrength = i8165[13]
  i8164.shadowResolution = i8165[14]
  i8164.lightmapBakeType = i8165[15]
  i8164.renderMode = i8165[16]
  request.r(i8165[17], i8165[18], 0, i8164, 'cookie')
  i8164.cookieSize = i8165[19]
  return i8164
}

Deserializers["Popup.PopupSystem"] = function (request, data, root) {
  var i8166 = root || request.c( 'Popup.PopupSystem' )
  var i8167 = data
  request.r(i8167[0], i8167[1], 0, i8166, 'popupCamera')
  request.r(i8167[2], i8167[3], 0, i8166, 'bgEffect')
  request.r(i8167[4], i8167[5], 0, i8166, 'backBlocker')
  request.r(i8167[6], i8167[7], 0, i8166, 'rootTransform')
  request.r(i8167[8], i8167[9], 0, i8166, 'addOnTransform')
  var i8169 = i8167[10]
  var i8168 = new (System.Collections.Generic.List$1(Bridge.ns('Popup.PopupSystem+PopupTypePrefabPair')))
  for(var i = 0; i < i8169.length; i += 1) {
    i8168.add(request.d('Popup.PopupSystem+PopupTypePrefabPair', i8169[i + 0]));
  }
  i8166.popupList = i8168
  i8166.testPopup = i8167[11]
  return i8166
}

Deserializers["Popup.PopupSystem+PopupTypePrefabPair"] = function (request, data, root) {
  var i8172 = root || request.c( 'Popup.PopupSystem+PopupTypePrefabPair' )
  var i8173 = data
  i8172.type = i8173[0]
  request.r(i8173[1], i8173[2], 0, i8172, 'prefab')
  return i8172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8175 = data
  i8174.enabled = !!i8175[0]
  i8174.aspect = i8175[1]
  i8174.orthographic = !!i8175[2]
  i8174.orthographicSize = i8175[3]
  i8174.backgroundColor = new pc.Color(i8175[4], i8175[5], i8175[6], i8175[7])
  i8174.nearClipPlane = i8175[8]
  i8174.farClipPlane = i8175[9]
  i8174.fieldOfView = i8175[10]
  i8174.depth = i8175[11]
  i8174.clearFlags = i8175[12]
  i8174.cullingMask = i8175[13]
  i8174.rect = i8175[14]
  request.r(i8175[15], i8175[16], 0, i8174, 'targetTexture')
  i8174.usePhysicalProperties = !!i8175[17]
  i8174.focalLength = i8175[18]
  i8174.sensorSize = new pc.Vec2( i8175[19], i8175[20] )
  i8174.lensShift = new pc.Vec2( i8175[21], i8175[22] )
  i8174.gateFit = i8175[23]
  i8174.commandBufferCount = i8175[24]
  i8174.cameraType = i8175[25]
  return i8174
}

Deserializers["PopupDarkEffect"] = function (request, data, root) {
  var i8176 = root || request.c( 'PopupDarkEffect' )
  var i8177 = data
  request.r(i8177[0], i8177[1], 0, i8176, 'image')
  i8176.enabledColor = new pc.Color(i8177[2], i8177[3], i8177[4], i8177[5])
  i8176.disabledColor = new pc.Color(i8177[6], i8177[7], i8177[8], i8177[9])
  i8176.enabledDuration = i8177[10]
  i8176.disabledDuration = i8177[11]
  return i8176
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8178 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8179 = data
  i8178.m_UiScaleMode = i8179[0]
  i8178.m_ReferencePixelsPerUnit = i8179[1]
  i8178.m_ScaleFactor = i8179[2]
  i8178.m_ReferenceResolution = new pc.Vec2( i8179[3], i8179[4] )
  i8178.m_ScreenMatchMode = i8179[5]
  i8178.m_MatchWidthOrHeight = i8179[6]
  i8178.m_PhysicalUnit = i8179[7]
  i8178.m_FallbackScreenDPI = i8179[8]
  i8178.m_DefaultSpriteDPI = i8179[9]
  i8178.m_DynamicPixelsPerUnit = i8179[10]
  i8178.m_PresetInfoIsWorld = !!i8179[11]
  return i8178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8181 = data
  i8180.m_Alpha = i8181[0]
  i8180.m_Interactable = !!i8181[1]
  i8180.m_BlocksRaycasts = !!i8181[2]
  i8180.m_IgnoreParentGroups = !!i8181[3]
  i8180.enabled = !!i8181[4]
  return i8180
}

Deserializers["PopupLiteMessage"] = function (request, data, root) {
  var i8182 = root || request.c( 'PopupLiteMessage' )
  var i8183 = data
  request.r(i8183[0], i8183[1], 0, i8182, 'messageText')
  i8182.showDuration = i8183[2]
  i8182.fadeOutDuration = i8183[3]
  i8182.info = request.d('CurrencyInfo', i8183[4], i8182.info)
  i8182.cancelable = !!i8183[5]
  return i8182
}

Deserializers["CurrencyInfo"] = function (request, data, root) {
  var i8184 = root || request.c( 'CurrencyInfo' )
  var i8185 = data
  i8184.showCurrency = !!i8185[0]
  i8184.showSetting = !!i8185[1]
  i8184.showMoreGem = !!i8185[2]
  i8184.showMoreCoin = !!i8185[3]
  return i8184
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i8186 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i8187 = data
  i8186.m_EffectColor = new pc.Color(i8187[0], i8187[1], i8187[2], i8187[3])
  i8186.m_EffectDistance = new pc.Vec2( i8187[4], i8187[5] )
  i8186.m_UseGraphicAlpha = !!i8187[6]
  return i8186
}

Deserializers["PopupBlurEffect"] = function (request, data, root) {
  var i8188 = root || request.c( 'PopupBlurEffect' )
  var i8189 = data
  request.r(i8189[0], i8189[1], 0, i8188, 'image')
  request.r(i8189[2], i8189[3], 0, i8188, 'material')
  i8188.enabledDuration = i8189[4]
  i8188.disabledDuration = i8189[5]
  return i8188
}

Deserializers["Popup.BlockingImage"] = function (request, data, root) {
  var i8190 = root || request.c( 'Popup.BlockingImage' )
  var i8191 = data
  return i8190
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i8192 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i8193 = data
  request.r(i8193[0], i8193[1], 0, i8192, 'm_Texture')
  i8192.m_UVRect = UnityEngine.Rect.MinMaxRect(i8193[2], i8193[3], i8193[4], i8193[5])
  request.r(i8193[6], i8193[7], 0, i8192, 'm_Material')
  i8192.m_Maskable = !!i8193[8]
  i8192.m_Color = new pc.Color(i8193[9], i8193[10], i8193[11], i8193[12])
  i8192.m_RaycastTarget = !!i8193[13]
  i8192.m_RaycastPadding = new pc.Vec4( i8193[14], i8193[15], i8193[16], i8193[17] )
  return i8192
}

Deserializers["PopupSample1"] = function (request, data, root) {
  var i8194 = root || request.c( 'PopupSample1' )
  var i8195 = data
  i8194.info = request.d('CurrencyInfo', i8195[0], i8194.info)
  i8194.cancelable = !!i8195[1]
  return i8194
}

Deserializers["PopupSample2"] = function (request, data, root) {
  var i8196 = root || request.c( 'PopupSample2' )
  var i8197 = data
  i8196.info = request.d('CurrencyInfo', i8197[0], i8196.info)
  i8196.cancelable = !!i8197[1]
  return i8196
}

Deserializers["RestUI"] = function (request, data, root) {
  var i8198 = root || request.c( 'RestUI' )
  var i8199 = data
  request.r(i8199[0], i8199[1], 0, i8198, 'canvas')
  return i8198
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i8200 = root || request.c( 'AudioManager' )
  var i8201 = data
  request.r(i8201[0], i8201[1], 0, i8200, 'audioClipTable')
  request.r(i8201[2], i8201[3], 0, i8200, 'effectsSource')
  request.r(i8201[4], i8201[5], 0, i8200, 'musicSource')
  request.r(i8201[6], i8201[7], 0, i8200, 'effectsSource2')
  return i8200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8203 = data
  i8202.name = i8203[0]
  i8202.index = i8203[1]
  i8202.startup = !!i8203[2]
  return i8202
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8204 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8205 = data
  request.r(i8205[0], i8205[1], 0, i8204, 'm_FirstSelected')
  i8204.m_sendNavigationEvents = !!i8205[2]
  i8204.m_DragThreshold = i8205[3]
  return i8204
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8206 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8207 = data
  i8206.m_HorizontalAxis = i8207[0]
  i8206.m_VerticalAxis = i8207[1]
  i8206.m_SubmitButton = i8207[2]
  i8206.m_CancelButton = i8207[3]
  i8206.m_InputActionsPerSecond = i8207[4]
  i8206.m_RepeatDelay = i8207[5]
  i8206.m_ForceModuleActive = !!i8207[6]
  i8206.m_SendPointerHoverToParent = !!i8207[7]
  return i8206
}

Deserializers["PlayerDataPreview"] = function (request, data, root) {
  var i8208 = root || request.c( 'PlayerDataPreview' )
  var i8209 = data
  i8208.playerData = request.d('PlayerData', i8209[0], i8208.playerData)
  i8208.level = i8209[1]
  return i8208
}

Deserializers["PlayerData"] = function (request, data, root) {
  var i8210 = root || request.c( 'PlayerData' )
  var i8211 = data
  i8210.languageType = i8211[0]
  i8210.localFirstActiveTime = i8211[1]
  i8210.localLastActiveTime = i8211[2]
  i8210.lastHeartRecoveryTime = i8211[3]
  i8210.lastClickGetCoinDailyShop = i8211[4]
  i8210.lastClickGetCoinDailyReward = i8211[5]
  i8210.timeToNextHeart = i8211[6]
  i8210.enterGameTimeCount = i8211[7]
  i8210.coinCount = i8211[8]
  i8210.gemCount = i8211[9]
  i8210.curHeart = i8211[10]
  i8210.maxHeart = i8211[11]
  i8210.numOfRemoveMatch3Bts = i8211[12]
  i8210.numOfSwapBts = i8211[13]
  i8210.numOfFreezeTimeBts = i8211[14]
  i8210.numOfBreakIceBts = i8211[15]
  i8210.timeToAddHeart = i8211[16]
  i8210.noAds = !!i8211[17]
  i8210.vip = !!i8211[18]
  i8210.removeAds1dExpiredTime = i8211[19]
  i8210.namePlayer = i8211[20]
  i8210.avatarPLayer = i8211[21]
  i8210.level = i8211[22]
  i8210.fakeIndexLevel = i8211[23]
  i8210.hasInfiniteHearts = !!i8211[24]
  i8210.infiniteHeartsExpireTime = i8211[25]
  i8210.numSkipAds = i8211[26]
  i8210.curPiggyBankCoin = i8211[27]
  i8210.maxPiggyBankCoin = i8211[28]
  i8210.coinTier1PiggyBank = i8211[29]
  i8210.lastClaimedRewardId = i8211[30]
  i8210.checkGetFreeCoin = !!i8211[31]
  i8210.currentDailyBonusDay = i8211[32]
  i8210.lastReceiveDailyBonusTime = i8211[33]
  var i8213 = i8211[34]
  var i8212 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8213.length; i += 1) {
    i8212.add(i8213[i + 0]);
  }
  i8210.coinShop = i8212
  var i8215 = i8211[35]
  var i8214 = new (System.Collections.Generic.List$1(Bridge.ns('DailyRewardPlayerState')))
  for(var i = 0; i < i8215.length; i += 1) {
    i8214.add(request.d('DailyRewardPlayerState', i8215[i + 0]));
  }
  i8210.dailyRewardStates = i8214
  i8210.gameData = request.d('GameData', i8211[36], i8210.gameData)
  i8210.tempData = request.d('TempData', i8211[37], i8210.tempData)
  return i8210
}

Deserializers["DailyRewardPlayerState"] = function (request, data, root) {
  var i8218 = root || request.c( 'DailyRewardPlayerState' )
  var i8219 = data
  i8218.rewardId = i8219[0]
  i8218.state = i8219[1]
  i8218.claimDate = request.d('System.DateTime', i8219[2], i8218.claimDate)
  return i8218
}

Deserializers["GameData"] = function (request, data, root) {
  var i8220 = root || request.c( 'GameData' )
  var i8221 = data
  i8220.musicState = !!i8221[0]
  i8220.soundState = !!i8221[1]
  i8220.vibrateState = !!i8221[2]
  return i8220
}

Deserializers["TempData"] = function (request, data, root) {
  var i8222 = root || request.c( 'TempData' )
  var i8223 = data
  i8222.rewardedVideoCount = i8223[0]
  i8222.lastTimeBBButonShowAd = i8223[1]
  i8222.winLevelCount = i8223[2]
  i8222.loseLevelCount = i8223[3]
  i8222.earnedGemCount = i8223[4]
  i8222.push_earnedGemCount_event = !!i8223[5]
  i8222.spentIAP = i8223[6]
  i8222.push_spentIAP_event = !!i8223[7]
  i8222.push_retention_day7 = !!i8223[8]
  i8222.push_retention_day5 = !!i8223[9]
  i8222.push_retention_day3 = !!i8223[10]
  i8222.push_firstIAP_event = !!i8223[11]
  return i8222
}

Deserializers["UIManager"] = function (request, data, root) {
  var i8224 = root || request.c( 'UIManager' )
  var i8225 = data
  var i8227 = i8225[0]
  var i8226 = []
  for(var i = 0; i < i8227.length; i += 2) {
  request.r(i8227[i + 0], i8227[i + 1], 2, i8226, '')
  }
  i8224.screens = i8226
  request.r(i8225[1], i8225[2], 0, i8224, 'canvas')
  request.r(i8225[3], i8225[4], 0, i8224, 'camUI')
  request.r(i8225[5], i8225[6], 0, i8224, 'transition')
  request.r(i8225[7], i8225[8], 0, i8224, 'popUpLose')
  request.r(i8225[9], i8225[10], 0, i8224, 'popUpWin')
  return i8224
}

Deserializers["SafeArea"] = function (request, data, root) {
  var i8230 = root || request.c( 'SafeArea' )
  var i8231 = data
  return i8230
}

Deserializers["PlayScreen"] = function (request, data, root) {
  var i8232 = root || request.c( 'PlayScreen' )
  var i8233 = data
  request.r(i8233[0], i8233[1], 0, i8232, 'curLevelCtrl')
  request.r(i8233[2], i8233[3], 0, i8232, 'processSlide')
  request.r(i8233[4], i8233[5], 0, i8232, 'processSliderBooster')
  request.r(i8233[6], i8233[7], 0, i8232, 'timerText')
  request.r(i8233[8], i8233[9], 0, i8232, 'levelText')
  request.r(i8233[10], i8233[11], 0, i8232, 'titleFreeBlock')
  request.r(i8233[12], i8233[13], 0, i8232, 'titleFillBlock')
  request.r(i8233[14], i8233[15], 0, i8232, 'textLv')
  request.r(i8233[16], i8233[17], 0, i8232, 'timerTextTMP')
  request.r(i8233[18], i8233[19], 0, i8232, 'settingBtn')
  request.r(i8233[20], i8233[21], 0, i8232, 'panelDark')
  request.r(i8233[22], i8233[23], 0, i8232, 'vfxFreezeScreen')
  request.r(i8233[24], i8233[25], 0, i8232, 'vfxLimitedTimeWarning')
  request.r(i8233[26], i8233[27], 0, i8232, 'animSuggest')
  i8232.revive = i8233[28]
  i8232.timeLimitLv = i8233[29]
  i8232.isCompletedBooster = !!i8233[30]
  i8232.isFreezeTime = !!i8233[31]
  i8232.hackBooster = !!i8233[32]
  i8232.isShowing = !!i8233[33]
  return i8232
}

Deserializers["ComboVfx"] = function (request, data, root) {
  var i8234 = root || request.c( 'ComboVfx' )
  var i8235 = data
  i8234.comboCount = i8235[0]
  request.r(i8235[1], i8235[2], 0, i8234, 'comboText')
  request.r(i8235[3], i8235[4], 0, i8234, 'comboSlider')
  request.r(i8235[5], i8235[6], 0, i8234, 'fillSlider')
  request.r(i8235[7], i8235[8], 0, i8234, 'flameRed')
  request.r(i8235[9], i8235[10], 0, i8234, 'flameViolet')
  request.r(i8235[11], i8235[12], 0, i8234, 'flameBlue')
  var i8237 = i8235[13]
  var i8236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8237.length; i += 2) {
  request.r(i8237[i + 0], i8237[i + 1], 1, i8236, '')
  }
  i8234.prefabTextVfxs = i8236
  request.r(i8235[14], i8235[15], 0, i8234, 'parentSpawnVfx')
  i8234.offsetSpawnTextVfx = new pc.Vec3( i8235[16], i8235[17], i8235[18] )
  request.r(i8235[19], i8235[20], 0, i8234, 'lvCtr')
  request.r(i8235[21], i8235[22], 0, i8234, 'noticeNewMaxComboVfx')
  request.r(i8235[23], i8235[24], 0, i8234, 'posSpawnNotice')
  i8234.timeCount = i8235[25]
  return i8234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i8240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i8241 = data
  request.r(i8241[0], i8241[1], 0, i8240, 'sharedMesh')
  return i8240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i8242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i8243 = data
  request.r(i8243[0], i8243[1], 0, i8242, 'additionalVertexStreams')
  i8242.enabled = !!i8243[2]
  request.r(i8243[3], i8243[4], 0, i8242, 'sharedMaterial')
  var i8245 = i8243[5]
  var i8244 = []
  for(var i = 0; i < i8245.length; i += 2) {
  request.r(i8245[i + 0], i8245[i + 1], 2, i8244, '')
  }
  i8242.sharedMaterials = i8244
  i8242.receiveShadows = !!i8243[6]
  i8242.shadowCastingMode = i8243[7]
  i8242.sortingLayerID = i8243[8]
  i8242.sortingOrder = i8243[9]
  i8242.lightmapIndex = i8243[10]
  i8242.lightmapSceneIndex = i8243[11]
  i8242.lightmapScaleOffset = new pc.Vec4( i8243[12], i8243[13], i8243[14], i8243[15] )
  i8242.lightProbeUsage = i8243[16]
  i8242.reflectionProbeUsage = i8243[17]
  return i8242
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i8246 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i8247 = data
  i8246.loop = !!i8247[0]
  i8246.timeScale = i8247[1]
  request.r(i8247[2], i8247[3], 0, i8246, 'skeletonDataAsset')
  i8246.initialSkinName = i8247[4]
  i8246.fixPrefabOverrideViaMeshFilter = i8247[5]
  i8246.initialFlipX = !!i8247[6]
  i8246.initialFlipY = !!i8247[7]
  i8246.updateWhenInvisible = i8247[8]
  i8246.zSpacing = i8247[9]
  i8246.useClipping = !!i8247[10]
  i8246.immutableTriangles = !!i8247[11]
  i8246.pmaVertexColors = !!i8247[12]
  i8246.clearStateOnDisable = !!i8247[13]
  i8246.tintBlack = !!i8247[14]
  i8246.singleSubmesh = !!i8247[15]
  i8246.fixDrawOrder = !!i8247[16]
  i8246.addNormals = !!i8247[17]
  i8246.calculateTangents = !!i8247[18]
  i8246.maskInteraction = i8247[19]
  i8246.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i8247[20], i8246.maskMaterials)
  i8246.disableRenderingOnOverride = !!i8247[21]
  i8246.updateTiming = i8247[22]
  i8246.unscaledTime = !!i8247[23]
  i8246._animationName = i8247[24]
  var i8249 = i8247[25]
  var i8248 = []
  for(var i = 0; i < i8249.length; i += 1) {
    i8248.push( i8249[i + 0] );
  }
  i8246.separatorSlotNames = i8248
  i8246.physicsPositionInheritanceFactor = new pc.Vec2( i8247[26], i8247[27] )
  i8246.physicsRotationInheritanceFactor = i8247[28]
  request.r(i8247[29], i8247[30], 0, i8246, 'physicsMovementRelativeTo')
  return i8246
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i8250 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i8251 = data
  var i8253 = i8251[0]
  var i8252 = []
  for(var i = 0; i < i8253.length; i += 2) {
  request.r(i8253[i + 0], i8253[i + 1], 2, i8252, '')
  }
  i8250.materialsMaskDisabled = i8252
  var i8255 = i8251[1]
  var i8254 = []
  for(var i = 0; i < i8255.length; i += 2) {
  request.r(i8255[i + 0], i8255[i + 1], 2, i8254, '')
  }
  i8250.materialsInsideMask = i8254
  var i8257 = i8251[2]
  var i8256 = []
  for(var i = 0; i < i8257.length; i += 2) {
  request.r(i8257[i + 0], i8257[i + 1], 2, i8256, '')
  }
  i8250.materialsOutsideMask = i8256
  return i8250
}

Deserializers["LevelCtr"] = function (request, data, root) {
  var i8260 = root || request.c( 'LevelCtr' )
  var i8261 = data
  request.r(i8261[0], i8261[1], 0, i8260, 'grillPrefab')
  request.r(i8261[2], i8261[3], 0, i8260, 'grillPrefab1')
  request.r(i8261[4], i8261[5], 0, i8260, 'shipperPrefab')
  request.r(i8261[6], i8261[7], 0, i8260, 'curShipper')
  request.r(i8261[8], i8261[9], 0, i8260, 'posSpawnShipper')
  request.r(i8261[10], i8261[11], 0, i8260, 'posAppear')
  request.r(i8261[12], i8261[13], 0, i8260, 'posDriveTo')
  request.r(i8261[14], i8261[15], 0, i8260, 'posDriveAway')
  var i8263 = i8261[16]
  var i8262 = new (System.Collections.Generic.List$1(Bridge.ns('PosGrillAtLv')))
  for(var i = 0; i < i8263.length; i += 1) {
    i8262.add(request.d('PosGrillAtLv', i8263[i + 0]));
  }
  i8260.posGrills = i8262
  var i8265 = i8261[17]
  var i8264 = new (System.Collections.Generic.List$1(Bridge.ns('Grill')))
  for(var i = 0; i < i8265.length; i += 2) {
  request.r(i8265[i + 0], i8265[i + 1], 1, i8264, '')
  }
  i8260.grills = i8264
  var i8267 = i8261[18]
  var i8266 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i8267.length; i += 2) {
  request.r(i8267[i + 0], i8267[i + 1], 1, i8266, '')
  }
  i8260.totalActiveSkewer = i8266
  var i8269 = i8261[19]
  var i8268 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i8269.length; i += 2) {
  request.r(i8269[i + 0], i8269[i + 1], 1, i8268, '')
  }
  i8260.onGrillSkewers = i8268
  var i8271 = i8261[20]
  var i8270 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i8271.length; i += 2) {
  request.r(i8271[i + 0], i8271[i + 1], 1, i8270, '')
  }
  i8260.onPlateSkewers = i8270
  var i8273 = i8261[21]
  var i8272 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i8273.length; i += 2) {
  request.r(i8273[i + 0], i8273[i + 1], 1, i8272, '')
  }
  i8260.onFistPlatesSkewers = i8272
  request.r(i8261[22], i8261[23], 0, i8260, 'plateCompletedPrefab')
  request.r(i8261[24], i8261[25], 0, i8260, 'posPlateWinAppear')
  request.r(i8261[26], i8261[27], 0, i8260, 'posPlateWinOut')
  i8260.easeCompletedSkewerMove = new pc.AnimationCurve( { keys_flow: i8261[28] } )
  i8260.numOfSkewer = i8261[29]
  i8260.numOfCompletedSkewer = i8261[30]
  i8260.isFinishInit = !!i8261[31]
  i8260.isHandlingBooster = !!i8261[32]
  i8260.isFinishLv = !!i8261[33]
  i8260.levelDatas = request.d('LevelData', i8261[34], i8260.levelDatas)
  i8260.orderShipper = i8261[35]
  i8260.doneOrders = i8261[36]
  i8260.stepShipper = i8261[37]
  i8260.isSuggestting = !!i8261[38]
  var i8275 = i8261[39]
  var i8274 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i8275.length; i += 2) {
  request.r(i8275[i + 0], i8275[i + 1], 1, i8274, '')
  }
  i8260.suggestSkewers = i8274
  request.r(i8261[40], i8261[41], 0, i8260, 'darkPanel')
  request.r(i8261[42], i8261[43], 0, i8260, 'animRemoveIce')
  request.r(i8261[44], i8261[45], 0, i8260, 'boosterCtr')
  var i8277 = i8261[46]
  var i8276 = new (System.Collections.Generic.List$1(Bridge.ns('Skewer')))
  for(var i = 0; i < i8277.length; i += 2) {
  request.r(i8277[i + 0], i8277[i + 1], 1, i8276, '')
  }
  i8260.hightLightSkewers = i8276
  request.r(i8261[47], i8261[48], 0, i8260, 'choosenSkewer')
  request.r(i8261[49], i8261[50], 0, i8260, 'animHand')
  request.r(i8261[51], i8261[52], 0, i8260, 'parentGrill')
  request.r(i8261[53], i8261[54], 0, i8260, 'curSkewerSwapMoving')
  i8260.isChoosingSkewerMoving = !!i8261[55]
  request.r(i8261[56], i8261[57], 0, i8260, 'comboVfx')
  i8260.maxCombo = i8261[58]
  i8260.countMatch = i8261[59]
  request.r(i8261[60], i8261[61], 0, i8260, 'coinPrefab')
  request.r(i8261[62], i8261[63], 0, i8260, 'currOrder')
  request.r(i8261[64], i8261[65], 0, i8260, 'UITransform')
  var i8279 = i8261[66]
  var i8278 = new (System.Collections.Generic.List$1(Bridge.ns('PlateCompleted')))
  for(var i = 0; i < i8279.length; i += 2) {
  request.r(i8279[i + 0], i8279[i + 1], 1, i8278, '')
  }
  i8260.plateCompleteds = i8278
  i8260.typeSkewerCompleted = i8261[67]
  request.r(i8261[68], i8261[69], 0, i8260, 'animSwap1')
  request.r(i8261[70], i8261[71], 0, i8260, 'animSwap2')
  request.r(i8261[72], i8261[73], 0, i8260, 'prefaVfxSwap')
  request.r(i8261[74], i8261[75], 0, i8260, 'holderVfx')
  request.r(i8261[76], i8261[77], 0, i8260, 'effectShockWave')
  return i8260
}

Deserializers["PosGrillAtLv"] = function (request, data, root) {
  var i8282 = root || request.c( 'PosGrillAtLv' )
  var i8283 = data
  i8282.rowIndex = i8283[0]
  i8282.colIndex = i8283[1]
  request.r(i8283[2], i8283[3], 0, i8282, 'pos')
  return i8282
}

Deserializers["LevelData"] = function (request, data, root) {
  var i8286 = root || request.c( 'LevelData' )
  var i8287 = data
  i8286.levelID = i8287[0]
  i8286.diff = i8287[1]
  i8286.time = i8287[2]
  i8286.order = i8287[3]
  i8286.width = i8287[4]
  i8286.height = i8287[5]
  var i8289 = i8287[6]
  var i8288 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i8289.length; i += 1) {
    i8288.add(i8289[i + 0]);
  }
  i8286.skewerDataType = i8288
  var i8291 = i8287[7]
  var i8290 = new (System.Collections.Generic.List$1(Bridge.ns('GrillData')))
  for(var i = 0; i < i8291.length; i += 1) {
    i8290.add(request.d('GrillData', i8291[i + 0]));
  }
  i8286.grills = i8290
  return i8286
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i8296 = root || request.c( 'Tutorial' )
  var i8297 = data
  request.r(i8297[0], i8297[1], 0, i8296, 'startGrill')
  request.r(i8297[2], i8297[3], 0, i8296, 'endGrill')
  i8296.indexGrillStart = i8297[4]
  i8296.indexGrillEnd = i8297[5]
  request.r(i8297[6], i8297[7], 0, i8296, 'hand')
  request.r(i8297[8], i8297[9], 0, i8296, 'title')
  request.r(i8297[10], i8297[11], 0, i8296, 'levelCtr')
  i8296.moveTime = i8297[12]
  i8296.fadeTime = i8297[13]
  return i8296
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i8298 = root || request.c( 'CoinManager' )
  var i8299 = data
  request.r(i8299[0], i8299[1], 0, i8298, 'textCoin')
  request.r(i8299[2], i8299[3], 0, i8298, 'coinBag')
  request.r(i8299[4], i8299[5], 0, i8298, 'coinPrefab')
  request.r(i8299[6], i8299[7], 0, i8298, 'textFloatPrefab')
  return i8298
}

Deserializers["PopUp"] = function (request, data, root) {
  var i8300 = root || request.c( 'PopUp' )
  var i8301 = data
  return i8300
}

Deserializers["LevelDataCtrl"] = function (request, data, root) {
  var i8302 = root || request.c( 'LevelDataCtrl' )
  var i8303 = data
  i8302.levelDatas = request.d('LevelDatas', i8303[0], i8302.levelDatas)
  i8302.curLevel = request.d('LevelData', i8303[1], i8302.curLevel)
  i8302._currentLevelIDToLoad = i8303[2]
  return i8302
}

Deserializers["LevelDatas"] = function (request, data, root) {
  var i8304 = root || request.c( 'LevelDatas' )
  var i8305 = data
  var i8307 = i8305[0]
  var i8306 = new (System.Collections.Generic.List$1(Bridge.ns('LevelData')))
  for(var i = 0; i < i8307.length; i += 1) {
    i8306.add(request.d('LevelData', i8307[i + 0]));
  }
  i8304.levelDatas = i8306
  return i8304
}

Deserializers["GameManager"] = function (request, data, root) {
  var i8310 = root || request.c( 'GameManager' )
  var i8311 = data
  request.r(i8311[0], i8311[1], 0, i8310, 'uiManager')
  i8310.level = i8311[2]
  return i8310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8313 = data
  i8312.ambientIntensity = i8313[0]
  i8312.reflectionIntensity = i8313[1]
  i8312.ambientMode = i8313[2]
  i8312.ambientLight = new pc.Color(i8313[3], i8313[4], i8313[5], i8313[6])
  i8312.ambientSkyColor = new pc.Color(i8313[7], i8313[8], i8313[9], i8313[10])
  i8312.ambientGroundColor = new pc.Color(i8313[11], i8313[12], i8313[13], i8313[14])
  i8312.ambientEquatorColor = new pc.Color(i8313[15], i8313[16], i8313[17], i8313[18])
  i8312.fogColor = new pc.Color(i8313[19], i8313[20], i8313[21], i8313[22])
  i8312.fogEndDistance = i8313[23]
  i8312.fogStartDistance = i8313[24]
  i8312.fogDensity = i8313[25]
  i8312.fog = !!i8313[26]
  request.r(i8313[27], i8313[28], 0, i8312, 'skybox')
  i8312.fogMode = i8313[29]
  var i8315 = i8313[30]
  var i8314 = []
  for(var i = 0; i < i8315.length; i += 1) {
    i8314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8315[i + 0]) );
  }
  i8312.lightmaps = i8314
  i8312.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8313[31], i8312.lightProbes)
  i8312.lightmapsMode = i8313[32]
  i8312.mixedBakeMode = i8313[33]
  i8312.environmentLightingMode = i8313[34]
  i8312.ambientProbe = new pc.SphericalHarmonicsL2(i8313[35])
  i8312.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8313[36])
  i8312.useReferenceAmbientProbe = !!i8313[37]
  request.r(i8313[38], i8313[39], 0, i8312, 'customReflection')
  request.r(i8313[40], i8313[41], 0, i8312, 'defaultReflection')
  i8312.defaultReflectionMode = i8313[42]
  i8312.defaultReflectionResolution = i8313[43]
  i8312.sunLightObjectId = i8313[44]
  i8312.pixelLightCount = i8313[45]
  i8312.defaultReflectionHDR = !!i8313[46]
  i8312.hasLightDataAsset = !!i8313[47]
  i8312.hasManualGenerate = !!i8313[48]
  return i8312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8319 = data
  request.r(i8319[0], i8319[1], 0, i8318, 'lightmapColor')
  request.r(i8319[2], i8319[3], 0, i8318, 'lightmapDirection')
  return i8318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8320 = root || new UnityEngine.LightProbes()
  var i8321 = data
  return i8320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8329 = data
  var i8331 = i8329[0]
  var i8330 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8331.length; i += 1) {
    i8330.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8331[i + 0]));
  }
  i8328.ShaderCompilationErrors = i8330
  i8328.name = i8329[1]
  i8328.guid = i8329[2]
  var i8333 = i8329[3]
  var i8332 = []
  for(var i = 0; i < i8333.length; i += 1) {
    i8332.push( i8333[i + 0] );
  }
  i8328.shaderDefinedKeywords = i8332
  var i8335 = i8329[4]
  var i8334 = []
  for(var i = 0; i < i8335.length; i += 1) {
    i8334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8335[i + 0]) );
  }
  i8328.passes = i8334
  var i8337 = i8329[5]
  var i8336 = []
  for(var i = 0; i < i8337.length; i += 1) {
    i8336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8337[i + 0]) );
  }
  i8328.usePasses = i8336
  var i8339 = i8329[6]
  var i8338 = []
  for(var i = 0; i < i8339.length; i += 1) {
    i8338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8339[i + 0]) );
  }
  i8328.defaultParameterValues = i8338
  request.r(i8329[7], i8329[8], 0, i8328, 'unityFallbackShader')
  i8328.readDepth = !!i8329[9]
  i8328.isCreatedByShaderGraph = !!i8329[10]
  i8328.compiled = !!i8329[11]
  return i8328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8343 = data
  i8342.shaderName = i8343[0]
  i8342.errorMessage = i8343[1]
  return i8342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8346 = root || new pc.UnityShaderPass()
  var i8347 = data
  i8346.id = i8347[0]
  i8346.subShaderIndex = i8347[1]
  i8346.name = i8347[2]
  i8346.passType = i8347[3]
  i8346.grabPassTextureName = i8347[4]
  i8346.usePass = !!i8347[5]
  i8346.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[6], i8346.zTest)
  i8346.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[7], i8346.zWrite)
  i8346.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[8], i8346.culling)
  i8346.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8347[9], i8346.blending)
  i8346.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8347[10], i8346.alphaBlending)
  i8346.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[11], i8346.colorWriteMask)
  i8346.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[12], i8346.offsetUnits)
  i8346.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[13], i8346.offsetFactor)
  i8346.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[14], i8346.stencilRef)
  i8346.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[15], i8346.stencilReadMask)
  i8346.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8347[16], i8346.stencilWriteMask)
  i8346.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8347[17], i8346.stencilOp)
  i8346.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8347[18], i8346.stencilOpFront)
  i8346.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8347[19], i8346.stencilOpBack)
  var i8349 = i8347[20]
  var i8348 = []
  for(var i = 0; i < i8349.length; i += 1) {
    i8348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8349[i + 0]) );
  }
  i8346.tags = i8348
  var i8351 = i8347[21]
  var i8350 = []
  for(var i = 0; i < i8351.length; i += 1) {
    i8350.push( i8351[i + 0] );
  }
  i8346.passDefinedKeywords = i8350
  var i8353 = i8347[22]
  var i8352 = []
  for(var i = 0; i < i8353.length; i += 1) {
    i8352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8353[i + 0]) );
  }
  i8346.passDefinedKeywordGroups = i8352
  var i8355 = i8347[23]
  var i8354 = []
  for(var i = 0; i < i8355.length; i += 1) {
    i8354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8355[i + 0]) );
  }
  i8346.variants = i8354
  var i8357 = i8347[24]
  var i8356 = []
  for(var i = 0; i < i8357.length; i += 1) {
    i8356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8357[i + 0]) );
  }
  i8346.excludedVariants = i8356
  i8346.hasDepthReader = !!i8347[25]
  return i8346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8359 = data
  i8358.val = i8359[0]
  i8358.name = i8359[1]
  return i8358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8361 = data
  i8360.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[0], i8360.src)
  i8360.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[1], i8360.dst)
  i8360.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8361[2], i8360.op)
  return i8360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8363 = data
  i8362.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8363[0], i8362.pass)
  i8362.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8363[1], i8362.fail)
  i8362.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8363[2], i8362.zFail)
  i8362.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8363[3], i8362.comp)
  return i8362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8367 = data
  i8366.name = i8367[0]
  i8366.value = i8367[1]
  return i8366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8371 = data
  var i8373 = i8371[0]
  var i8372 = []
  for(var i = 0; i < i8373.length; i += 1) {
    i8372.push( i8373[i + 0] );
  }
  i8370.keywords = i8372
  i8370.hasDiscard = !!i8371[1]
  return i8370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8377 = data
  i8376.passId = i8377[0]
  i8376.subShaderIndex = i8377[1]
  var i8379 = i8377[2]
  var i8378 = []
  for(var i = 0; i < i8379.length; i += 1) {
    i8378.push( i8379[i + 0] );
  }
  i8376.keywords = i8378
  i8376.vertexProgram = i8377[3]
  i8376.fragmentProgram = i8377[4]
  i8376.exportedForWebGl2 = !!i8377[5]
  i8376.readDepth = !!i8377[6]
  return i8376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8383 = data
  request.r(i8383[0], i8383[1], 0, i8382, 'shader')
  i8382.pass = i8383[2]
  return i8382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8387 = data
  i8386.name = i8387[0]
  i8386.type = i8387[1]
  i8386.value = new pc.Vec4( i8387[2], i8387[3], i8387[4], i8387[5] )
  i8386.textureValue = i8387[6]
  i8386.shaderPropertyFlag = i8387[7]
  return i8386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8389 = data
  i8388.name = i8389[0]
  request.r(i8389[1], i8389[2], 0, i8388, 'texture')
  i8388.aabb = i8389[3]
  i8388.vertices = i8389[4]
  i8388.triangles = i8389[5]
  i8388.textureRect = UnityEngine.Rect.MinMaxRect(i8389[6], i8389[7], i8389[8], i8389[9])
  i8388.packedRect = UnityEngine.Rect.MinMaxRect(i8389[10], i8389[11], i8389[12], i8389[13])
  i8388.border = new pc.Vec4( i8389[14], i8389[15], i8389[16], i8389[17] )
  i8388.transparency = i8389[18]
  i8388.bounds = i8389[19]
  i8388.pixelsPerUnit = i8389[20]
  i8388.textureWidth = i8389[21]
  i8388.textureHeight = i8389[22]
  i8388.nativeSize = new pc.Vec2( i8389[23], i8389[24] )
  i8388.pivot = new pc.Vec2( i8389[25], i8389[26] )
  i8388.textureRectOffset = new pc.Vec2( i8389[27], i8389[28] )
  return i8388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8391 = data
  i8390.name = i8391[0]
  return i8390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8393 = data
  i8392.name = i8393[0]
  i8392.wrapMode = i8393[1]
  i8392.isLooping = !!i8393[2]
  i8392.length = i8393[3]
  var i8395 = i8393[4]
  var i8394 = []
  for(var i = 0; i < i8395.length; i += 1) {
    i8394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8395[i + 0]) );
  }
  i8392.curves = i8394
  var i8397 = i8393[5]
  var i8396 = []
  for(var i = 0; i < i8397.length; i += 1) {
    i8396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8397[i + 0]) );
  }
  i8392.events = i8396
  i8392.halfPrecision = !!i8393[6]
  i8392._frameRate = i8393[7]
  i8392.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8393[8], i8392.localBounds)
  i8392.hasMuscleCurves = !!i8393[9]
  var i8399 = i8393[10]
  var i8398 = []
  for(var i = 0; i < i8399.length; i += 1) {
    i8398.push( i8399[i + 0] );
  }
  i8392.clipMuscleConstant = i8398
  i8392.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8393[11], i8392.clipBindingConstant)
  return i8392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8403 = data
  i8402.path = i8403[0]
  i8402.hash = i8403[1]
  i8402.componentType = i8403[2]
  i8402.property = i8403[3]
  i8402.keys = i8403[4]
  var i8405 = i8403[5]
  var i8404 = []
  for(var i = 0; i < i8405.length; i += 1) {
    i8404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8405[i + 0]) );
  }
  i8402.objectReferenceKeys = i8404
  return i8402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8409 = data
  i8408.time = i8409[0]
  request.r(i8409[1], i8409[2], 0, i8408, 'value')
  return i8408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8413 = data
  i8412.functionName = i8413[0]
  i8412.floatParameter = i8413[1]
  i8412.intParameter = i8413[2]
  i8412.stringParameter = i8413[3]
  request.r(i8413[4], i8413[5], 0, i8412, 'objectReferenceParameter')
  i8412.time = i8413[6]
  return i8412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8415 = data
  i8414.center = new pc.Vec3( i8415[0], i8415[1], i8415[2] )
  i8414.extends = new pc.Vec3( i8415[3], i8415[4], i8415[5] )
  return i8414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8419 = data
  var i8421 = i8419[0]
  var i8420 = []
  for(var i = 0; i < i8421.length; i += 1) {
    i8420.push( i8421[i + 0] );
  }
  i8418.genericBindings = i8420
  var i8423 = i8419[1]
  var i8422 = []
  for(var i = 0; i < i8423.length; i += 1) {
    i8422.push( i8423[i + 0] );
  }
  i8418.pptrCurveMapping = i8422
  return i8418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8425 = data
  i8424.name = i8425[0]
  i8424.ascent = i8425[1]
  i8424.originalLineHeight = i8425[2]
  i8424.fontSize = i8425[3]
  var i8427 = i8425[4]
  var i8426 = []
  for(var i = 0; i < i8427.length; i += 1) {
    i8426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8427[i + 0]) );
  }
  i8424.characterInfo = i8426
  request.r(i8425[5], i8425[6], 0, i8424, 'texture')
  i8424.originalFontSize = i8425[7]
  return i8424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8431 = data
  i8430.index = i8431[0]
  i8430.advance = i8431[1]
  i8430.bearing = i8431[2]
  i8430.glyphWidth = i8431[3]
  i8430.glyphHeight = i8431[4]
  i8430.minX = i8431[5]
  i8430.maxX = i8431[6]
  i8430.minY = i8431[7]
  i8430.maxY = i8431[8]
  i8430.uvBottomLeftX = i8431[9]
  i8430.uvBottomLeftY = i8431[10]
  i8430.uvBottomRightX = i8431[11]
  i8430.uvBottomRightY = i8431[12]
  i8430.uvTopLeftX = i8431[13]
  i8430.uvTopLeftY = i8431[14]
  i8430.uvTopRightX = i8431[15]
  i8430.uvTopRightY = i8431[16]
  return i8430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8433 = data
  i8432.name = i8433[0]
  var i8435 = i8433[1]
  var i8434 = []
  for(var i = 0; i < i8435.length; i += 1) {
    i8434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8435[i + 0]) );
  }
  i8432.layers = i8434
  var i8437 = i8433[2]
  var i8436 = []
  for(var i = 0; i < i8437.length; i += 1) {
    i8436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8437[i + 0]) );
  }
  i8432.parameters = i8436
  i8432.animationClips = i8433[3]
  i8432.avatarUnsupported = i8433[4]
  return i8432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8441 = data
  i8440.name = i8441[0]
  i8440.defaultWeight = i8441[1]
  i8440.blendingMode = i8441[2]
  i8440.avatarMask = i8441[3]
  i8440.syncedLayerIndex = i8441[4]
  i8440.syncedLayerAffectsTiming = !!i8441[5]
  i8440.syncedLayers = i8441[6]
  i8440.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8441[7], i8440.stateMachine)
  return i8440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8443 = data
  i8442.id = i8443[0]
  i8442.name = i8443[1]
  i8442.path = i8443[2]
  var i8445 = i8443[3]
  var i8444 = []
  for(var i = 0; i < i8445.length; i += 1) {
    i8444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8445[i + 0]) );
  }
  i8442.states = i8444
  var i8447 = i8443[4]
  var i8446 = []
  for(var i = 0; i < i8447.length; i += 1) {
    i8446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8447[i + 0]) );
  }
  i8442.machines = i8446
  var i8449 = i8443[5]
  var i8448 = []
  for(var i = 0; i < i8449.length; i += 1) {
    i8448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8449[i + 0]) );
  }
  i8442.entryStateTransitions = i8448
  var i8451 = i8443[6]
  var i8450 = []
  for(var i = 0; i < i8451.length; i += 1) {
    i8450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8451[i + 0]) );
  }
  i8442.exitStateTransitions = i8450
  var i8453 = i8443[7]
  var i8452 = []
  for(var i = 0; i < i8453.length; i += 1) {
    i8452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8453[i + 0]) );
  }
  i8442.anyStateTransitions = i8452
  i8442.defaultStateId = i8443[8]
  return i8442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8457 = data
  i8456.id = i8457[0]
  i8456.name = i8457[1]
  i8456.cycleOffset = i8457[2]
  i8456.cycleOffsetParameter = i8457[3]
  i8456.cycleOffsetParameterActive = !!i8457[4]
  i8456.mirror = !!i8457[5]
  i8456.mirrorParameter = i8457[6]
  i8456.mirrorParameterActive = !!i8457[7]
  i8456.motionId = i8457[8]
  i8456.nameHash = i8457[9]
  i8456.fullPathHash = i8457[10]
  i8456.speed = i8457[11]
  i8456.speedParameter = i8457[12]
  i8456.speedParameterActive = !!i8457[13]
  i8456.tag = i8457[14]
  i8456.tagHash = i8457[15]
  i8456.writeDefaultValues = !!i8457[16]
  var i8459 = i8457[17]
  var i8458 = []
  for(var i = 0; i < i8459.length; i += 2) {
  request.r(i8459[i + 0], i8459[i + 1], 2, i8458, '')
  }
  i8456.behaviours = i8458
  var i8461 = i8457[18]
  var i8460 = []
  for(var i = 0; i < i8461.length; i += 1) {
    i8460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8461[i + 0]) );
  }
  i8456.transitions = i8460
  return i8456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8467 = data
  i8466.fullPath = i8467[0]
  i8466.canTransitionToSelf = !!i8467[1]
  i8466.duration = i8467[2]
  i8466.exitTime = i8467[3]
  i8466.hasExitTime = !!i8467[4]
  i8466.hasFixedDuration = !!i8467[5]
  i8466.interruptionSource = i8467[6]
  i8466.offset = i8467[7]
  i8466.orderedInterruption = !!i8467[8]
  i8466.destinationStateId = i8467[9]
  i8466.isExit = !!i8467[10]
  i8466.mute = !!i8467[11]
  i8466.solo = !!i8467[12]
  var i8469 = i8467[13]
  var i8468 = []
  for(var i = 0; i < i8469.length; i += 1) {
    i8468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8469[i + 0]) );
  }
  i8466.conditions = i8468
  return i8466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8475 = data
  i8474.destinationStateId = i8475[0]
  i8474.isExit = !!i8475[1]
  i8474.mute = !!i8475[2]
  i8474.solo = !!i8475[3]
  var i8477 = i8475[4]
  var i8476 = []
  for(var i = 0; i < i8477.length; i += 1) {
    i8476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8477[i + 0]) );
  }
  i8474.conditions = i8476
  return i8474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8481 = data
  i8480.mode = i8481[0]
  i8480.parameter = i8481[1]
  i8480.threshold = i8481[2]
  return i8480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8485 = data
  i8484.defaultBool = !!i8485[0]
  i8484.defaultFloat = i8485[1]
  i8484.defaultInt = i8485[2]
  i8484.name = i8485[3]
  i8484.nameHash = i8485[4]
  i8484.type = i8485[5]
  return i8484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i8486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i8487 = data
  i8486.name = i8487[0]
  i8486.bytes64 = i8487[1]
  i8486.data = i8487[2]
  return i8486
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i8488 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i8489 = data
  i8488.hashCode = i8489[0]
  request.r(i8489[1], i8489[2], 0, i8488, 'material')
  i8488.materialHashCode = i8489[3]
  request.r(i8489[4], i8489[5], 0, i8488, 'atlas')
  i8488.normalStyle = i8489[6]
  i8488.normalSpacingOffset = i8489[7]
  i8488.boldStyle = i8489[8]
  i8488.boldSpacing = i8489[9]
  i8488.italicStyle = i8489[10]
  i8488.tabSize = i8489[11]
  i8488.m_Version = i8489[12]
  i8488.m_SourceFontFileGUID = i8489[13]
  request.r(i8489[14], i8489[15], 0, i8488, 'm_SourceFontFile_EditorRef')
  request.r(i8489[16], i8489[17], 0, i8488, 'm_SourceFontFile')
  i8488.m_AtlasPopulationMode = i8489[18]
  i8488.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8489[19], i8488.m_FaceInfo)
  var i8491 = i8489[20]
  var i8490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i8491.length; i += 1) {
    i8490.add(request.d('UnityEngine.TextCore.Glyph', i8491[i + 0]));
  }
  i8488.m_GlyphTable = i8490
  var i8493 = i8489[21]
  var i8492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i8493.length; i += 1) {
    i8492.add(request.d('TMPro.TMP_Character', i8493[i + 0]));
  }
  i8488.m_CharacterTable = i8492
  var i8495 = i8489[22]
  var i8494 = []
  for(var i = 0; i < i8495.length; i += 2) {
  request.r(i8495[i + 0], i8495[i + 1], 2, i8494, '')
  }
  i8488.m_AtlasTextures = i8494
  i8488.m_AtlasTextureIndex = i8489[23]
  i8488.m_IsMultiAtlasTexturesEnabled = !!i8489[24]
  i8488.m_ClearDynamicDataOnBuild = !!i8489[25]
  var i8497 = i8489[26]
  var i8496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8497.length; i += 1) {
    i8496.add(request.d('UnityEngine.TextCore.GlyphRect', i8497[i + 0]));
  }
  i8488.m_UsedGlyphRects = i8496
  var i8499 = i8489[27]
  var i8498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i8499.length; i += 1) {
    i8498.add(request.d('UnityEngine.TextCore.GlyphRect', i8499[i + 0]));
  }
  i8488.m_FreeGlyphRects = i8498
  i8488.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i8489[28], i8488.m_fontInfo)
  i8488.m_AtlasWidth = i8489[29]
  i8488.m_AtlasHeight = i8489[30]
  i8488.m_AtlasPadding = i8489[31]
  i8488.m_AtlasRenderMode = i8489[32]
  var i8501 = i8489[33]
  var i8500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i8501.length; i += 1) {
    i8500.add(request.d('TMPro.TMP_Glyph', i8501[i + 0]));
  }
  i8488.m_glyphInfoList = i8500
  i8488.m_KerningTable = request.d('TMPro.KerningTable', i8489[34], i8488.m_KerningTable)
  i8488.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i8489[35], i8488.m_FontFeatureTable)
  var i8503 = i8489[36]
  var i8502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8503.length; i += 2) {
  request.r(i8503[i + 0], i8503[i + 1], 1, i8502, '')
  }
  i8488.fallbackFontAssets = i8502
  var i8505 = i8489[37]
  var i8504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8505.length; i += 2) {
  request.r(i8505[i + 0], i8505[i + 1], 1, i8504, '')
  }
  i8488.m_FallbackFontAssetTable = i8504
  i8488.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i8489[38], i8488.m_CreationSettings)
  var i8507 = i8489[39]
  var i8506 = []
  for(var i = 0; i < i8507.length; i += 1) {
    i8506.push( request.d('TMPro.TMP_FontWeightPair', i8507[i + 0]) );
  }
  i8488.m_FontWeightTable = i8506
  var i8509 = i8489[40]
  var i8508 = []
  for(var i = 0; i < i8509.length; i += 1) {
    i8508.push( request.d('TMPro.TMP_FontWeightPair', i8509[i + 0]) );
  }
  i8488.fontWeights = i8508
  return i8488
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i8510 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i8511 = data
  i8510.m_FaceIndex = i8511[0]
  i8510.m_FamilyName = i8511[1]
  i8510.m_StyleName = i8511[2]
  i8510.m_PointSize = i8511[3]
  i8510.m_Scale = i8511[4]
  i8510.m_UnitsPerEM = i8511[5]
  i8510.m_LineHeight = i8511[6]
  i8510.m_AscentLine = i8511[7]
  i8510.m_CapLine = i8511[8]
  i8510.m_MeanLine = i8511[9]
  i8510.m_Baseline = i8511[10]
  i8510.m_DescentLine = i8511[11]
  i8510.m_SuperscriptOffset = i8511[12]
  i8510.m_SuperscriptSize = i8511[13]
  i8510.m_SubscriptOffset = i8511[14]
  i8510.m_SubscriptSize = i8511[15]
  i8510.m_UnderlineOffset = i8511[16]
  i8510.m_UnderlineThickness = i8511[17]
  i8510.m_StrikethroughOffset = i8511[18]
  i8510.m_StrikethroughThickness = i8511[19]
  i8510.m_TabWidth = i8511[20]
  return i8510
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i8514 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i8515 = data
  i8514.m_Index = i8515[0]
  i8514.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8515[1], i8514.m_Metrics)
  i8514.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8515[2], i8514.m_GlyphRect)
  i8514.m_Scale = i8515[3]
  i8514.m_AtlasIndex = i8515[4]
  i8514.m_ClassDefinitionType = i8515[5]
  return i8514
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i8516 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i8517 = data
  i8516.m_Width = i8517[0]
  i8516.m_Height = i8517[1]
  i8516.m_HorizontalBearingX = i8517[2]
  i8516.m_HorizontalBearingY = i8517[3]
  i8516.m_HorizontalAdvance = i8517[4]
  return i8516
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i8518 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i8519 = data
  i8518.m_X = i8519[0]
  i8518.m_Y = i8519[1]
  i8518.m_Width = i8519[2]
  i8518.m_Height = i8519[3]
  return i8518
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i8522 = root || request.c( 'TMPro.TMP_Character' )
  var i8523 = data
  i8522.m_ElementType = i8523[0]
  i8522.m_Unicode = i8523[1]
  i8522.m_GlyphIndex = i8523[2]
  i8522.m_Scale = i8523[3]
  return i8522
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i8528 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i8529 = data
  i8528.Name = i8529[0]
  i8528.PointSize = i8529[1]
  i8528.Scale = i8529[2]
  i8528.CharacterCount = i8529[3]
  i8528.LineHeight = i8529[4]
  i8528.Baseline = i8529[5]
  i8528.Ascender = i8529[6]
  i8528.CapHeight = i8529[7]
  i8528.Descender = i8529[8]
  i8528.CenterLine = i8529[9]
  i8528.SuperscriptOffset = i8529[10]
  i8528.SubscriptOffset = i8529[11]
  i8528.SubSize = i8529[12]
  i8528.Underline = i8529[13]
  i8528.UnderlineThickness = i8529[14]
  i8528.strikethrough = i8529[15]
  i8528.strikethroughThickness = i8529[16]
  i8528.TabWidth = i8529[17]
  i8528.Padding = i8529[18]
  i8528.AtlasWidth = i8529[19]
  i8528.AtlasHeight = i8529[20]
  return i8528
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i8532 = root || request.c( 'TMPro.TMP_Glyph' )
  var i8533 = data
  i8532.id = i8533[0]
  i8532.x = i8533[1]
  i8532.y = i8533[2]
  i8532.width = i8533[3]
  i8532.height = i8533[4]
  i8532.xOffset = i8533[5]
  i8532.yOffset = i8533[6]
  i8532.xAdvance = i8533[7]
  i8532.scale = i8533[8]
  return i8532
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i8534 = root || request.c( 'TMPro.KerningTable' )
  var i8535 = data
  var i8537 = i8535[0]
  var i8536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i8537.length; i += 1) {
    i8536.add(request.d('TMPro.KerningPair', i8537[i + 0]));
  }
  i8534.kerningPairs = i8536
  return i8534
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i8540 = root || request.c( 'TMPro.KerningPair' )
  var i8541 = data
  i8540.xOffset = i8541[0]
  i8540.m_FirstGlyph = i8541[1]
  i8540.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8541[2], i8540.m_FirstGlyphAdjustments)
  i8540.m_SecondGlyph = i8541[3]
  i8540.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i8541[4], i8540.m_SecondGlyphAdjustments)
  i8540.m_IgnoreSpacingAdjustments = !!i8541[5]
  return i8540
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i8542 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i8543 = data
  var i8545 = i8543[0]
  var i8544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i8545.length; i += 1) {
    i8544.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i8545[i + 0]));
  }
  i8542.m_GlyphPairAdjustmentRecords = i8544
  return i8542
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i8548 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i8549 = data
  i8548.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8549[0], i8548.m_FirstAdjustmentRecord)
  i8548.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i8549[1], i8548.m_SecondAdjustmentRecord)
  i8548.m_FeatureLookupFlags = i8549[2]
  return i8548
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i8552 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i8553 = data
  i8552.sourceFontFileName = i8553[0]
  i8552.sourceFontFileGUID = i8553[1]
  i8552.pointSizeSamplingMode = i8553[2]
  i8552.pointSize = i8553[3]
  i8552.padding = i8553[4]
  i8552.packingMode = i8553[5]
  i8552.atlasWidth = i8553[6]
  i8552.atlasHeight = i8553[7]
  i8552.characterSetSelectionMode = i8553[8]
  i8552.characterSequence = i8553[9]
  i8552.referencedFontAssetGUID = i8553[10]
  i8552.referencedTextAssetGUID = i8553[11]
  i8552.fontStyle = i8553[12]
  i8552.fontStyleModifier = i8553[13]
  i8552.renderMode = i8553[14]
  i8552.includeFontFeatures = !!i8553[15]
  return i8552
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i8556 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i8557 = data
  request.r(i8557[0], i8557[1], 0, i8556, 'regularTypeface')
  request.r(i8557[2], i8557[3], 0, i8556, 'italicTypeface')
  return i8556
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i8558 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i8559 = data
  var i8561 = i8559[0]
  var i8560 = []
  for(var i = 0; i < i8561.length; i += 2) {
  request.r(i8561[i + 0], i8561[i + 1], 2, i8560, '')
  }
  i8558.atlasAssets = i8560
  i8558.scale = i8559[1]
  request.r(i8559[2], i8559[3], 0, i8558, 'skeletonJSON')
  i8558.isUpgradingBlendModeMaterials = !!i8559[4]
  i8558.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i8559[5], i8558.blendModeMaterials)
  var i8563 = i8559[6]
  var i8562 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i8563.length; i += 2) {
  request.r(i8563[i + 0], i8563[i + 1], 1, i8562, '')
  }
  i8558.skeletonDataModifiers = i8562
  var i8565 = i8559[7]
  var i8564 = []
  for(var i = 0; i < i8565.length; i += 1) {
    i8564.push( i8565[i + 0] );
  }
  i8558.fromAnimation = i8564
  var i8567 = i8559[8]
  var i8566 = []
  for(var i = 0; i < i8567.length; i += 1) {
    i8566.push( i8567[i + 0] );
  }
  i8558.toAnimation = i8566
  i8558.duration = i8559[9]
  i8558.defaultMix = i8559[10]
  request.r(i8559[11], i8559[12], 0, i8558, 'controller')
  return i8558
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i8570 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i8571 = data
  i8570.applyAdditiveMaterial = !!i8571[0]
  var i8573 = i8571[1]
  var i8572 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8573.length; i += 1) {
    i8572.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8573[i + 0]));
  }
  i8570.additiveMaterials = i8572
  var i8575 = i8571[2]
  var i8574 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8575.length; i += 1) {
    i8574.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8575[i + 0]));
  }
  i8570.multiplyMaterials = i8574
  var i8577 = i8571[3]
  var i8576 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i8577.length; i += 1) {
    i8576.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i8577[i + 0]));
  }
  i8570.screenMaterials = i8576
  i8570.requiresBlendModeMaterials = !!i8571[4]
  return i8570
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i8580 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i8581 = data
  i8580.pageName = i8581[0]
  request.r(i8581[1], i8581[2], 0, i8580, 'material')
  return i8580
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i8584 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i8585 = data
  request.r(i8585[0], i8585[1], 0, i8584, 'atlasFile')
  var i8587 = i8585[2]
  var i8586 = []
  for(var i = 0; i < i8587.length; i += 2) {
  request.r(i8587[i + 0], i8587[i + 1], 2, i8586, '')
  }
  i8584.materials = i8586
  i8584.textureLoadingMode = i8585[3]
  request.r(i8585[4], i8585[5], 0, i8584, 'onDemandTextureLoader')
  return i8584
}

Deserializers["AudioClipTable"] = function (request, data, root) {
  var i8588 = root || request.c( 'AudioClipTable' )
  var i8589 = data
  var i8591 = i8589[0]
  var i8590 = []
  for(var i = 0; i < i8591.length; i += 1) {
    i8590.push( request.d('AudioClipTable+AudioClipWithKey', i8591[i + 0]) );
  }
  i8588.data = i8590
  return i8588
}

Deserializers["AudioClipTable+AudioClipWithKey"] = function (request, data, root) {
  var i8594 = root || request.c( 'AudioClipTable+AudioClipWithKey' )
  var i8595 = data
  i8594.key = i8595[0]
  request.r(i8595[1], i8595[2], 0, i8594, 'clip')
  return i8594
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8596 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8597 = data
  i8596.useSafeMode = !!i8597[0]
  i8596.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8597[1], i8596.safeModeOptions)
  i8596.timeScale = i8597[2]
  i8596.unscaledTimeScale = i8597[3]
  i8596.useSmoothDeltaTime = !!i8597[4]
  i8596.maxSmoothUnscaledTime = i8597[5]
  i8596.rewindCallbackMode = i8597[6]
  i8596.showUnityEditorReport = !!i8597[7]
  i8596.logBehaviour = i8597[8]
  i8596.drawGizmos = !!i8597[9]
  i8596.defaultRecyclable = !!i8597[10]
  i8596.defaultAutoPlay = i8597[11]
  i8596.defaultUpdateType = i8597[12]
  i8596.defaultTimeScaleIndependent = !!i8597[13]
  i8596.defaultEaseType = i8597[14]
  i8596.defaultEaseOvershootOrAmplitude = i8597[15]
  i8596.defaultEasePeriod = i8597[16]
  i8596.defaultAutoKill = !!i8597[17]
  i8596.defaultLoopType = i8597[18]
  i8596.debugMode = !!i8597[19]
  i8596.debugStoreTargetId = !!i8597[20]
  i8596.showPreviewPanel = !!i8597[21]
  i8596.storeSettingsLocation = i8597[22]
  i8596.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8597[23], i8596.modules)
  i8596.createASMDEF = !!i8597[24]
  i8596.showPlayingTweens = !!i8597[25]
  i8596.showPausedTweens = !!i8597[26]
  return i8596
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8598 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8599 = data
  i8598.logBehaviour = i8599[0]
  i8598.nestedTweenFailureBehaviour = i8599[1]
  return i8598
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8600 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8601 = data
  i8600.showPanel = !!i8601[0]
  i8600.audioEnabled = !!i8601[1]
  i8600.physicsEnabled = !!i8601[2]
  i8600.physics2DEnabled = !!i8601[3]
  i8600.spriteEnabled = !!i8601[4]
  i8600.uiEnabled = !!i8601[5]
  i8600.textMeshProEnabled = !!i8601[6]
  i8600.tk2DEnabled = !!i8601[7]
  i8600.deAudioEnabled = !!i8601[8]
  i8600.deUnityExtendedEnabled = !!i8601[9]
  i8600.epoOutlineEnabled = !!i8601[10]
  return i8600
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i8602 = root || request.c( 'TMPro.TMP_Settings' )
  var i8603 = data
  i8602.m_enableWordWrapping = !!i8603[0]
  i8602.m_enableKerning = !!i8603[1]
  i8602.m_enableExtraPadding = !!i8603[2]
  i8602.m_enableTintAllSprites = !!i8603[3]
  i8602.m_enableParseEscapeCharacters = !!i8603[4]
  i8602.m_EnableRaycastTarget = !!i8603[5]
  i8602.m_GetFontFeaturesAtRuntime = !!i8603[6]
  i8602.m_missingGlyphCharacter = i8603[7]
  i8602.m_warningsDisabled = !!i8603[8]
  request.r(i8603[9], i8603[10], 0, i8602, 'm_defaultFontAsset')
  i8602.m_defaultFontAssetPath = i8603[11]
  i8602.m_defaultFontSize = i8603[12]
  i8602.m_defaultAutoSizeMinRatio = i8603[13]
  i8602.m_defaultAutoSizeMaxRatio = i8603[14]
  i8602.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i8603[15], i8603[16] )
  i8602.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i8603[17], i8603[18] )
  i8602.m_autoSizeTextContainer = !!i8603[19]
  i8602.m_IsTextObjectScaleStatic = !!i8603[20]
  var i8605 = i8603[21]
  var i8604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i8605.length; i += 2) {
  request.r(i8605[i + 0], i8605[i + 1], 1, i8604, '')
  }
  i8602.m_fallbackFontAssets = i8604
  i8602.m_matchMaterialPreset = !!i8603[22]
  request.r(i8603[23], i8603[24], 0, i8602, 'm_defaultSpriteAsset')
  i8602.m_defaultSpriteAssetPath = i8603[25]
  i8602.m_enableEmojiSupport = !!i8603[26]
  i8602.m_MissingCharacterSpriteUnicode = i8603[27]
  i8602.m_defaultColorGradientPresetsPath = i8603[28]
  request.r(i8603[29], i8603[30], 0, i8602, 'm_defaultStyleSheet')
  i8602.m_StyleSheetsResourcePath = i8603[31]
  request.r(i8603[32], i8603[33], 0, i8602, 'm_leadingCharacters')
  request.r(i8603[34], i8603[35], 0, i8602, 'm_followingCharacters')
  i8602.m_UseModernHangulLineBreakingRules = !!i8603[36]
  return i8602
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i8606 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i8607 = data
  i8606.hashCode = i8607[0]
  request.r(i8607[1], i8607[2], 0, i8606, 'material')
  i8606.materialHashCode = i8607[3]
  request.r(i8607[4], i8607[5], 0, i8606, 'spriteSheet')
  var i8609 = i8607[6]
  var i8608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i8609.length; i += 1) {
    i8608.add(request.d('TMPro.TMP_Sprite', i8609[i + 0]));
  }
  i8606.spriteInfoList = i8608
  var i8611 = i8607[7]
  var i8610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i8611.length; i += 2) {
  request.r(i8611[i + 0], i8611[i + 1], 1, i8610, '')
  }
  i8606.fallbackSpriteAssets = i8610
  i8606.m_Version = i8607[8]
  i8606.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i8607[9], i8606.m_FaceInfo)
  var i8613 = i8607[10]
  var i8612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i8613.length; i += 1) {
    i8612.add(request.d('TMPro.TMP_SpriteCharacter', i8613[i + 0]));
  }
  i8606.m_SpriteCharacterTable = i8612
  var i8615 = i8607[11]
  var i8614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i8615.length; i += 1) {
    i8614.add(request.d('TMPro.TMP_SpriteGlyph', i8615[i + 0]));
  }
  i8606.m_SpriteGlyphTable = i8614
  return i8606
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i8618 = root || request.c( 'TMPro.TMP_Sprite' )
  var i8619 = data
  i8618.name = i8619[0]
  i8618.hashCode = i8619[1]
  i8618.unicode = i8619[2]
  i8618.pivot = new pc.Vec2( i8619[3], i8619[4] )
  request.r(i8619[5], i8619[6], 0, i8618, 'sprite')
  i8618.id = i8619[7]
  i8618.x = i8619[8]
  i8618.y = i8619[9]
  i8618.width = i8619[10]
  i8618.height = i8619[11]
  i8618.xOffset = i8619[12]
  i8618.yOffset = i8619[13]
  i8618.xAdvance = i8619[14]
  i8618.scale = i8619[15]
  return i8618
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i8624 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i8625 = data
  i8624.m_Name = i8625[0]
  i8624.m_HashCode = i8625[1]
  i8624.m_ElementType = i8625[2]
  i8624.m_Unicode = i8625[3]
  i8624.m_GlyphIndex = i8625[4]
  i8624.m_Scale = i8625[5]
  return i8624
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i8628 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i8629 = data
  request.r(i8629[0], i8629[1], 0, i8628, 'sprite')
  i8628.m_Index = i8629[2]
  i8628.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i8629[3], i8628.m_Metrics)
  i8628.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i8629[4], i8628.m_GlyphRect)
  i8628.m_Scale = i8629[5]
  i8628.m_AtlasIndex = i8629[6]
  i8628.m_ClassDefinitionType = i8629[7]
  return i8628
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i8630 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i8631 = data
  var i8633 = i8631[0]
  var i8632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i8633.length; i += 1) {
    i8632.add(request.d('TMPro.TMP_Style', i8633[i + 0]));
  }
  i8630.m_StyleList = i8632
  return i8630
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i8636 = root || request.c( 'TMPro.TMP_Style' )
  var i8637 = data
  i8636.m_Name = i8637[0]
  i8636.m_HashCode = i8637[1]
  i8636.m_OpeningDefinition = i8637[2]
  i8636.m_ClosingDefinition = i8637[3]
  i8636.m_OpeningTagArray = i8637[4]
  i8636.m_ClosingTagArray = i8637[5]
  i8636.m_OpeningTagUnicodeArray = i8637[6]
  i8636.m_ClosingTagUnicodeArray = i8637[7]
  return i8636
}

Deserializers["DailyLogInSO"] = function (request, data, root) {
  var i8638 = root || request.c( 'DailyLogInSO' )
  var i8639 = data
  var i8641 = i8639[0]
  var i8640 = new (System.Collections.Generic.List$1(Bridge.ns('DayReward')))
  for(var i = 0; i < i8641.length; i += 1) {
    i8640.add(request.d('DayReward', i8641[i + 0]));
  }
  i8638.DayRewards = i8640
  return i8638
}

Deserializers["DayReward"] = function (request, data, root) {
  var i8644 = root || request.c( 'DayReward' )
  var i8645 = data
  i8644.day = i8645[0]
  var i8647 = i8645[1]
  var i8646 = new (System.Collections.Generic.List$1(Bridge.ns('SingleReward')))
  for(var i = 0; i < i8647.length; i += 1) {
    i8646.add(request.d('SingleReward', i8647[i + 0]));
  }
  i8644.SingleRewards = i8646
  return i8644
}

Deserializers["SingleReward"] = function (request, data, root) {
  var i8650 = root || request.c( 'SingleReward' )
  var i8651 = data
  i8650.rewardType = i8651[0]
  request.r(i8651[1], i8651[2], 0, i8650, 'imgReward')
  i8650.amount = i8651[3]
  i8650.textAmountPos = new pc.Vec2( i8651[4], i8651[5] )
  return i8650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8653 = data
  var i8655 = i8653[0]
  var i8654 = []
  for(var i = 0; i < i8655.length; i += 1) {
    i8654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8655[i + 0]) );
  }
  i8652.files = i8654
  i8652.componentToPrefabIds = i8653[1]
  return i8652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8659 = data
  i8658.path = i8659[0]
  request.r(i8659[1], i8659[2], 0, i8658, 'unityObject')
  return i8658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8661 = data
  var i8663 = i8661[0]
  var i8662 = []
  for(var i = 0; i < i8663.length; i += 1) {
    i8662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8663[i + 0]) );
  }
  i8660.scriptsExecutionOrder = i8662
  var i8665 = i8661[1]
  var i8664 = []
  for(var i = 0; i < i8665.length; i += 1) {
    i8664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8665[i + 0]) );
  }
  i8660.sortingLayers = i8664
  var i8667 = i8661[2]
  var i8666 = []
  for(var i = 0; i < i8667.length; i += 1) {
    i8666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8667[i + 0]) );
  }
  i8660.cullingLayers = i8666
  i8660.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8661[3], i8660.timeSettings)
  i8660.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8661[4], i8660.physicsSettings)
  i8660.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8661[5], i8660.physics2DSettings)
  i8660.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8661[6], i8660.qualitySettings)
  i8660.enableRealtimeShadows = !!i8661[7]
  i8660.enableAutoInstancing = !!i8661[8]
  i8660.enableDynamicBatching = !!i8661[9]
  i8660.lightmapEncodingQuality = i8661[10]
  i8660.desiredColorSpace = i8661[11]
  var i8669 = i8661[12]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( i8669[i + 0] );
  }
  i8660.allTags = i8668
  return i8660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8673 = data
  i8672.name = i8673[0]
  i8672.value = i8673[1]
  return i8672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8677 = data
  i8676.id = i8677[0]
  i8676.name = i8677[1]
  i8676.value = i8677[2]
  return i8676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8681 = data
  i8680.id = i8681[0]
  i8680.name = i8681[1]
  return i8680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8683 = data
  i8682.fixedDeltaTime = i8683[0]
  i8682.maximumDeltaTime = i8683[1]
  i8682.timeScale = i8683[2]
  i8682.maximumParticleTimestep = i8683[3]
  return i8682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8685 = data
  i8684.gravity = new pc.Vec3( i8685[0], i8685[1], i8685[2] )
  i8684.defaultSolverIterations = i8685[3]
  i8684.bounceThreshold = i8685[4]
  i8684.autoSyncTransforms = !!i8685[5]
  i8684.autoSimulation = !!i8685[6]
  var i8687 = i8685[7]
  var i8686 = []
  for(var i = 0; i < i8687.length; i += 1) {
    i8686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8687[i + 0]) );
  }
  i8684.collisionMatrix = i8686
  return i8684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8691 = data
  i8690.enabled = !!i8691[0]
  i8690.layerId = i8691[1]
  i8690.otherLayerId = i8691[2]
  return i8690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8693 = data
  request.r(i8693[0], i8693[1], 0, i8692, 'material')
  i8692.gravity = new pc.Vec2( i8693[2], i8693[3] )
  i8692.positionIterations = i8693[4]
  i8692.velocityIterations = i8693[5]
  i8692.velocityThreshold = i8693[6]
  i8692.maxLinearCorrection = i8693[7]
  i8692.maxAngularCorrection = i8693[8]
  i8692.maxTranslationSpeed = i8693[9]
  i8692.maxRotationSpeed = i8693[10]
  i8692.baumgarteScale = i8693[11]
  i8692.baumgarteTOIScale = i8693[12]
  i8692.timeToSleep = i8693[13]
  i8692.linearSleepTolerance = i8693[14]
  i8692.angularSleepTolerance = i8693[15]
  i8692.defaultContactOffset = i8693[16]
  i8692.autoSimulation = !!i8693[17]
  i8692.queriesHitTriggers = !!i8693[18]
  i8692.queriesStartInColliders = !!i8693[19]
  i8692.callbacksOnDisable = !!i8693[20]
  i8692.reuseCollisionCallbacks = !!i8693[21]
  i8692.autoSyncTransforms = !!i8693[22]
  var i8695 = i8693[23]
  var i8694 = []
  for(var i = 0; i < i8695.length; i += 1) {
    i8694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8695[i + 0]) );
  }
  i8692.collisionMatrix = i8694
  return i8692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8699 = data
  i8698.enabled = !!i8699[0]
  i8698.layerId = i8699[1]
  i8698.otherLayerId = i8699[2]
  return i8698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8701 = data
  var i8703 = i8701[0]
  var i8702 = []
  for(var i = 0; i < i8703.length; i += 1) {
    i8702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8703[i + 0]) );
  }
  i8700.qualityLevels = i8702
  var i8705 = i8701[1]
  var i8704 = []
  for(var i = 0; i < i8705.length; i += 1) {
    i8704.push( i8705[i + 0] );
  }
  i8700.names = i8704
  i8700.shadows = i8701[2]
  i8700.anisotropicFiltering = i8701[3]
  i8700.antiAliasing = i8701[4]
  i8700.lodBias = i8701[5]
  i8700.shadowCascades = i8701[6]
  i8700.shadowDistance = i8701[7]
  i8700.shadowmaskMode = i8701[8]
  i8700.shadowProjection = i8701[9]
  i8700.shadowResolution = i8701[10]
  i8700.softParticles = !!i8701[11]
  i8700.softVegetation = !!i8701[12]
  i8700.activeColorSpace = i8701[13]
  i8700.desiredColorSpace = i8701[14]
  i8700.masterTextureLimit = i8701[15]
  i8700.maxQueuedFrames = i8701[16]
  i8700.particleRaycastBudget = i8701[17]
  i8700.pixelLightCount = i8701[18]
  i8700.realtimeReflectionProbes = !!i8701[19]
  i8700.shadowCascade2Split = i8701[20]
  i8700.shadowCascade4Split = new pc.Vec3( i8701[21], i8701[22], i8701[23] )
  i8700.streamingMipmapsActive = !!i8701[24]
  i8700.vSyncCount = i8701[25]
  i8700.asyncUploadBufferSize = i8701[26]
  i8700.asyncUploadTimeSlice = i8701[27]
  i8700.billboardsFaceCameraPosition = !!i8701[28]
  i8700.shadowNearPlaneOffset = i8701[29]
  i8700.streamingMipmapsMemoryBudget = i8701[30]
  i8700.maximumLODLevel = i8701[31]
  i8700.streamingMipmapsAddAllCameras = !!i8701[32]
  i8700.streamingMipmapsMaxLevelReduction = i8701[33]
  i8700.streamingMipmapsRenderersPerFrame = i8701[34]
  i8700.resolutionScalingFixedDPIFactor = i8701[35]
  i8700.streamingMipmapsMaxFileIORequests = i8701[36]
  i8700.currentQualityLevel = i8701[37]
  return i8700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8711 = data
  i8710.weight = i8711[0]
  i8710.vertices = i8711[1]
  i8710.normals = i8711[2]
  i8710.tangents = i8711[3]
  return i8710
}

Deserializers["System.DateTime"] = function (request, data, root) {
  var i8712 = root || request.c( 'System.DateTime' )
  var i8713 = data
  return i8712
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i8714 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i8715 = data
  i8714.xPlacement = i8715[0]
  i8714.yPlacement = i8715[1]
  i8714.xAdvance = i8715[2]
  i8714.yAdvance = i8715[3]
  return i8714
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i8716 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i8717 = data
  i8716.m_GlyphIndex = i8717[0]
  i8716.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i8717[1], i8716.m_GlyphValueRecord)
  return i8716
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i8718 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i8719 = data
  i8718.m_XPlacement = i8719[0]
  i8718.m_YPlacement = i8719[1]
  i8718.m_XAdvance = i8719[2]
  i8718.m_YAdvance = i8719[3]
  return i8718
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[92],"93":[45],"94":[95],"96":[95],"97":[95],"98":[95],"99":[95],"100":[95],"101":[95],"102":[29],"103":[29],"104":[29],"105":[29],"106":[29],"107":[29],"108":[29],"109":[29],"110":[29],"111":[29],"112":[29],"113":[29],"114":[29],"115":[45],"116":[70],"117":[118],"119":[118],"23":[7],"25":[19],"120":[19],"121":[19],"122":[19],"123":[19],"124":[19],"125":[19],"126":[19],"127":[19],"128":[19],"129":[19,128],"130":[19],"131":[19],"132":[45],"133":[7],"134":[135],"136":[137],"138":[45],"139":[140],"141":[7],"142":[20,7],"71":[70],"143":[20,7],"144":[17,70],"145":[70],"146":[70,69],"147":[95],"148":[29],"149":[140],"150":[151],"152":[7,20],"153":[7],"154":[70,7],"38":[7,20],"155":[7],"156":[20,7],"157":[70],"158":[20,7],"159":[7],"160":[161],"162":[145],"163":[70,69],"164":[143],"165":[145],"166":[167],"168":[145],"169":[145],"170":[151],"171":[151],"172":[145],"173":[135],"174":[8],"175":[7],"176":[7],"36":[23],"24":[20,7],"177":[7],"49":[23],"178":[7],"179":[7],"34":[7],"180":[7],"181":[7],"182":[7],"183":[7],"184":[7],"185":[7],"48":[20,7],"186":[7],"187":[7],"188":[7],"33":[7],"19":[20,7],"189":[7],"190":[60],"191":[60],"61":[60],"192":[60],"193":[45],"194":[45],"195":[135]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Grill","Plate","Skewer","LockOfGrillOB","SmokeGrill","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Text","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Font","UnityEngine.Canvas","UnityEngine.UI.Image","BetterOutline","UnityEngine.BoxCollider","GrillMouseEvent","UnityEngine.GameObject","UnityEngine.Rigidbody2D","SkewerMouseEvent","Shipper","ItemOrder","UnityEngine.UI.Slider","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","UnityEngine.UI.GraphicRaycaster","PlateCompleted","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.AudioSource","UnityEngine.AudioClip","EpicToonFX.ETFXLightFade","UnityEngine.Light","Popup.PopupSystem","UnityEngine.Camera","PopupDarkEffect","Popup.BlockingImage","UnityEngine.UI.RawImage","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","PopupLiteMessage","UnityEngine.UI.Shadow","PopupBlurEffect","PopupSample1","PopupSample2","RestUI","AudioManager","AudioClipTable","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayerDataPreview","UIManager","PlayScreen","PopUp","SafeArea","LevelCtr","ComboVfx","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Tutorial","CoinManager","LevelDataCtrl","GameManager","Spine.Unity.SkeletonDataAsset","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","DailyLogInSO","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Bevel","CharacterSpacing","CurveEffect","DepthEffect","InnerBevel","InnerOutline","OverlayTexture","GradientColor","LimitVisibleCharacters","Typewriter","SkewEffect","SoftShadow","CameraEffectApplier","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","Coffee.UIExtensions.UIParticle","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonGraphicRenderTexture","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRenderTextureBase","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "Skewer Shuffle";

Deserializers.lunaInitializationTime = "08/15/2025 03:14:52";

Deserializers.lunaDaysRunning = "4.3";

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

Deserializers.buildID = "d1c7f42e-9840-4c14-8cd2-e70e93ebfad9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceInitializer","Initialize"],["Coffee","UIParticleInternal","UIExtraCallbacks","InitializeOnLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptInitializeAdaptivePerformanceOnLoad"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","AdaptivePerformance","AdaptivePerformanceGeneralSettings","AttemptStartAdaptivePerformanceOnBeforeSplashScreen"],["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["Coffee","UIParticleInternal","MaterialRepository","Clear"],["Coffee","UIParticleInternal","FrameCache","Clear"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"],["UnityEditor","AdaptivePerformance","Simulator","Editor","SimulatorAdaptivePerformanceSubsystem","RegisterDescriptor"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

