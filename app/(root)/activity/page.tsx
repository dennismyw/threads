import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import UserCard from "@/components/cards/UserCard";

// import Pagination from "@/components/shared/Pagination";

import { fetchUser, fetchUsers, getActivity } from "@/lib/actions/user.actions";
import Link from "next/link";

async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    //get activity
    const activity = await getActivity(userInfo._id);
    console.log(activity)

    return (
        <section>
            <h1 className="head-text mb-10">activity </h1>
            <section className="mt-10 flex flex-col gap-5">
                {activity.length > 0 ? (
                    <>
                        {activity.map((activity) => (
                            <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                                <article className="activity-card">
                                    <Image
                                        src={activity.author.image}
                                        alt="Profile picture"
                                        width={20}
                                        height={20}
                                        className="rounded-full object-cover" />
                                    <p className="!text-small-regular text-light-1">
                                        <span className=" ,mr-1">
                                            {activity.author.name}
                                        </span>{""}
                                        replied to your thread
                                    </p>

                                </article>
                            </Link>
                        ))}
                    </>
                ) : <p className="!text-base-regular text-light-3">No activity yet</p>}
                {/* ) : <p className="!text-base-regular text-light-3">Loading...</p>} */}
            </section>
        </section>

    )
}

export default Page;