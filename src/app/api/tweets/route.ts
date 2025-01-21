import { TwitterStruct } from "@/types/tweets";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const tokenAddress = request.nextUrl.searchParams.get("tokenAddress") || "";
    const category = request.nextUrl.searchParams.get("category") || "";
    const page = request.nextUrl.searchParams.get("page") || "";
    const pageSize = request.nextUrl.searchParams.get("pageSize") || "";
    // 在实际应用中，这里会从数据库或外部 API 获取数据
    if (!tokenAddress) {
      return NextResponse.json(
        { error: "Token address is required" },
        { status: 400 }
      );
    }
    const url = `${process.env.NEXT_PUBLIC_SERVICE_API_URL}/tweets/getTweetsByTokenAddress`;

    const response = await axios.post(url, {
      tokenAddress: tokenAddress,
      category: category,
      page: Number(page || 1),
      pageSize: Number(pageSize || 20),
      type: "filter",
    });
    const data = response?.data?.data as TwitterStruct[];
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweets" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { content } = body;

    // 这里应该是处理新推文的逻辑
    // 为了演示，我们只是返回一个模拟的响应
    const newTweet = {
      id: Date.now().toString(),
      name: "User",
      username: "@user",
      content,
      timestamp: new Date().toISOString(),
      likes: "0",
      retweets: "0",
      replies: "0",
      quotes: "0",
    };

    return NextResponse.json(newTweet, { status: 201 });
  } catch (error) {
    console.error("Error creating tweet:", error);
    return NextResponse.json(
      { error: "Failed to create tweet" },
      { status: 500 }
    );
  }
}
