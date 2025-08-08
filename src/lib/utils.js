export async function createTicketNumber() {
    const buff_arr = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(
            `${Date.now()} - ${Math.random().toString(36)}`,
        ),
    )

    return Array.from(new Uint8Array(buff_arr))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
        .substring(0, 8)
}
