
import Link from "next/link";

const ResourseBlock = ({ title, data }) => {
    return (
        <section>
            <h2 className='heading'>{title}</h2>
            {data?.map((item, i) => {
                return (
                    <div key={i + "ps"}>
                        {item?.subtitle && (
                            <h3 className='heading accent_text font-bold'>
                                {item?.subtitle}
                            </h3>
                        )}
                        {item?.data?.map((item, i) => {
                            return (
                                <p key={item.id + i + "psi"}>
                                    {item.textBeforeStrong &&
                                        item.textBeforeStrong + " "}
                                    <strong>{item.strongText}</strong>
                                    {item.textAfterStrong &&
                                        " " + item.textAfterStrong}{" "}
                                    -{" "}
                                    <Link
                                        className='link'
                                        href={item.href}
                                        target='_blank'
                                        rel='noreferrer noopener'
                                    >
                                        {item.title}
                                    </Link>
                                </p>
                            );
                        })}
                    </div>
                );
            })}
        </section>
    );
};

export default ResourseBlock;
