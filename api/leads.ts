type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  business?: unknown;
  agreed?: unknown;
};

type JsonBody = Record<string, unknown>;

const json = (body: JsonBody, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const cleanText = (value: unknown, maxLength: number) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
};

const createLeadId = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `lead_${Date.now()}`;
};

export default {
  async fetch(request: Request) {
    try {
      if (request.method !== "POST") {
        return json({ success: false, error: "method_not_allowed" }, 405);
      }

      const contentType = request.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        return json({ success: false, error: "invalid_content_type" }, 415);
      }

      let payload: LeadPayload;
      try {
        payload = (await request.json()) as LeadPayload;
      } catch (error) {
        console.warn("fastmotion_invalid_lead_payload", error);
        return json({ success: false, error: "invalid_json" }, 400);
      }

      const name = cleanText(payload.name, 120);
      const phone = cleanText(payload.phone, 80);
      const business = cleanText(payload.business, 500);
      const agreed = payload.agreed === true;

      if (!name || !phone || !agreed) {
        return json({ success: false, error: "missing_required_fields" }, 400);
      }

      const leadId = createLeadId();
      console.info("fastmotion_lead_submitted", {
        leadId,
        name,
        phone,
        business,
        createdAt: new Date().toISOString(),
      });

      return json({ success: true, leadId });
    } catch (error) {
      console.error("fastmotion_lead_submission_failed", error);
      return json({ success: false, error: "internal_error" }, 500);
    }
  },
};
