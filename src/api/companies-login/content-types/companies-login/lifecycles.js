// Path: src/api/companies-login/content-types/companies-login/lifecycles.js

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const emailTemplate = {
      subject: 'New Company Login Submission',
      text: `
        New Company Login Submission:
        Company Name: <%= companyName %>
        Legal Entity: <%= legalEntity %>
        Unified Number: <%= unifiedNumber %>
        Commercial Registration Number: <%= commercialRegistrationNumber %>
        Establishment Date: <%= establishmentDate %>
        Correspondence: <%= Correspondence %>
        Registered Address: <%= registeredAddress %>
        Building Number: <%= buildingNumber %>
        Street Name: <%= streetName %>
        District: <%= district %>
        City: <%= city %>
        Postal Code: <%= postalCode %>
        Additional Number: <%= additionalNumber %>
        Registration Country: <%= registrationCountry %>
        Business Activity Country: <%= businessActivityCountry %>
        Main Activity: <%= mainActivity %>
        Number Of Employees: <%= numberOfEmployees %>
        Paid Capital: <%= paidCapital %>
        Annual Business Volume: <%= annualBusinessVolume %>
        Website: <%= website %>
        Contact Name: <%= contactName %>
        Business Phone: <%= businessPhone %>
        Email: <%= email %>
        Correspondence Address: <%= correspondenceAddress %>
        Bank Name: <%= bankName %>
        Account Owner Name: <%= accountOwnerName %>
        Main Account: <%= mainAccount %>
        Branch: <%= branch %>
        Country: <%= country %>
        Currency: <%= currency %>
        Is Publicly Listed: <%= isPubliclyListed %>
        Other Financial Info: <%= otherFinancialInfo %>
        Account Number: <%= accountNumber %>
        Custodian Name: <%= custodianName %>
        Custodian Address: <%= custodianAddress %>
        Investment Knowledge Description: <%= investmentKnowledgeDescription %>
        Investment Years: <%= investmentYears %>
        Previous Investments: <%= previousInvestments %>
        Loan To Invested Money Ratio: <%= loanToInvestedMoneyRatio %>
        Margin Transactions: <%= marginTransactions %>
        Securities Transactions Outside Kingdom: <%= securitiesTransactionsOutsideKingdom %>
        Countries For Securities Transactions: <%= countriesForSecuritiesTransactions %>
        Risk Appetite: <%= riskAppetite %>
        Capital Protection: <%= capitalProtection %>
        Income Generation: <%= incomeGeneration %>
        Balanced: <%= balanced %>
        Capital Growth: <%= capitalGrowth %>
        Retirement Savings: <%= retirementSavings %>
        Project Financing: <%= projectFinancing %>
        Asset Purchase: <%= assetPurchase %>
        Investment Goals Other: <%= investmentGoalsOther %>
        Foreign Currency Assets: <%= foreignCurrencyAssets %>
        Saudi Assets: <%= saudiAssets %>
        Client Current Wallet Deposits Murabah: <%= clientCurrentWalletdepositsMurabah %>
        Ideal Portfolio For The Client Deposits Murabah: <%= idealportfoliofortheclientdepositsMurabah %>
        Client Current Wallet Debit Instruments: <%= clientCurrentWalletdebitInstruments %>
        Ideal Portfolio For The Client Debit Instruments: <%= idealportfoliofortheclientdebitInstruments %>
        Client Current Wallet Equity: <%= clientCurrentWalletequity %>
        Ideal Portfolio For The Client Equity: <%= idealportfoliofortheclientequity %>
        Client Current Wallet Investment Fund: <%= clientCurrentWalletinvestmentFund %>
        Ideal Portfolio For The Client Investment Fund: <%= idealportfoliofortheclientinvestmentFund %>
        Client Current Wallet Real Estate: <%= clientCurrentWalletrealEstate %>
        Ideal Portfolio For The Client Real Estate: <%= idealportfoliofortheclientrealEstate %>
        Client Current Wallet Derivatives Contracts: <%= clientCurrentWalletderivativesContracts %>
        Ideal Portfolio For The Client Derivatives Contracts: <%= idealportfoliofortheclientderivativesContracts %>
        Client Current Wallet Alternative Investments: <%= clientCurrentWalletalternativeInvestments %>
        Ideal Portfolio For The Client Alternative Investments: <%= idealportfoliofortheclientalternativeInvestments %>
        Other Parties Certificates: <%= OtherPartiesCertificates %>
        Other Parties Dividends: <%= OtherPartiesDividends %>
        Other Parties Sales Proceed: <%= OtherPartiesSalesProceed %>
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Company Login Submission</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #36274C;
              padding: 20px;
              text-align: center;
            }
            h1 {
              color: #FFFFFF;
              margin-bottom: 20px;
            }
            .content {
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #36274C;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Company Login Submission</h1>
            </div>
            <div class="content">
              <div class="field"><span class="label">Company Name:</span> <span class="value"><%= companyName %></span></div>
              <div class="field"><span class="label">Legal Entity:</span> <span class="value"><%= legalEntity %></span></div>
              <div class="field"><span class="label">Unified Number:</span> <span class="value"><%= unifiedNumber %></span></div>
              <div class="field"><span class="label">Commercial Registration Number:</span> <span class="value"><%= commercialRegistrationNumber %></span></div>
              <div class="field"><span class="label">Establishment Date:</span> <span class="value"><%= establishmentDate %></span></div>
              <div class="field"><span class="label">Correspondence:</span> <span class="value"><%= Correspondence %></span></div>
              <div class="field"><span class="label">Registered Address:</span> <span class="value"><%= registeredAddress %></span></div>
              <div class="field"><span class="label">Building Number:</span> <span class="value"><%= buildingNumber %></span></div>
              <div class="field"><span class="label">Street Name:</span> <span class="value"><%= streetName %></span></div>
              <div class="field"><span class="label">District:</span> <span class="value"><%= district %></span></div>
              <div class="field"><span class="label">City:</span> <span class="value"><%= city %></span></div>
              <div class="field"><span class="label">Postal Code:</span> <span class="value"><%= postalCode %></span></div>
              <div class="field"><span class="label">Additional Number:</span> <span class="value"><%= additionalNumber %></span></div>
              <div class="field"><span class="label">Registration Country:</span> <span class="value"><%= registrationCountry %></span></div>
              <div class="field"><span class="label">Business Activity Country:</span> <span class="value"><%= businessActivityCountry %></span></div>
              <div class="field"><span class="label">Main Activity:</span> <span class="value"><%= mainActivity %></span></div>
              <div class="field"><span class="label">Number Of Employees:</span> <span class="value"><%= numberOfEmployees %></span></div>
              <div class="field"><span class="label">Paid Capital:</span> <span class="value"><%= paidCapital %></span></div>
              <div class="field"><span class="label">Annual Business Volume:</span> <span class="value"><%= annualBusinessVolume %></span></div>
              <div class="field"><span class="label">Website:</span> <span class="value"><%= website %></span></div>
              <div class="field"><span class="label">Contact Name:</span> <span class="value"><%= contactName %></span></div>
              <div class="field"><span class="label">Business Phone:</span> <span class="value"><%= businessPhone %></span></div>
              <div class="field"><span class="label">Email:</span> <span class="value"><%= email %></span></div>
              <div class="field"><span class="label">Correspondence Address:</span> <span class="value"><%= correspondenceAddress %></span></div>
              <div class="field"><span class="label">Bank Name:</span> <span class="value"><%= bankName %></span></div>
              <div class="field"><span class="label">Account Owner Name:</span> <span class="value"><%= accountOwnerName %></span></div>
              <div class="field"><span class="label">Main Account:</span> <span class="value"><%= mainAccount %></span></div>
              <div class="field"><span class="label">Branch:</span> <span class="value"><%= branch %></span></div>
              <div class="field"><span class="label">Country:</span> <span class="value"><%= country %></span></div>
              <div class="field"><span class="label">Currency:</span> <span class="value"><%= currency %></span></div>
              <div class="field"><span class="label">Is Publicly Listed:</span> <span class="value"><%= isPubliclyListed %></span></div>
              <div class="field"><span class="label">Other Financial Info:</span> <span class="value"><%= otherFinancialInfo %></span></div>
              <div class="field"><span class="label">Account Number:</span> <span class="value"><%= accountNumber %></span></div>
              <div class="field"><span class="label">Custodian Name:</span> <span class="value"><%= custodianName %></span></div>
              <div class="field"><span class="label">Custodian Address:</span> <span class="value"><%= custodianAddress %></span></div>
              <div class="field"><span class="label">Investment Knowledge Description:</span> <span class="value"><%= investmentKnowledgeDescription %></span></div>
              <div class="field"><span class="label">Investment Years:</span> <span class="value"><%= investmentYears %></span></div>
              <div class="field"><span class="label">Previous Investments:</span> <span class="value"><%= previousInvestments %></span></div>
              <div class="field"><span class="label">Loan To Invested Money Ratio:</span> <span class="value"><%= loanToInvestedMoneyRatio %></span></div>
              <div class="field"><span class="label">Margin Transactions:</span> <span class="value"><%= marginTransactions %></span></div>
              <div class="field"><span class="label">Securities Transactions Outside Kingdom:</span> <span class="value"><%= securitiesTransactionsOutsideKingdom %></span></div>
              <div class="field"><span class="label">Countries For Securities Transactions:</span> <span class="value"><%= countriesForSecuritiesTransactions %></span></div>
              <div class="field"><span class="label">Risk Appetite:</span> <span class="value"><%= riskAppetite %></span></div>
              <div class="field"><span class="label">Capital Protection:</span> <span class="value"><%= capitalProtection %></span></div>
              <div class="field"><span class="label">Income Generation:</span> <span class="value"><%= incomeGeneration %></span></div>
              <div class="field"><span class="label">Balanced:</span> <span class="value"><%= balanced %></span></div>
              <div class="field"><span class="label">Capital Growth:</span> <span class="value"><%= capitalGrowth %></span></div>
              <div class="field"><span class="label">Retirement Savings:</span> <span class="value"><%= retirementSavings %></span></div>
              <div class="field"><span class="label">Project Financing:</span> <span class="value"><%= projectFinancing %></span></div>
              <div class="field"><span class="label">Asset Purchase:</span> <span class="value"><%= assetPurchase %></span></div>
              <div class="field"><span class="label">Investment Goals Other:</span> <span class="value"><%= investmentGoalsOther %></span></div>
              <div class="field"><span class="label">Foreign Currency Assets:</span> <span class="value"><%= foreignCurrencyAssets %></span></div>
              <div class="field"><span class="label">Saudi Assets:</span> <span class="value"><%= saudiAssets %></span></div>
              <div class="field"><span class="label">Client Current Wallet Deposits Murabah:</span> <span class="value"><%= clientCurrentWalletdepositsMurabah %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Deposits Murabah:</span> <span class="value"><%= idealportfoliofortheclientdepositsMurabah %></span></div>
              <div class="field"><span class="label">Client Current Wallet Debit Instruments:</span> <span class="value"><%= clientCurrentWalletdebitInstruments %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Debit Instruments:</span> <span class="value"><%= idealportfoliofortheclientdebitInstruments %></span></div>
              <div class="field"><span class="label">Client Current Wallet Equity:</span> <span class="value"><%= clientCurrentWalletequity %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Equity:</span> <span class="value"><%= idealportfoliofortheclientequity %></span></div>
              <div class="field"><span class="label">Client Current Wallet Investment Fund:</span> <span class="value"><%= clientCurrentWalletinvestmentFund %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Investment Fund:</span> <span class="value"><%= idealportfoliofortheclientinvestmentFund %></span></div>
              <div class="field"><span class="label">Client Current Wallet Real Estate:</span> <span class="value"><%= clientCurrentWalletrealEstate %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Real Estate:</span> <span class="value"><%= idealportfoliofortheclientrealEstate %></span></div>
              <div class="field"><span class="label">Client Current Wallet Derivatives Contracts:</span> <span class="value"><%= clientCurrentWalletderivativesContracts %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Derivatives Contracts:</span> <span class="value"><%= idealportfoliofortheclientderivativesContracts %></span></div>
              <div class="field"><span class="label">Client Current Wallet Alternative Investments:</span> <span class="value"><%= clientCurrentWalletalternativeInvestments %></span></div>
<div class="field"><span class="label">Ideal Portfolio For The Client Alternative Investments:</span> <span class="value"><%= idealportfoliofortheclientalternativeInvestments %></span></div>
              <div class="field"><span class="label">Other Parties Certificates:</span> <span class="value"><%= OtherPartiesCertificates %></span></div>
              <div class="field"><span class="label">Other Parties Dividends:</span> <span class="value"><%= OtherPartiesDividends %></span></div>
              <div class="field"><span class="label">Other Parties Sales Proceed:</span> <span class="value"><%= OtherPartiesSalesProceed %></span></div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const emailData = {
      companyName: result.companyName || "",
      legalEntity: result.legalEntity || "",
      unifiedNumber: result.unifiedNumber || "",
      commercialRegistrationNumber: result.commercialRegistrationNumber || "",
      establishmentDate: result.establishmentDate || "",
      Correspondence: result.Correspondence || "",
      registeredAddress: result.registeredAddress || "",
      buildingNumber: result.buildingNumber || "",
      streetName: result.streetName || "",
      district: result.district || "",
      city: result.city || "",
      postalCode: result.postalCode || "",
      additionalNumber: result.additionalNumber || "",
      registrationCountry: result.registrationCountry || "",
      businessActivityCountry: result.businessActivityCountry || "",
      mainActivity: result.mainActivity || "",
      numberOfEmployees: result.numberOfEmployees || "",
      paidCapital: result.paidCapital || "",
      annualBusinessVolume: result.annualBusinessVolume || "",
      website: result.website || "",
      contactName: result.contactName || "",
      businessPhone: result.businessPhone || "",
      email: result.email || "",
      correspondenceAddress: result.correspondenceAddress || "",
      bankName: result.bankName || "",
      accountOwnerName: result.accountOwnerName || "",
      mainAccount: result.mainAccount || "",
      branch: result.branch || "",
      country: result.country || "",
      currency: result.currency || "",
      isPubliclyListed: result.isPubliclyListed || "",
      otherFinancialInfo: result.otherFinancialInfo || "",
      accountNumber: result.accountNumber || "",
      custodianName: result.custodianName || "",
      custodianAddress: result.custodianAddress || "",
      investmentKnowledgeDescription: result.investmentKnowledgeDescription || "",
      investmentYears: result.investmentYears || "",
      previousInvestments: result.previousInvestments || "",
      loanToInvestedMoneyRatio: result.loanToInvestedMoneyRatio || "",
      marginTransactions: result.marginTransactions || "",
      securitiesTransactionsOutsideKingdom: result.securitiesTransactionsOutsideKingdom || "",
      countriesForSecuritiesTransactions: result.countriesForSecuritiesTransactions || "",
      riskAppetite: result.riskAppetite || "",
      capitalProtection: result.capitalProtection || "",
      incomeGeneration: result.incomeGeneration || "",
      balanced: result.balanced || "",
      capitalGrowth: result.capitalGrowth || "",
      retirementSavings: result.retirementSavings || "",
      projectFinancing: result.projectFinancing || "",
      assetPurchase: result.assetPurchase || "",
      investmentGoalsOther: result.investmentGoalsOther || "",
      foreignCurrencyAssets: result.foreignCurrencyAssets || "",
      saudiAssets: result.saudiAssets || "",
      clientCurrentWalletdepositsMurabah: result.clientCurrentWalletdepositsMurabah || "",
      idealportfoliofortheclientdepositsMurabah: result.idealportfoliofortheclientdepositsMurabah || "",
      clientCurrentWalletdebitInstruments: result.clientCurrentWalletdebitInstruments || "",
      idealportfoliofortheclientdebitInstruments: result.idealportfoliofortheclientdebitInstruments || "",
      clientCurrentWalletequity: result.clientCurrentWalletequity || "",
      idealportfoliofortheclientequity: result.idealportfoliofortheclientequity || "",
      clientCurrentWalletinvestmentFund: result.clientCurrentWalletinvestmentFund || "",
      idealportfoliofortheclientinvestmentFund: result.idealportfoliofortheclientinvestmentFund || "",
      clientCurrentWalletrealEstate: result.clientCurrentWalletrealEstate || "",
      idealportfoliofortheclientrealEstate: result.idealportfoliofortheclientrealEstate || "",
      clientCurrentWalletderivativesContracts: result.clientCurrentWalletderivativesContracts || "",
      idealportfoliofortheclientderivativesContracts: result.idealportfoliofortheclientderivativesContracts || "",
      clientCurrentWalletalternativeInvestments: result.clientCurrentWalletalternativeInvestments || "",
      idealportfoliofortheclientalternativeInvestments: result.idealportfoliofortheclientalternativeInvestments || "",
      OtherPartiesCertificates: result.OtherPartiesCertificates || "",
      OtherPartiesDividends: result.OtherPartiesDividends || "",
      OtherPartiesSalesProceed: result.OtherPartiesSalesProceed || "",
    };

    try {
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'info@itqancapital.com',
          from: 'info@itqancapital.com',
        },
        emailTemplate,
        emailData
      );

      console.log('Email sent successfully for new Company Login submission');
    } catch (err) {
      console.error('Error sending email for Company Login submission:', err);
    }
  },
};
