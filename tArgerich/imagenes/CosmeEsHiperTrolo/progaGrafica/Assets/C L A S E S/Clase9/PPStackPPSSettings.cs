// Amplify Shader Editor - Visual Shader Editing Tool
// Copyright (c) Amplify Creations, Lda <info@amplify.pt>
#if UNITY_POST_PROCESSING_STACK_V2
using System;
using UnityEngine;
using UnityEngine.Rendering.PostProcessing;

[Serializable]
[PostProcess( typeof( PPStackPPSRenderer ), PostProcessEvent.AfterStack, "PPStack", true )]
public sealed class PPStackPPSSettings : PostProcessEffectSettings
{
}

public sealed class PPStackPPSRenderer : PostProcessEffectRenderer<PPStackPPSSettings>
{
	public override void Render( PostProcessRenderContext context )
	{
		var sheet = context.propertySheets.Get( Shader.Find( "PPStack" ) );
		context.command.BlitFullscreenTriangle( context.source, context.destination, sheet, 0 );
	}
}
#endif
