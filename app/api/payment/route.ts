import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function POST(req: NextRequest) {
  console.log("env variable", process.env.api_key);
  try {
    const response = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkouts",
      {
        data: {
          type: "checkouts",
          attributes: {
            store_id: 133962,
            product_id: 592451,
            email: "parthagarwalchitkara@gmail.com",
            success_url: `this is success`,
            cancel_url: `let's cancel worries and work hard`,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.api_key}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ url: response.data.data.attributes.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error });
  }
}

// This is api key :
// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiI2NTEyNmE3ZjMyMGU4NDFmZDBiOGUzMWFkNDMzZDU2NTE3YzQxYzFlN2RiNjg5ZWZhZTEzNjY2Yzc0ODE3MzQzNWM5MmVjMDQxZTE0YTQ2OCIsImlhdCI6MTczMTY2Njk3OS4wMzgwMTksIm5iZiI6MTczMTY2Njk3OS4wMzgwMjEsImV4cCI6MjA0NzE5OTc3OC45OTA1ODcsInN1YiI6IjM3NTQ1MjgiLCJzY29wZXMiOltdfQ.mvYxjxdxe1DIjF9BECrOtx_gncppX92SmyZjGQkFu_0pvvmWtKLZEul4PsUg5BoRdf3jPGldzp3F0LDaDMUcH8bJ7IkL3aRwU19W40yg1crS4J9uGRxuXucBqJrTczptnm0WkrjXyjJ8g1ymdwEvlcpS9G24T3yAp-ZZYNXjx0CSEV575dUrKuTIIWGCBjR4HBCCrdmMAUwHHqr1OzyGNfqjU5u8VLqb85YO_VFBavKKT61dHmgjnfZrNszabXlsDLAO25ZPAr8nw5_L054LkhwcoPlKmvumtXpkyEkwp-ATr9lQQldIB1B0ee-3t4-Zemg6kJfCCSNhreg-OuSIot60nDVzebWbnsDL6ddH_rawRmxf7B5QdEozN7Vnv6WPVR4JrtjTNM4iBZf1mIJAHKXp7UAgE1ms5uzCF6r9McR5v2RmsOuzUrLAN_cZ0pwCBhWx_S4DgCC0Z95WMWh2rSTa1DhiuZCOIfUoxnS-VC949P531V7JVszr5E-J2Fqd
