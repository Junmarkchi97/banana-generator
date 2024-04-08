// import { NextApiRequest, NextApiResponse } from "next";
// import { Connection, PublicKey } from "@solana/web3.js";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const tokenProgramId = "Hg675ypQpBUwP3wiWjq8pFQxr6rjnT2QRH4Vi519jdiP";

//   try {
//     const holders = await getBananaCoinHolders(tokenProgramId);
//     // res.status(200).json({ holders });

//     console.log("holders", holders);
//   } catch (error) {
//     console.error("Error:", error);
//     // res.status(500).json({ error: "Failed to fetch Banana Coin holders" });
//   }
// }

// async function getBananaCoinHolders(tokenProgramId: string) {
//   const connection = new Connection("https://api.mainnet-beta.solana.com");

//   // Get token accounts
//   const tokenAccounts = await connection.getTokenAccountsByOwner(
//     tokenProgramId,
//     {
//       programId: new PublicKey(tokenProgramId),
//     }
//   );
//   console.log("tokenAccounts", tokenAccounts);

//   // Filter out accounts with zero balance
//   const nonZeroBalanceAccounts = tokenAccounts.value.filter(
//     (account: any) => account.amount > 0
//   );

//   // Extract holder addresses
//   const holderAddresses = nonZeroBalanceAccounts.map(
//     (account: any) => account.owner
//   );

//   return holderAddresses;
// }
