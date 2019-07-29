// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export class DigitalTwinFileNames {
  static readonly graphFileName = 'graph.json';
  static readonly interfaceFileName = 'Interface.json';
  static readonly capabilityModelFileName = 'CapabilityModel.json';
  static readonly iotModelFileName = 'IoTModel.json';
  static readonly settingsJsonFileName = 'settings.json';
  static readonly vscodeSettingsFolderName = '.vscode';
  static readonly sampleInterfaceName = 'sample.interface.json';
  static readonly sampleCapabilityModelName = 'sample.capabilitymodel.json';
  static readonly schemaFolderName = 'schemas';
  static readonly defaultInterfaceName = 'myInterface';
  static readonly defaultCapabilityModelName = 'myCapabilityModel';
  static readonly etagCacheFileName = 'etagCache.json';
  static readonly devicemodelTemplateFolderName = 'devicemodel';
  static readonly projectTypeListFileName = 'projecttypelist.json';
  static readonly deviceConnectionListFileName = 'deviceconnectionlist.json';
  static readonly utilitiesFolderName = 'utilities';
}

export class DigitalTwinConstants {
  static readonly repoConnectionStringTemplate =
      'HostName=<Host Name>;RepositoryId=<repository id>;SharedAccessKeyName=<Shared AccessKey Name>;SharedAccessKey=<access Key>';
  static readonly interfaceSuffix = '.interface.json';
  static readonly capabilityModelSuffix = '.capabilitymodel.json';
  static readonly jsonSuffix = '.json';
  static readonly dtPrefix = '[IoT Plug and Play]';
  static readonly apiVersion = '2019-07-01-Preview';
  static readonly productName = 'IoT Plug and Play';
  static readonly codeGenCli = 'IoT Plug and Play CodeGen Cli';
  static readonly codeGenCliApp = 'DigitalTwinCodeGen';
}

export class CodeGenConstants {
  static readonly codeGeneratorToolPath = 'iotpnp-codegen';
}

export class DTDLKeywords {
  static readonly typeValueInterface = 'Interface';
  static readonly typeValueDCM = 'CapabilityModel';
  static readonly inlineInterfaceKeyName = 'interfaceSchema';
}