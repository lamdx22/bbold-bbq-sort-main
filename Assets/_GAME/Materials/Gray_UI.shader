Shader "Unlit/Gray_UI"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _GrayAmount ("Grayscale Amount", Range(0,1)) = 1
    }

    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue"="Transparent" }
        Blend SrcAlpha OneMinusSrcAlpha
        ZWrite Off
        Cull Off

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            float _GrayAmount;

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv);

                // Tính grayscale theo công thức Y = 0.299R + 0.587G + 0.114B
                float gray = dot(col.rgb, float3(0.299, 0.587, 0.114));

                col.rgb = lerp(col.rgb, gray.xxx, _GrayAmount);
                return col;
            }
            ENDCG
        }
    }
}
