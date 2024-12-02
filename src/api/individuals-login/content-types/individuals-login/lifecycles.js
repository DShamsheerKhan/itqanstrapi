module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const emailTemplate = {
      subject: 'New Individuals Login Submission',
      text: `
        New Individuals Login Submission:
        Name: <%= fullName %>
        Nationality: <%= nationality %>
        Senior Position: <%= seniorPosition %>
        Family Relationship: <%= familyRelationship %>
        Account Ownership: <%= accountOwnership %>
        Gender: <%= gender %>
        Title: <%= title %>
        Investor Information: <%= investorInformation %>
        Identity Type: <%= identityType %>
        Identity Number: <%= identityNumber %>
        Issue Date: <%= issueDate %>
        Expiration Date: <%= expirationDate %>
        Place Of Issue: <%= placeOfIssue %>
        Date Of Birth: <%= dateOfBirth %>
        Marital Status: <%= maritalStatus %>
        Number Of Dependents: <%= numberOfDependents %>
        Postal Code: <%= postalCode %>
        P.O. Box: <%= poBox %>
        Country: <%= country %>
        City: <%= city %>
        Mobile Number: <%= mobileNumber %>
        Email: <%= email %>
        Building: <%= Building %>
        Currency: <%= Currency %>
        Telephone Number: <%= telephoneNumber %>
        Correspondence: <%= Correspondence %>
        Correspondence Language: <%= correspondenceLanguage %>
        Communication Method: <%= communicationMethod %>
        Annual Income: <%= annualIncome %>
        Income Source: <%= incomeSource %>
        Net Worth: <%= netWorth %>
        Academic Qualifications: <%= academicQualifications %>
        Employment Category: <%= employmentCategory %>
        Employer Name: <%= employerName %>
        Job Title: <%= jobTitle %>
        Employer Address: <%= employerAddress %>
        Employer Phone: <%= employerPhone %>
        Sector: <%= Sector %>
        Financial Experience: <%= financialExperience %>
        Other Financial Experience: <%= otherFinancialExperience %>
        Inheritors Agent Fax No: <%= inheritorsAgentFaxNo %>
        Inheritors Agent Signature: <%= inheritorsAgentSignature %>
        Inheritors Agent Place Of Issue: <%= inheritorsAgentPlaceOfIssue %>
        Inheritors Agent Tel No: <%= inheritorsAgentTelNo %>
        Inheritors Agent Issue Date: <%= inheritorsAgentIssueDate %>
        Inheritors Agent Id Type: <%= inheritorsAgentIdType %>
        Inheritors Agent Id: <%= inheritorsAgentId %>
        Inheritors Agent Expiry Date: <%= inheritorsAgentExpiryDate %>
        Inheritors Agent Name: <%= inheritorsAgentName %>
        Father Guardian Minor: <%= fatherGuardianMinor %>
        Inheritors Agent: <%= inheritorsAgent %>
        Illiterate Blind Witness: <%= illiterateBlindWitness %>
        Veiled Woman Id: <%= veiledWomanId %>
        Incompetent Legal Guardian: <%= incompetentLegalGuardian %>
        Investment Knowledge Description: <%= investmentKnowledgeDescription %>
        Investment Years: <%= investmentYears %>
        Previous Investments: <%= previousInvestments %>
        Professional Certificates: <%= professionalCertificates %>
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
        Saudi Assets: <%= saudiAssets %>
        Financial Situation Info: <%= financialSituationInfo %>
        Selected Foreign Currencies: <%= selectedForeignCurrencies %>
        Foreign Currency Assets: <%= foreignCurrencyAssets %>
        Expected Duration: <%= expectedDuration %>
        Bank Account Ownership: <%= bankAccountOwnership %>
        Board Membership: <%= boardMembership %>
        Company Name: <%= companyName %>
        Ideal Portfolio For The Client Deposits Murabah: <%= idealportfoliofortheclientdepositsMurabah %>
        Client Current Wallet Deposits Murabah: <%= clientCurrentWalletdepositsMurabah %>
        Ideal Portfolio For The Client Debit Instruments: <%= idealportfoliofortheclientdebitInstruments %>
        Client Current Wallet Debit Instruments: <%= clientCurrentWalletdebitInstruments %>
        Ideal Portfolio For The Client Equity: <%= idealportfoliofortheclientequity %>
        Client Current Wallet Equity: <%= clientCurrentWalletequity %>
        Ideal Portfolio For The Client Investment Fund: <%= idealportfoliofortheclientinvestmentFund %>
        Client Current Wallet Investment Fund: <%= clientCurrentWalletinvestmentFund %>
        Ideal Portfolio For The Client Real Estate: <%= idealportfoliofortheclientrealEstate %>
        Client Current Wallet Real Estate: <%= clientCurrentWalletrealEstate %>
        Ideal Portfolio For The Client Derivatives Contracts: <%= idealportfoliofortheclientderivativesContracts %>
        Client Current Wallet Derivatives Contracts: <%= clientCurrentWalletderivativesContracts %>
        Ideal Portfolio For The Client Alternative Investments: <%= idealportfoliofortheclientalternativeInvestments %>
        Client Current Wallet Alternative Investments: <%= clientCurrentWalletalternativeInvestments %>
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Individuals Login Submission</title>
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
            .logo {
              max-width: 150px;
            }
            .content {
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #FFFFFF;
              margin-bottom: 20px;
              text-align: center;
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
              <h1>New Individuals Login Submission</h1>
            </div>
            <div class="content">
              <div class="field"><span class="label">Name:</span> <span class="value"><%= fullName %></span></div>
              <div class="field"><span class="label">Nationality:</span> <span class="value"><%= nationality %></span></div>
              <div class="field"><span class="label">Senior Position:</span> <span class="value"><%= seniorPosition %></span></div>
              <div class="field"><span class="label">Family Relationship:</span> <span class="value"><%= familyRelationship %></span></div>
              <div class="field"><span class="label">Account Ownership:</span> <span class="value"><%= accountOwnership %></span></div>
              <div class="field"><span class="label">Gender:</span> <span class="value"><%= gender %></span></div>
              <div class="field"><span class="label">Title:</span> <span class="value"><%= title %></span></div>
              <div class="field"><span class="label">Investor Information:</span> <span class="value"><%= investorInformation %></span></div>
              <div class="field"><span class="label">Identity Type:</span> <span class="value"><%= identityType %></span></div>
              <div class="field"><span class="label">Identity Number:</span> <span class="value"><%= identityNumber %></span></div>
              <div class="field"><span class="label">Issue Date:</span> <span class="value"><%= issueDate %></span></div>
              <div class="field"><span class="label">Expiration Date:</span> <span class="value"><%= expirationDate %></span></div>
              <div class="field"><span class="label">Place Of Issue:</span> <span class="value"><%= placeOfIssue %></span></div>
              <div class="field"><span class="label">Date Of Birth:</span> <span class="value"><%= dateOfBirth %></span></div>
              <div class="field"><span class="label">Marital Status:</span> <span class="value"><%= maritalStatus %></span></div>
              <div class="field"><span class="label">Number Of Dependents:</span> <span class="value"><%= numberOfDependents %></span></div>
              <div class="field"><span class="label">Postal Code:</span> <span class="value"><%= postalCode %></span></div>
              <div class="field"><span class="label">P.O. Box:</span> <span class="value"><%= poBox %></span></div>
              <div class="field"><span class="label">Country:</span> <span class="value"><%= country %></span></div>
              <div class="field"><span class="label">City:</span> <span class="value"><%= city %></span></div>
              <div class="field"><span class="label">Mobile Number:</span> <span class="value"><%= mobileNumber %></span></div>
              <div class="field"><span class="label">Email:</span> <span class="value"><%= email %></span></div>
              <div class="field"><span class="label">Building:</span> <span class="value"><%= Building %></span></div>
              <div class="field"><span class="label">Currency:</span> <span class="value"><%= Currency %></span></div>
              <div class="field"><span class="label">Telephone Number:</span> <span class="value"><%= telephoneNumber %></span></div>
              <div class="field"><span class="label">Correspondence:</span> <span class="value"><%= Correspondence %></span></div>
              <div class="field"><span class="label">Correspondence Language:</span> <span class="value"><%= correspondenceLanguage %></span></div>
              <div class="field"><span class="label">Communication Method:</span> <span class="value"><%= communicationMethod %></span></div>
              <div class="field"><span class="label">Annual Income:</span> <span class="value"><%= annualIncome %></span></div>
              <div class="field"><span class="label">Income Source:</span> <span class="value"><%= incomeSource %></span></div>
              <div class="field"><span class="label">Net Worth:</span> <span class="value"><%= netWorth %></span></div>
              <div class="field"><span class="label">Academic Qualifications:</span> <span class="value"><%= academicQualifications %></span></div>
              <div class="field"><span class="label">Employment Category:</span> <span class="value"><%= employmentCategory %></span></div>
              <div class="field"><span class="label">Employer Name:</span> <span class="value"><%= employerName %></span></div>
              <div class="field"><span class="label">Job Title:</span> <span class="value"><%= jobTitle %></span></div>
              <div class="field"><span class="label">Employer Address:</span> <span class="value"><%= employerAddress %></span></div>
              <div class="field"><span class="label">Employer Phone:</span> <span class="value"><%= employerPhone %></span></div>
              <div class="field"><span class="label">Sector:</span> <span class="value"><%= Sector %></span></div>
              <div class="field"><span class="label">Financial Experience:</span> <span class="value"><%= financialExperience %></span></div>
              <div class="field"><span class="label">Other Financial Experience:</span> <span class="value"><%= otherFinancialExperience %></span></div>
              <div class="field"><span class="label">Inheritors Agent Fax No:</span> <span class="value"><%= inheritorsAgentFaxNo %></span></div>
              <div class="field"><span class="label">Inheritors Agent Signature:</span> <span class="value"><%= inheritorsAgentSignature %></span></div>
              <div class="field"><span class="label">Inheritors Agent Place Of Issue:</span> <span class="value"><%= inheritorsAgentPlaceOfIssue %></span></div>
              <div class="field"><span class="label">Inheritors Agent Tel No:</span> <span class="value"><%= inheritorsAgentTelNo %></span></div>
              <div class="field"><span class="label">Inheritors Agent Issue Date:</span> <span class="value"><%= inheritorsAgentIssueDate %></span></div>
              <div class="field"><span class="label">Inheritors Agent Id Type:</span> <span class="value"><%= inheritorsAgentIdType %></span></div>
              <div class="field"><span class="label">Inheritors Agent Id:</span> <span class="value"><%= inheritorsAgentId %></span></div>
              <div class="field"><span class="label">Inheritors Agent Expiry Date:</span> <span class="value"><%= inheritorsAgentExpiryDate %></span></div>
              <div class="field"><span class="label">Inheritors Agent Name:</span> <span class="value"><%= inheritorsAgentName %></span></div>
              <div class="field"><span class="label">Father Guardian Minor:</span> <span class="value"><%= fatherGuardianMinor %></span></div>
              <div class="field"><span class="label">Inheritors Agent:</span> <span class="value"><%= inheritorsAgent %></span></div>
              <div class="field"><span class="label">Illiterate Blind Witness:</span> <span class="value"><%= illiterateBlindWitness %></span></div>
              <div class="field"><span class="label">Veiled Woman Id:</span> <span class="value"><%= veiledWomanId %></span></div>
              <div class="field"><span class="label">Incompetent Legal Guardian:</span> <span class="value"><%= incompetentLegalGuardian %></span></div>
              <div class="field"><span class="label">Investment Knowledge Description:</span> <span class="value"><%= investmentKnowledgeDescription %></span></div>
              <div class="field"><span class="label">Investment Years:</span> <span class="value"><%= investmentYears %></span></div>
              <div class="field"><span class="label">Previous Investments:</span> <span class="value"><%= previousInvestments %></span></div>
              <div class="field"><span class="label">Professional Certificates:</span> <span class="value"><%= professionalCertificates %></span></div>
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
              <div class="field"><span class="label">Saudi Assets:</span> <span class="value"><%= saudiAssets %></span></div>
              <div class="field"><span class="label">Financial Situation Info:</span> <span class="value"><%= financialSituationInfo %></span></div>
              <div class="field"><span class="label">Selected Foreign Currencies:</span> <span class="value"><%= selectedForeignCurrencies %></span></div>
              <div class="field"><span class="label">Foreign Currency Assets:</span> <span class="value"><%= foreignCurrencyAssets %></span></div>
              <div class="field"><span class="label">Expected Duration:</span> <span class="value"><%= expectedDuration %></span></div>
              <div class="field"><span class="label">Bank Account Ownership:</span> <span class="value"><%= bankAccountOwnership %></span></div>
              <div class="field"><span class="label">Board Membership:</span> <span class="value"><%= boardMembership %></span></div>
              <div class="field"><span class="label">Company Name:</span> <span class="value"><%= companyName %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Deposits Murabah:</span> <span class="value"><%= idealportfoliofortheclientdepositsMurabah %></span></div>
              <div class="field"><span class="label">Client Current Wallet Deposits Murabah:</span> <span class="value"><%= clientCurrentWalletdepositsMurabah %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Debit Instruments:</span> <span class="value"><%= idealportfoliofortheclientdebitInstruments %></span></div>
              <div class="field"><span class="label">Client Current Wallet Debit Instruments:</span> <span class="value"><%= clientCurrentWalletdebitInstruments %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Equity:</span> <span class="value"><%= idealportfoliofortheclientequity %></span></div>
              <div class="field"><span class="label">Client Current Wallet Equity:</span> <span class="value"><%= clientCurrentWalletequity %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Investment Fund:</span> <span class="value"><%= idealportfoliofortheclientinvestmentFund %></span></div>
              <div class="field"><span class="label">Client Current Wallet Investment Fund:</span> <span class="value"><%= clientCurrentWalletinvestmentFund %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Real Estate:</span> <span class="value"><%= idealportfoliofortheclientrealEstate %></span></div>
              <div class="field"><span class="label">Client Current Wallet Real Estate:</span> <span class="value"><%= clientCurrentWalletrealEstate %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Derivatives Contracts:</span> <span class="value"><%= idealportfoliofortheclientderivativesContracts %></span></div>
              <div class="field"><span class="label">Client Current Wallet Derivatives Contracts:</span> <span class="value"><%= clientCurrentWalletderivativesContracts %></span></div>
              <div class="field"><span class="label">Ideal Portfolio For The Client Alternative Investments:</span> <span class="value"><%= idealportfoliofortheclientalternativeInvestments %></span></div>
              <div class="field"><span class="label">Client Current Wallet Alternative Investments:</span> <span class="value"><%= clientCurrentWalletalternativeInvestments %></span></div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const emailData = {
      fullName: result.fullName,
      nationality: result.nationality,
      seniorPosition: result.seniorPosition,
      familyRelationship: result.familyRelationship,
      accountOwnership: result.accountOwnership,
      gender: result.gender,
      title: result.title,
      investorInformation: result.investorInformation,
      identityType: result.identityType,
      identityNumber: result.identityNumber,
      issueDate: result.issueDate,
      expirationDate: result.expirationDate,
      placeOfIssue: result.placeOfIssue,
      dateOfBirth: result.dateOfBirth,
      maritalStatus: result.maritalStatus,
      numberOfDependents: result.numberOfDependents,
      postalCode: result.postalCode,
      poBox: result.poBox,
      country: result.country,
      city: result.city,
      mobileNumber: result.mobileNumber,
      email: result.email,
      Building: result.Building,
      Currency: result.Currency,
      telephoneNumber: result.telephoneNumber,
      Correspondence: result.Correspondence,
      correspondenceLanguage: result.correspondenceLanguage,
      communicationMethod: result.communicationMethod,
      annualIncome: result.annualIncome,
      incomeSource: result.incomeSource,
      netWorth: result.netWorth,
      academicQualifications: result.academicQualifications,
      employmentCategory: result.employmentCategory,
      employerName: result.employerName,
      jobTitle: result.jobTitle,
      employerAddress: result.employerAddress,
      employerPhone: result.employerPhone,
      Sector: result.Sector,
      financialExperience: result.financialExperience,
      otherFinancialExperience: result.otherFinancialExperience,
      inheritorsAgentFaxNo: result.inheritorsAgentFaxNo,
      inheritorsAgentSignature: result.inheritorsAgentSignature,
      inheritorsAgentPlaceOfIssue: result.inheritorsAgentPlaceOfIssue,
      inheritorsAgentTelNo: result.inheritorsAgentTelNo,
      inheritorsAgentIssueDate: result.inheritorsAgentIssueDate,
      inheritorsAgentIdType: result.inheritorsAgentIdType,
      inheritorsAgentId: result.inheritorsAgentId,
      inheritorsAgentExpiryDate: result.inheritorsAgentExpiryDate,
      inheritorsAgentName: result.inheritorsAgentName,
      fatherGuardianMinor: result.fatherGuardianMinor,
      inheritorsAgent: result.inheritorsAgent,
      illiterateBlindWitness: result.illiterateBlindWitness,
      veiledWomanId: result.veiledWomanId,
      incompetentLegalGuardian: result.incompetentLegalGuardian,
      investmentKnowledgeDescription: result.investmentKnowledgeDescription,
      investmentYears: result.investmentYears,
      previousInvestments: result.previousInvestments,
      professionalCertificates: result.professionalCertificates,
      loanToInvestedMoneyRatio: result.loanToInvestedMoneyRatio,
      marginTransactions: result.marginTransactions,
      securitiesTransactionsOutsideKingdom: result.securitiesTransactionsOutsideKingdom,
      countriesForSecuritiesTransactions: result.countriesForSecuritiesTransactions,
      riskAppetite: result.riskAppetite,
      capitalProtection: result.capitalProtection,
      incomeGeneration: result.incomeGeneration,
      balanced: result.balanced,
      capitalGrowth: result.capitalGrowth,
      retirementSavings: result.retirementSavings,
      projectFinancing: result.projectFinancing,
      assetPurchase: result.assetPurchase,
      investmentGoalsOther: result.investmentGoalsOther,
      saudiAssets: result.saudiAssets,
      financialSituationInfo: result.financialSituationInfo,
      selectedForeignCurrencies: result.selectedForeignCurrencies,
      foreignCurrencyAssets: result.foreignCurrencyAssets,
      expectedDuration: result.expectedDuration,
      bankAccountOwnership: result.bankAccountOwnership,
      boardMembership: result.boardMembership,
      companyName: result.companyName,
      idealportfoliofortheclientdepositsMurabah: result.idealportfoliofortheclientdepositsMurabah,
      clientCurrentWalletdepositsMurabah: result.clientCurrentWalletdepositsMurabah,
      idealportfoliofortheclientdebitInstruments: result.idealportfoliofortheclientdebitInstruments,
      clientCurrentWalletdebitInstruments: result.clientCurrentWalletdebitInstruments,
      idealportfoliofortheclientequity: result.idealportfoliofortheclientequity,
      clientCurrentWalletequity: result.clientCurrentWalletequity,
      idealportfoliofortheclientinvestmentFund: result.idealportfoliofortheclientinvestmentFund,
      clientCurrentWalletinvestmentFund: result.clientCurrentWalletinvestmentFund,
      idealportfoliofortheclientrealEstate: result.idealportfoliofortheclientrealEstate,
      clientCurrentWalletrealEstate: result.clientCurrentWalletrealEstate,
      idealportfoliofortheclientderivativesContracts: result.idealportfoliofortheclientderivativesContracts,
      clientCurrentWalletderivativesContracts: result.clientCurrentWalletderivativesContracts,
      idealportfoliofortheclientalternativeInvestments: result.idealportfoliofortheclientalternativeInvestments,
      clientCurrentWalletalternativeInvestments: result.clientCurrentWalletalternativeInvestments,
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
      
      console.log('Email sent successfully for new Individuals Login submission');
    } catch (err) {
      console.error('Error sending email for Individuals Login submission:', err);
    }
  },
};
