import { Controller, Get, HttpException } from '@nestjs/common';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Controller()
export class BusinessPartnerController {
    @Get('business-partners')
    getBusinessPartners() {
        //return 'We will implement this in a minute.';
        return getAllBusinessPartners()
        .catch(error => {
          throw new HttpException(`Failed to get business partners - ${error.message}`, 500);
        });
    }
}

  function getAllBusinessPartners(): Promise<BusinessPartner[]> {
    return BusinessPartner.requestBuilder()
        .getAll()
        .withCustomHeaders({ APIKey: 'ONPzwpOGR1GkWpwXSZ9ggcFQ3p2rxFK0' })
        .execute({
            // url: 'https://sandbox.api.sap.com/s4hanacloud'
            destinationName: 'SAPAPIHub'//in scp, put url of destination 'SAPAPIHub' as https://sandbox.api.sap.com/s4hanacloud. Ignore the 404 error for check connection
        });

}