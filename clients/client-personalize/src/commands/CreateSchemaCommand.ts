// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateSchemaRequest,
  CreateSchemaRequestFilterSensitiveLog,
  CreateSchemaResponse,
  CreateSchemaResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1CreateSchemaCommand,
  serializeAws_json1_1CreateSchemaCommand,
} from "../protocols/Aws_json1_1";

export interface CreateSchemaCommandInput extends CreateSchemaRequest {}
export interface CreateSchemaCommandOutput extends CreateSchemaResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create
 *       must be in Avro JSON format.</p>
 *          <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset
 *       type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you
 *     provide the domain of the Domain dataset group.
 *     You specify a schema when you call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html">ListSchemas</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html">DescribeSchema</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html">DeleteSchema</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class CreateSchemaCommand extends $Command<
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
  PersonalizeClientResolvedConfig
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

  constructor(readonly input: CreateSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSchemaCommandInput, CreateSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSchemaCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSchemaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSchemaResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSchemaCommandOutput> {
    return deserializeAws_json1_1CreateSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
