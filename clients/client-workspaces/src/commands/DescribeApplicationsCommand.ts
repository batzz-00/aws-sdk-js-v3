// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeApplicationsRequest, DescribeApplicationsResult } from "../models/models_0";
import { de_DescribeApplicationsCommand, se_DescribeApplicationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandInput extends DescribeApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationsCommand}.
 */
export interface DescribeApplicationsCommandOutput extends DescribeApplicationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified applications by filtering based on their compute types, license availability, operating systems, and owners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeApplicationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeApplicationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeApplicationsRequest
 *   ApplicationIds: [ // WorkSpaceApplicationIdList
 *     "STRING_VALUE",
 *   ],
 *   ComputeTypeNames: [ // ComputeList
 *     "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 *   ],
 *   LicenseType: "LICENSED" || "UNLICENSED",
 *   OperatingSystemNames: [ // OperatingSystemNameList
 *     "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022",
 *   ],
 *   Owner: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationsResult
 * //   Applications: [ // WorkSpaceApplicationList
 * //     { // WorkSpaceApplication
 * //       ApplicationId: "STRING_VALUE",
 * //       Created: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       LicenseType: "LICENSED" || "UNLICENSED",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       State: "PENDING" || "ERROR" || "AVAILABLE" || "UNINSTALL_ONLY",
 * //       SupportedComputeTypeNames: [ // ComputeList
 * //         "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //       ],
 * //       SupportedOperatingSystemNames: [ // OperatingSystemNameList
 * //         "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationsCommandInput - {@link DescribeApplicationsCommandInput}
 * @returns {@link DescribeApplicationsCommandOutput}
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeApplicationsCommand extends $Command<
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationsCommandInput, DescribeApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeApplications",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationsCommandOutput> {
    return de_DescribeApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
