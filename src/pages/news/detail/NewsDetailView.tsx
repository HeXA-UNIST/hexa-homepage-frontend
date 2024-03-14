import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NewsDetailViewModel from "./NewsDetailViewModel";

function NewsDetailView({ viewModel }: { viewModel: NewsDetailViewModel }) {
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            // id: string to number
            viewModel.setNewsId(+id);
        }
    }, []);

    return (
        <div>
            {viewModel.newsId}
        </div>
    )
}

export default observer(NewsDetailView);