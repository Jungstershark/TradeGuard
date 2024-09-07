export const instrumentMapping: { [key: string]: string } = {
    // 0% Convertible Bonds
    "0% Convertible Bonds": "0% Convertible Bonds",
    "0% Convertible Bond": "0% Convertible Bonds",
    "Convertible Bonds 0%": "0% Convertible Bonds",
    "Convertible Bond 0%": "0% Convertible Bonds",
    "Zero Percent Convertible Bonds": "0% Convertible Bonds",
    "Zero Percent Convertible Bond": "0% Convertible Bonds",

    // Commercial Papers
    "Commercial Papers": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "Commercial Paper": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "Discount Notes": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "Discount Note": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "Domestic Papers": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "Domestic Paper": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "CPs": "Commercial Papers [including Discount Notes, Domestic Papers)",
    "CP": "Commercial Papers [including Discount Notes, Domestic Papers)",

    // Credit Linked Notes
    "Credit Linked Notes": "Credit Linked Notes",
    "Credit Linked Note": "Credit Linked Notes",
    "CLNs": "Credit Linked Notes",
    "CLN": "Credit Linked Notes",
    "Credit-Linked Notes": "Credit Linked Notes",
    "Credit-Linked Note": "Credit Linked Notes",

    // FRNs
    "FRNs": "FRNs",
    "FRN": "FRNs",
    "Floating Rate Notes": "FRNs",
    "Floating Rate Note": "FRNs",
    "Floating Rate Bonds": "FRNs",
    "Floating Rate Bond": "FRNs",

    // Inflation Linked Bonds
    "Inflation Linked Bonds": "Inflation Linked Bonds ",
    "Inflation Linked Bond": "Inflation Linked Bonds ",
    "ILBs": "Inflation Linked Bonds ",
    "ILB": "Inflation Linked Bonds ",
    "Inflation-Linked Bonds": "Inflation Linked Bonds ",
    "Inflation-Linked Bond": "Inflation Linked Bonds ",
    "Inflation Protected Bonds": "Inflation Linked Bonds ",
    "Inflation Protected Bond": "Inflation Linked Bonds ",

    // Liquidity Funds
    "Liquidity Funds": "Liquidity Funds",
    "Liquidity Fund": "Liquidity Funds",
    "LFs": "Liquidity Funds",
    "LF": "Liquidity Funds",

    // Loan
    "Loan": "Loan",
    "Loans": "Loan",

    // Tracker Bonds
    "Tracker Bonds": "Tracker Bonds",
    "Tracker Bond": "Tracker Bonds",
    "Bond Trackers": "Tracker Bonds",
    "Bond Tracker": "Tracker Bonds",
    "Track Bonds": "Tracker Bonds",
    "Track Bond": "Tracker Bonds",

    // Treasury Bills
    "Treasury Bills": "Treasury Bills",
    "Treasury Bill": "Treasury Bills",
    "Tbills": "Treasury Bills",
    "Tbill": "Treasury Bills",
    "T-Bills": "Treasury Bills",
    "T-Bill": "Treasury Bills",
    "T Bills": "Treasury Bills",
    "T Bill": "Treasury Bills",
    "T-Bills Treasury": "Treasury Bills",
    "T-Bill Treasury": "Treasury Bills",
    "Bills Treasury": "Treasury Bills",
    "Bill Treasury": "Treasury Bills",

    // Cash
    "Cash": "Cash",
    "Currencies": "Cash",
    "Currency": "Cash",
    "Liquid Assets": "Cash",

    // Bond Futures
    "Bond Futures": "Bond Futures",
    "Bond Future": "Bond Futures",
    "Futures Bonds": "Bond Futures",
    "Future Bonds": "Bond Futures",
    "Futures Bond": "Bond Futures",
    "Future Bond": "Bond Futures",
    "Futures on Bonds": "Bond Futures",
    "Future on Bonds": "Bond Futures",
    "Futures on Bond": "Bond Futures",
    "Future on Bond": "Bond Futures",

    // Deposit
    "Deposit": "Deposit",
    "Deposits": "Deposit",

    // Gold Lease/Deposit
    "Gold Lease/Deposit": "Gold Lease/Deposit ",
    "Gold Lease": "Gold Lease/Deposit ",
    "Gold Leases": "Gold Lease/Deposit ",
    "Gold Deposit": "Gold Lease/Deposit ",
    "Gold Deposits": "Gold Lease/Deposit ",

    // Gold Lease/Deposit Offset
    "Gold Lease/Deposit Offset": "Gold Lease/Deposit Offset",
    "Gold Lease Offset": "Gold Lease/Deposit Offset",
    "Gold Deposit Offset": "Gold Lease/Deposit Offset",

    // Commodity Index Futures
    "Commodity Index Futures": "Commodity Index Futures",
    "Commodity Index Future": "Commodity Index Futures",
    "Index Futures Commodity": "Commodity Index Futures",
    "Index Future Commodity": "Commodity Index Futures",
    "Commodity Futures": "Commodity Index Futures",
    "Commodity Future": "Commodity Index Futures",

    // Currency Futures
    "Currency Futures": "Currency Futures",
    "Currency Future": "Currency Futures",
    "Futures Currency": "Currency Futures",
    "Future Currency": "Currency Futures",

    // Equity Index Futures Options (with premium)
    "Equity Index Futures Options (with premium)": "Equity Index Futures Options (with premium)",
    "Equity Index Futures Option (with premium)": "Equity Index Futures Options (with premium)",
    "Equity Futures Options": "Equity Index Futures Options (with premium)",
    "Equity Futures Option": "Equity Index Futures Options (with premium)",
    "Options on Equity Index Futures": "Equity Index Futures Options (with premium)",
    "Option on Equity Index Futures": "Equity Index Futures Options (with premium)",

    // Private Equity
    "Private Equity": "Private Equity",
    "Private Equities": "Private Equity",
    "PE": "Private Equity",
    "Equity Private": "Private Equity",
    "Equities Private": "Private Equity",

    // FX Spot/Forward
    "FX Spot/Forward": "FX Spot/Forward ",
    "FX Spot": "FX Spot/Forward ",
    "FX Forward": "FX Spot/Forward ",
    "Foreign Exchange Spot": "FX Spot/Forward ",
    "Foreign Exchange Forward": "FX Spot/Forward ",
    "Foreign Exchange Spots": "FX Spot/Forward ",
    "Foreign Exchange Forwards": "FX Spot/Forward ",
    "FX Forwards": "FX Spot/Forward ",
    "FX Spots": "FX Spot/Forward ",

    // FX Swap
    "FX Swap": "FX Swap ",
    "Foreign Exchange Swap": "FX Swap ",
    "Swap FX": "FX Swap ",
    "Foreign Exchange Swaps": "FX Swap ",
    "FX Swaps": "FX Swap ",

    // Repos (continued)
    "Repos": "Repos",
    "Repo": "Repos",
    "Repurchase Agreements": "Repos",
    "Repurchase Agreement": "Repos",

    // CMO (Collateralized Mortgage Obligation)
    "CMO": "CMO",
    "CMOs": "CMO",
    "Collateralized Mortgage Obligations": "CMO",
    "Collateralized Mortgage Obligation": "CMO",

    // CMO - Interest Only
    "CMO - Interest Only": "CMO - Interest Only",
    "Interest Only CMO": "CMO - Interest Only",
    "Interest Only CMOs": "CMO - Interest Only",
    "IO CMO": "CMO - Interest Only",
    "IO CMOs": "CMO - Interest Only",

    // CMO - Principal Only
    "CMO - Principal Only": "CMO - Principal Only",
    "Principal Only CMO": "CMO - Principal Only",
    "Principal Only CMOs": "CMO - Principal Only",
    "PO CMO": "CMO - Principal Only",
    "PO CMOs": "CMO - Principal Only",

    // MBS - Adjustable Rate Mortgages
    "MBS - Adjustable Rate Mortgages": "MBS - Adjustable Rates Mortgages",
    "MBS - Adjustable Rate Mortgage": "MBS - Adjustable Rates Mortgages",
    "Adjustable Rate MBS": "MBS - Adjustable Rates Mortgages",
    "Adjustable Rate MBSs": "MBS - Adjustable Rates Mortgages",
    "Adjustable Rates MBS": "MBS - Adjustable Rates Mortgages",
    "Adjustable Rates MBSs": "MBS - Adjustable Rates Mortgages",

    // MBS - Fixed Rate
    "MBS - Fixed Rate": "MBS - Fixed Rate",
    "MBS - Fixed Rates": "MBS - Fixed Rate",
    "Fixed Rate MBS": "MBS - Fixed Rate",
    "Fixed Rates MBS": "MBS - Fixed Rate",
    "Fixed Rate MBSs": "MBS - Fixed Rate",
    "Fixed Rates MBSs": "MBS - Fixed Rate",

    // FX Spot/Forward (continued from earlier)
    "Foreign Exchange Spot/Forward": "FX Spot/Forward ",
    "FX Spots/Forwards": "FX Spot/Forward ",
    "Foreign Exchange Spots/Forwards": "FX Spot/Forward ",

    // Gold Lease/Deposit (continued)
    "Gold Leases/Deposits": "Gold Lease/Deposit ",

    // Margin Exposure (Exchange-Traded Futures & Options)
    "Margin Exposure (Exchange-Traded Futures & Options)": "Margin Exposure (Exchange-Traded Futures & Options)",
    "Margin Exposures (Exchange-Traded Futures & Options)": "Margin Exposure (Exchange-Traded Futures & Options)",
    "Exchange-Traded Futures & Options Margin Exposure": "Margin Exposure (Exchange-Traded Futures & Options)",
    "Exchange-Traded Futures & Options Margin Exposures": "Margin Exposure (Exchange-Traded Futures & Options)",

    // Margin Exposure (OTC Central Clearing - Swaps)
    "Margin Exposure (OTC Central Clearing - Swaps)": "Margin Exposure (OTC Central Clearing - Swaps)",
    "Margin Exposures (OTC Central Clearing - Swaps)": "Margin Exposure (OTC Central Clearing - Swaps)",
    "OTC Central Clearing Margin Exposure": "Margin Exposure (OTC Central Clearing - Swaps)",
    "OTC Central Clearing Margin Exposures": "Margin Exposure (OTC Central Clearing - Swaps)",

    // Bond Option (with premium)
    "Bond Option (with premium)": "Bond Option (with premium)",
    "Bond Options (with premium)": "Bond Option (with premium)",
    "Option on Bonds": "Bond Option (with premium)",
    "Options on Bonds": "Bond Option (with premium)",

    // Gold Options (with premium)
    "Gold Options (with premium)": "Gold Options (with premium)",
    "Gold Option (with premium)": "Gold Options (with premium)",
    "Option on Gold": "Gold Options (with premium)",
    "Options on Gold": "Gold Options (with premium)",

    // Options on ILB
    "Options on ILB": "Options on ILB",
    "Option on ILB": "Options on ILB",
    "ILB Options": "Options on ILB",
    "ILB Option": "Options on ILB",

    // Volatility Swap
    "Volatility Swap": "Volatility Swap",
    "Volatility Swaps": "Volatility Swap",
    "Vol Swap": "Volatility Swap",
    "Vol Swaps": "Volatility Swap",

    // Commodity Index Swap
    "Commodity Index Swap": "Commodity Index Swap",
    "Commodity Index Swaps": "Commodity Index Swap",
    "Commodity Swap": "Commodity Index Swap",
    "Commodity Swaps": "Commodity Index Swap",

    // Equity Index Swap
    "Equity Index Swap": "Equity Index Swap",
    "Equity Index Swaps": "Equity Index Swap",
    "Equity Swap": "Equity Index Swap",
    "Equity Swaps": "Equity Index Swap",

    // Interest Rate Swap
    "Interest Rate Swap": "Interest Rate Swap",
    "Interest Rate Swaps": "Interest Rate Swap",
    "Rate Swap": "Interest Rate Swap",
    "Rate Swaps": "Interest Rate Swap",
    "IRS": "Interest Rate Swap",
    "IR Swaps": "Interest Rate Swap",

    // Non-Deliverable Interest Rate Swap
    "Non-Deliverable Interest Rate Swap": "Non-Deliverable Interest Rate Swap",
    "Non-Deliverable Interest Rate Swaps": "Non-Deliverable Interest Rate Swap",
    "NDF IRS": "Non-Deliverable Interest Rate Swap",
    "NDF IR Swaps": "Non-Deliverable Interest Rate Swap",

    // Single Stock Swap
    "Single Stock Swap": "Single Stock Swap",
    "Single Stock Swaps": "Single Stock Swap",
    "Stock Swap": "Single Stock Swap",
    "Stock Swaps": "Single Stock Swap",

    // Synthetic Tracker Swap
    "Synthetic Tracker Swap": "Synthetic Tracker Swap",
    "Synthetic Tracker Swaps": "Synthetic Tracker Swap",
    "Tracker Swap": "Synthetic Tracker Swap",
    "Tracker Swaps": "Synthetic Tracker Swap",
};