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

import { ForecastqueryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastqueryClient";
import {
  QueryForecastRequest,
  QueryForecastRequestFilterSensitiveLog,
  QueryForecastResponse,
  QueryForecastResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1QueryForecastCommand,
  serializeAws_json1_1QueryForecastCommand,
} from "../protocols/Aws_json1_1";

export interface QueryForecastCommandInput extends QueryForecastRequest {}
export interface QueryForecastCommandOutput extends QueryForecastResponse, __MetadataBearer {}

/**
 * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p>
 *          <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the
 *       equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset,
 *       or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code>
 *       object.</p>
 *          <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered
 *       forecast. You can request a specific date range.</p>
 *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastqueryClient, QueryForecastCommand } from "@aws-sdk/client-forecastquery"; // ES Modules import
 * // const { ForecastqueryClient, QueryForecastCommand } = require("@aws-sdk/client-forecastquery"); // CommonJS import
 * const client = new ForecastqueryClient(config);
 * const command = new QueryForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryForecastCommandInput} for command's `input` shape.
 * @see {@link QueryForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastqueryClientResolvedConfig | config} for ForecastqueryClient's `config` shape.
 *
 */
export class QueryForecastCommand extends $Command<
  QueryForecastCommandInput,
  QueryForecastCommandOutput,
  ForecastqueryClientResolvedConfig
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

  constructor(readonly input: QueryForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastqueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryForecastCommandInput, QueryForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryForecastCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastqueryClient";
    const commandName = "QueryForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryForecastRequestFilterSensitiveLog,
      outputFilterSensitiveLog: QueryForecastResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QueryForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryForecastCommandOutput> {
    return deserializeAws_json1_1QueryForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
