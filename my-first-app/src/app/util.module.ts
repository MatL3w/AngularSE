import { NgModule } from "@angular/core";
import { LoggingService } from "./logging.service";
import { ServiceToInject } from "./serviceToInject.service";

@NgModule({
  providers: [LoggingService, ServiceToInject],
})
export class UtilModule {}
