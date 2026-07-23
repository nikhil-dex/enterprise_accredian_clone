import connectDB from "@/lib/db";
import Form from "@/models/Form";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const enquiry =
            await Form.create(body);

        return Response.json({
            success: true,
            enquiry,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}